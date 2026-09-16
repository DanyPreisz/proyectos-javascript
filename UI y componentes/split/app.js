const split = document.querySelector("#split");

split.querySelectorAll("[data-side]").forEach((side) => {
  side.addEventListener("mouseenter", () => {
    split.classList.remove("is-left", "is-right");
    split.classList.add(`is-${side.dataset.side}`);
  });

  side.addEventListener("mouseleave", () => {
    split.classList.remove("is-left", "is-right");
  });
});
