import {
  IClause,
  IFaq,
  IFounder,
  IInquiryForm,
  INav,
  ISpot,
  IStage,
  IStep,
  ITerm,
  ITrack,
  ITrade,
} from "../interfaces/site.interface";

export const company = {
  name: "Corpland Technologies",
  city: "Kumasi",
  country: "Ghana",
  timezone: "GMT",
  registration: "",
  emails: ["asante@corplandtechnologies.com", "ixan@corplandtechnologies.com"],
  replyWindow: "one business day",
  bookingUrl: "",
  corplandUrl: "https://corpland.corplandtechnologies.com",
  corplandHost: "corpland.corplandtechnologies.com",
  corplandSeen: "1 October 2026",
  freePath: "/free",
  social: {
    linkedin: "https://www.linkedin.com/company/corpland-technologies",
    x: "https://x.com/Corpland_",
    whatsapp: "https://wa.me/233201027084",
  },
};

const taken: ISpot[] = [];

const tracks: ITrack[] = [
  {
    id: "mvp",
    label: "Build a new MVP",
    title: "Your idea, working in four weeks.",
    lede: "Small enough to finish. Real enough to put in front of users.",
    included: [
      "One platform: a web app or a mobile app",
      "One core user journey, working from start to finish",
      "Sign in and user accounts",
      "One integration, such as payments or an AI feature",
      "Deployed and usable by real people",
      "Code in your own GitHub from day one",
      "A written IP assignment, signed before work starts",
      "A working demo every week",
      "30 days of fixes after launch",
    ],
    excluded: [
      "A second platform",
      "Brand design or illustration. We build from your designs or a clean default",
      "More than one integration",
      "Marketing sites, SEO or content",
      "New features after the 30 days. That is paid work",
    ],
  },
  {
    id: "maintain",
    label: "Look after a live app",
    title: "Your live app, in steady hands.",
    lede: "For when the app works but nobody is looking after it.",
    included: [
      "A written audit of the code, the hosting and the store listings in week one",
      "Bug fixes, in the order you choose",
      "Dependency and security updates",
      "App Store and Google Play compliance updates",
      "Small improvements, inside a cap of 30 hours for the four weeks",
      "Work done in your GitHub and your accounts, through access you can remove at any time",
      "A written update every week",
      "A handover note at the end, whether you keep us or not",
    ],
    excluded: [
      "Rewrites and large new features. Those are builds",
      "Someone on call day and night. We answer in GMT business hours",
      "Apps built outside our stack. We tell you after a look at the code",
      "Hosting, store fees and other third party costs",
      "Work past the four weeks or the 30 hours. That is a paid monthly plan",
    ],
  },
];

export const offer = {
  totalSpots: 10,
  taken,
  updated: "1 October 2026",
  weeks: 4,
  fixDays: 30,
  careHours: 30,
  tracks,
};

export const founders: IFounder[] = [
  {
    name: "Asante Sylvester Kwame",
    role: "Cofounder and engineer",
    bio: "Wrote most of Corpland: the marketplace API, the web app and the iOS and Android apps.",
    email: "asante@corplandtechnologies.com",
  },
  {
    name: "Ixan Adu-Darko Joseph",
    role: "Cofounder and engineer",
    email: "ixan@corplandtechnologies.com",
  },
];

export const workingFacts: ITerm[] = [
  {
    title: "Where we are",
    body: "We work remotely with every client.",
  },
  {
    title: "When we work",
    body: "GMT. The same working day as London, an hour or two behind most of the EU, and a full morning of overlap with the US East Coast. For the West Coast we take calls in our evening.",
  },
  {
    title: "How fast we reply",
    body: "Within one business day, from a founder, about your project.",
  },
];

export const catchTerms: ITerm[] = [
  {
    title: "What we get",
    body: "A case study we can publish, the right to show the work, and an honest testimonial if we earn one.",
  },
  {
    title: "What you pay",
    body: "Only the third party services your product needs, such as hosting, a domain or a paid API. They sit on your own accounts and your own card.",
  },
  {
    title: "What happens after",
    body: "You own everything and can walk away. If you want us to keep going, we offer monthly plans, and we tell you the price before the free work starts.",
  },
];

