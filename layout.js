function renderHeader() {
  const base = window.BASE_PATH || "";
  const links = siteConfig.nav
    .filter((item) => item.enabled)
    .map((item) => `<a href="${base}${item.href}">${item.label}</a>`)
    .join("");
  return `<header class="navbar">
    <a href="${base}index.html">${siteConfig.name}</a>
    <nav>${links}</nav>
  </header>`;
}

function renderFooter() {
  return `<footer class="footer">© ${siteConfig.name}</footer>`;
}