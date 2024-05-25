import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ben.page",
  integrations: [tailwind(), sitemap()],
  output: "static",
  adapter: vercel(),
  trailingSlash: "never",
  markdown: {
    shikiConfig: {
      theme: "light-plus",
    },
  },
});
