const preview = "https://3000-iq2nne2zduvky1ptn1ozy-28b6c959.us3.manus.computer";
const pages = await (await fetch("http://127.0.0.1:9222/json/list")).json();
let page = pages.find((item) => item.type === "page" && item.url.includes("3000-iq2nne2zduvky1ptn1ozy"));
if (!page) page = await (await fetch(`http://127.0.0.1:9222/json/new?${encodeURIComponent(`${preview}/`)}`, { method: "PUT" })).json();
const socket = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.addEventListener("open", resolve, { once: true }); socket.addEventListener("error", reject, { once: true }); });
let id = 0;
const command = (method, params = {}) => new Promise((resolve, reject) => {
  const requestId = ++id;
  const timeout = setTimeout(() => reject(new Error(`${method} timed out`)), 20_000);
  const listener = (event) => {
    const response = JSON.parse(event.data);
    if (response.id !== requestId) return;
    socket.removeEventListener("message", listener);
    clearTimeout(timeout);
    response.error ? reject(new Error(response.error.message)) : resolve(response.result);
  };
  socket.addEventListener("message", listener);
  socket.send(JSON.stringify({ id: requestId, method, params }));
});
const evaluate = async (expression) => (await command("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true })).result.value;
await command("Page.enable");
await command("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
await command("Page.navigate", { url: `${preview}/?cycle11-probe=1` });
await new Promise((resolve) => setTimeout(resolve, 900));
const result = await evaluate(`(async () => {
  const requiredQuestions = [
    "How do I use the serum and the device together?",
    "Do I need the device, or can I use the serum on its own?",
    "Is this a cosmetic or a medical product?",
    "Are the studies you cite about this finished product?",
    "Which ingredients are in the formula, and why these together?",
    "Where can I read more about the formulation?",
  ];
  const faq = document.querySelector('.faq-section');
  const details = [...document.querySelectorAll('.faq-item')];
  const closed = details.map((detail) => !detail.open);
  const first = details[0];
  const summary = first.querySelector('summary');
  summary.focus({ focusVisible: true });
  const focus = getComputedStyle(summary);
  first.open = true;
  await new Promise((resolve) => requestAnimationFrame(resolve));
  const script = [...document.querySelectorAll('script[type="application/ld+json"]')].map((node) => { try { return JSON.parse(node.textContent || ""); } catch { return null; } }).find((data) => data?.['@type'] === 'FAQPage');
  details.forEach((detail) => { detail.open = true; });
  const faqText = faq.textContent || "";
  const productNameOccurrences = [...document.body.innerText.matchAll(/Bioactive Renewal Serum/gi)].map((match) => match.index);
  const target = document.querySelector('#ingredients');
  document.documentElement.style.scrollBehavior = 'auto';
  document.querySelector('a[href="#ingredients"]')?.click();
  await new Promise((resolve) => setTimeout(resolve, 80));
  return {
    heading: faq.querySelector('h2')?.innerText,
    count: details.length,
    questionMatch: requiredQuestions.every((question, index) => details[index]?.querySelector('summary')?.innerText.includes(question)),
    allClosedInitially: closed.every(Boolean),
    firstOpen: first.open,
    summaryHeight: summary.getBoundingClientRect().height,
    focusOutline: { style: focus.outlineStyle, width: focus.outlineWidth, offset: focus.outlineOffset },
    visibleAnswer: first.querySelector('.faq-item__answer')?.innerText,
    cosmeticDisclaimer: faqText.includes('Bella Nissa Science products are cosmetics. They are not intended to diagnose, treat, cure, or prevent any disease.'),
    referenceDisclaimer: faqText.includes('References describe published research on individual ingredients. They are not claims about this finished product.'),
    bannedOutsideDisclaimers: faqText.replace('Bella Nissa Science products are cosmetics. They are not intended to diagnose, treat, cure, or prevent any disease.', '').replace('References describe published research on individual ingredients. They are not claims about this finished product.', '').match(/\\b(repair|stimulate|inhibit|prevent|photoaging|heal|treat|cure)\\b/gi) || [],
    jsonLd: { type: script?.['@type'], count: script?.mainEntity?.length, textMatchesVisible: script?.mainEntity?.every((entry, index) => details[index]?.textContent.includes(entry.name) && details[index]?.textContent.includes(entry.acceptedAnswer.text)) },
    productNameOccurrences,
    naturalRenewalPresent: document.body.innerText.includes("skin’s natural renewal"),
    ingredientTargetTop: target?.getBoundingClientRect().top,
    headerBottom: document.querySelector('.site-header')?.getBoundingClientRect().bottom,
  };
})()`);
console.log(JSON.stringify(result, null, 2));
socket.close();
