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
const check = async (width) => {
  await command("Emulation.setDeviceMetricsOverride", { width, height: 900, deviceScaleFactor: 2, mobile: width <= 390 });
  await command("Page.navigate", { url: `${preview}?cycle9-srcset-${width}=${Date.now()}` });
  await new Promise((resolve) => setTimeout(resolve, 1400));
  const result = await command("Runtime.evaluate", { expression: `(() => [...document.querySelectorAll('img')].filter((img) => img.srcset.includes('bns-cycle9-')).map((img) => ({ alt: img.alt || 'decorative', currentSrc: img.currentSrc, hasWebp: img.currentSrc.endsWith('.webp'), srcsetCandidates: img.srcset.split(',').length })))()`, returnByValue: true });
  return result.result.value;
};
await command("Page.enable");
console.log(JSON.stringify({ desktop1440Dpr2: await check(1440), mobile390Dpr2: await check(390) }, null, 2));
socket.close();
