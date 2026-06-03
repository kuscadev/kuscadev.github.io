// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://ogzk.tr',
  integrations: [mdx(), icon()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
