const KEY = "star-rating-vanilla";
const labels = ["Muy malo", "Malo", "Ok", "Bueno", "Excelente"];
const box = document.querySelector("#stars");
const status = document.querySelector("#out");
const stars = [...box.querySelectorAll("button")];

let value = Number(localStorage.getItem(KEY)) || 0;
let hover = 0;

box.addEventListener("mouseover", (event) => {
  const btn = event.target.closest("button");
  if (!btn) return;
  hover = Number(btn.dataset.n);
  paint();
});

box.addEventListener("mouseleave", () => {
  hover = 0;
  paint();
});

box.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (!btn) return;
  setValue(Number(btn.dataset.n));
});

box.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "ArrowUp") {
    event.preventDefault();
    setValue(Math.min(5, (value || 0) + 1));
  }
  if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
    event.preventDefault();
    setValue(Math.max(1, (value || 1) - 1));
  }
});

function setValue(n) {
  value = n;
  localStorage.setItem(KEY, String(n));
  paint();
  stars[n - 1].focus();
}

function paint() {
  const shown = hover || value;
  stars.forEach((btn) => {
    const n = Number(btn.dataset.n);
    btn.classList.toggle("is-on", n <= shown);
    btn.setAttribute("aria-checked", n === value ? "true" : "false");
    btn.setAttribute("role", "radio");
  });
  status.textContent = value ? `${value} / 5 · ${labels[value - 1]}` : "Sin puntaje";
}

paint();
