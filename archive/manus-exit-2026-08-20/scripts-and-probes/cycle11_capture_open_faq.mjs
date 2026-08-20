import { writeFile } from "fs/promises";

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
await command("Page.enable");
await command("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
await command("Page.navigate", { url: `${preview}/?cycle11-open-faq=1` });
await new Promise((resolve) => setTimeout(resolve, 900));
const position = await command("Runtime.evaluate", { expression: `(() => { const detail = document.querySelector('.faq-item'); detail.open = true; const y = detail.getBoundingClientRect().top + window.scrollY - 86; document.documentElement.style.scrollBehavior = 'auto'; window.scrollTo(0, y); return { y, afterScroll: window.scrollY, top: detail.getBoundingClientRect().top, open: detail.open }; })()`, awaitPromise: true, returnByValue: true });
await new Promise((resolve) => setTimeout(resolve, 120));
const capture = await command("Page.captureScreenshot", { format: "png", fromSurface: true });
await writeFile("/home/ubuntu/screenshots/cycle11-faq-open-390.png", Buffer.from(capture.data, "base64"));
console.log(JSON.stringify({ output: "/home/ubuntu/screenshots/cycle11-faq-open-390.png", open: true, viewport: [390, 844], position: position.result.value }));
socket.close();
