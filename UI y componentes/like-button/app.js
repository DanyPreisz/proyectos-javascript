const KEY = "like-button-vanilla";
const BASE = 24;
const btn = document.querySelector("#like");
const countEl = document.querySelector("#count");

let liked = localStorage.getItem(KEY) === "1";

btn.addEventListener("click", () => {
  liked = !liked;
  localStorage.setItem(KEY, liked ? "1" : "0");
  paint(true);
});

function paint(animate = false) {
  btn.classList.toggle("is-on", liked);
  btn.setAttribute("aria-pressed", liked ? "true" : "false");
  btn.setAttribute("aria-label", liked ? "Quitar like" : "Dar like");
  countEl.textContent = liked ? BASE + 1 : BASE;

  if (animate && liked) {
    btn.classList.remove("is-pop");
    void btn.offsetWidth;
    btn.classList.add("is-pop");
  }
}

paint();
