function renderCta(config) {
  const c = config || {};
  const background = c.background || "bg-gradient-primary";
  const textTheme = c.textTheme || "text-on-dark";

  const eyebrow = c.eyebrow
    ? `<p class="cta__eyebrow">${escapeHtml(c.eyebrow)}</p>`
    : "";
  const subtitle = c.subtitle
    ? `<p class="cta__subtitle">${escapeHtml(c.subtitle)}</p>`
    : "";
  const buttons = (c.buttons || []).map((b) => renderButton(b)).join("");
  const actions = buttons
    ? `<div class="cta__actions">${buttons}</div>`
    : "";

  return `<section class="cta ${background} ${textTheme}">
    <div class="cta__inner">
      ${eyebrow}
      <h2 class="cta__title">${escapeHtml(c.title || "Siap memulai?")}</h2>
      ${subtitle}
      ${actions}
    </div>
  </section>`;
}
