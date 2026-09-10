import { useEffect } from "react";

const META_SELECTORS = {
  description: ["meta[name=\"description\"]", "content"],
  ogTitle: ["meta[property=\"og:title\"]", "content"],
  ogDescription: ["meta[property=\"og:description\"]", "content"],
  twitterTitle: ["meta[name=\"twitter:title\"]", "content"],
  twitterDescription: ["meta[name=\"twitter:description\"]", "content"],
};

export default function Seo({ title, description }) {
  useEffect(() => {
    const previousTitle = document.title;
    const previous = [];
    if (title) document.title = title;

    for (const [key, [selector, attribute]] of Object.entries(META_SELECTORS)) {
      const element = document.querySelector(selector);
      if (!element) continue;
      previous.push([element, attribute, element.getAttribute(attribute)]);
      const value = key.toLowerCase().includes("title") ? title : description;
      if (value) element.setAttribute(attribute, value);
    }

    return () => {
      document.title = previousTitle;
      for (const [element, attribute, value] of previous) {
        if (value == null) element.removeAttribute(attribute);
        else element.setAttribute(attribute, value);
      }
    };
  }, [title, description]);

  return null;
}
