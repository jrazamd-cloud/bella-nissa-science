import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// Prevent literal analytics placeholders from shipping when the optional analytics environment is absent.
const stripUnconfiguredAnalytics = () => ({
  name: "bns-strip-unconfigured-analytics",
  transformIndexHtml(html: string) {
    const endpoint = process.env.VITE_ANALYTICS_ENDPOINT;
    const websiteId = process.env.VITE_ANALYTICS_WEBSITE_ID;
    const configured = Boolean(endpoint && websiteId && !endpoint.startsWith("%") && !websiteId.startsWith("%"));
    if (configured) return html;
    return html.replace(/\n?\s*<script\b[^>]*\bsrc="%VITE_ANALYTICS_ENDPOINT%\/umami"[\s\S]*?<\/script>/, "");
  },
});

// Production builds must contain zero development or editor tooling.
const plugins = [react(), tailwindcss(), stripUnconfiguredAnalytics()];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false, // Will find next available port if 3000 is busy
    host: true,
    allowedHosts: ["localhost", "127.0.0.1"],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
