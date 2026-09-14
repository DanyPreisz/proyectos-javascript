document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const rect = btn.getBoundingClientRect();
    const circle = document.createElement("span");
    circle.className = "ripple";
    circle.style.left = `${event.clientX - rect.left - 10}px`;
    circle.style.top = `${event.clientY - rect.top - 10}px`;
    btn.append(circle);
    circle.addEventListener("animationend", () => circle.remove());
  });
});
