const cards = document.querySelectorAll(".card");

document.querySelector("#cards").addEventListener("click", (event) => {
  const card = event.target.closest(".card");
  if (!card) return;

  cards.forEach((item) => item.classList.toggle("is-active", item === card));
});
