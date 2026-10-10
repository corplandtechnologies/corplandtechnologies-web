import React, { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./ContactForm.scss";
import { company, stages } from "../../data/site";
import {
  IInquiry,
  IInquiryForm,
  INeed,
  IStage,
} from "../../interfaces/site.interface";
import InquiryService from "../../services/inquiry.service";
import buildInquiryMailto from "../../utils/helpers/buildInquiryMailto";
import { SPRING, collapse, swap } from "../../utils/motion";
import Button from "../../components/ui/Button/Button";
import Card from "../../components/ui/Card/Card";
import { ChoiceField, TextField } from "../../components/ui/Field/Field";
import Icon from "../../components/ui/Icon/Icon";

type Status = "idle" | "sending" | "sent" | "failed";

interface Values {
  name: string;
  email: string;
  need: INeed["value"] | "";
  stage: IStage["value"] | "";
  message: string;
  link: string;
  preferred_contact_window: string;
}

type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = {
  name: "",
  email: "",
  need: "",
  stage: "",
  message: "",
  link: "",
  preferred_contact_window: "",
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LINK = /^\S+\.\S+$/;

const validate = (values: Values, asksStage: boolean) => {
  const errors: Errors = {};
  const message = values.message.trim();

  if (!values.name.trim()) errors.name = "Tell us your name";
  if (!EMAIL.test(values.email.trim()))
    errors.email = "Enter an email address we can reply to";
  if (!values.need) errors.need = "Choose what you need";
  if (asksStage && !values.stage)
    errors.stage = "Choose where the project is today";
  if (message.length < 20)
    errors.message = "Tell us a little more. A sentence or two is enough";
  if (message.length > 4000)
    errors.message = "Keep it under 4000 characters";
  if (values.link.trim() && !LINK.test(values.link.trim()))
    errors.link = "That does not look like a link";

  return errors;
};

interface ContactFormProps {
  form: IInquiryForm;
}

export default function ContactForm({ form }: ContactFormProps) {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [sentTo, setSentTo] = useState("");
  const [receiptSent, setReceiptSent] = useState(false);
  const focusOnMount = useCallback((node: HTMLHeadingElement | null) => {
    node?.focus();
  }, []);

  const asksStage = form.askStage && values.need !== "maintain";
  const prompt = (values.need && form.promptFor[values.need]) || form.prompt;
  const signer = values.name.trim();

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const stageSent = asksStage ? values.stage || undefined : undefined;

  const inquiry: IInquiry = {
    name: values.name.trim(),
    email: values.email.trim(),
    message: values.message.trim(),
    kind: form.kind,
    need: values.need || "unsure",
    stage: form.askStage && values.need === "maintain" ? "live" : stageSent,
    link: values.link.trim() || undefined,
    preferred_contact_window: values.preferred_contact_window || undefined,
    source: form.source,
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (status === "sending") return;

    const found = validate(values, asksStage);
    setErrors(found);

    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      const target =
        document.getElementById(`field-${firstInvalid}`) ||
        document.querySelector<HTMLElement>(`[name="${firstInvalid}"]`);
      target?.focus();
      return;
    }

    setStatus("sending");

    try {
      const response = await InquiryService.create(inquiry);
      setReceiptSent(Boolean(response?.data?.acknowledged));
      setSentTo(inquiry.email);
      setValues(empty);
      setStatus("sent");
    } catch (error: any) {
      const rejected = error?.response?.data?.errors;

      if (Array.isArray(rejected) && rejected.length) {
        const fromServer: Errors = {};
        rejected.forEach((item: { path?: string; msg?: string }) => {
          if (item.path && item.path in empty && item.msg)
            fromServer[item.path as keyof Values] = item.msg;
        });

        if (Object.keys(fromServer).length) {
          setErrors(fromServer);
          setStatus("idle");
          return;
        }
      }

      setStatus("failed");
    }
  };

  return (
    <Card className="apply-form">
      <AnimatePresence mode="wait" initial={false}>
        {status === "sent" ? (
          <motion.div
            key="sent"
            className="apply-form__sent"
            variants={swap}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={SPRING}
          >
            <span className="apply-form__sent-mark">
              <Icon name="check" size={26} />
            </span>
            <h3
              className="apply-form__sent-title"
              tabIndex={-1}
              ref={focusOnMount}
            >
              {form.sentTitle}
            </h3>
            <p className="apply-form__sent-body">
              {form.replier} will reply to {sentTo} within{" "}
              {company.replyWindow},{" "}
              {form.reply}.
              {receiptSent && " A receipt is on its way to your inbox."}
            </p>
            <div className="apply-form__sent-actions">
              {company.bookingUrl && (
                <Button href={company.bookingUrl} external>
                  Pick a time for the call
                </Button>
              )}
              <Button variant="secondary" onClick={() => setStatus("idle")}>
                {form.again}
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            className="apply-form__form"
            noValidate
            onSubmit={submit}
            variants={swap}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={SPRING}
          >
            <div className="apply-form__row">
              <TextField
                label="Your name"
                name="name"
                required
                value={values.name}
                onChange={(value) => set("name", value)}
                error={errors.name}
                autoComplete="name"
                maxLength={80}
              />
              <TextField
                label="Email"
                name="email"
                required
                type="email"
                value={values.email}
                onChange={(value) => set("email", value)}
                error={errors.email}
                autoComplete="email"
                maxLength={254}
              />
            </div>
            <div className="apply-form__group">
              <ChoiceField
                label={form.needLabel}
                name="need"
                value={values.need}
                options={form.needs}
                onChange={(value) => set("need", value)}
                error={errors.need}
              />
              <AnimatePresence initial={false}>
                {asksStage && (
                  <motion.div
                    className="apply-form__reveal"
                    variants={collapse}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={SPRING}
                  >
                    <div className="apply-form__reveal-inner">
                      <ChoiceField
                        label="Where is it today?"
                        name="stage"
                        value={values.stage}
                        options={stages}
                        onChange={(value) => set("stage", value)}
                        error={errors.stage}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <TextField
              label={prompt.label}
              name="message"
              required
              hint={prompt.hint}
              value={values.message}
              onChange={(value) => set("message", value)}
              error={errors.message}
              multiline
              maxLength={4000}
            />
            <TextField
              label="A link"
              name="link"
              optional
              hint={form.linkHint}
              value={values.link}
              onChange={(value) => set("link", value)}
              error={errors.link}
              autoComplete="url"
              maxLength={300}
            />
            <div className="apply-form__trap" aria-hidden="true">
              <label htmlFor="field-preferred-contact-window">
                Leave this empty
              </label>
              <input
                id="field-preferred-contact-window"
                name="preferred_contact_window"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={values.preferred_contact_window}
                onChange={(event) =>
                  set("preferred_contact_window", event.target.value)
                }
              />
            </div>

            {form.signature && (
              <div className="apply-form__signatures" aria-hidden="true">
                <div className="apply-form__signature">
                  <span className="apply-form__signed">{form.signedBy}</span>
                  <span className="apply-form__signer">For us</span>
                </div>
                <div className="apply-form__signature">
                  <span
                    className={`apply-form__signed${
                      signer ? "" : " apply-form__signed--blank"
                    }`}
                  >
                    {signer || "Your name"}
                  </span>
                  <span className="apply-form__signer">For you</span>
                </div>
              </div>
            )}

            <div className="apply-form__submit">
              <Button
                type="submit"
                size="lg"
                arrow
                block
                loading={status === "sending"}
              >
                {status === "sending" ? form.sending : form.submit}
              </Button>
              <p className="apply-form__promise">{form.promise}</p>
            </div>

            <AnimatePresence initial={false}>
              {status === "failed" && (
                <motion.div
                  className="apply-form__failed"
                  role="alert"
                  variants={collapse}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={SPRING}
                >
                  <div className="apply-form__failed-inner">
                    <p>{form.failed}</p>
                    <Button
                      variant="secondary"
                      href={buildInquiryMailto(inquiry, form)}
                    >
                      Open it in my email app
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        )}
      </AnimatePresence>
    </Card>
  );
}
