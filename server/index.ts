import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath, {
    index: false,
    setHeaders: (res, filePath) => {
      const relativePath = path.relative(staticPath, filePath).replace(/\\/g, "/");
      const hasContentHash = /(?:^|\/)[^/]*[-_][A-Za-z0-9_-]{8,}\.(?:js|css|woff2?|png|jpe?g|webp|avif|svg|mp4|webm)$/i.test(relativePath);
      res.setHeader("Cache-Control", hasContentHash ? "public, max-age=31536000, immutable" : "no-cache");
    },
  }));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.setHeader("Cache-Control", "no-cache");
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
