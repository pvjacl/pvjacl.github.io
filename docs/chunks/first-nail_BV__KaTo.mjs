import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D3MNuECi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Yesterday Puyallup Valley hit a milestone in building the Remembrance Gallery … the symbolic first nail in the wall!  We are building and will be ready to welcome guests the first day of the Fall Fair … August 30, 2024!</p>";

				const frontmatter = {"title":"Construction of the Remembrance Gallery has Begun","description":"Symbolic First nail of construction has","keywords":"Remembrance Gallery Puyallup Fairgrounds World War WWII","pubDate":"May 3, 2024","eventDate":"May 13, 2024"};
				const file = "C:/Users/limited/projects/astro/blogTest/src/content/galleryEvents/first-nail.md";
				const url = undefined;
				function rawContent() {
					return "\r\nYesterday Puyallup Valley hit a milestone in building the Remembrance Gallery ... the symbolic first nail in the wall!  We are building and will be ready to welcome guests the first day of the Fall Fair ... August 30, 2024!\r\n";
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
