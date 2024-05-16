import { f as createComponent, r as renderTemplate, i as renderComponent, u as unescapeHTML } from '../astro_D3MNuECi.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$SinglePage } from './assembly-history_TQ6txD59.mjs';

const html = "<p>The Puyallup Valley Chapter and former White River Valley Chapter of the Japanese American Citizens League respectfully acknowledge the Coast Salish People, who have stewarded this land throughout the generations.</p>\n<p>A long time ago, before Puget Sound was carved out by glaciers when the mountains were young, and when the ancient forests were just seeding, the First People inhabited this land.</p>\n<p>Before European contact, the Native Tribes included the Duwamish, Puyallup, and Muckleshoot.</p>\n<p>The Puyallup Valley and White River Valley Chapters, in the spirit of truth and reconciliation, acknowledge that we stand and live within the traditional homelands of the First People of the Salish Seas.</p>\n<p>We are contemporary stewards of those who have displaced, disposed of, and involuntarily removed the First Nation of the Puget Sound area. We value their significant historical and current contributions, seen through their eyes including their stories, teachings, and local placenames.</p>\n<p>We endeavor to honor these Indigenous People for their contributions to our lives and are humbled by their gifts of culture and traditions.</p>";

				const frontmatter = {"title":"Land Acknowledgement","description":"We are contemporary stewards of those who have displaced, disposed of, and involuntarily removed the First Nation of the Puget Sound area. We value their significant historical and current contributions, seen through their eyes including their stories, teachings, and local placenames.","pubDate":"Dec 8 2023","layout":"../layouts/SinglePage.astro"};
				const file = "C:/Users/limited/projects/astro/blogTest/src/pages/land.md";
				const url = "/land";
				function rawContent() {
					return "\r\nThe Puyallup Valley Chapter and former White River Valley Chapter of the Japanese American Citizens League respectfully acknowledge the Coast Salish People, who have stewarded this land throughout the generations.\r\n\r\nA long time ago, before Puget Sound was carved out by glaciers when the mountains were young, and when the ancient forests were just seeding, the First People inhabited this land.\r\n\r\nBefore European contact, the Native Tribes included the Duwamish, Puyallup, and Muckleshoot.\r\n\r\nThe Puyallup Valley and White River Valley Chapters, in the spirit of truth and reconciliation, acknowledge that we stand and live within the traditional homelands of the First People of the Salish Seas.\r\n\r\nWe are contemporary stewards of those who have displaced, disposed of, and involuntarily removed the First Nation of the Puget Sound area. We value their significant historical and current contributions, seen through their eyes including their stories, teachings, and local placenames.\r\n\r\nWe endeavor to honor these Indigenous People for their contributions to our lives and are humbled by their gifts of culture and traditions.";
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
