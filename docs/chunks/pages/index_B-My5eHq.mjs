import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, j as renderHead, g as addAttribute } from '../astro_D3MNuECi.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$BaseHead, b as $$ViewTransitions, c as $$Header, d as $$Footer, S as SITE_TITLE, e as SITE_DESCRIPTION, g as getCollection, $ as $$BlogPost, f as $$FormattedDate } from './__BYgpIMKF.mjs';
/* empty css                          */
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                          */
/* empty css                          */

const $$Astro$2 = createAstro("https://pvjacl.github.io");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-j7pv25f6": true })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-j7pv25f6": true })}${renderHead()}</head> <body data-astro-cid-j7pv25f6> ${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE, "data-astro-cid-j7pv25f6": true })} <main data-astro-cid-j7pv25f6> <h1 id="long-title" data-astro-cid-j7pv25f6>We are the Puyallup Valley JACL</h1> <p data-astro-cid-j7pv25f6>
Welcome to the official website for the Puyallup Valley Chapter of the
        Japanese American Citizens League. The <a href="https://jacl.org" data-astro-cid-j7pv25f6>Japanese American Citizens League</a> is a national organization whose mission is to advocate and safeguard the
        civil and human rights of Asian and Pacific Islander Americans and all communities
        who are affected by injustice and bigotry. The leaders and members of the
        JACL also work to promote and preserve the heritage and legacy of the Japanese
        American Community.
</p> <h3 data-astro-cid-j7pv25f6>The Remembrance Gallery</h3> <a href="/remembrance-gallery" data-astro-cid-j7pv25f6><img src="/Remembrance-Gallery-index.jpg" alt="Rendering of Remembrance Gallery" data-astro-cid-j7pv25f6></a> <p data-astro-cid-j7pv25f6><a href="/remembrance-gallery" data-astro-cid-j7pv25f6>
Our current project is the creation of the Remembrance Gallery.</a>
The Washington State Fair is providing us with this opportunity to build a
        permanent historic exhibit inside the grandstand, which is part of the
        original confinement site of Japanese Americans during World War II. The
        purpose is to encourage an inclusive understanding of the wrongful
        incarceration of 125,000 Japanese and Japanese Americans in the United
        States during WWII.
</p> <!-- <ButtonTriggerModal client:idle btnText="Click to see an interstitial">
        <div>
          <h3>Interstitial dialog box</h3>
          <p>
            This is where we can put any HTML to display in an interstitial, or a
            text box that shows up over the webpage. turn isOpen={true} if you want
            this to show up immediately when the page displays.
          </p>
          <ul>
            <li>Any Valid HTML can be inserted here</li>
            <li>This item can be as long as you like</li>
            <li>You can include a photo, as below</li>
          </ul>
          <img src="/Remembrance-Gallery-Render-1.jpg" />
        </div>
      </ButtonTriggerModal> --> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })}  </body> </html>`;
}, "C:/Users/limited/projects/astro/blogTest/src/pages/index.astro", void 0);

const $$file$2 = "C:/Users/limited/projects/astro/blogTest/src/pages/index.astro";
const $$url$2 = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const PastAndUpcomingEvents = ({ eventInfos }) => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  useEffect(() => {
    const today = (/* @__PURE__ */ new Date()).getTime();
    console.log("today time is", today);
    eventInfos.forEach((info) => {
      console.log(info.date);
    });
    const upcoming = eventInfos.filter((info) => info.date > today);
    setUpcomingEvents(upcoming);
    setPastEvents(eventInfos.filter((info) => info.date <= today));
  }, []);
  const renderEvents = (listTitle, eventList, fUpcoming) => {
    if (eventList.length === 0)
      return;
    const classList = fUpcoming ? "eventList emphasize-first" : "eventList";
    console.log(eventList.length, fUpcoming);
    return /* @__PURE__ */ jsxs("div", { className: classList, children: [
      /* @__PURE__ */ jsx("h2", { children: listTitle }),
      /* @__PURE__ */ jsx("ul", { children: eventList.map((info) => {
        let dateTime = /* @__PURE__ */ new Date();
        dateTime.setTime(info.date);
        return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: `/gallery-events/${info.slug}/`, children: [
          info.imgSrc ? /* @__PURE__ */ jsx("img", { width: 720, height: 360, src: info.imgSrc, alt: "" }) : null,
          /* @__PURE__ */ jsx("h4", { className: "title", children: info.title }),
          /* @__PURE__ */ jsx("p", { className: "date", children: /* @__PURE__ */ jsx("time", { dateTime: dateTime.toISOString(), children: dateTime.toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric"
          }) }) })
        ] }) }, info.date);
      }) })
    ] });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    renderEvents("Upcoming Events", upcomingEvents, true),
    renderEvents("Past Events", pastEvents, false)
  ] });
};

const $$Astro$1 = createAstro("https://pvjacl.github.io");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = (await getCollection("galleryEvents")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  ).filter((a) => !a.data.offline);
  const eventInfos = posts.map((post) => ({
    date: post.data.eventDate.getTime(),
    slug: post.slug,
    imgSrc: post.data.heroImage,
    title: post.data.title
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "Gallery Events", "description": "Scheduled Events for the Remembrance Gallery", "keywords": "Remembrance Gallery Upcoming Events", "pubDate": /* @__PURE__ */ new Date("May 15, 2024") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PastAndUpcomingEvents", PastAndUpcomingEvents, { "eventInfos": eventInfos, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/limited/projects/astro/blogTest/src/components/PastAndUpcomingEvents", "client:component-export": "default" })} ` })}`;
}, "C:/Users/limited/projects/astro/blogTest/src/pages/gallery-events/index.astro", void 0);

const $$file$1 = "C:/Users/limited/projects/astro/blogTest/src/pages/gallery-events/index.astro";
const $$url$1 = "/gallery-events";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://pvjacl.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  ).filter((a) => !a.data.offline);
  return renderTemplate`<html lang="en" data-astro-cid-5tznm7mj> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-5tznm7mj": true })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-5tznm7mj": true })}${renderHead()}</head> <body data-astro-cid-5tznm7mj> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} <main data-astro-cid-5tznm7mj> <section data-astro-cid-5tznm7mj> <ul data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<li data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.slug}/`, "href")} data-astro-cid-5tznm7mj> <img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(post.data.heroImage, "src")} alt="" data-astro-cid-5tznm7mj> <h4 class="title" data-astro-cid-5tznm7mj>${post.data.title}</h4> <p class="date" data-astro-cid-5tznm7mj> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-5tznm7mj": true })} </p> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} </body></html>`;
}, "C:/Users/limited/projects/astro/blogTest/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/limited/projects/astro/blogTest/src/pages/blog/index.astro";
const $$url = "/blog";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
