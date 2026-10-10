import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SPRING, collapse } from "../../../utils/motion";
import "./Field.scss";

interface FieldErrorProps {
  id: string;
  error?: string;
}

function FieldError({ id, error }: FieldErrorProps) {
  return (
    <AnimatePresence initial={false}>
      {error && (
        <motion.p
          id={id}
          className="field__error"
          role="alert"
          variants={collapse}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={SPRING}
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

interface TextFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "url";
  multiline?: boolean;
  required?: boolean;
  optional?: boolean;
  hint?: string;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
  maxLength?: number;
}

export function TextField({
  label,
  name,
  value,
  onChange,
  type = "text",
  multiline,
  required,
  optional,
  hint,
  error,
  placeholder,
  autoComplete,
  maxLength,
}: TextFieldProps) {
  const id = `field-${name}`;
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const describedBy =
    [hint ? hintId : "", error ? errorId : ""].filter(Boolean).join(" ") ||
    undefined;

  const shared = {
    id,
    name,
    value,
    placeholder,
    autoComplete,
    maxLength,
    className: `field__control${error ? " field__control--invalid" : ""}`,
    "aria-required": required || undefined,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
  };

  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {label}
        {optional && <span className="field__optional">Optional</span>}
      </label>
      {hint && (
        <p id={hintId} className="field__hint">
          {hint}
        </p>
      )}
      {multiline ? (
        <textarea
          {...shared}
          rows={6}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <input
          {...shared}
          type={type}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
      <FieldError id={errorId} error={error} />
    </div>
  );
}

interface ChoiceFieldProps<T extends string> {
  label: string;
  name: string;
  value: T | "";
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
  error?: string;
}

export function ChoiceField<T extends string>({
  label,
  name,
  value,
  options,
  onChange,
  error,
}: ChoiceFieldProps<T>) {
  const errorId = `field-${name}-error`;

  return (
    <fieldset
      className="field field--choice"
      aria-describedby={error ? errorId : undefined}
    >
      <legend className="field__label">{label}</legend>
      <div className="field__choices">
        {options.map((option) => {
          const checked = option.value === value;

          return (
            <label
              key={option.value}
              className={`field__choice${
                checked ? " field__choice--checked" : ""
              }`}
            >
              <input
                className="sr-only"
                type="radio"
                name={name}
                value={option.value}
                checked={checked}
                onChange={() => onChange(option.value)}
              />
              {checked && (
                <motion.span
                  className="field__choice-fill"
                  layoutId={`choice-${name}`}
                  transition={SPRING}
                />
              )}
              <span className="field__choice-label">{option.label}</span>
            </label>
          );
        })}
      </div>
      <FieldError id={errorId} error={error} />
    </fieldset>
  );
}
