const toaster = document.querySelector("#toaster");
const DURATION = 3500;

const messages = {
  ok: "Listo. La acción se completó bien.",
  info: "Dato: esto es solo un aviso.",
  error: "No se pudo completar. Probá de nuevo.",
};

document.querySelectorAll("[data-toast]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.toast;
    showToast(messages[type], type);
  });
});

function showToast(text, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast is-${type}`;
  toast.setAttribute("role", type === "error" ? "alert" : "status");
  toast.innerHTML = `
    <span class="toast-bar"></span>
    <p>${text}</p>
    <button class="toast-close" type="button" aria-label="Cerrar">✕</button>
  `;

  const close = () => dismiss(toast);
  toast.querySelector(".toast-close").addEventListener("click", close);

  let timer = setTimeout(close, DURATION);
  toast.addEventListener("mouseenter", () => clearTimeout(timer));
  toast.addEventListener("mouseleave", () => {
    timer = setTimeout(close, 1200);
  });

  toaster.append(toast);
}

function dismiss(toast) {
  if (toast.classList.contains("is-out")) return;
  toast.classList.add("is-out");
  toast.addEventListener("animationend", () => toast.remove(), { once: true });
}
