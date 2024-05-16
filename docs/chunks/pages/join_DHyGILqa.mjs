import { f as createComponent, r as renderTemplate, i as renderComponent, u as unescapeHTML } from '../astro_D3MNuECi.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$SinglePage } from './assembly-history_TQ6txD59.mjs';

const html = "<p>Members of JACL are people like you who are committed to social justice, cultural and historical preservation, and community empowerment. Members help contribute to and support JACL’s efforts so that their collective voices can be heard by more people than just one individual acting alone. It is this collective strength that gives JACL the opportunity to protect civil and human rights for all.</p>\n<p>Read on to see exactly what membership looks like.</p>\n<h3 id=\"get-involved\">Get Involved!</h3>\n<p>JACL has 5 regional offices, and over 100 local chapters, so there are many opportunities to contribute to efforts at both local and national levels.</p>\n<p>Opportunities such as leadership conferences and National Convention are open to JACL members</p>\n<p>Help educate the public about Japanese American history and how civil and human rights need to be protected for all</p>\n<h3 id=\"benefits-for-you\">Benefits for YOU!</h3>\n<p>Membership includes subscription to the Pacific Citizen, a national Asian American newspaper published on a bimonthly basis.</p>";

				const frontmatter = {"title":"Join the JACL","description":"Members of the JACL are committed to social justice, cultural and historical preservation, and community empowerment.","pubDate":"Dec 8 2023","layout":"../layouts/SinglePage.astro"};
				const file = "C:/Users/limited/projects/astro/blogTest/src/pages/join.md";
				const url = "/join";
				function rawContent() {
					return "\r\nMembers of JACL are people like you who are committed to social justice, cultural and historical preservation, and community empowerment. Members help contribute to and support JACL's efforts so that their collective voices can be heard by more people than just one individual acting alone. It is this collective strength that gives JACL the opportunity to protect civil and human rights for all.\r\n\r\nRead on to see exactly what membership looks like.\r\n\r\n### Get Involved! \r\n\r\nJACL has 5 regional offices, and over 100 local chapters, so there are many opportunities to contribute to efforts at both local and national levels.\r\n\r\nOpportunities such as leadership conferences and National Convention are open to JACL members\r\n\r\nHelp educate the public about Japanese American history and how civil and human rights need to be protected for all\r\n\r\n### Benefits for YOU!\r\n\r\nMembership includes subscription to the Pacific Citizen, a national Asian American newspaper published on a bimonthly basis.\r\n\r\n \r\n\r\n \r\n\r\n \r\n\r\n ";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"get-involved","text":"Get Involved!"},{"depth":3,"slug":"benefits-for-you","text":"Benefits for YOU!"}];
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
