import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import routes from "../data/routes.json";
import scroll from "../utils/helpers/scroll";
import setPageMeta from "../utils/helpers/setPageMeta";

const usePage = (path: keyof typeof routes) => {
  const { hash } = useLocation();

  useEffect(() => {
    const meta = routes[path];
    if (meta) setPageMeta(meta);
  }, [path]);

  useEffect(() => {
    const target = hash.slice(1);
    if (!target) return;

    let cancelled = false;
    const settled = document.fonts ? document.fonts.ready : Promise.resolve();

    settled.then(() => {
      requestAnimationFrame(() => {
        if (!cancelled) scroll(target);
      });
    });

    return () => {
      cancelled = true;
    };
  }, [hash]);
};

export default usePage;