export const steps: IStep[] = [
  {
    title: "Apply",
    body: "Tell us what you are building, or what you already run. One of us reads it and replies within one business day.",
    fromYou: "5 minutes",
  },
  {
    title: "Scoping call",
    body: "We agree what the four weeks cover, what is left out and the start date. You get it in writing, with the IP assignment.",
    fromYou: "20 minutes",
  },
  {
    title: "Four weeks of work",
    body: "For a build, code lands in your GitHub from the first day and you see a working demo every week. For a live app, week one is a written audit and the rest is the work it calls for.",
    fromYou: "30 minutes a week, feedback within 48 hours",
  },
  {
    title: "Handover",
    body: "Everything sits on your accounts. A build gets 30 days of fixes after launch. A live app gets a handover note, and you decide whether to keep us on.",
    fromYou: "Put it in front of users",
  },
];

export const fit = {
  yes: [
    "You can name the problem and the people who have it",
    "The work fits in four weeks: a first version, or the upkeep of one live app",
    "You can give us 30 minutes a week",
    "You are based in the US, the UK or the EU",
  ],
  no: [
    "You need a full product with many features on day one",
    "You need it on two platforms at once",
    "Your live app needs a rewrite, or someone on call day and night",
    "You are looking for a cofounder or an equity deal",
  ],
};

export const faqs: IFaq[] = [
  {
    question: "What is the catch?",
    answer:
      "We are new and have no client work to show. Ten real projects, finished, are worth more to us right now than ten invoices. After these ten, we charge.",
  },
  {
    question: "Who owns the code and the IP?",
    answer:
      "You do. All of it, assigned to you in a short written agreement before we start. The repository lives in your GitHub account from day one, so even a half finished build is yours.",
  },
  {
    question: "What will it cost me?",
    answer:
      "Only the third party services your product needs, such as hosting, a domain or a paid API, on your own accounts and your own card. We never ask for a deposit, equity or card details.",
  },
  {
    question: "What does looking after a live app cover?",
    answer:
      "A written audit of the code, the hosting and the store listings in the first week. Then bug fixes, dependency and security updates, store compliance and small improvements for four weeks, inside a cap of 30 hours. Rewrites and large new features are builds, and we quote those separately.",
  },
  {
    question: "How do you get into an app that is already live?",
    answer:
      "You add us to your GitHub as collaborators and give us the least access the work needs on your hosting and store accounts. Nothing is transferred to us and you can remove us in a minute. We keep no copies after the work ends.",
  },
  {
    question: "Will you sign an NDA?",
    answer:
      "Yes, on request, before the scoping call. The application only asks what the product does and who it is for. Keep the secret parts for the call.",
  },
  {
    question: "What do you build with?",
    answer:
      "React and Next.js on the web, React Native for mobile, Node.js and MongoDB on the server. It is the stack Corpland runs on. If your product needs something else, or your live app is built with something else, we will say so before any work starts.",
  },
  {
    question: "What if you get busy with paying clients?",
    answer:
      "We run a few projects at a time and give you a start date on the scoping call. Once you have that date, the four weeks are yours. The code is in your repository throughout, so nothing is ever held back.",
  },
  {
    question: "What will the case study say?",
    answer:
      "What the product does, what we did and how long it took. You read it before it is published, and nothing confidential or commercially sensitive goes in without your say.",
  },
  {
    question: "What if the work runs past four weeks?",
    answer:
      "A build is finished to the scope we agreed in writing, at no cost to you. The four weeks are our commitment, not your deadline. Care for a live app ends at four weeks or 30 hours, whichever comes first, and we tell you where things stand.",
  },
  {
    question: "What if it is not working out?",
    answer:
      "Either side can stop at any time. You keep everything built so far.",
  },
  {
    question: "What happens after the free work?",
    answer:
      "You can take the code and go, hire someone else, or keep us on a monthly plan. We tell you the price of that plan on the scoping call, before any work starts.",
  },
];

export const stages: IStage[] = [
  { value: "idea", label: "Just an idea" },
  { value: "designs", label: "Designs or wireframes" },
  { value: "half_built", label: "Half built" },
  { value: "live", label: "Live product" },
];

export const clauses: IClause[] = [
  {
    id: "built",
    title: "You can judge us before you pay.",
    summary: "Our own marketplace is live on web, iOS and Android.",
  },
  {
    id: "services",
    title: "We start where you are.",
    summary: "A new product in four weeks, or care for a live app.",
  },
  {
    id: "process",
    title: "You never wonder what we are doing.",
    summary: "A demo every week, and code in your GitHub from day one.",
  },
  {
    id: "ownership",
    title: "Your code stays yours.",
    summary: "Assigned to you in writing before we start.",
  },
  {
    id: "cost",
    title: "Our first ten clients pay nothing.",
    summary: "A four week build or four weeks of care, by application.",
    marked: true,
  },
  {
    id: "trade",
    title: "There is no hidden catch.",
    summary: "What you get, and what we get in return.",
  },
  {
    id: "sign",
    title: "You sign here.",
  },
];

