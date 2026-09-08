const openButtons = document.querySelectorAll("[data-open]");
const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

let activeModal = null;
let lastFocus = null;

openButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = document.getElementById(btn.dataset.open);
    if (modal) openModal(modal, btn);
  });
});

document.addEventListener("click", (event) => {
  if (!activeModal) return;
  if (event.target.closest("[data-close]")) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (!activeModal) return;

  if (event.key === "Escape") {
    closeModal();
    return;
  }

  if (event.key === "Tab") trapFocus(event);
});

document.querySelector("#demo-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  closeModal();
});

function openModal(modal, trigger) {
  lastFocus = trigger || document.activeElement;
  activeModal = modal;

  modal.hidden = false;
  document.body.classList.add("modal-open");

  const first = getFocusable(modal)[0] || modal.querySelector(".modal-panel");
  first?.focus();
}

function closeModal() {
  if (!activeModal) return;

  activeModal.hidden = true;
  document.body.classList.remove("modal-open");
  lastFocus?.focus();

  activeModal = null;
  lastFocus = null;
}

function getFocusable(modal) {
  return [...modal.querySelectorAll(FOCUSABLE)].filter(
    (el) => !el.hasAttribute("hidden") && el.offsetParent !== null
  );
}

function trapFocus(event) {
  const nodes = getFocusable(activeModal);
  if (nodes.length === 0) {
    event.preventDefault();
    return;
  }

  const first = nodes[0];
  const last = nodes[nodes.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}
