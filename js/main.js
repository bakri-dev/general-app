function safeRender(elementId, renderFn, config) {
  var el = document.getElementById(elementId);
  if (!el) return;
  try {
    if (typeof renderFn !== "function") return;
    el.innerHTML = renderFn(config);
  } catch (err) {
    el.innerHTML = "";
    console.warn("Gagal render #" + elementId + ":", err);
  }
}

safeRender("app-header", renderHeader);
safeRender("app-hero", renderHero, heroConfig);
safeRender("app-features", renderFeatures, featuresConfig);
safeRender("app-cta", renderCta, ctaConfig);
safeRender("app-footer", renderFooter);
