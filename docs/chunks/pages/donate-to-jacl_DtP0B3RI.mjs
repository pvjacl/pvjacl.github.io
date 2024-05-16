import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent } from '../astro_D3MNuECi.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$BlogPost } from './__BYgpIMKF.mjs';
/* empty css                                   */

const $$Astro$1 = createAstro("https://pvjacl.github.io");
const $$DonateLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DonateLinks;
  const { allowInMemory } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="side-by-side" data-astro-cid-jrlr3ej3> <div data-astro-cid-jrlr3ej3> <h5 data-astro-cid-jrlr3ej3>Donate via Credit Card</h5> <p data-astro-cid-jrlr3ej3>
Square is a secure credit card processor often used by online vendors.
<a href="https://puyallup-valley-jacl.square.site/" data-astro-cid-jrlr3ej3>Donate using a credit card with Square</a> </p> <img class="QR-code" src="/Square-donation.jpg" alt="QR code for Square website" data-astro-cid-jrlr3ej3> </div> <div data-astro-cid-jrlr3ej3> <h5 data-astro-cid-jrlr3ej3>Donate via Venmo </h5> <p data-astro-cid-jrlr3ej3>
We accept donations through <a href="https://venmo.com/" data-astro-cid-jrlr3ej3>Venmo</a>. Find us at @PuyallupValleyJACL
<img class="QR-code" src="/Venmo-URL.jpg" alt="QR code for Venmo" data-astro-cid-jrlr3ej3> </p> </div> </div> <h5 data-astro-cid-jrlr3ej3>Donate by check</h5> <ul data-astro-cid-jrlr3ej3> <li data-astro-cid-jrlr3ej3>Make checks payable to <strong data-astro-cid-jrlr3ej3>Puyallup Valley JACL</strong> with the memo "Remembrance"</li> ${allowInMemory ? renderTemplate`<li data-astro-cid-jrlr3ej3>You may add <strong data-astro-cid-jrlr3ej3>"In memory of ...."</strong> and/or <strong data-astro-cid-jrlr3ej3>"In honor of ..."</strong></li>` : null} </ul> <h5 data-astro-cid-jrlr3ej3>Send your check to</h5> <p data-astro-cid-jrlr3ej3>
Puyallup Valley JACL<br data-astro-cid-jrlr3ej3>
P.O. Box 5323<br data-astro-cid-jrlr3ej3>
Kent, WA 98064
</p> <p data-astro-cid-jrlr3ej3>The Puyallup Valley JACL is a <strong data-astro-cid-jrlr3ej3>501(c)3 organization, TIN #91-6066838</strong></p> `;
}, "C:/Users/limited/projects/astro/blogTest/src/components/DonateLinks.astro", void 0);

const $$Astro = createAstro("https://pvjacl.github.io");
const $$DonateToJacl = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DonateToJacl;
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "Donate to the JACL", "description": "The Puyallup Valley chapter of the Japanese American Citizens League is an advocate for civil and human rights of all Americans who are affected by injustice and bigotry.", "keywords": "JACL National Japanese American Citizens League Injustice Heritage", "pubDate": /* @__PURE__ */ new Date("May 1, 2024") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DonateLinks", $$DonateLinks, { "allowInMemory": true })} ` })}`;
}, "C:/Users/limited/projects/astro/blogTest/src/pages/donate-to-jacl.astro", void 0);

const $$file = "C:/Users/limited/projects/astro/blogTest/src/pages/donate-to-jacl.astro";
const $$url = "/donate-to-jacl";

const donateToJacl = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DonateToJacl,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$DonateLinks as $, donateToJacl as d };
