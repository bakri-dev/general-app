function renderCard(options) {
  const o = options || {};
  const variant = o.variant || "";
  const variantClass = variant ? `card--${escapeHtml(variant)}` : "";

  const icon = o.icon
    ? `<div class="card__icon" aria-hidden="true">${o.icon}</div>`
    : "";
  const title = o.title
    ? `<h3 class="card__title">${escapeHtml(o.title)}</h3>`
    : "";
  const body = o.body
    ? `<p class="card__body">${escapeHtml(o.body)}</p>`
    : "";
  const footer = o.button
    ? `<div class="card__footer">${renderButton(o.button)}</div>`
    : "";

  return `<div class="card ${variantClass}">
    ${icon}${title}${body}${footer}
  </div>`;
}
