/**
 * Policy page content — SPEC-07 v1.1 (2026-09-18).
 *
 * Source of truth: adapted from the Bella Nissa Science Shopify store's
 * already-approved policies and scoped down to this site, which is
 * informational only (no cart, no checkout, no accounts, no payment).
 * Reviewed by counsel 2026-09-18; her three required changes are applied:
 *   - accessibility conformance language softened from "has been" to "strives to"
 *   - shipping/returns terms withdrawn until fulfillment is final
 *   - (separately) the cosmetic disclaimer added to the Formula page
 *
 * Do not invent content here. Anything new needs owner sign-off.
 */

export type PolicyBlock =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "lines"; items: string[] };

export type PolicyDoc = {
  title: string;
  intro?: string;
  blocks: PolicyBlock[];
};

const ENTITY = "ZAHTECH, LLC";
const ADDRESS = "1791 Bobtail Drive, Maitland, FL 32751";
const SUPPORT_EMAIL = "support@bellanissascience.com";
const PHONE = "201-898-3272";

export const COSMETIC_DISCLAIMER =
  "Bella Nissa Science products are cosmetics. They are not intended to diagnose, treat, cure, or prevent any disease.";
export const REFERENCE_DISCLAIMER =
  "References describe published research on individual ingredients. They are not claims about this finished product.";

