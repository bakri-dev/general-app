function renderFaq(config) {
  var c = config || {};
  var background = c.background || "bg-white";
  var textTheme = c.textTheme || "text-on-light";

  var eyebrow = c.eyebrow
    ? '<p class="faq__eyebrow">' + escapeHtml(c.eyebrow) + "</p>"
    : "";
  var subtitle = c.subtitle
    ? '<p class="faq__subtitle">' + escapeHtml(c.subtitle) + "</p>"
    : "";

  var items = (c.items || [])
    .map(function (item, i) {
      return (
        '<div class="faq__item" id="faq-item-' + i + '">' +
          '<button class="faq__question" onclick="toggleFaq(' + i + ')">' +
            escapeHtml(item.q) +
            '<span class="faq__icon">+</span>' +
          "</button>" +
          '<div class="faq__answer">' + escapeHtml(item.a) + "</div>" +
        "</div>"
      );
    })
    .join("");

  return (
    '<section class="faq ' + background + " " + textTheme + '">' +
      '<div class="faq__inner">' +
        '<div class="faq__header">' +
          eyebrow +
          '<h2 class="faq__title">' + escapeHtml(c.title || "FAQ") + "</h2>" +
          subtitle +
        "</div>" +
        '<div class="faq__list">' + items + "</div>" +
      "</div>" +
    "</section>"
  );
}

function toggleFaq(index) {
  var item = document.getElementById("faq-item-" + index);
  if (!item) return;
  var isOpen = item.classList.contains("open");
  // Tutup semua dulu
  var allItems = document.querySelectorAll(".faq__item");
  allItems.forEach(function (el) { el.classList.remove("open"); });
  // Buka yang diklik (kalau sebelumnya tertutup)
  if (!isOpen) item.classList.add("open");
                                       }
