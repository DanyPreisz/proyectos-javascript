const items = [
  "Lista de tareas",
  "Modal / popup",
  "Acordeón / FAQ",
  "Tabs",
  "Dropdown y hamburguesa",
  "Toast notifications",
  "Cookie banner",
  "Volver arriba",
  "Navbar sticky",
  "Progreso de scroll",
  "Loading blurry",
  "Skeleton placeholder",
];

const form = document.querySelector("#search");
const input = document.querySelector("#input");
const toggle = document.querySelector("#toggle");
const results = document.querySelector("#results");

results.innerHTML = items.map((name) => `<li>${name}</li>`).join("");
const rows = [...results.querySelectorAll("li")];

toggle.addEventListener("click", () => {
  const open = !form.classList.contains("is-open");
  setOpen(open);
});

input.addEventListener("input", () => {
  const q = input.value.trim().toLowerCase();
  let visible = 0;

  rows.forEach((row) => {
    const match = row.textContent.toLowerCase().includes(q);
    row.classList.toggle("is-hidden", !match);
    if (match) visible += 1;
  });

  results.querySelector(".empty")?.remove();
  if (visible === 0) {
    results.insertAdjacentHTML("beforeend", `<li class="empty">Sin resultados.</li>`);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setOpen(false);
});

document.addEventListener("click", (event) => {
  if (!form.contains(event.target) && !input.value) setOpen(false);
});

function setOpen(open) {
  form.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Cerrar búsqueda" : "Abrir búsqueda");
  if (open) input.focus();
  else input.blur();
}
