# Bella Nissa Science — Structured Data Review

**Scope.** This is a review-only audit of the homepage and Formula Detail route as implemented at the apex-domain revision. No production markup was changed, and no claims, prices, offers, ratings, reviews, shipping terms, or policy terms were created.

## Current implementation

| Surface | Current structured data | Assessment |
|---|---|---|
| Homepage | One `Organization` JSON-LD block with `name`, apex `url`, SVG `logo`, and a cosmetic-safe `description`; one `Product` JSON-LD block with `name`, `description`, `brand.name`, and an absolute share-image URL; one `FAQPage` block. | The Organization and generic Product objects are syntactically useful for entity understanding. The Product object is not currently eligible for a Google **Product snippet** because it lacks `offers`, `review`, and `aggregateRating`. No such information should be added until it is verified and displayed on the matching page. |
| `/formula` | Route-specific canonical, Open Graph, Twitter, title, and meta description are emitted in raw server HTML. The page does not inject its own Product JSON-LD in raw HTML or client code. | The product-focused Formula Detail route has correct head metadata but no independent structured Product object. It is consequently not a product-snippet candidate through JSON-LD. |

## Google alignment

Google advises placing Organization data on the home page or one organization-description page. Its Organization documentation has no required properties; the existing `name`, `url`, `logo`, and `description` are appropriate baseline properties. The apex-domain URLs are absolute and internally consistent.

Google Product snippet documentation requires `name` plus at least one of `offers`, `review`, or `aggregateRating`. The existing Product object has `name` but deliberately omits those properties, so it must be treated as generic entity markup rather than rich-snippet eligibility markup. This is the compliant choice while commercial and customer-review facts have not been supplied.

Google also recommends Product structured data on a page focusing on one product. The homepage presents a paired serum-and-device system while the Product object names the serum. The Formula Detail route is the more natural future product-schema location because it focuses on the named serum, but adding markup there should wait until the owner approves the exact attributes and a raw-server injection strategy.

## Recommended future action — only after verified source facts exist

| Priority | Recommendation | Constraint |
|---|---|---|
| 1 | Add an `@id` to the homepage Organization object, for example `https://bellanissascience.com/#organization`, then reference that identifier from the Product `brand` property. | This is optional entity-linking clarity, not an eligibility requirement. |
| 2 | Add a raw-server Product JSON-LD block to `/formula`, using the canonical formula URL, current product name, verified description, and a product-specific image. | Keep it server-rendered so crawlers receive it before hydration. |
| 3 | Add `offers` only when a verified price, currency, availability, and purchase URL are live and visibly represented. | Do not fabricate commercial data. |
| 4 | Add verified reviews or ratings only if genuine first-party review data becomes available. | Do not seed or imply testimonials, ratings, or aggregate ratings. |
| 5 | Confirm that the chosen organization-logo image is crawlable and meets Google’s image guidance, including a minimum 112×112 presentation requirement. | Retain the existing brand mark unless a compliance test identifies a concrete issue. |

> Google does not guarantee that valid structured data will result in a rich result. Before any future markup release, validate the deployed URLs in Google’s Rich Results Test and URL Inspection tools.

## Single image attempt outcome

The owner-authorized reference-guided product-system image attempt was made once and was not retried. The image service returned exactly: `generator:Upload failed, sandbox returned an error: Failed to upload any of the 1 files`. The failure did not contain a quota or reset-time message. No image was produced; no existing image, derivative, share image, ritual video, source code, commit, checkpoint, or publication was changed.

## References

1. [Google Search Central — Product structured data](https://developers.google.com/search/docs/appearance/structured-data/product)
2. [Google Search Central — Product snippet structured data](https://developers.google.com/search/docs/appearance/structured-data/product-snippet)
3. [Google Search Central — Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
