import { e as createAstro, f as createComponent, r as renderTemplate, g as addAttribute, m as maybeRenderHead, A as AstroError, h as ImageMissingAlt, s as spreadAttributes, i as renderComponent, j as renderHead, k as renderSlot, l as UnknownContentCollectionError, n as renderUniqueStylesheet, o as renderScriptElement, p as createHeadAndContent, u as unescapeHTML } from '../astro_D3MNuECi.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_DL8xW2GW.mjs';
/* empty css                          */

const $$Astro$9 = createAstro("https://pvjacl.github.io");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/PV-JACL-logo.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Sedan+SC&display=swap" rel="stylesheet"><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "C:/Users/limited/projects/astro/blogTest/src/components/BaseHead.astro", void 0);

const SITE_TITLE = "Puyallup Valley JACL";
const SITE_DESCRIPTION = `The Japanese American Citizens League is a national organization whose ongoing mission is to secure and maintain the civil rights of Japanese Americans and all others who are victimized by injustice and bigotry. The leaders and members of the JACL also work to promote cultural, educational, and social values and preserve the heritage and legacy of the Japanese American community.`;

const menubar = [
  {
    id: "home",
    isDropdown: false,
    src: "/",
    label: "Home",
    children: []
  },
  {
    id: "remGalleryMenu",
    isDropdown: true,
    src: "",
    label: "Remembrance Gallery",
    children: [
      {
        id: "remGalleryItem",
        isDropdown: false,
        src: "/remembrance-gallery",
        label: "The Remembrance Gallery",
        children: []
      },
      {
        id: "remGalleryEvents",
        isDropdown: false,
        src: "/gallery-events",
        label: "Gallery Events",
        children: []
      },
      {
        id: "remGalleryTours",
        isDropdown: false,
        src: "/gallery-tours",
        label: "Gallery Tours",
        children: []
      },
      {
        id: "remGalleryNames",
        isDropdown: false,
        src: "/gallery-names",
        label: "Names in the Gallery",
        children: []
      },
      {
        id: "remGalleryDonors",
        isDropdown: false,
        src: "/donors",
        label: "Donors and Endorsements",
        children: []
      }
    ]
  },
  // {
  //   id: 'activities',
  //   isDropdown: false,
  //   src: '/blog',
  //   label: 'Events',
  //   children: []
  // },
  {
    id: "aboutMenu",
    isDropdown: true,
    src: "",
    label: "About",
    children: [
      {
        id: "aboutItem",
        isDropdown: false,
        src: "/about",
        label: "About Us",
        children: []
      },
      {
        id: "aboutMission",
        isDropdown: false,
        src: "/about#mission",
        label: "Our Mission",
        children: []
      },
      {
        id: "contactItem",
        isDropdown: false,
        src: "/contact",
        label: "Contact Us",
        children: []
      },
      {
        id: "joinUs",
        isDropdown: false,
        src: "/join",
        label: "Join Us",
        children: []
      },
      {
        id: "donateItem",
        isDropdown: false,
        src: "/donate-to-jacl",
        label: "Donate To Us",
        children: []
      },
      {
        id: "officers",
        isDropdown: false,
        src: "/officers",
        label: "Officers",
        children: []
      },
      {
        id: "pastLeaders",
        isDropdown: false,
        src: "/past-leaders",
        label: "Past Leaders",
        children: []
      }
    ]
  }
];

