const scroll = (section: string) => {
  const target = document.getElementById(section);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
};

export default scroll;
