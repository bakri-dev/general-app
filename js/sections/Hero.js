
function renderHeroMedia(image) {
  if (image && image.src) {
    return `<div class="hero__media"><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy" /></div>`;
  }
  // Kalau belum ada gambar, tampilkan kotak penanda
  return `<div class="hero__media"><div class="hero__placeholder" aria-hidden="true"></div></div>`;
}

function renderHero(config) {
  const c = config || {};
  const layout = c.layout || "left";
  const background = c.background || "bg-light";
  const textTheme = c.textTheme || "text-on-light";

  const eyebrow = c.eyebrow
    ? `<p class="hero__eyebrow">${escapeHtml(c.eyebrow)}</p>`
    : "";
  const subtitle = c.subtitle
    ? `<p class="hero__subtitle">${escapeHtml(c.subtitle)}</p>`
    : "";
  const buttons = (c.buttons || []).map((b) => renderButton(b)).join("");
  const actions = buttons ? `<div class="hero__actions">${buttons}</div>` : "";

  return `<section class="hero hero--${escapeHtml(layout)} ${escapeHtml(background)} ${escapeHtml(textTheme)}">
    <div class="hero__inner">
      <div class="hero__content">
        ${eyebrow}
        <h1 class="hero__title">${escapeHtml(c.title || "Judul Hero")}</h1>
        ${subtitle}
        ${actions}
      </div>
      ${renderHeroMedia(c.image)}
    </div>
  </section>`;
}
