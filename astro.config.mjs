import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ben.page",
  output: "hybrid",
  adapter: cloudflare(),
  integrations: [tailwind(), react(), keystatic(), sitemap()],
  build: {
    format: "file",
  },
});
