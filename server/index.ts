import express from "express";
import { readFile } from "fs/promises";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const formulaMetadata = {
  title: "Rejuvenating Bioactive Precision Serum | Formula Detail | Bella Nissa Science",
  description: "An evidence-context dossier for Rejuvenating Bioactive Precision Serum, describing individual ingredients and a cosmetic ritual that supports the appearance of smooth, hydrated, radiant-looking skin.",
  url: "https://bellanissascience.com/formula",
  image: "https://bellanissascience.com/media/bns-cycle9-serum-1440_d013724f.jpg",
  imageAlt: "Bella Nissa Science serum with a translucent ruby-red formula and warm polished gold hardware.",
};

const policyTitles: Record<string, string> = {
  "/contact": "Contact",
  "/privacy": "Privacy Policy",
  "/terms": "Terms of Service",
  "/shipping-returns": "Shipping and Returns",
  "/accessibility": "Accessibility Statement",
};

function renderFormulaDocument(template: string) {
  return template
    .replace("<title>Rejuvenating Bioactive Precision Serum | Bella Nissa Science</title>", `<title>${formulaMetadata.title}</title>`)
    .replace('content="Rejuvenating Bioactive Precision Serum and its companion device form a considered cosmetic ritual that supports the appearance of smooth, hydrated, radiant-looking skin."', `content="${formulaMetadata.description}"`)
    .replace('href="https://bellanissascience.com/"', `href="${formulaMetadata.url}"`)
    .replaceAll('content="Rejuvenating Bioactive Precision Serum | Bella Nissa Science"', `content="${formulaMetadata.title}"`)
    .replaceAll('content="Rejuvenating Bioactive Precision Serum and its companion device form a considered cosmetic ritual that supports the appearance of smooth, hydrated, radiant-looking skin."', `content="${formulaMetadata.description}"`)
    .replaceAll('content="https://bellanissascience.com/"', `content="${formulaMetadata.url}"`)
    .replaceAll('content="https://bellanissascience.com/media/bns-cycle13-share-1200x630_6652c931.jpg"', `content="${formulaMetadata.image}"`)
    .replace('content="1200"', 'content="1440"')
    .replace('content="630"', 'content="1920"')
    .replaceAll('content="Translucent ruby-red serum with warm polished gold hardware and companion device for a ritual that supports the appearance of smooth, radiant-looking skin."', `content="${formulaMetadata.imageAlt}"`);
}

function renderPolicyDocument(template: string, title: string) {
  return template.replace("<title>Rejuvenating Bioactive Precision Serum | Bella Nissa Science</title>", `<title>${title} | Bella Nissa Science</title>`);
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
    const policyTitle = policyTitles[req.path];
    if (req.path !== "/formula" && !policyTitle) {
      res.sendFile(path.join(staticPath, "index.html"));
      return;
    }
    try {
      const template = await readFile(path.join(staticPath, "index.html"), "utf8");
      res.type("html").send(req.path === "/formula" ? renderFormulaDocument(template) : renderPolicyDocument(template, policyTitle));
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
