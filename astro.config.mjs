import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://pvjacl.github.io',
  integrations: [
    mdx(), 
    sitemap({
      filter: (page) => !page.match(/redirects/)
    }), 
    react()
  ],
  redirects: {
    '/redirects/gallery-names': '/gallery/gallery-names',
    '/redirects/gallery-donate': '/gallery/gallery-donate',
    '/redirects/gallery-tours': '/gallery/gallery-tours'
  },
  outDir: './docs'
});