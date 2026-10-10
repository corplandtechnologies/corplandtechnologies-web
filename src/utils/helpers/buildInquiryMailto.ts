import { company, stages } from "../../data/site";
import { IInquiry, IInquiryForm } from "../../interfaces/site.interface";

const buildInquiryMailto = (inquiry: Partial<IInquiry>, form: IInquiryForm) => {
  const stage = stages.find((item) => item.value === inquiry.stage);
  const need = form.needs.find((item) => item.value === inquiry.need);
  const lines = [
    inquiry.message,
    "",
    need ? `Need: ${need.label}` : "",
    stage ? `Stage: ${stage.label}` : "",
    inquiry.link ? `Link: ${inquiry.link}` : "",
    inquiry.name ? `From: ${inquiry.name}` : "",
  ].filter((line, index) => line || index === 1);

  const subject = encodeURIComponent(form.mailSubject);
  const body = encodeURIComponent(lines.join("\n"));

  return `mailto:${company.emails.join(",")}?subject=${subject}&body=${body}`;
};

export default buildInquiryMailto;
