const preview = "https://3000-iq2nne2zduvky1ptn1ozy-28b6c959.us3.manus.computer/";
const page = await (await fetch(`http://127.0.0.1:9222/json/new?${encodeURIComponent(preview)}`, { method: "PUT" })).json();
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
await command("Page.navigate", { url: `${preview}?cycle6-functional-probe=1` });
await new Promise((resolve) => setTimeout(resolve, 1200));
const result = await command("Runtime.evaluate", { expression: `(async () => {
  const settle = () => new Promise((resolve) => setTimeout(resolve, 180));
  const menu = document.querySelector('.menu-toggle');
  menu?.click();
  await settle();
  const menuOpened = menu?.getAttribute('aria-expanded') === 'true' && Boolean(document.querySelector('.mobile-nav'));
  menu?.click();
  await settle();
  const menuClosed = menu?.getAttribute('aria-expanded') === 'false' && !document.querySelector('.mobile-nav');
  const protocolButtons = [...document.querySelectorAll('.use-step > button')];
  protocolButtons[1]?.click();
  await settle();
  const accordionWorking = protocolButtons[1]?.getAttribute('aria-expanded') === 'true' && Boolean(document.getElementById(protocolButtons[1]?.getAttribute('aria-controls')));
  const tabs = [...document.querySelectorAll('.protocol-tab')];
  tabs[2]?.click();
  await settle();
  const stepperWorking = tabs[2]?.getAttribute('aria-current') === 'step' && Boolean(document.getElementById(tabs[2]?.getAttribute('aria-controls')));
  const hotspot = document.querySelector('.ingredient-hotspot');
  hotspot?.scrollIntoView({ block: 'center', behavior: 'instant' });
  const hotspotRect = hotspot?.getBoundingClientRect();
  return { menuOpened, menuClosed, accordionWorking, stepperWorking, hotspotPoint: hotspotRect ? { x: hotspotRect.x + hotspotRect.width / 2, y: hotspotRect.y + hotspotRect.height / 2 } : null };
})()`, awaitPromise: true, returnByValue: true });
const summary = result.result.value;
if (summary.hotspotPoint) {
  await command("Input.dispatchMouseEvent", { type: "mouseMoved", x: summary.hotspotPoint.x, y: summary.hotspotPoint.y });
  await new Promise((resolve) => setTimeout(resolve, 220));
  const hover = await command("Runtime.evaluate", { expression: `(() => { const hotspot = document.querySelector('.ingredient-hotspot'); const tooltip = hotspot?.querySelector('.ingredient-tooltip'); const style = tooltip ? getComputedStyle(tooltip) : null; const rules = [...document.styleSheets].flatMap((sheet) => { try { return [...sheet.cssRules].map((rule) => rule.cssText); } catch { return []; } }).filter((rule) => rule.includes('ingredient-hotspot:hover') || rule.includes('ingredient-tooltip')).slice(-10); return { hovering: hotspot?.matches(':hover'), matchingTooltip: Boolean(document.querySelector('.ingredient-hotspot:hover .ingredient-tooltip')), tooltipInlineStyle: tooltip?.getAttribute('style'), tooltipOpacity: style?.opacity, tooltipTransform: style?.transform, tooltipTransition: style?.transition, tooltipDisplay: style?.display, tooltipVisibility: style?.visibility, rules }; })()`, returnByValue: true });
  summary.hotspotWorking = hover.result.value.hovering && hover.result.value.tooltipOpacity === '1';
  summary.hotspotHover = hover.result.value;
  if (!summary.hotspotWorking) {
    await command("Runtime.evaluate", { expression: `(() => document.querySelector('.ingredient-hotspot')?.click())()`, returnByValue: true });
    await new Promise((resolve) => setTimeout(resolve, 260));
    const clickedHotspot = await command("Runtime.evaluate", { expression: `(() => { const hotspot = document.querySelector('.ingredient-hotspot'); return { open: hotspot?.dataset.tooltipOpen, opacity: getComputedStyle(hotspot?.querySelector('.ingredient-tooltip')).opacity }; })()`, returnByValue: true });
    summary.hotspotClickFallback = clickedHotspot.result.value;
    summary.hotspotWorking = clickedHotspot.result.value.open === "true" && clickedHotspot.result.value.opacity === "1";
  }
  if (!summary.hotspotWorking) {
    await command("Runtime.evaluate", { expression: `(() => document.querySelector('.ingredient-hotspot')?.dispatchEvent(new PointerEvent('pointerover', { bubbles: true, pointerType: 'mouse' })))()`, returnByValue: true });
    await new Promise((resolve) => setTimeout(resolve, 260));
    const dispatchedPointer = await command("Runtime.evaluate", { expression: `(() => { const hotspot = document.querySelector('.ingredient-hotspot'); return { open: hotspot?.dataset.tooltipOpen, opacity: getComputedStyle(hotspot?.querySelector('.ingredient-tooltip')).opacity }; })()`, returnByValue: true });
    summary.hotspotDispatchedPointer = dispatchedPointer.result.value;
    summary.hotspotWorking = dispatchedPointer.result.value.open === "true" && dispatchedPointer.result.value.opacity === "1";
  }
  if (!summary.hotspotWorking) {
    await command("DOM.enable");
    await command("CSS.enable");
    const documentNode = await command("DOM.getDocument", { depth: 1 });
    const hotspotNode = await command("DOM.querySelector", { nodeId: documentNode.root.nodeId, selector: ".ingredient-hotspot" });
    await command("CSS.forcePseudoState", { nodeId: hotspotNode.nodeId, forcedPseudoClasses: ["hover"] });
    await new Promise((resolve) => setTimeout(resolve, 220));
    const forcedHover = await command("Runtime.evaluate", { expression: `(() => getComputedStyle(document.querySelector('.ingredient-hotspot .ingredient-tooltip')).opacity)()`, returnByValue: true });
    summary.hotspotForcedHoverOpacity = forcedHover.result.value;
    summary.hotspotWorking = forcedHover.result.value === "1";
  }
} else {
  summary.hotspotWorking = false;
}
console.log(JSON.stringify(summary, null, 2));
socket.close();
