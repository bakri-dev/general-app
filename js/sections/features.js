function renderFeatures(config) {
  const c = config || {};
  const background = c.background || "bg-white";
  const textTheme = c.textTheme || "text-on-light";

  const eyebrow = c.eyebrow
    ? `<p class="features__eyebrow">${escapeHtml(c.eyebrow)}</p>`
    : "";
  const subtitle = c.subtitle
    ? `<p class="features__subtitle">${escapeHtml(c.subtitle)}</p>`
    : "";

  const cards = (c.items || [])
    .map((item) => renderCard({ ...item, variant: c.cardVariant || "" }))
    .join("");

  return `<section class="features ${background} ${textTheme}">
    <div class="features__inner">
      <div class="features__header">
        ${eyebrow}
        <h2 class="features__title">${escapeHtml(c.title || "Fitur Unggulan")}</h2>
        ${subtitle}
      </div>
      <div class="features__grid">
        ${cards}
      </div>
    </div>
  </section>`;
}
