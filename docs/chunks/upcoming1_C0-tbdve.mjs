import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D3MNuECi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Lorem Ipsom</p>";

				const frontmatter = {"title":"Upcoming Event 1","description":"Symbolic First nail of construction has","keywords":"Remembrance Gallery Puyallup Fairgrounds World War WWII","pubDate":"May 26, 2024","eventDate":"May 26, 2024","heroImage":"blogAssets/no-photo.svg"};
				const file = "C:/Users/limited/projects/astro/blogTest/src/content/galleryEvents/upcoming1.md";
				const url = undefined;
				function rawContent() {
					return "\r\nLorem Ipsom ";
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
