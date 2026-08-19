import express from "express";
import { readFile } from "fs/promises";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const formulaMetadata = {
  title: "Formula Detail | Bella Nissa Science",
  description: "An evidence-context dossier for the Bella Nissa Science serum, describing individual ingredients and a cosmetic ritual that supports the appearance of smooth, hydrated, radiant-looking skin.",
  url: "https://bella-nissa-science.manus.space/formula",
  image: "https://bella-nissa-science.manus.space/manus-storage/bns-cycle9-serum-1440_d013724f.jpg",
  imageAlt: "Bella Nissa Science serum with a translucent ruby-red formula and warm polished gold hardware.",
};

function renderFormulaDocument(template: string) {
  return template
    .replace("<title>Bella Nissa Science — Clinical Skincare, Calibrated</title>", `<title>${formulaMetadata.title}</title>`)
    .replace('content="Bella Nissa Science is a considered serum-and-device ritual that supports the appearance of smooth, hydrated, radiant-looking skin through a measured cosmetic-care sequence."', `content="${formulaMetadata.description}"`)
    .replace('href="https://bella-nissa-science.manus.space/"', `href="${formulaMetadata.url}"`)
    .replaceAll('content="Bella Nissa Science — Clinical Skincare, Calibrated"', `content="${formulaMetadata.title}"`)
    .replaceAll('content="A considered serum-and-device ritual that supports the appearance of smooth, hydrated, radiant-looking skin through a measured cosmetic-care sequence."', `content="${formulaMetadata.description}"`)
    .replaceAll('content="https://bella-nissa-science.manus.space/"', `content="${formulaMetadata.url}"`)
    .replaceAll('content="https://bella-nissa-science.manus.space/manus-storage/bns-cycle7-share-1200x630_56e14440.jpg"', `content="${formulaMetadata.image}"`)
    .replace('content="1200"', 'content="1440"')
    .replace('content="630"', 'content="1920"')
    .replaceAll('content="Translucent ruby-red serum with warm polished gold hardware and companion device for a ritual that supports the appearance of smooth, radiant-looking skin."', `content="${formulaMetadata.imageAlt}"`);
}

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

  // Handle client-side routing while serving Formula Detail metadata before hydration.
  app.get("*", async (req, res, next) => {
    res.setHeader("Cache-Control", "no-cache");
    if (req.path !== "/formula") {
      res.sendFile(path.join(staticPath, "index.html"));
      return;
    }
    try {
      const template = await readFile(path.join(staticPath, "index.html"), "utf8");
      res.type("html").send(renderFormulaDocument(template));
    } catch (error) {
      next(error);
    }
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
