const bar = document.querySelector("#progress");

function update() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const value = max > 0 ? (window.scrollY / max) * 100 : 0;
  bar.style.setProperty("--progress", `${value}%`);
  bar.setAttribute("aria-valuenow", String(Math.round(value)));
}

window.addEventListener("scroll", update, { passive: true });
window.addEventListener("resize", update);
update();
