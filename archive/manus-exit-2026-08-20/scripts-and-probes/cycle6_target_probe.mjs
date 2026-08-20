const preview = "https://3000-iq2nne2zduvky1ptn1ozy-28b6c959.us3.manus.computer/";
const pages = await (await fetch("http://127.0.0.1:9222/json/list")).json();
let page = pages.find((item) => item.type === "page" && item.url.includes("3000-iq2nne2zduvky1ptn1ozy"));
if (!page) page = await (await fetch(`http://127.0.0.1:9222/json/new?${encodeURIComponent(preview)}`, { method: "PUT" })).json();
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
await command("Emulation.setDeviceMetricsOverride", { width: 1368, height: 900, deviceScaleFactor: 2, mobile: false });
await command("Page.enable");
await command("Page.navigate", { url: `${preview}?cycle6-target-probe=1` });
await new Promise((resolve) => setTimeout(resolve, 1200));
const result = await command("Runtime.evaluate", { expression: `(() => {
  const rect = (node) => { const r = node.getBoundingClientRect(); return { width: Number(r.width.toFixed(2)), height: Number(r.height.toFixed(2)), x: Number(r.x.toFixed(2)), y: Number(r.y.toFixed(2)) }; };
  const visible = (node) => { const r = node.getBoundingClientRect(); const style = getComputedStyle(node); return r.width > 0 && r.height > 0 && style.visibility !== 'hidden' && style.display !== 'none'; };
  const interactive = [...document.querySelectorAll('a, button')].filter(visible).map((node) => ({ tag: node.tagName, text: node.textContent.replace(/\\s+/g, ' ').trim().slice(0, 96), className: node.className, rect: rect(node) }));
  const hotspots = [...document.querySelectorAll('.ingredient-hotspot')].map((node) => ({ label: node.getAttribute('aria-label'), rect: rect(node) }));
  const markers = [...document.querySelectorAll('.ingredient-list sup a')].map((node) => ({ text: node.textContent, href: node.getAttribute('href') }));
  const references = [...document.querySelectorAll('.ingredient-references li')].map((node) => ({ id: node.id, index: node.querySelector('span')?.textContent, target: node.querySelector('a')?.target, rel: node.querySelector('a')?.rel }));
  const named = [
    ['standalone-nav', '.desktop-nav a'],
    ['header-brand', '.brand'],
    ['header-action', '.header-action'],
    ['protocol-link', '.system-statement .text-link'],
    ['product-link', '.product-link'],
    ['dossier-link', '.formula-link'],
    ['view-study', '.ingredient-references a'],
  ].map(([name, selector]) => {
    const node = document.querySelector(selector);
    const after = node ? getComputedStyle(node, '::after') : null;
    return node ? { name, text: node.textContent.replace(/\\s+/g, ' ').trim(), rect: rect(node), after: { width: after.width, height: after.height, top: after.top, left: after.left } } : { name, missing: true };
  });
  return { hotspots, named, markers, references, consoleErrors: window.__cycle6ConsoleErrors ?? [] };
})()`, returnByValue: true });
console.log(JSON.stringify(result.result.value, null, 2));
socket.close();
