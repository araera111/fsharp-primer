import preact from "@astrojs/preact";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react(),
  ],
  site: `https://astro.build`,
  markdown: {
    shikiConfig: {
      theme: "solarized-dark",
      langs: [],
      wrap: true,
      // not italic
      italic: false,
    },
  },
});
