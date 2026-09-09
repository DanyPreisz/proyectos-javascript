const KEY = "cookie-consent";
const banner = document.querySelector("#banner");
const status = document.querySelector("#status");
const labels = {
  accepted: "aceptaste todas",
  rejected: "solo esenciales",
};

const saved = localStorage.getItem(KEY);
updateStatus(saved);
if (!saved) banner.hidden = false;

banner.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-consent]");
  if (!btn) return;
  setConsent(btn.dataset.consent);
});

document.querySelector("#reset").addEventListener("click", () => {
  localStorage.removeItem(KEY);
  banner.hidden = false;
  updateStatus(null);
});

function setConsent(value) {
  localStorage.setItem(KEY, value);
  banner.hidden = true;
  updateStatus(value);
}

function updateStatus(value) {
  status.textContent = labels[value] || "sin decidir";
}
