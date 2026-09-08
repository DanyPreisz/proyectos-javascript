const burger = document.querySelector(".burger");
const nav = document.querySelector("#nav");
const dropdown = document.querySelector("[data-dropdown]");
const dropBtn = dropdown.querySelector(".dropdown-btn");
const dropMenu = dropdown.querySelector(".dropdown-menu");

burger.addEventListener("click", () => {
  const open = burger.getAttribute("aria-expanded") === "true";
  setNav(!open);
});

dropBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  const open = dropBtn.getAttribute("aria-expanded") === "true";
  setDropdown(!open);
});

document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) setDropdown(false);
  if (!nav.contains(event.target) && !burger.contains(event.target)) setNav(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  setDropdown(false);
  setNav(false);
  if (window.matchMedia("(max-width: 720px)").matches) burger.focus();
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    setDropdown(false);
    setNav(false);
  });
});

function setDropdown(open) {
  dropBtn.setAttribute("aria-expanded", open);
  dropMenu.hidden = !open;
}

function setNav(open) {
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  nav.classList.toggle("is-open", open);
  document.body.classList.toggle("nav-open", open);
}
