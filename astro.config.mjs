import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

const site = process.env.PUBLIC_SITE_URL || "https://junkconnector.example";
const base = process.env.PUBLIC_SITE_BASE || "/";
const root = new URL("./src/", import.meta.url);

export default defineConfig({
  site,
  base,
  output: "static",
  vite: {
    resolve: {
      alias: {
        "@components": fileURLToPath(new URL("./components", root)),
        "@data": fileURLToPath(new URL("./data", root)),
        "@layouts": fileURLToPath(new URL("./layouts", root)),
        "@lib": fileURLToPath(new URL("./lib", root)),
      },
    },
  },
});
