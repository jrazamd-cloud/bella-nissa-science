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
  const handler = (event) => {
    const response = JSON.parse(event.data);
    if (response.id !== requestId) return;
    socket.removeEventListener("message", handler);
    clearTimeout(timeout);
    response.error ? reject(new Error(response.error.message)) : resolve(response.result);
  };
  socket.addEventListener("message", handler);
  socket.send(JSON.stringify({ id: requestId, method, params }));
});
const evaluate = async (expression) => {
  const result = await command("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  return result.result.value;
};
const navigate = async (url) => {
  await command("Page.navigate", { url });
  await new Promise((resolve) => setTimeout(resolve, 1200));
};

await command("Page.enable");
await command("Emulation.setDeviceMetricsOverride", { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
await command("Emulation.setEmulatedMedia", { media: "", features: [] });
await navigate(`${preview}/?cycle9-accessibility=1`);
const home = await evaluate(`(() => {
  const video = document.querySelector('.ritual-video');
  const toggle = document.querySelector('.ritual-video-toggle');
  const hotspot = document.querySelector('.ingredient-hotspot');
  hotspot.focus();
  const hotspotStyle = getComputedStyle(hotspot);
  const before = video.paused;
  video.pause();
  const pausedByControl = video.paused;
  toggle.click();
  const resumeRequested = !video.paused;
  const responsive = [...document.querySelectorAll('img')].filter((img) => img.src.includes('bns-cycle9-')).map((img) => ({ alt: img.alt, srcset: img.getAttribute('srcset'), sizes: img.getAttribute('sizes') }));
  return { video: { autoplay: video.autoplay, controls: video.controls, poster: video.poster, ariaLabel: video.getAttribute('aria-label'), wasPausedBeforeProbe: before, pausedByControl, resumeRequested }, toggle: { text: toggle.textContent.trim(), ariaLabel: toggle.getAttribute('aria-label'), rect: (() => { const rect = toggle.getBoundingClientRect(); return { width: rect.width, height: rect.height }; })() }, hotspotFocus: { outlineStyle: hotspotStyle.outlineStyle, outlineWidth: hotspotStyle.outlineWidth, outlineColor: hotspotStyle.outlineColor, outlineOffset: hotspotStyle.outlineOffset }, responsive };
})()`);

await command("Emulation.setEmulatedMedia", { media: "", features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
await navigate(`${preview}/?cycle9-reduced-motion=1`);
const reducedMotion = await evaluate(`(() => { const video = document.querySelector('.ritual-video'); return { autoplay: video.autoplay, paused: video.paused, poster: video.poster }; })()`);

await command("Emulation.setEmulatedMedia", { media: "", features: [] });
await navigate(`${preview}/formula?cycle9-formula-metadata=1`);
const formula = await evaluate(`(() => ({
  title: document.title,
  description: document.querySelector("meta[name='description']")?.content,
  canonical: document.querySelector("link[rel='canonical']")?.href,
  ogTitle: document.querySelector("meta[property='og:title']")?.content,
  ogUrl: document.querySelector("meta[property='og:url']")?.content,
  twitterTitle: document.querySelector("meta[name='twitter:title']")?.content,
  disclaimer: document.querySelector('.formula-reference-disclaimer')?.textContent.trim(),
  links: [...document.querySelectorAll('.evidence-row__copy a')].map((link) => ({ target: link.target, rel: link.rel })),
  serum: document.querySelector('.formula-hero__specimen img')?.getAttribute('srcset'),
}))()`);

console.log(JSON.stringify({ home, reducedMotion, formula }, null, 2));
socket.close();
