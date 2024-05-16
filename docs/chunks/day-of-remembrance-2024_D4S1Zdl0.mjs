import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D3MNuECi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Join me on May 16 for this 7th annual Day of Remembrance. The Puyallup Valley JACL will have a table and updated information on the Remembrance Gallery.\r\nHope to see you then.</p>";

				const frontmatter = {"title":"Seventh Annual Day of Remembrance","description":"May 16th, 2024 is the seventh annual Day of Remembrance.","keywords":"Japanese Incarceration World War WWII","pubDate":"May 3, 2024","heroImage":"/blogAssets/2024-05-03-remembrance.jpg"};
				const file = "C:/Users/limited/projects/astro/blogTest/src/content/blog/day-of-remembrance-2024.md";
				const url = undefined;
				function rawContent() {
					return "\r\nJoin me on May 16 for this 7th annual Day of Remembrance. The Puyallup Valley JACL will have a table and updated information on the Remembrance Gallery.\r\nHope to see you then.";
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

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
