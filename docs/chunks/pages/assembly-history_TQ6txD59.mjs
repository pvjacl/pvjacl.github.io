import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, j as renderHead, k as renderSlot, u as unescapeHTML } from '../astro_D3MNuECi.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$BaseHead, b as $$ViewTransitions, c as $$Header, d as $$Footer } from './__BYgpIMKF.mjs';
/* empty css                                     */

const $$Astro = createAstro("https://pvjacl.github.io");
const $$SinglePage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SinglePage;
  const { frontmatter } = Astro2.props;
  const title = frontmatter && frontmatter.title || "";
  const description = frontmatter && frontmatter.description || "";
  return renderTemplate`<html lang="en" data-astro-cid-jcugireq> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-jcugireq": true })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-jcugireq": true })}${renderHead()}</head> <body data-astro-cid-jcugireq> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-jcugireq": true })} <main data-astro-cid-jcugireq> <article data-astro-cid-jcugireq> <div class="prose" data-astro-cid-jcugireq> <div class="title" data-astro-cid-jcugireq> <h1 data-astro-cid-jcugireq>${title}</h1> <hr data-astro-cid-jcugireq> </div> ${renderSlot($$result, $$slots["default"])} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-jcugireq": true })} </body></html>`;
}, "C:/Users/limited/projects/astro/blogTest/src/layouts/SinglePage.astro", void 0);

const SinglePage = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$SinglePage
}, Symbol.toStringTag, { value: 'Module' }));

const html = "<p>President Franklin D. Roosevelt signed Executive Order 9066 on February 19, 1942. This order allowed the military to remove all Japanese and Japanese Americans from the West Coast and other designated military areas.</p>\n<p>Over 7600 Japanese and Japanese Americans were incarcerated behind barbed wire fencing on the Puyallup Fairgrounds, now known as the Washington State Fairgrounds.  The majority of the population was from Seattle, but people from Fife, Puyallup, Kapowsin, Eatonville, Snohomish, and Alaska were forced to live in horse stalls and animal pens, along with apartments in barracks. This assembly center was open in April 1942 and closed in September 1942.</p>\n<p>“Camp Harmony” was given this nickname after a Seattle PI photographer mentioned to his editor that the Japanese people were quiet and harmonious.  Thus, the nickname that has remained all these years.</p>";

				const frontmatter = {"title":"The Puyallup Assembly Center","description":"Over 7600 Japanese and Japanese Americans were incarcerated behind barbed wire fencing on the Puyallup Fairgrounds, now known as the Washington State Fairgrounds.","pubDate":"Dec 8 2023","layout":"../layouts/SinglePage.astro"};
				const file = "C:/Users/limited/projects/astro/blogTest/src/pages/assembly-history.md";
				const url = "/assembly-history";
				function rawContent() {
					return "President Franklin D. Roosevelt signed Executive Order 9066 on February 19, 1942. This order allowed the military to remove all Japanese and Japanese Americans from the West Coast and other designated military areas.\r\n \r\nOver 7600 Japanese and Japanese Americans were incarcerated behind barbed wire fencing on the Puyallup Fairgrounds, now known as the Washington State Fairgrounds.  The majority of the population was from Seattle, but people from Fife, Puyallup, Kapowsin, Eatonville, Snohomish, and Alaska were forced to live in horse stalls and animal pens, along with apartments in barracks. This assembly center was open in April 1942 and closed in September 1942.\r\n \r\n\"Camp Harmony\" was given this nickname after a Seattle PI photographer mentioned to his editor that the Japanese people were quiet and harmonious.  Thus, the nickname that has remained all these years.\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$SinglePage, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const assemblyHistory = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SinglePage as $, SinglePage as S, assemblyHistory as a };
