import { mkdirSync, writeFileSync } from "node:fs";

const preview = "https://3000-iq2nne2zduvky1ptn1ozy-28b6c959.us3.manus.computer/";
const pages = await (await fetch("http://127.0.0.1:9222/json/list")).json();
let page = pages.find((item) => item.type === "page" && item.url.includes("3000-iq2nne2zduvky1ptn1ozy"));
if (!page) page = await (await fetch(`http://127.0.0.1:9222/json/new?${encodeURIComponent(preview)}`, { method: "PUT" })).json();
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { ws.addEventListener("open", resolve, { once: true }); ws.addEventListener("error", reject, { once: true }); });
let counter = 0;
const call = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++counter;
  const timer = setTimeout(() => reject(new Error(`Timed out: ${method}`)), 15_000);
  const listener = (event) => {
    const message = JSON.parse(event.data);
    if (message.id !== id) return;
    ws.removeEventListener("message", listener);
    clearTimeout(timer);
    message.error ? reject(new Error(message.error.message)) : resolve(message.result);
  };
  ws.addEventListener("message", listener);
  ws.send(JSON.stringify({ id, method, params }));
});

await call("Network.enable");
await call("Page.enable");
await call("Emulation.setDeviceMetricsOverride", { width: 1368, height: 687, deviceScaleFactor: 1, mobile: false });
await call("Network.clearBrowserCache");
await call("Network.setCacheDisabled", { cacheDisabled: true });
await call("Page.navigate", { url: `${preview}?cycle3=${Date.now()}` });
await new Promise((resolve) => setTimeout(resolve, 2200));
await call("Input.dispatchKeyEvent", { type: "keyDown", key: "Tab", code: "Tab", windowsVirtualKeyCode: 9, nativeVirtualKeyCode: 9 });
await call("Input.dispatchKeyEvent", { type: "keyUp", key: "Tab", code: "Tab", windowsVirtualKeyCode: 9, nativeVirtualKeyCode: 9 });
await new Promise((resolve) => setTimeout(resolve, 80));
const result = await call("Runtime.evaluate", { expression: `(() => {
  const meta = document.querySelector('meta[name="viewport"]')?.content;
  const skip = document.querySelector('.skip-link');
  const rect = skip?.getBoundingClientRect();
  const mono = performance.getEntriesByType('resource').filter((entry) => entry.name.includes('ibm-plex-mono-latin')).map((entry) => ({ start: entry.startTime, end: entry.responseEnd, transferSize: entry.transferSize }));
  const video = document.querySelector('.ritual-video');
  const ref7 = document.querySelector('#ingredient-ref-7 a');
  const skipRules = Array.from(document.styleSheets).flatMap((sheet) => { try { return Array.from(sheet.cssRules); } catch { return []; } }).filter((rule) => rule.selectorText?.includes('skip-link')).map((rule) => ({ selector: rule.selectorText, transform: rule.style.transform, priority: rule.style.getPropertyPriority('transform') }));
  const referenceLinks = Array.from(document.querySelectorAll('.ingredient-references a')).map((link) => ({ href: link.href, target: link.target, rel: link.rel }));
  return { meta, focusClass: document.activeElement?.className, skipMatchesFocus: skip?.matches(':focus'), skipMatchesFocusVisible: skip?.matches(':focus-visible'), skipRect: rect && { top: rect.top, left: rect.left, width: rect.width, height: rect.height }, skipTransform: skip && getComputedStyle(skip).transform, skipRules, mono, video: video && { preload: video.preload, poster: video.poster, sources: Array.from(video.querySelectorAll('source')).map((source) => ({ src: source.src, type: source.type })) }, ref7: ref7 && { href: ref7.href, target: ref7.target, rel: ref7.rel }, referenceLinks, protocolCurrent: document.querySelector('[aria-current="step"]')?.id, protocolControls: document.querySelector('[aria-current="step"]')?.getAttribute('aria-controls'), accordionControls: Array.from(document.querySelectorAll('.use-step > button')).map((button) => ({ controls: button.getAttribute('aria-controls'), expanded: button.getAttribute('aria-expanded') })) };
})()`, returnByValue: true });
const screenshot = await call("Page.captureScreenshot", { format: "png" });
mkdirSync("/home/ubuntu/cycle3-probe", { recursive: true });
writeFileSync("/home/ubuntu/cycle3-probe/first-tab.png", Buffer.from(screenshot.data, "base64"));
writeFileSync("/home/ubuntu/cycle3-probe/result.json", JSON.stringify(result.result.value, null, 2));
console.log(JSON.stringify(result.result.value, null, 2));
ws.close();
