import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent } from '../astro_D3MNuECi.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$BlogPost } from './__BYgpIMKF.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Carousel } from 'nuka-carousel';
/* empty css                                 */

const Slider = ({ items }) => {
  const renderItems = (items2) => {
    return items2.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "slide", children: [
      /* @__PURE__ */ jsx("img", { src: item.imageUrl, alt: item.caption, width: 600 }),
      /* @__PURE__ */ jsx("p", { children: item.caption })
    ] }, i));
  };
  return /* @__PURE__ */ jsx(Carousel, { showDots: true, showArrows: true, wrapMode: "wrap", children: renderItems(items) });
};

const $$Astro = createAstro("https://pvjacl.github.io");
const $$GalleryTeam = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GalleryTeam;
  const assetFolder = (name) => {
    return `/galleryAssets/${name}`;
  };
  const carouselItems = [
    {
      imageUrl: assetFolder("Before1.jpg"),
      caption: "The allotted space under the Puyallup Fair Grandstands in 2021"
    },
    {
      imageUrl: assetFolder("Before2.jpg"),
      caption: "Another look at the space in 2021"
    },
    {
      imageUrl: assetFolder("May2024.jpg"),
      caption: "Beginning of construction - May 2024"
    },
    {
      imageUrl: assetFolder("Co-Chairs-Leadership-Team.jpg"),
      caption: "Gallery Honorary Co-Chairs & Leadership Team standing in front of the Tsutakawa Sculpture at the Fair: Left to Right \u2013 Bill Weyerhaeuser (Co-Chair), Liz Dunbar (Fundraising Lead), Eileen Yamada Lamphere (Pres PV JACL), Frank & Penny Fukui (Co-Chairs), Sharon Sobie Seymour (Project Manager)"
    },
    {
      imageUrl: assetFolder("Gallery-Team.jpg"),
      caption: "Barb Mizoguchi Asahara, Jim Yamaguchi, Sharon Sobie Seymour, Penny Fukui, Frank Fukui, Eileen Yamada Lamphere, Liz Dunbar."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "The Team and Construction Process", "description": "", "keywords": "", "pubDate": /* @__PURE__ */ new Date("May 11 2024") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Slider", Slider, { "items": carouselItems, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/limited/projects/astro/blogTest/src/components/Slider", "client:component-export": "default" })} ` })}`;
}, "C:/Users/limited/projects/astro/blogTest/src/pages/gallery-team.astro", void 0);

const $$file = "C:/Users/limited/projects/astro/blogTest/src/pages/gallery-team.astro";
const $$url = "/gallery-team";

export { $$GalleryTeam as default, $$file as file, $$url as url };
