import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://pvjacl.github.io',
  base: '/pvjacl',
  integrations: [mdx(), sitemap(), react()],
  outDir: 'docs'
});