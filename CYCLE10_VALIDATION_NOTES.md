# Cycle 10 Validation Notes

## Sticky navigation and anchor clearance

At 1440px and 1024px, the founder trust bar remained a single line. At 390px, it wrapped to two lines without overflow. Its foreground/background pair is `#004D3E` over `#E5EBE7`, a 7.78:1 contrast ratio.

The sticky header measured 72px at 1440px, 1024px, and 390px, and its top position was `0px` after an instant 250px scroll. The on-scroll separator state appeared only after scrolling. The live navigation probe activated all 17 actionable in-page targets—skip target, navigation/system/method/protocol links, primary CTA, system/product links, and seven ingredient reference markers. Every non-top target landed at roughly 88px from the viewport top, beyond the 72px header; headings and reference rows remained visible.

## Footer routes and light-only document scheme

Each of `/contact`, `/privacy`, `/terms`, `/shipping-returns`, and `/accessibility` resolved to a route with exactly the visible line: `This policy is being prepared.` The page does not add policy or legal content.

Under emulated `prefers-color-scheme: dark`, the document reports `<meta name="color-scheme" content="light">`, a root `color-scheme` of `light`, `#FBFBF8` HTML/body backgrounds, and an inherited light control scheme. Full-page previews at 1440px, 1024px, and 390px retained the light canvas, trust bar, sticky header, and expanded footer without clipping or overflow.
