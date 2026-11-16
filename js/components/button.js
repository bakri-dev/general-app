function renderButton(options) {
  const opt = options || {};
  const label = opt.label || "Tombol";
  const href = opt.href || "#";
  const variant = opt.variant || "primary";

  return `<a class="btn btn--${escapeHtml(variant)}" href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;
}
