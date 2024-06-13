import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

import ckeditor5 from "@ckeditor/vite-plugin-ckeditor5";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.FIREBASE_API_KEY": JSON.stringify(env.FIREBASE_API_KEY),
    },
    plugins: [
      react(),
      ckeditor5({ theme: require.resolve("@ckeditor/ckeditor5-theme-lark") }),
    ],
  };
});
