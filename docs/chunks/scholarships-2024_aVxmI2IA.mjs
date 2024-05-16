import { _ as __astro_tag_component__, F as Fragment, q as createVNode } from './astro_D3MNuECi.mjs';
import { h as $$Image } from './pages/__BYgpIMKF.mjs';
import 'clsx';

const frontmatter = {
  "title": "2024 National JACL Scholarships are Now Open",
  "description": "The Japanese American Citizens League (JACL) announced that the 2024 National Scholarship and Awards Program is now underway",
  "keywords": "Scholarship Program Applications",
  "pubDate": "Dec 6 2023",
  "offline": true
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode("div", {
      style: "text-align:center",
      children: createVNode("img", {
        src: "/blogAssets/jacl-scholarships-2024.jpg",
        alt: "Image of JACL scholarship announcement"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Apply for scholarships by visiting the ", createVNode(_components.a, {
        href: "https://jacl.org/scholarships",
        children: "National JACL scholarships page"
      }), ". When you apply with the National chapter of JACL, you will need to state the chapter to which you belong. All Puyallup Valley Chapter members\u2019 applications will be reviewed for local JACL scholarships as well."]
    }), "\n", createVNode("hr", {
      style: "border-top: 2px dashed black"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.a, {
        href: "https://jacl.org",
        children: "Japanese American Citizens League (JACL)"
      }), " announced that the 2024 National Scholarship and Awards Program is now underway. The JACL annually offers approximately 30 college scholarships for students who are incoming college freshmen, undergraduates and graduates, and those specializing in law and the creative/performing arts. There are also financial aid scholarships for those demonstrating a need for financial assistance."]
    }), "\n", createVNode(_components.p, {
      children: ["Scholarship Program guidelines, instructions, and applications have been posted on ", createVNode(_components.a, {
        href: "https://jacl.org",
        children: "the JACL website, www.jacl.org"
      }), ", and can be accessed by clicking the \u201CYouth\u201D tab on the menu bar. You may also click the button below \u201CTo Learn More or Apply Click Here.\u201D"]
    }), "\n", createVNode(_components.p, {
      children: "Following previous years, the application forms for the scholarship program will be completely online. Freshman applications must be submitted directly by the applicant to National JACL through the online form no later than Friday, March 1, 2024, 11:59 p.m. Hawaiian Standard Time (HST)."
    }), "\n", createVNode(_components.p, {
      children: "These freshman applications will then be disseminated to their respective chapters for review. Chapters will have one month to evaluate their applications and forward the names of the most outstanding applicants to National JACL. It is these applications that shall be forwarded to the National Freshman Scholarship Committee for final selection."
    }), "\n", createVNode(_components.p, {
      children: "Applications for the non-freshman scholarship categories (undergraduate, graduate, law, creative/performing arts, and financial aid) are also to be sent directly by the applicant to National JACL through the online form no later than Monday, April 1, 2024, 11:59 p.m. Hawaiian Standard Time (HST)."
    }), "\n", createVNode(_components.p, {
      children: "All those applying to the National JACL Scholarship Program must be a youth/student or individual member of the JACL; a couple/family membership held by a parent does NOT meet this requirement. Applicants must be enrolled in school in Fall 2024 in order to be eligible for a scholarship. If a student has received two National scholarship awards previously, they are no longer eligible to apply as the limit is two national awards per person."
    }), "\n", createVNode(_components.p, {
      children: ["For more information on the National JACL Scholarship Program, contact Scholarship Program Manager, Matthew Weisbly at ", createVNode(_components.a, {
        href: "mailto:scholarships@jacl.org",
        children: "scholarships@jacl.org"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blog/scholarships-2024.mdx";
const file = "C:/Users/limited/projects/astro/blogTest/src/content/blog/scholarships-2024.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/limited/projects/astro/blogTest/src/content/blog/scholarships-2024.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
