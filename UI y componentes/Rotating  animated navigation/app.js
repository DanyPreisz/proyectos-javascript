const toggle = document.querySelector("#toggle");

toggle.addEventListener("click", () => {
  const open = !document.body.classList.contains("is-open");
  setOpen(open);
});

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => setOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setOpen(false);
});

function setOpen(open) {
  document.body.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
}