export const clauseOf = (id: string) => {
  const index = clauses.findIndex((clause) => clause.id === id);
  return { number: index + 1, ...clauses[index] };
};

export const builtFacts: ITerm[] = [
  {
    title: "Three platforms, one API.",
    body: "A web app, an iOS app and an Android app, all running on one Node.js backend.",
  },
  {
    title: "Escrow payments.",
    body: "Money is held until delivery is confirmed.",
  },
  {
    title: "Real time chat.",
    body: "Buyers and sellers talk inside the app, with photos and location.",
  },
  {
    title: "Seller teams.",
    body: "Shops add staff, each with a role and its own permissions.",
  },
];

export const services: ITerm[] = [
  {
    title: "Build a new product in four weeks.",
    body: "A working first version for the web or for mobile: one platform and one core journey with sign in, deployed and usable by real people. Small enough to finish, real enough to learn from.",
    meta: "Four weeks",
  },
  {
    title: "Take over and maintain a live app.",
    body: "A written audit in the first week. Then bug fixes, dependency and security updates, store compliance and small improvements.",
    meta: "Month by month",
  },
];

export const stackNote =
  "We work in one stack, the one Corpland runs on: React and Next.js on the web, React Native on mobile, Node.js and MongoDB on the server. If your product needs something else, we tell you on the first call.";

export const workflow: ITerm[] = [
  {
    title: "Scope in writing.",
    body: "A 20 minute call, then one page: what gets built, what is left out, the start date and the price.",
  },
  {
    title: "Code in your GitHub.",
    body: "The repository lives in your account from the first day. We join as collaborators, so even a half finished build is yours.",
  },
  {
    title: "A demo every week.",
    body: "You see working software every week and tell us what to change. We need 30 minutes and your feedback within 48 hours.",
  },
  {
    title: "Handover, then fixes.",
    body: "We deploy to your accounts, hand over everything and fix what breaks for 30 days.",
  },
  {
    title: "An answer within one business day.",
    body: "Every message gets a reply from the engineers who write your code. Nobody sits between you and them.",
  },
  {
    title: "Calls that fit your day.",
    body: "The weekly demo is booked at a time that suits you, wherever you work from.",
  },
];

export const trade: ITrade = {
  yours: [
    "A working first version of your product, or a live app that is looked after",
    "Every line of code and all the IP, assigned to you in writing",
    "Software you can open and try every week",
    "The engineers who write your code on every call",
    "A price agreed in writing before any paid work starts",
  ],
  ours: [
    "From each of the first ten clients, a case study we can publish",
    "Permission to name the product and show what we built",
    "An honest quote from you, if we earn one",
    "After the first ten, a fixed price per build and a monthly rate for upkeep",
    "More work with you later, only if you want it",
  ],
};

export const ownership: ITerm[] = [
  {
    title: "The code and the IP.",
    body: "All of it is yours, assigned in a short written agreement that we both sign before work starts.",
  },
  {
    title: "The accounts.",
    body: "Hosting, domains, store listings and paid services sit on your accounts and your card. We work through access you can remove in a minute.",
  },
  {
    title: "Your confidentiality.",
    body: "An NDA on request, before the first call. Two factor sign in on every account we touch, and no copies kept once the work ends.",
  },
  {
    title: "The exit.",
    body: "Either side can stop at any time. You keep everything built so far, with notes on how to run it.",
  },
];

export const costLede = `Paying a team you have never worked with is a gamble. We have shipped our own product, but not yet yours, so for ten clients we take that risk instead: four weeks of work at no fee, a new product, or care for an app they already have, which is a written audit in week one and then up to ${offer.careHours} hours of fixes and updates. Spots are applied for on the free offer page, and we pick the projects we can finish well. The price is a case study.`;

export const costTerms: ITerm[] = [
  {
    title: "New builds.",
    body: "A fixed price for a fixed scope, agreed in writing before any work starts.",
  },
  {
    title: "Upkeep.",
    body: "A monthly rate, with the hours and the response time written down.",
  },
  {
    title: "Your own costs.",
    body: "Hosting, store accounts and third party services stay on your card, whether you are one of the ten or not.",
  },
];

