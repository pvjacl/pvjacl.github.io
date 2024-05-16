import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_D3MNuECi.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$BlogPost } from './__BYgpIMKF.mjs';
/* empty css                          */

const $$Astro = createAstro("https://pvjacl.github.io");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "About Us", "description": "The Puyallup Valley chapter of the Japanese American Citizens League is an advocate for civil and human rights of all Americans who are affected by injustice and bigotry.", "keywords": "JACL National Japanese American Citizens League Injustice Heritage", "pubDate": /* @__PURE__ */ new Date("August 08 2021"), "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex-center" data-astro-cid-kh7btl4r> <img src="/PV-JACL-logo-large.png" alt="Puyallup Valley JACL logo" data-astro-cid-kh7btl4r> </div> <p data-astro-cid-kh7btl4r>
The Puyallup Valley Chapter of the <a href="https://jacl.org" data-astro-cid-kh7btl4r>Japanese American Citizens League</a> is strongly 
	involved with educational programs and voter registration. We are currently raising funds for 
	the "Puyallup Assembly Center" Remembrance Gallery to encourage an inclusive understanding of 
	the wrongful incarceration of 125,000 Japanese and Japanese Americans in the United States during 
	WWII.
</p> <p data-astro-cid-kh7btl4r>
The <a href="https://jacl.org" data-astro-cid-kh7btl4r>Japanese American Citizens League</a> is a national organization whose ongoing mission is to 
		secure and maintain the civil rights of Japanese Americans and all others who are victimized 
		by injustice and bigotry. The leaders and members of the JACL also work to promote cultural, 
		educational, and social values and preserve the heritage and legacy of the Japanese American 
		community.
</p> <h2 id="mission" data-astro-cid-kh7btl4r>Our Mission</h2> <p data-astro-cid-kh7btl4r>
The <a href="https://jacl.org" data-astro-cid-kh7btl4r>Japanese American Citizens League</a> is a national membership-based organization and a 501 (c)3
	non-profit. Their mission is to advocate and safeguard the civil and human rights of Asian and
	Pacific Islander Americans and all communities who are affected by injustice and bigotry. The Puyallup
	Valley Chapter (also includes the former White River Valley Chpt) is part of the Pacific Northwest 
	District of the JACL.
</p> <p data-astro-cid-kh7btl4r>
The leaders and members of the JACL also work to promote and preserve the heritage and legacy of the
	Japanese American Community. Puyallup Valley is also focused on education of the wartime incarceration of our communities.
</p> ` })} `;
}, "C:/Users/limited/projects/astro/blogTest/src/pages/about.astro", void 0);

const $$file = "C:/Users/limited/projects/astro/blogTest/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
