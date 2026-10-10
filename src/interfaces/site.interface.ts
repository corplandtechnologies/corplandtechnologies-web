export interface ISpot {
  client: string;
  status: "building" | "live";
  url?: string;
}

export interface IFounder {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
  email: string;
  linkedin?: string;
  github?: string;
}

export interface IStep {
  title: string;
  body: string;
  fromYou: string;
}

export interface IFaq {
  question: string;
  answer: string;
}

export interface ITerm {
  title: string;
  body: string;
  meta?: string;
  to?: string;
  action?: string;
}

export interface IStage {
  value: "idea" | "designs" | "half_built" | "live";
  label: string;
}

export interface INeed {
  value: "mvp" | "maintain" | "unsure";
  label: string;
}

export interface ITrack {
  id: "mvp" | "maintain";
  label: string;
  title: string;
  lede: string;
  included: string[];
  excluded: string[];
}

export interface IClause {
  id: string;
  title: string;
  summary?: string;
  marked?: boolean;
}

export interface INavLink {
  label: string;
  id?: string;
  to?: string;
  wideOnly?: boolean;
}

export interface IPrompt {
  label: string;
  hint: string;
}

export interface IInquiryForm {
  kind: "application" | "project";
  source: string;
  title: string;
  lede: string;
  emailNote: string;
  signedBy: string;
  replier: string;
  notes: ITerm[];
  needs: INeed[];
  needLabel: string;
  askStage: boolean;
  prompt: IPrompt;
  promptFor: Partial<Record<INeed["value"], IPrompt>>;
  linkHint: string;
  submit: string;
  sending: string;
  promise: string;
  sentTitle: string;
  reply: string;
  again: string;
  failed: string;
  mailSubject: string;
  signature: boolean;
}

export interface ITrade {
  yours: string[];
  ours: string[];
}

export interface INav {
  links: INavLink[];
  action: { label: string; id: string };
}

export interface IInquiry {
  name: string;
  email: string;
  message: string;
  kind: IInquiryForm["kind"];
  need: INeed["value"];
  stage?: IStage["value"];
  link?: string;
  preferred_contact_window?: string;
  source?: string;
}

export interface IRouteMeta {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  image: string;
}