const $$Astro$8 = createAstro("https://pvjacl.github.io");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav data-astro-cid-3ef6ksr2> <h2 data-astro-cid-3ef6ksr2> <a href="/" class="top-link" data-astro-cid-3ef6ksr2><img id="brand-image" src="/PV-JACL-logo.svg" alt="logo" width="40" height="40" data-astro-cid-3ef6ksr2><span id="site-title" data-astro-cid-3ef6ksr2>${SITE_TITLE}</span></a> </h2> <div class="internal-links" data-astro-cid-3ef6ksr2> <ul class="menubar" role="menubar" data-astro-cid-3ef6ksr2> ${menubar.map((menuItem) => {
    return renderTemplate`<li class="menuItem"${addAttribute(menuItem.id, "id")} role="menuitem"${addAttribute(menuItem.isDropdown, "aria-haspopup")} data-astro-cid-3ef6ksr2> <a${addAttribute(0, "tabindex")}${addAttribute(menuItem.isDropdown ? null : menuItem.src, "href")} class="top-link" data-astro-cid-3ef6ksr2> ${menuItem.label}${menuItem.isDropdown ? renderTemplate`<img class="menu-icon" src="/downarrow.svg" alt="menu icon" data-astro-cid-3ef6ksr2>` : null} </a> ${!menuItem.isDropdown ? null : renderTemplate`<ul class="submenu" role="menu" data-astro-cid-3ef6ksr2> ${menuItem.children.map((menuItem2) => {
      return renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(menuItem2.src, "href")} data-astro-cid-3ef6ksr2>${menuItem2.label}</a> </li>`;
    })} </ul>`} </li>`;
  })} </ul> </div> <div class="social-links" data-astro-cid-3ef6ksr2> <a href="https://www.instagram.com/puyallup_valley_jacl/" target="_blank" title="Go to Puyallup Valley JACL's Instagram page" data-astro-cid-3ef6ksr2> <span class="sr-only" data-astro-cid-3ef6ksr2>Go to Puyallup Valley JACL's Instagram page</span> <img src="Instagram-logo.png" alt="Instagram logo" height="40" width="40" data-astro-cid-3ef6ksr2> </a> <a href="https://www.facebook.com/puyallupvalleyjacl" target="_blank" title="Go to Puyallup Valley JACL's Facebook page" data-astro-cid-3ef6ksr2> <span class="sr-only" data-astro-cid-3ef6ksr2>Go to Puyallup Valley JACL's Facebook page</span> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256" data-astro-cid-3ef6ksr2><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" data-astro-cid-3ef6ksr2></path><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825" data-astro-cid-3ef6ksr2></path></svg> </a> </div> </nav> </header> `;
}, "C:/Users/limited/projects/astro/blogTest/src/components/Header.astro", void 0);

const $$Astro$7 = createAstro("https://pvjacl.github.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  const bottomLinks = [
    {
      name: "Land Acknowledgement",
      src: "/land"
    },
    {
      name: "Search",
      src: "/search"
    },
    {
      name: "The Silent Fair",
      src: "/the-silent-fair"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div data-astro-cid-sz7xmlte> <ul class="flexy bottom-nav" data-astro-cid-sz7xmlte> ${bottomLinks.map((link) => renderTemplate`<li data-astro-cid-sz7xmlte><a${addAttribute(link.src, "href")} data-astro-cid-sz7xmlte>${link.name}</a></li>`)} </ul> <div data-astro-cid-sz7xmlte> <div data-astro-cid-sz7xmlte>&copy; ${today.getFullYear()} Puyallup Valley Chapter of the Japanese American Citizens League. All rights reserved.</div> <div class="social-links" data-astro-cid-sz7xmlte> <a href="https://www.instagram.com/puyallupvalleyjacl" target="_blank" data-astro-cid-sz7xmlte> <span class="sr-only" data-astro-cid-sz7xmlte>Go to Puyallup Valley JACL's Instagram page</span> <img src="Instagram-logo.png" alt="Instagram logo" height="40" width="40" data-astro-cid-sz7xmlte> </a> <a href="https://www.facebook.com/puyallupvalleyjacl" target="_blank" data-astro-cid-sz7xmlte> <span class="sr-only" data-astro-cid-sz7xmlte>Go to Puyallup Valley JACL's Facebook page</span> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256" data-astro-cid-sz7xmlte><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" data-astro-cid-sz7xmlte></path><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825" data-astro-cid-sz7xmlte></path></svg> </a> </div> </div></div></footer> `;
}, "C:/Users/limited/projects/astro/blogTest/src/components/Footer.astro", void 0);

const $$Astro$6 = createAstro("https://pvjacl.github.io");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/limited/projects/astro/blogTest/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$5 = createAstro("https://pvjacl.github.io");
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "C:/Users/limited/projects/astro/blogTest/src/components/FormattedDate.astro", void 0);

const $$Astro$4 = createAstro("https://pvjacl.github.io");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "C:/Users/limited/projects/astro/blogTest/node_modules/astro/components/Image.astro", void 0);

