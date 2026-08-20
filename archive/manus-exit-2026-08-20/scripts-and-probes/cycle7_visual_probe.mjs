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
await command("Emulation.setDeviceMetricsOverride", { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
await command("Page.enable");
await command("Page.navigate", { url: `${preview}?cycle7-visual-probe=1` });
await new Promise((resolve) => setTimeout(resolve, 1400));
const result = await command("Runtime.evaluate", { expression: `(() => {
  const names = [
    ['hero badge', '.hero-stage__badge'],
    ['hero formula rail', '.hero-epilogue > div:first-child'],
    ['hero method rail', '.hero-epilogue > div:last-child'],
    ['serum image index', '.product-feature:first-child .image-index'],
    ['device image index', '.product-feature:last-child .image-index'],
    ['ingredient caption', '.ingredient-figure figcaption'],
    ['ritual chip', '.motion-education__visual-mark'],
  ];
  const pick = (name, selector) => {
    const node = document.querySelector(selector);
    if (!node) return { name, missing: true };
    const rect = node.getBoundingClientRect();
    const style = getComputedStyle(node);
    return { name, selector, text: node.textContent.replace(/\\s+/g, ' ').trim(), rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height }, color: style.color, background: style.backgroundColor, font: style.fontFamily, fontSize: style.fontSize };
  };
  return { viewport: { width: innerWidth, height: innerHeight }, scrollHeight: document.documentElement.scrollHeight, nodes: names.map(([name, selector]) => pick(name, selector)) };
})()`, returnByValue: true });
console.log(JSON.stringify(result.result.value, null, 2));
socket.close();
