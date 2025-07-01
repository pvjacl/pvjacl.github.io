import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  site: 'https://puyallupvalleyjacl.org',
  integrations: [
    mdx(), 
    sitemap({
      filter: (page) => !page.match(/redirects/)
    }), 
    react(),
    pagefind()
  ],
  redirects: {
    '/redirects/gallery-names': '/gallery/gallery-names',
    '/redirects/gallery-donate': '/gallery/gallery-donate',
    '/redirects/gallery-tours': '/gallery/gallery-tours',
    '/about-4': '/about'
  },
  outDir: './docs'
});