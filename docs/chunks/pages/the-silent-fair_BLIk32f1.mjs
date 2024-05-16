import { _ as __astro_tag_component__, F as Fragment, q as createVNode } from '../astro_D3MNuECi.mjs';
import { h as $$Image } from './__BYgpIMKF.mjs';
import 'clsx';

const MDXLayout = async function ({
  children
}) {
  const Layout = (await import('./assembly-history_TQ6txD59.mjs').then(n => n.S)).default;
  const {
    layout,
    ...content
  } = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    "server:root": true,
    children
  });
};
const frontmatter = {
  "title": "The Silent Fair",
  "description": 'This video tells the story of the "Puyallup Assembly Center: through the recollections of nine individuals who ranged in age from four to eighteen at the time. ',
  "pubDate": "Dec 8 2023",
  "layout": "../layouts/SinglePage.astro"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-silent-fair",
    "text": "The Silent Fair"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "the-silent-fair",
      children: "The Silent Fair"
    }), "\n", createVNode(_components.p, {
      children: "This video tells the story of the \u201CPuyallup Assembly Center: through the recollections of nine individuals who ranged in age from four to eighteen at the time. Funding was provided by the Kip Tokuda Memorial Washington Civil Liberties Public Education Program through the Office of the Superintendent of Public Instruction (OSPI) of Washington State."
    }), "\n", createVNode(_components.p, {
      children: "This is \u201CThe Silent Fair\u201D"
    }), "\n", createVNode("iframe", {
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/iUIRUUT-k94?si=ucDDuvBod5ghipSj",
      title: "YouTube video player",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowfullscreen: true
    }), "\n", createVNode(_components.p, {
      children: "Those sharing their memories were:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Mary Tanaka Abo"
      }), "\n", createVNode(_components.li, {
        children: "James Akagi"
      }), "\n", createVNode(_components.li, {
        children: "Victor \u201CJunks\u201D Ikeda"
      }), "\n", createVNode(_components.li, {
        children: "\u200BLouise Tsuboi Kashino"
      }), "\n", createVNode(_components.li, {
        children: "Shiogi \u201CStogie: Kawabata"
      }), "\n", createVNode(_components.li, {
        children: "Choichi \u201CCho\u201D Shimizu"
      }), "\n", createVNode(_components.li, {
        children: "George \u201CJoker\u201D Shimizu"
      }), "\n", createVNode(_components.li, {
        children: "Elsie Yotsuuye Taniguchi"
      }), "\n", createVNode(_components.li, {
        children: "Shokichi \u201CShox\u201D Tokita"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Introducing the video is Kent Hojem, CEO of the Washington State Fair."
    }), "\n", createVNode(_components.p, {
      children: "Providing current perspectives and relevance to future generations are Bev Kashino and Sean Ohashi."
    }), "\n", createVNode(_components.p, {
      children: "Many non-Japanese supported their friends and neighbors. An example of Profound Acts of Kindness is Fred Orton\u2019s grandparents and parents."
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/the-silent-fair";
const file = "C:/Users/limited/projects/astro/blogTest/src/pages/the-silent-fair.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/limited/projects/astro/blogTest/src/pages/the-silent-fair.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
