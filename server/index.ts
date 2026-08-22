import compression from "compression";
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

const knownRoutes = new Set(["/", "/formula", "/404", ...Object.keys(policyTitles)]);

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

function renderPolicyDocument(template: string, title: string, routePath: string) {
  const routeUrl = `https://bellanissascience.com${routePath}`;
  // Policy documents need their own canonical and social URL rather than inheriting the home page.
  return template
    .replace("<title>Rejuvenating Bioactive Precision Serum | Bella Nissa Science</title>", `<title>${title} | Bella Nissa Science</title>`)
    .replace('href="https://bellanissascience.com/"', `href="${routeUrl}"`)
    .replaceAll('content="https://bellanissascience.com/"', `content="${routeUrl}"`);
}

function renderNotFoundDocument(template: string) {
  return template.replace("</head>", '<meta name="robots" content="noindex" />\n  </head>');
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.disable("x-powered-by");
  app.use(compression());
  app.use((_req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    next();
  });
  app.use((req, res, next) => {
    if (req.path.length > 1 && req.path.endsWith("/")) {
      const query = req.originalUrl.slice(req.path.length);
      res.redirect(301, req.path.replace(/\/+$/, "") + query);
      return;
    }
    next();
  });

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

  // Handle known client routes while preserving route-specific metadata before hydration.
  app.get("*", async (req, res, next) => {
    res.setHeader("Cache-Control", "no-cache");
    const policyTitle = policyTitles[req.path];
    // Unknown requests must render the client fallback with a real 404, never a soft 200.
    if (req.path === "/" && knownRoutes.has(req.path)) {
      res.sendFile(path.join(staticPath, "index.html"));
      return;
    }
    try {
      const template = await readFile(path.join(staticPath, "index.html"), "utf8");
      if (req.path === "/formula") {
        res.type("html").send(renderFormulaDocument(template));
      } else if (policyTitle) {
        res.type("html").send(renderPolicyDocument(template, policyTitle, req.path));
      } else if (req.path === "/404") {
        res.type("html").send(renderNotFoundDocument(template));
      } else {
        res.status(404).type("html").send(renderNotFoundDocument(template));
      }
    } catch (error) {
      next(error);
    }
  });

  app.use((error: unknown, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(error);
    res.status(500).type("text").send("Internal server error");
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
