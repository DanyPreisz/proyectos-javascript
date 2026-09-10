const button = document.querySelector("#to-top");
const SHOW_AFTER = 400;

window.addEventListener("scroll", toggleButton, { passive: true });
toggleButton();

button.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function toggleButton() {
  button.hidden = window.scrollY < SHOW_AFTER;
}
