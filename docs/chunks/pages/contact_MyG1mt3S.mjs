import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_D3MNuECi.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$BlogPost } from './__BYgpIMKF.mjs';
/* empty css                            */

const $$Astro = createAstro("https://pvjacl.github.io");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "Contact the Puyallup Valley JACL", "description": "Ways to contact the Puyalup Valley chapter of the Japanese American Citizens League", "keywords": "Contact JACL National Japanese American Citizens League Injustice Heritage", "pubDate": /* @__PURE__ */ new Date("January 14 2024"), "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-uw5kdbxl> <div data-astro-cid-uw5kdbxl> <h4 data-astro-cid-uw5kdbxl>Contact via Email</h4> <p data-astro-cid-uw5kdbxl>Send us an email by clicking on the link below OR copy the address below and paste into your email client of choice.</p> <address data-astro-cid-uw5kdbxl> <a href="mailto:PuyallupValleyJACL@gmail.com?subject=Contact from the website" data-astro-cid-uw5kdbxl>PuyallupValleyJACL@gmail.com</a> </address> </div> <div data-astro-cid-uw5kdbxl> <h4 data-astro-cid-uw5kdbxl>Contact via US Postal Service</h4> <p data-astro-cid-uw5kdbxl>
Our Mailing address is:
</p> <address data-astro-cid-uw5kdbxl>
P.O. Box 5323 <br data-astro-cid-uw5kdbxl>
Kent, WA 98064
</address> </div> </section> ` })} `;
}, "C:/Users/limited/projects/astro/blogTest/src/pages/contact.astro", void 0);

const $$file = "C:/Users/limited/projects/astro/blogTest/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
