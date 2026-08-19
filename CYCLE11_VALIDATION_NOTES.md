# Cycle 11 Validation Notes

## Closed-state responsive review

Full-page previews at 1440px, 1024px, and 390px show the founder trust bar immediately after the hero and before the first system section. The trust bar retains its centred mono treatment and does not affect the 72px sticky header or existing anchor offsets.

The canonical product name and `30 mL (1.01 fl oz)` spec label render in the product system. At each viewport, the six native FAQ summaries render closed, remain within the section width, and the footer follows without overlap or horizontal overflow. The 390px review shows a compact but readable summary stack.

## Native FAQ open state

At 390px, the first native `details` disclosure opens in place and reveals the approved serum-then-device answer. The remaining five summaries retain their standard marker and clear stacked separation, while the footer remains fully visible below the FAQ. The rendered first summary measured 79.34px high, exceeding the required 24px target.

## FAQ, metadata, and source checks

The live FAQ probe confirmed all six authorised questions, a closed initial state, native opening behavior, the approved first answer, both required disclaimers, no banned claim words outside the two required verbatim disclaimers, and six matching FAQPage JSON-LD entities. Its ingredient link landed at 87.8px with a 72px sticky-header lower edge.

The canonical product-name audit found no remaining rendered `Bioactive Renewal Serum` or `BIOACTIVE RENEWAL SERUM` source instances, while the ingredient-specific phrase `skin’s natural renewal` remains unchanged. Raw production HTML exposes the canonical home and Formula Detail titles plus individual titles for Contact, Privacy Policy, Terms of Service, Shipping and Returns, and Accessibility Statement; the home document also includes FAQPage JSON-LD. The refreshed browser console contained only expected development connection messages and no runtime errors.
