import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_D3MNuECi.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from './__BYgpIMKF.mjs';
/* empty css                           */

const $$Astro = createAstro("https://pvjacl.github.io");
const $$Donors = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Donors;
  const donors = [
    "The Yotsuuye Family",
    "Liz and Mike Dunbar",
    "Tsuyoshi and Yayoi Inouye Family",
    "Lyla Tsuji Anderson",
    "Bill Driscoll and Lisa Hoffman",
    "Sheldon Arakaki",
    "Barbara and David Asahara",
    "Jan and Glenn Gokami",
    "Melvin Inouye",
    "Eileen Yamada Lamphere",
    "John B Meister",
    "The Okamoto Family",
    "Edwin Shigihara",
    "Sharon Sobie Seymour and David Seymour",
    "Edwin Shigihara"
  ];
  const iconDir = "/donor-icons/";
  const organizations = [
    {
      name: "The National Park Service",
      icon: "nps-logo.png"
    },
    {
      name: "The State of Washington",
      icon: "Seal_of_Washington.png"
    },
    {
      name: "Pierce County",
      icon: "Pierce_County_Logo.png"
    },
    {
      name: "Bill and Melinda Gates Foundation",
      icon: "Gates-Foundation.png"
    },
    {
      name: "The Masto Foundation",
      icon: "mastofoundation+logo.jpg"
    },
    {
      name: "Japanese American Community Foundation",
      icon: "JACF-logo-80H.png"
    },
    {
      name: "Japanese American Citizens League (Seattle Chapter)",
      icon: "seattle-JACL-logo.jpg",
      width: "160px"
    },
    {
      name: "The Bamford Foundation",
      icon: "Bamford-Foundation.png"
    },
    {
      name: "Robert Chinn Foundation",
      icon: "Robert-Chinn-LOGO.png"
    },
    {
      name: "Community Health Care",
      icon: "CommHealth-logo.png",
      width: "160px"
    },
    {
      name: "Japanese American Citizens League (National Chapter)",
      icon: "Natl-LOGO.jpg"
    }
  ];
  const endorsements = [
    "Alaska Chapter Japanese American Citizens League",
    "Olympia Chapter Japanese American Citizens League",
    "Portland Chapter Japanese American Citizens League",
    "Spokand Chapter Japanese American Citizens League",
    "Twin Cities Chapter Japanese American Citizens League"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "Donors and Endorsements", "description": "Leadership donors, organizations and endorsements", "keywords": "Donors Supporting Organizations Endorsements", "pubDate": /* @__PURE__ */ new Date("May 11, 2024"), "data-astro-cid-rcak5i5j": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 data-astro-cid-rcak5i5j>
Leadership Donors
</h2> <ul data-astro-cid-rcak5i5j> ${donors.map((donor) => {
    return renderTemplate`<li data-astro-cid-rcak5i5j>${donor}</li>`;
  })} </ul> <p data-astro-cid-rcak5i5j>Our honorary co-chairs for the Remembrance Gallery project are <strong data-astro-cid-rcak5i5j>Bill Weyerhaeser</strong> and <strong data-astro-cid-rcak5i5j>Frank and Penny Fukui</strong>.</p> <h2 data-astro-cid-rcak5i5j>Contributing Organizations</h2> <ul class="flexy-icons" data-astro-cid-rcak5i5j> ${organizations.map((org) => {
    if (org.width) {
      return renderTemplate`<li${addAttribute(org.name, "title")} data-astro-cid-rcak5i5j> <img${addAttribute(`${iconDir}${org.icon}`, "src")}${addAttribute(org.name, "alt")}${addAttribute(org.width, "width")} data-astro-cid-rcak5i5j> </li>`;
    }
    return renderTemplate`<li${addAttribute(org.name, "title")} data-astro-cid-rcak5i5j> <img${addAttribute(`${iconDir}${org.icon}`, "src")}${addAttribute(org.name, "alt")} data-astro-cid-rcak5i5j> </li>`;
  })} </ul> <h2 data-astro-cid-rcak5i5j>Endorsements</h2> <ul data-astro-cid-rcak5i5j> ${endorsements.map((donor) => {
    return renderTemplate`<li data-astro-cid-rcak5i5j>${donor}</li>`;
  })} </ul> ` })} `;
}, "C:/Users/limited/projects/astro/blogTest/src/pages/donors.astro", void 0);

const $$file = "C:/Users/limited/projects/astro/blogTest/src/pages/donors.astro";
const $$url = "/donors";

export { $$Donors as default, $$file as file, $$url as url };
