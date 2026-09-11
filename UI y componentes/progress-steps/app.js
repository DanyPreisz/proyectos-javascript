const labels = ["Datos", "Envío", "Pago", "Listo"];
const dots = [...document.querySelectorAll("[data-step]")];
const fill = document.querySelector("[data-fill]");
const caption = document.querySelector("[data-caption]");
const prev = document.querySelector("[data-prev]");
const next = document.querySelector("[data-next]");
const last = dots.length;

let step = 1;

prev.addEventListener("click", () => setStep(step - 1));
next.addEventListener("click", () => setStep(step + 1));

dots.forEach((dot) => {
  dot.addEventListener("click", () => setStep(Number(dot.dataset.step)));
});

function setStep(value) {
  step = Math.min(last, Math.max(1, value));

  dots.forEach((dot) => {
    const n = Number(dot.dataset.step);
    const on = n <= step;
    dot.classList.toggle("is-on", on);
    if (n === step) dot.setAttribute("aria-current", "step");
    else dot.removeAttribute("aria-current");
  });

  fill.style.width = `${((step - 1) / (last - 1)) * 100}%`;
  caption.textContent = `Paso ${step} · ${labels[step - 1]}`;
  prev.disabled = step === 1;
  next.disabled = step === last;
  next.textContent = step === last ? "Fin" : "Siguiente";
}

setStep(1);
