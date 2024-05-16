import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D3MNuECi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Deadline for name additions or corrections in the Remembrance Gallery has been extended to Dec 31st.</p>\n<p>If you have family that were imprisoned on the Puyallup Fairgrounds during WWII please visit\r\n<a href=\"https://www.puyallupvalleyjacl.org/puyallup-assembly\">https://www.puyallupvalleyjacl.org/puyallup-assembly</a> to ensure their names are included and spelled correctly.\r\nHelp us by sharing this post</p>";

				const frontmatter = {"title":"Updates for Remembrance Gallery names extended","description":"Deadline for name additions or corrections in the Remembrance Gallery has been extended to Dec 31","keywords":"Remembrance Gallery name corrections additions Puyallup Fairgrounds World War WWII","pubDate":"Dec 25 2023","heroImage":"/blogAssets/2023_12_25-name-update-extended.jpg"};
				const file = "C:/Users/limited/projects/astro/blogTest/src/content/blog/name-updates-extended.md";
				const url = undefined;
				function rawContent() {
					return "\r\nDeadline for name additions or corrections in the Remembrance Gallery has been extended to Dec 31st.\r\n\r\nIf you have family that were imprisoned on the Puyallup Fairgrounds during WWII please visit \r\n[https://www.puyallupvalleyjacl.org/puyallup-assembly](https://www.puyallupvalleyjacl.org/puyallup-assembly) to ensure their names are included and spelled correctly. \r\nHelp us by sharing this post";
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
