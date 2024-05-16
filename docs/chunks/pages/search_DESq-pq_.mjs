import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_D3MNuECi.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$SinglePage } from './assembly-history_TQ6txD59.mjs';
import { g as getCollection } from './__BYgpIMKF.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                           */

const SearchKeywordsForm = ({ postDetails }) => {
  const [inputValue, setSearchText] = useState("");
  const [matchingPosts, setMatchingPosts] = useState([]);
  const searchPostKeywords = (postDetail) => {
    let foundStrings = [];
    const inputLower = inputValue.toLowerCase();
    const keywords = postDetail.keywords.split(" ");
    keywords.forEach((keyword) => {
      if (keyword.toLowerCase().indexOf(inputLower) >= 0) {
        foundStrings.push(keyword);
      }
    });
    return foundStrings;
  };
  const onChangeText = (event) => {
    const val = event.currentTarget.value;
    setSearchText(val);
    let foundPosts = [];
    if (val.length >= 3) {
      foundPosts = postDetails.filter((postD) => {
        const foundWords = searchPostKeywords(postD);
        return foundWords.length > 0;
      });
    }
    setMatchingPosts(foundPosts || []);
  };
  return /* @__PURE__ */ jsxs("div", { className: "search-keywords", children: [
    /* @__PURE__ */ jsx("form", { children: /* @__PURE__ */ jsxs("label", { children: [
      "Enter a keyword to search for: ",
      /* @__PURE__ */ jsx("input", { type: "text", placeholder: "word to search for", onChange: onChangeText, value: inputValue })
    ] }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("ul", { className: "posts", children: matchingPosts.map((postD) => {
      const keywords = postD.keywords.split(" ");
      return /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("h5", { children: /* @__PURE__ */ jsx("a", { href: postD.slug, children: postD.title }) }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Description: " }),
            /* @__PURE__ */ jsx("span", { children: postD.description })
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Keywords: " }),
            /* @__PURE__ */ jsx("span", { children: keywords.join(", ") })
          ] })
        ] })
      ] }, postD.id);
    }) }) })
  ] });
};

const $$Astro = createAstro("https://pvjacl.github.io");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const postDetails = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).filter((a) => !a.data.offline).map((post) => {
    const { id, slug } = post;
    const { title, description, keywords } = post.data;
    return {
      id,
      slug,
      title,
      description,
      keywords
    };
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$SinglePage, { "title": "Search Keywords", "description": "This page allows searching for various keywords for articles and updates", "keywords": "search", "pubDate": /* @__PURE__ */ new Date("January 10 2024") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h5>Currently this only searches Chapter Updates</h5> ${renderComponent($$result2, "SearchForm", SearchKeywordsForm, { "postDetails": postDetails, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/limited/projects/astro/blogTest/src/components/SearchKeywordsForm", "client:component-export": "default" })} ` })}`;
}, "C:/Users/limited/projects/astro/blogTest/src/pages/search.astro", void 0);

const $$file = "C:/Users/limited/projects/astro/blogTest/src/pages/search.astro";
const $$url = "/search";

export { $$Search as default, $$file as file, $$url as url };