const $$Astro$3 = createAstro("https://pvjacl.github.io");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "C:/Users/limited/projects/astro/blogTest/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///C:/Users/limited/projects/astro/blogTest/docs/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$2 = createAstro("https://pvjacl.github.io");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-bvzihdzo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-bvzihdzo": true })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-bvzihdzo": true })}${renderHead()}</head> <body data-astro-cid-bvzihdzo> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true })} <main data-astro-cid-bvzihdzo> <article data-astro-cid-bvzihdzo> <div class="hero-image" data-astro-cid-bvzihdzo> ${heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": 1020, "height": 510, "src": heroImage, "alt": "", "data-astro-cid-bvzihdzo": true })}`} </div> <div class="prose" data-astro-cid-bvzihdzo> <div class="title" data-astro-cid-bvzihdzo> <div class="date" data-astro-cid-bvzihdzo> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true })} ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`} </div> <h1 data-astro-cid-bvzihdzo>${title}</h1> <hr data-astro-cid-bvzihdzo> </div> ${renderSlot($$result, $$slots["default"])} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true })} </body></html>`;
}, "C:/Users/limited/projects/astro/blogTest/src/layouts/BlogPost.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://pvjacl.github.io", "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/day-of-remembrance-2024.md": () => import('../day-of-remembrance-2024_DTxlj3z2.mjs'),"/src/content/blog/first-nail.md": () => import('../first-nail_BI17uMRi.mjs'),"/src/content/blog/first-post.md": () => import('../first-post_BIRlUWFk.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('../markdown-style-guide_D7efDuOw.mjs'),"/src/content/blog/name-updates-extended.md": () => import('../name-updates-extended_dFRSP48c.mjs'),"/src/content/blog/scholarships-2024.mdx": () => import('../scholarships-2024_DkcjxRRG.mjs'),"/src/content/blog/using-mdx.mdx": () => import('../using-mdx_BQS9GLiQ.mjs'),"/src/content/galleryEvents/first-nail.md": () => import('../first-nail__06XqUEC.mjs'),"/src/content/galleryEvents/upcoming1.md": () => import('../upcoming1_BOK74O-T.mjs'),"/src/content/galleryEvents/upcoming2.md": () => import('../upcoming2_B_etjXhq.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"first-post":"/src/content/blog/first-post.md","day-of-remembrance-2024":"/src/content/blog/day-of-remembrance-2024.md","name-updates-extended":"/src/content/blog/name-updates-extended.md","first-nail":"/src/content/blog/first-nail.md","markdown-style-guide":"/src/content/blog/markdown-style-guide.md","using-mdx":"/src/content/blog/using-mdx.mdx","scholarships-2024":"/src/content/blog/scholarships-2024.mdx"}},"galleryEvents":{"type":"content","entries":{"first-nail":"/src/content/galleryEvents/first-nail.md","upcoming2":"/src/content/galleryEvents/upcoming2.md","upcoming1":"/src/content/galleryEvents/upcoming1.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/day-of-remembrance-2024.md": () => import('../day-of-remembrance-2024_HGA-lgf6.mjs'),"/src/content/blog/first-nail.md": () => import('../first-nail_CXUrydvq.mjs'),"/src/content/blog/first-post.md": () => import('../first-post_Dwb8gn8c.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('../markdown-style-guide_o6JwceVT.mjs'),"/src/content/blog/name-updates-extended.md": () => import('../name-updates-extended_BOvWIhPZ.mjs'),"/src/content/blog/scholarships-2024.mdx": () => import('../scholarships-2024_DplrhTVD.mjs'),"/src/content/blog/using-mdx.mdx": () => import('../using-mdx_CkCqiXp_.mjs'),"/src/content/galleryEvents/first-nail.md": () => import('../first-nail_B2KOHMBL.mjs'),"/src/content/galleryEvents/upcoming1.md": () => import('../upcoming1_DlIHOba0.mjs'),"/src/content/galleryEvents/upcoming2.md": () => import('../upcoming2_Byq5BbND.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$1 = createAstro("https://pvjacl.github.io");
async function getStaticPaths$1() {
  const posts = await getCollection("galleryEvents");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$$1;
  const post = Astro2.props;
  const { Content } = await post.render();
  const keywords = post.data.keywords.split(" ");
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ${maybeRenderHead()}<p><strong>Keywords:</strong> ${keywords.join(", ")}</p> ` })}`;
}, "C:/Users/limited/projects/astro/blogTest/src/pages/gallery-events/[...slug].astro", void 0);

const $$file$1 = "C:/Users/limited/projects/astro/blogTest/src/pages/gallery-events/[...slug].astro";
const $$url$1 = "/gallery-events/[...slug]";

const ____slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$$1,
	file: $$file$1,
	getStaticPaths: getStaticPaths$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://pvjacl.github.io");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  const keywords = post.data.keywords.split(" ");
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ${maybeRenderHead()}<p><strong>Keywords:</strong> ${keywords.join(", ")}</p> ` })}`;
}, "C:/Users/limited/projects/astro/blogTest/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/limited/projects/astro/blogTest/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BlogPost as $, SITE_TITLE as S, ____slug_$1 as _, $$BaseHead as a, $$ViewTransitions as b, $$Header as c, $$Footer as d, SITE_DESCRIPTION as e, $$FormattedDate as f, getCollection as g, $$Image as h, ____slug_ as i };
