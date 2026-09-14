const data = [
  "Modal",
  "Markdown preview",
  "Movie app",
  "Memory cards",
  "Snake",
  "Slider",
  "Sound board",
  "Clima",
  "Calculadora",
  "Choice picker",
  "Clipboard",
  "Canvas drawing",
];

const input = document.querySelector("#q");
const list = document.querySelector("#list");
const pick = document.querySelector("#pick");
let items = [];
let active = -1;

input.addEventListener("input", () => {
  const q = input.value.trim().toLowerCase();
  items = q ? data.filter((name) => name.toLowerCase().includes(q)) : [];
  active = items.length ? 0 : -1;
  draw(q);
});

input.addEventListener("keydown", (event) => {
  if (list.hidden) return;
  if (event.key === "ArrowDown") {
    event.preventDefault();
    active = (active + 1) % items.length;
    draw(input.value.trim());
  }
  if (event.key === "ArrowUp") {
    event.preventDefault();
    active = (active - 1 + items.length) % items.length;
    draw(input.value.trim());
  }
  if (event.key === "Enter" && active >= 0) {
    event.preventDefault();
    choose(items[active]);
  }
  if (event.key === "Escape") close();
});

list.addEventListener("mousedown", (event) => {
  const li = event.target.closest("li");
  if (li) choose(li.dataset.name);
});

function draw(q = "") {
  input.setAttribute("aria-expanded", items.length ? "true" : "false");
  if (!items.length) {
    close();
    return;
  }
  list.hidden = false;
  list.innerHTML = items
    .map((name, i) => {
      const label = highlight(name, q);
      return `<li role="option" data-name="${escapeHtml(name)}" class="${i === active ? "is-on" : ""}">${label}</li>`;
    })
    .join("");
}

function choose(name) {
  input.value = name;
  pick.textContent = `Elegiste ${name}`;
  close();
}

function close() {
  list.hidden = true;
  list.innerHTML = "";
  items = [];
  active = -1;
  input.setAttribute("aria-expanded", "false");
}

function highlight(name, q) {
  const safe = escapeHtml(name);
  const query = escapeHtml(q);
  if (!query) return safe;
  const i = safe.toLowerCase().indexOf(query.toLowerCase());
  if (i < 0) return safe;
  return `${safe.slice(0, i)}<mark>${safe.slice(i, i + query.length)}</mark>${safe.slice(i + query.length)}`;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
