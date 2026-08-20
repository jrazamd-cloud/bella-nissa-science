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
await command("Page.enable");
for (const width of [1440, 680, 390]) {
  await command("Emulation.setDeviceMetricsOverride", { width, height: 900, deviceScaleFactor: 1, mobile: width <= 680 });
  await command("Page.navigate", { url: `${preview}?hotspot-probe=${width}` });
  await new Promise((resolve) => setTimeout(resolve, 1200));
  const result = await command("Runtime.evaluate", { expression: `(() => {
    const rect = (selector) => { const node = document.querySelector(selector); const r = node.getBoundingClientRect(); return { top: Math.round(r.top + scrollY), left: Math.round(r.left), right: Math.round(r.right), bottom: Math.round(r.bottom + scrollY) }; };
    const device = rect('.ingredient-hotspot--device');
    const ectoin = rect('.ingredient-hotspot--ectoin');
    const ectoinCard = rect('.ingredient-list li:nth-child(4)');
    return { width: innerWidth, device, ectoin, ectoinCard, deviceNumber: document.querySelector('.ingredient-hotspot--device > span')?.textContent, verticallySeparatedFromCard: device.bottom < ectoinCard.top, distinctFromEctoin: device.right < ectoin.left || device.left > ectoin.right || device.bottom < ectoin.top || device.top > ectoin.bottom };
  })()`, returnByValue: true });
  console.log(JSON.stringify(result.result.value));
}
socket.close();
