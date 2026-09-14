const KEY = "tags-input-vanilla";
const box = document.querySelector("#box");
const input = document.querySelector("#input");
const out = document.querySelector("#out");
let tags = load();

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === ",") {
    event.preventDefault();
    add(input.value);
  }
  if (event.key === "Backspace" && !input.value && tags.length) {
    tags.pop();
    persist();
  }
});

input.addEventListener("blur", () => add(input.value));

box.addEventListener("click", (event) => {
  if (event.target === box) input.focus();
  const i = event.target.closest("[data-i]")?.dataset.i;
  if (i == null) return;
  tags.splice(Number(i), 1);
  persist();
  input.focus();
});

function add(raw) {
  const value = raw.trim().replace(/,$/, "");
  input.value = "";
  if (!value) {
    render();
    return;
  }
  if (tags.some((tag) => tag.toLowerCase() === value.toLowerCase())) {
    out.textContent = "Esa etiqueta ya está.";
    return;
  }
  tags.push(value);
  persist();
}

function persist() {
  localStorage.setItem(KEY, JSON.stringify(tags));
  render();
}

function render() {
  box.querySelectorAll(".tag").forEach((el) => el.remove());
  tags.forEach((tag, i) => {
    const el = document.createElement("span");
    el.className = "tag";
    el.innerHTML = `${escapeHtml(tag)} <button type="button" data-i="${i}" aria-label="Quitar ${escapeHtml(tag)}">✕</button>`;
    box.insertBefore(el, input);
  });
  out.textContent = tags.length
    ? `${tags.length} etiqueta${tags.length === 1 ? "" : "s"}: ${tags.join(", ")}`
    : "Sin etiquetas.";
}

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || ["html", "css"];
  } catch {
    return ["html", "css"];
  }
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

render();
