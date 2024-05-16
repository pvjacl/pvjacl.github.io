import { f as createComponent, r as renderTemplate, i as renderComponent, u as unescapeHTML } from '../astro_D3MNuECi.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$SinglePage } from './assembly-history_TQ6txD59.mjs';

const html = "<p><img src=\"/PV-board_edited.webp\" alt=\"Photo of chapter board members\"></p>\n<p><strong>L-R: Eileen Yamada Lamphere, President; Cheryl Lamphere, Vice President; Liz Dunbar, Secretary; Leslie Soule, Membership; Elsie Yotsuuye Taniguchi, Past President; Joan Fowler Yamada, Treasurer; Chip Larouche, PNW District Governor and installing officer.</strong></p>\n<ul>\n<li>President - Eileen Yamada Lamphere</li>\n<li>Vice-President - Cheryl Lamphere</li>\n<li>Secretary - Elizabeth Dunbar</li>\n<li>Treasurer - Joan Fowler Yamada</li>\n<li>Youth Representative - Anna Yotsuuye</li>\n<li>Membership - Leslie Soule</li>\n</ul>";

				const frontmatter = {"title":"Chapter Officers","description":"Officers of the Puyallup Valley chapter of the Japanese American Citizens League","pubDate":"Dec 8 2023","layout":"../layouts/SinglePage.astro"};
				const file = "C:/Users/limited/projects/astro/blogTest/src/pages/officers.md";
				const url = "/officers";
				function rawContent() {
					return "![Photo of chapter board members](/PV-board_edited.webp)\r\n\r\n**L-R: Eileen Yamada Lamphere, President; Cheryl Lamphere, Vice President; Liz Dunbar, Secretary; Leslie Soule, Membership; Elsie Yotsuuye Taniguchi, Past President; Joan Fowler Yamada, Treasurer; Chip Larouche, PNW District Governor and installing officer.**\r\n\r\n* President - Eileen Yamada Lamphere\r\n* Vice-President - Cheryl Lamphere\r\n* Secretary - Elizabeth Dunbar\r\n* Treasurer - Joan Fowler Yamada\r\n* Youth Representative - Anna Yotsuuye\r\n* Membership - Leslie Soule";
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
