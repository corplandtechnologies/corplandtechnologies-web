import { IRouteMeta } from "../../interfaces/site.interface";

const setContent = (selector: string, content: string) => {
  document.querySelector(selector)?.setAttribute("content", content);
};

const setPageMeta = (meta: IRouteMeta) => {
  document.title = meta.title;
  setContent('meta[name="description"]', meta.description);
  setContent('meta[property="og:title"]', meta.ogTitle);
  setContent('meta[property="og:description"]', meta.ogDescription);
  setContent('meta[property="og:image"]', meta.image);
};

export default setPageMeta;