export const homeNav: INav = {
  links: [
    { label: "Work", id: "built", wideOnly: true },
    { label: "Services", id: "services", wideOnly: true },
    { label: "Process", id: "process", wideOnly: true },
    { label: "Free offer", to: company.freePath },
  ],
  action: { label: "Start a project", id: "sign" },
};

export const freeNav: INav = {
  links: [
    { label: "Work", id: "work" },
    { label: "Offer", id: "offer" },
    { label: "Process", id: "process", wideOnly: true },
    { label: "FAQ", id: "faq" },
  ],
  action: { label: "Apply", id: "contact" },
};

export const forms: Record<IInquiryForm["kind"], IInquiryForm> = {
  application: {
    kind: "application",
    source: "corplandtechnologies.com/free",
    title: "Apply for a spot.",
    lede: `It takes five minutes, and you will not be left waiting. One of us reads every application and replies within ${company.replyWindow}, with a yes or a no and the reason.`,
    emailNote: "Write to either of us. It reaches the same two people.",
    signedBy: company.name,
    replier: "One of us",
    notes: [
      {
        title: "What we will not ask for",
        body: "A phone number, a budget, a deposit or card details.",
      },
      {
        title: "What happens next",
        body: "If it is a fit, we set up a 20 minute scoping call. No pitch, only the scope, the timeline and what we need from you.",
      },
      {
        title: "What we keep",
        body: "Your message is stored in our own database and read by the two founders. Email either of us and we delete it.",
      },
    ],
    needs: [
      { value: "mvp", label: "A new MVP" },
      { value: "maintain", label: "Care for an app I already have" },
    ],
    needLabel: "Which do you need?",
    askStage: true,
    prompt: {
      label: "What are you building, and who is it for?",
      hint: "The problem and the user are enough. Keep the secret parts for the call.",
    },
    promptFor: {
      maintain: {
        label: "What does the app do, and what does it need?",
        hint: "What it is built with, where the code lives and what is going wrong.",
      },
    },
    linkHint: "A deck, a Figma file, a site or a store listing.",
    submit: "Send application",
    sending: "Sending application",
    promise: `A founder replies within ${company.replyWindow}.`,
    sentTitle: "Application sent.",
    reply: "with a yes or a no",
    again: "Send another application",
    failed:
      "We could not send your application. Your answers are still here. Try again, or email it to us directly.",
    mailSubject: "Application for a free spot",
    signature: false,
  },
  project: {
    kind: "project",
    source: "corplandtechnologies.com",
    title: clauseOf("sign").title,
    lede: `Tell us what you need. We read it and reply within ${company.replyWindow}. Sending this commits you to nothing. The real agreement comes after a call, and only if you want to go ahead.`,
    emailNote:
      "Write to us directly. Either address reaches the engineers who would do the work.",
    signedBy: company.name,
    replier: "We",
    notes: [
      {
        title: "What happens next",
        body: "A reply within one business day. If it looks like a fit, a 20 minute call with the engineers who would do the work. Then one page with the scope, the dates and the price.",
      },
      {
        title: "After one of the ten free spots?",
        body: "Those have their own short application, with the full terms beside it.",
        to: company.freePath,
        action: "Apply on the free offer page",
      },
      {
        title: "What we will not ask for",
        body: "A phone number, a budget or a deposit to start talking.",
      },
      {
        title: "What we keep",
        body: "Your message is stored in our own database and read only by us. Email us and we delete it.",
      },
    ],
    needs: [
      { value: "mvp", label: "A new product in four weeks" },
      { value: "maintain", label: "Maintenance for a live app" },
      { value: "unsure", label: "Not sure yet" },
    ],
    needLabel: "What do you need?",
    askStage: false,
    prompt: {
      label: "What do you want built, and who is it for?",
      hint: "The problem, the user and where it stands today. Keep the secret parts for the call.",
    },
    promptFor: {
      maintain: {
        label: "What does the app do, and what does it need?",
        hint: "What it is built with, where the code lives and what is going wrong.",
      },
      unsure: {
        label: "What are you trying to get done?",
        hint: "Describe the problem in your own words. We will tell you which kind of work it is.",
      },
    },
    linkHint: "A deck, a Figma file, a site or a store listing.",
    submit: "Send message",
    sending: "Sending message",
    promise: `We reply within ${company.replyWindow}. Sending this commits you to nothing.`,
    sentTitle: "Message sent.",
    reply: "with a yes, a no or a question",
    again: "Send another message",
    failed:
      "We could not send your message. Your answers are still here. Try again, or email it to us directly.",
    mailSubject: "Project inquiry",
    signature: true,
  },
};
