// Jalankan satu fungsi render dengan aman.
// Kalau gagal (fungsi belum dimuat / file belum ada),
// section itu dilewati dan sisanya tetap jalan.
function safeRender(elementId, renderFn, config) {
  var el = document.getElementById(elementId);
  if (!el) return;
  try {
    if (typeof renderFn !== "function") {
      el.innerHTML = "";
      return;
    }
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

// Debug: tampilkan status tiap fungsi di halaman
var debugInfo = [
  "renderHeader: " + (typeof renderHeader),
  "renderHero: " + (typeof renderHero),
  "heroConfig: " + (typeof heroConfig),
  "renderFeatures: " + (typeof renderFeatures),
  "featuresConfig: " + (typeof featuresConfig),
  "renderCta: " + (typeof renderCta),
  "ctaConfig: " + (typeof ctaConfig),
  "renderFooter: " + (typeof renderFooter),
];

var debugEl = document.createElement("pre");
debugEl.style.cssText = "position:fixed;bottom:0;left:0;right:0;background:#000;color:#0f0;font-size:11px;padding:8px;z-index:9999;max-height:40vh;overflow:auto";
debugEl.textContent = debugInfo.join("\n");
document.body.appendChild(debugEl);
