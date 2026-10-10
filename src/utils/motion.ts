export const SPRING = { type: "spring", stiffness: 260, damping: 26 } as const;

export const SOFT_SPRING = {
  type: "spring",
  stiffness: 150,
  damping: 24,
} as const;

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const TAP = { scale: 0.97 };

export const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const rise = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export const pop = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1 },
};

export const stagger = (gap = 0.06, delay = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: gap, delayChildren: delay } },
});

export const swap = {
  initial: { opacity: 0, y: 14, scale: 0.985 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -14, scale: 0.985 },
};

export const collapse = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
};

export const page = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const IN_VIEW = { once: true, margin: "0px 0px -80px 0px" } as const;
