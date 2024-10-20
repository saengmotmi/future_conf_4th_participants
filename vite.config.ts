import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    reactRouter({
      // return a list of URLs to prerender at build time
      async prerender() {
        return ["/"];
      },
    }),
  ],
});
