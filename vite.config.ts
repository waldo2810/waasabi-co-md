import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        { enforce: "pre", ...mdx(/* jsxImportSource: …, otherOptions… */) },
        react(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        host: "0.0.0.0",
        port: 3000,
    },
});
