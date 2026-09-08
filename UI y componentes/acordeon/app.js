const accordion = document.querySelector("[data-accordion]");
const triggers = accordion.querySelectorAll(".trigger");

triggers.forEach((trigger) => {
  trigger.addEventListener("click", () => toggleItem(trigger));
});

function toggleItem(trigger) {
  const panel = document.getElementById(trigger.getAttribute("aria-controls"));
  const isOpen = trigger.getAttribute("aria-expanded") === "true";

  closeAll();

  if (!isOpen) {
    trigger.setAttribute("aria-expanded", "true");
    panel.hidden = false;
  }
}

function closeAll() {
  triggers.forEach((trigger) => {
    trigger.setAttribute("aria-expanded", "false");
    const panel = document.getElementById(trigger.getAttribute("aria-controls"));
    panel.hidden = true;
  });
}
