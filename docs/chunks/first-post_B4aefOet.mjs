import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D3MNuECi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Remembrance Gallery planning team hard at work! 🤍🤍💭\nIf you know anyone who was incarcerated at Japanese American Internment camps, let us know their names, so that we can properly represent them at our gallery! 🙌🏻</p>\n<p>Remember, Never Again is the message we stand by. Never Again for anyone, regardless of their race, nationality, or religion.</p>";

				const frontmatter = {"title":"The Remembrance Gallery Team","description":"Work continues on the Remembrance Gallery","keywords":"Remembrance Gallery Internment Camp Never Again","pubDate":"Dec 20 2023","heroImage":"/blogAssets/2023_12_05_team.jpg"};
				const file = "C:/Users/limited/projects/astro/blogTest/src/content/blog/first-post.md";
				const url = undefined;
				function rawContent() {
					return "\nRemembrance Gallery planning team hard at work! 🤍🤍💭 \nIf you know anyone who was incarcerated at Japanese American Internment camps, let us know their names, so that we can properly represent them at our gallery! 🙌🏻 \n\nRemember, Never Again is the message we stand by. Never Again for anyone, regardless of their race, nationality, or religion.";
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