export const policies: Record<string, PolicyDoc> = {
  "/contact": {
    title: "Contact",
    blocks: [
      {
        kind: "lines",
        items: [
          "Bella Nissa Science",
          ENTITY,
          `${ADDRESS}, USA`,
          SUPPORT_EMAIL,
          PHONE,
        ],
      },
      {
        kind: "p",
        text: "Support hours: Monday–Friday, 9am–5pm ET. We reply within one business day.",
      },
    ],
  },

  "/privacy": {
    title: "Privacy Policy",
    intro: "Last updated: September 18, 2026",
    blocks: [
      {
        kind: "p",
        text: `This Privacy Policy describes how ${ENTITY}, doing business as Bella Nissa Science ("Bella Nissa Science," "we," "us"), handles information in connection with this website. This site is a pre-launch marketing site: it does not currently offer any product for sale, does not create user accounts, and does not collect payment information. A fuller Privacy Policy will apply once our online store is live, and we will post it here before that happens.`,
      },
      { kind: "h2", text: "Information we collect" },
      {
        kind: "ul",
        items: [
          "Contact information you provide. If you reach us by email or through a contact link on this site, we receive whatever information you choose to share — for example, your name, email address, and the content of your message.",
          "Basic site-usage information. Like most websites, our hosting provider may automatically log standard technical information such as your IP address, browser type, device type, the pages you visit, and the date and time of your visit.",
        ],
      },
      { kind: "h2", text: "How we use this information" },
      {
        kind: "p",
        text: "We use the information above to respond to inquiries, understand how the site is used, and keep the site secure. We do not sell personal information, and we do not use it for targeted advertising.",
      },
      { kind: "h2", text: "Cookies and analytics" },
      {
        kind: "p",
        text: "This site does not currently use analytics, marketing, or advertising cookies. If we introduce analytics in the future, we will update this policy first and, where required by law, ask for your consent before any non-essential cookies are set.",
      },
      { kind: "h2", text: "Third-party links" },
      {
        kind: "p",
        text: "This site links to third-party sites, including published research referenced on our Formula page. We are not responsible for the privacy practices of sites we do not operate; please review their policies separately.",
      },
      { kind: "h2", text: "Children's privacy" },
      {
        kind: "p",
        text: "This site is not directed to children, and we do not knowingly collect personal information from children under the age of 13, or the relevant age of consent in your jurisdiction.",
      },
      { kind: "h2", text: "Your choices" },
      {
        kind: "p",
        text: "You may contact us at any time to ask what information we hold about you, to correct it, or to ask us to delete it, subject to any legal obligation we may have to retain it.",
      },
      { kind: "h2", text: "Changes to this policy" },
      {
        kind: "p",
        text: "We may update this policy as the site develops, particularly once our online store launches. We will post the updated version here with a new date.",
      },
      { kind: "h2", text: "Contact" },
      {
        kind: "p",
        text: `Questions about this policy can be sent to ${SUPPORT_EMAIL}, or to ${ENTITY}, ${ADDRESS}.`,
      },
    ],
  },

  "/terms": {
    title: "Terms of Service",
    blocks: [
      { kind: "h2", text: "Overview" },
      {
        kind: "p",
        text: `Welcome to the Bella Nissa Science website, operated by ${ENTITY} ("ZAHTECH," "we," "us," "our"), ${ADDRESS}. By visiting or using this website, you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use this site.`,
      },
      {
        kind: "p",
        text: "This site is currently an informational, pre-launch marketing site. It does not process orders, collect payment, or create customer accounts. Separate, more detailed terms will apply once our online store is live, and we will post them here before that happens.",
      },
      { kind: "h2", text: "About our products" },
      {
        kind: "p",
        text: `Bella Nissa Science products described on this site are cosmetics intended for personal care. ${COSMETIC_DISCLAIMER} Nothing on this site is medical advice; please consult a qualified healthcare professional about any skin concern.`,
      },
      { kind: "p", text: REFERENCE_DISCLAIMER },
      {
        kind: "p",
        text: "Product names, descriptions, images, and ingredient information on this site are provided for informational purposes and are subject to change without notice as our formulation and sourcing are finalized.",
      },
      { kind: "h2", text: "Intellectual property" },
      {
        kind: "p",
        text: `The content on this site — including text, graphics, images, and the Bella Nissa Science name and logo — is owned by ${ENTITY} or its licensors and is protected by applicable intellectual property laws. You may view and share pages from this site for personal, non-commercial purposes, but you may not reproduce, modify, or republish our content without our prior written permission.`,
      },
      { kind: "h2", text: "Acceptable use" },
      {
        kind: "p",
        text: "You agree to use this site lawfully, and not to attempt unauthorized access to the site or its underlying systems, interfere with the site's operation, use automated tools to extract content at scale, or misrepresent your identity when contacting us. If you use an automated tool or AI agent to access this site on your behalf, it should identify itself as such and comply with any technical measures we use to manage automated traffic.",
      },
      { kind: "h2", text: "No warranty; limitation of liability" },
      {
        kind: "p",
        text: `This site and its content are provided "as is," without warranties of any kind, to the fullest extent permitted by law. We do not guarantee that the site will be uninterrupted or error-free. To the fullest extent permitted by law, ${ENTITY} is not liable for any damages arising from your use of this site.`,
      },
      { kind: "h2", text: "Governing law" },
      {
        kind: "p",
        text: "These Terms are governed by the laws of the State of Florida, United States, without regard to its conflict-of-laws principles. You agree to the exclusive jurisdiction of the state and federal courts located in Florida.",
      },
      { kind: "h2", text: "Changes to these Terms" },
      {
        kind: "p",
        text: "We may update these Terms as the site develops. The current version will always be posted here.",
      },
      { kind: "h2", text: "Contact" },
      {
        kind: "p",
        text: `Questions about these Terms can be sent to ${SUPPORT_EMAIL}, or to ${ENTITY}, ${ADDRESS}.`,
      },
    ],
  },

  "/shipping-returns": {
    title: "Shipping and Returns",
    blocks: [
      {
        kind: "p",
        text: "Bella Nissa Science is not yet open for orders, so there is nothing to ship or return today.",
      },
      {
        kind: "p",
        text: "Our shipping and return terms are being finalized with our fulfillment partners. We will publish them in full on this page before the store opens, so they are available to read before anyone places an order.",
      },
      {
        kind: "p",
        text: `If you have a question in the meantime, write to us at ${SUPPORT_EMAIL}.`,
      },
    ],
  },

  "/accessibility": {
    title: "Accessibility Statement",
    blocks: [
      {
        kind: "p",
        text: "Bella Nissa Science is committed to making this website usable by as many people as possible, including people with disabilities.",
      },
      { kind: "h2", text: "Our approach" },
      {
        kind: "p",
        text: "This site strives to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. It is designed and tested with those principles in mind, including color contrast, keyboard navigation, and screen-reader labeling. Video content is muted by default, offers a keyboard-reachable pause control, and does not autoplay for visitors who have reduced-motion settings enabled.",
      },
      { kind: "h2", text: "Ongoing work" },
      {
        kind: "p",
        text: "Accessibility is an ongoing effort rather than a finished state. As we add content and features, we test them against the same standard, and we recognize that some issues may still reach the site.",
      },
      { kind: "h2", text: "Tell us about a problem" },
      {
        kind: "p",
        text: `If you encounter any part of this site that is difficult to access or use, please tell us — we want to fix it. Contact us at ${SUPPORT_EMAIL} or ${PHONE}, and please include the page you were on and a description of the problem. We aim to respond within one business day.`,
      },
    ],
  },
};
