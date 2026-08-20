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
const evaluate = async (expression) => (await command("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true })).result.value;
const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
const navigate = async (url) => { await command("Page.navigate", { url }); await wait(850); };
const verifyViewport = async (width, height) => {
  await command("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width <= 390 });
  await command("Emulation.setEmulatedMedia", { media: "", features: [] });
  await navigate(`${preview}/?cycle10=${width}`);
  return evaluate(`(async () => {
    const header = document.querySelector('.site-header');
    const trust = document.querySelector('.founder-trust-bar');
    const anchors = [...document.querySelectorAll('a[href^="#"]')];
    const checks = [];
    for (let index = 0; index < anchors.length; index += 1) {
      const anchor = anchors[index];
      const href = anchor.getAttribute('href');
      const target = document.querySelector(href);
      if (!target) { checks.push({ href, label: anchor.textContent.trim(), targetFound: false }); continue; }
      const previousScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      anchor.click();
      await new Promise((resolve) => setTimeout(resolve, 80));
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
      const targetRect = target.getBoundingClientRect();
      const headerRect = header.getBoundingClientRect();
      checks.push({ href, label: anchor.textContent.trim(), targetFound: true, top: Number(targetRect.top.toFixed(2)), headerBottom: Number(headerRect.bottom.toFixed(2)), visible: targetRect.bottom > headerRect.bottom && targetRect.top < window.innerHeight });
    }
    const finalScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 250);
    await new Promise((resolve) => setTimeout(resolve, 80));
    document.documentElement.style.scrollBehavior = finalScrollBehavior;
    const headerRect = header.getBoundingClientRect();
    return { trust: { lines: Math.round(trust.getBoundingClientRect().height / parseFloat(getComputedStyle(trust).lineHeight)), width: trust.getBoundingClientRect().width, computedColor: getComputedStyle(trust).color, background: getComputedStyle(trust).backgroundColor }, header: { position: getComputedStyle(header).position, height: headerRect.height, top: headerRect.top, className: header.className, background: getComputedStyle(header).backgroundColor }, checks };
  })()`);
};

await command("Page.enable");
const desktop = await verifyViewport(1440, 900);
const tablet = await verifyViewport(1024, 900);
const mobile = await verifyViewport(390, 844);

await command("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
await command("Emulation.setEmulatedMedia", { media: "", features: [{ name: "prefers-color-scheme", value: "dark" }] });
await navigate(`${preview}/?cycle10-dark=1`);
const darkMode = await evaluate(`(() => {
  const input = document.createElement('input');
  document.body.append(input);
  const result = { meta: document.querySelector('meta[name="color-scheme"]')?.content, root: getComputedStyle(document.documentElement).colorScheme, bodyBackground: getComputedStyle(document.body).backgroundColor, htmlBackground: getComputedStyle(document.documentElement).backgroundColor, inputScheme: getComputedStyle(input).colorScheme, bodyColor: getComputedStyle(document.body).color };
  input.remove();
  return result;
})()`);

const routeNames = ["contact", "privacy", "terms", "shipping-returns", "accessibility"];
const routes = [];
for (const route of routeNames) {
  await navigate(`${preview}/${route}?cycle10-route=1`);
  routes.push({ route, text: await evaluate(`document.querySelector('.policy-placeholder')?.innerText.trim()`), status: await evaluate(`document.body.innerText.includes('This policy is being prepared.')`) });
}

console.log(JSON.stringify({ desktop, tablet, mobile, darkMode, routes }, null, 2));
socket.close();
