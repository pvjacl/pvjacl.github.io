import { f as createComponent, r as renderTemplate, i as renderComponent, u as unescapeHTML } from '../astro_D3MNuECi.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$SinglePage } from './assembly-history_TQ6txD59.mjs';

const html = "<p>Please contact us if you are interested in:</p>\n<ul>\n<li>A private group tour</li>\n<li>A school or classroom tour</li>\n<li>A classroom presentation on the U. S ConcentrationCamps during WWII</li>\n<li>Attending a future Teacher Workshop.</li>\n</ul>\n<p>Email us at <a href=\"mailto:PuyallupValleyJACL@gmail.com?subject=Tours\">PuyallupValleyJACL@gmail.com</a></p>";

				const frontmatter = {"title":"Gallery Tours and Presentations","description":"Private Tours and presentations ","pubDate":"May 11, 2024","layout":"../layouts/SinglePage.astro"};
				const file = "C:/Users/limited/projects/astro/blogTest/src/pages/gallery-tours.md";
				const url = "/gallery-tours";
				function rawContent() {
					return "\r\nPlease contact us if you are interested in:\r\n\r\n* A private group tour\r\n* A school or classroom tour\r\n* A classroom presentation on the U. S ConcentrationCamps during WWII\r\n*  Attending a future Teacher Workshop.\r\n\r\nEmail us at [PuyallupValleyJACL@gmail.com](mailto:PuyallupValleyJACL@gmail.com?subject=Tours)";
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
