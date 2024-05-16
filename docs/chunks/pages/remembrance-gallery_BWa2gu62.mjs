import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_D3MNuECi.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$BlogPost } from './__BYgpIMKF.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                                        */
import { $ as $$DonateLinks } from './donate-to-jacl_DtP0B3RI.mjs';

const goal = 2e6;
const BambooChart = ({ amount, width, height }) => {
  let [percent, setPercent] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setPercent(amount / goal * 100);
      console.log("set the percent");
    }, 10);
  }, []);
  return /* @__PURE__ */ jsxs("div", { id: "bamboo-background", style: { height, width }, children: [
    /* @__PURE__ */ jsx("div", { id: "bamboo-color", style: { height: `${percent}%` } }),
    /* @__PURE__ */ jsx("img", { id: "hollow-bamboo", src: "/hollow-bamboo.png", alt: "image of bamboo plant" })
  ] });
};

const $$Astro = createAstro("https://pvjacl.github.io");
const $$RemembranceGallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RemembranceGallery;
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "The Remembrance Gallery", "description": "The Remembrance Gallery in the Washington State Fair in Puyallup will encourage an inclusive understanding of the wrongful incarceration of 125,000 Japanese and Japanese Americans in the United States during WWII", "keywords": "Remembrance Gallery Incarceration Puyallup Fair Grandstands Donate Fundraising Venmo Credit card checks", "pubDate": /* @__PURE__ */ new Date("December 2023"), "data-astro-cid-qifvozd6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<img src="/Remembrance-Gallery-Render-2.jpg" alt="A rendering of the Remembrance Gallery" data-astro-cid-qifvozd6> <p data-astro-cid-qifvozd6>
The Puyallup Valley Chapter of the Japanese American Citizens League (JACL)
    is building the "Puyallup Assembly Center" Remembrance Gallery. It will
    encourage an inclusive understanding of the wrongful incarceration of
    125,000 Japanese and Japanese Americans in the United States during WWII.
    The Washington State Fair is providing us with this opportunity to build a
    permanent historic exhibit inside the grandstand, which is part of the
    original confinement site. The Gallery will provide comprehensive education
    using the latest techniques in immersive and interactive media design that
    will bring to life personal stories and in-depth content. The names of over
    7,500 who were wrongfully imprisoned on these fairgrounds will be
    permanently displayed​
</p> <img src="/Remembrance-Gallery-Render-1.jpg" alt="Another rendering of The Remembrance Gallery" data-astro-cid-qifvozd6> <p data-astro-cid-qifvozd6>
The Gallery will encompass the effects of incarceration throughout the
    state, including those Nikkei who were not removed and non-Japanese
    residents. The "Puyallup Assembly Center” will be used as a reflection of
    other assembly centers, and the ten permanent camps. The stories shared will
    reflect the specific but common aspects of incarceration.
</p> <p data-astro-cid-qifvozd6>
The Gallery will serve as a visual reminder of what happened in our past and
    will help highlight the social injustices which resulted from xenophobia,
    prejudice, and wartime hysteria, and allow comparisons to those being denied
    justice today.
</p> <h3 data-astro-cid-qifvozd6>Help us create the Remembrance Gallery</h3> <div class="side-by-side" data-astro-cid-qifvozd6> <div data-astro-cid-qifvozd6>
The fundraising goal is $2 million with a completion date of August 30, 2024.
</div> <div class="contain-bamboo-chart" data-astro-cid-qifvozd6> ${renderComponent($$result2, "BambooChart", BambooChart, { "width": 300, "height": 540, "amount": 18e5, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/limited/projects/astro/blogTest/src/components/BambooChart", "client:component-export": "default", "data-astro-cid-qifvozd6": true })} </div> </div> ${renderComponent($$result2, "DonateLinks", $$DonateLinks, { "allowInMemory": false, "data-astro-cid-qifvozd6": true })} ` })} `;
}, "C:/Users/limited/projects/astro/blogTest/src/pages/remembrance-gallery.astro", void 0);

const $$file = "C:/Users/limited/projects/astro/blogTest/src/pages/remembrance-gallery.astro";
const $$url = "/remembrance-gallery";

export { $$RemembranceGallery as default, $$file as file, $$url as url };
