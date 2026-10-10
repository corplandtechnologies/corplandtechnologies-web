const fs = require("fs");
const path = require("path");
const routes = require("../src/data/routes.json");

const SITE = "https://www.corplandtechnologies.com";
const BUILD = path.join(__dirname, "..", "build");
const shell = fs.readFileSync(path.join(BUILD, "index.html"), "utf8");

const escape = (text) =>
  String(text)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");

const swap = (html, pattern, write, label, route) => {
  if (!pattern.test(html)) {
    throw new Error(`route-meta: ${label} not found while writing ${route}`);
  }
  return html.replace(pattern, write);
};

const setTitle = (html, title, route) =>
  swap(
    html,
    /<title>[^<]*<\/title>/,
    () => `<title>${escape(title)}</title>`,
    "title",
    route
  );

const setMeta = (html, attribute, name, content, route) =>
  swap(
    html,
    new RegExp(`(<meta ${attribute}="${name}" content=")[^"]*(")`),
    (match, open, close) => `${open}${escape(content)}${close}`,
    name,
    route
  );

Object.entries(routes).forEach(([route, page]) => {
  if (route === "/") return;

  let html = setTitle(shell, page.title, route);
  html = setMeta(html, "name", "description", page.description, route);
  html = setMeta(html, "property", "og:title", page.ogTitle, route);
  html = setMeta(html, "property", "og:description", page.ogDescription, route);
  html = setMeta(html, "property", "og:image", page.image, route);
  html = setMeta(html, "property", "og:url", `${SITE}${route}`, route);

  const directory = path.join(BUILD, route);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, "index.html"), html);
  console.log(`route-meta: wrote ${route}/index.html`);
});
