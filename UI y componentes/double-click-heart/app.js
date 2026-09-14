const stage = document.querySelector("#stage");
const count = document.querySelector("#count");
let likes = 0;

stage.addEventListener("dblclick", (event) => {
  const rect = stage.getBoundingClientRect();
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = "♥";
  heart.style.left = `${event.clientX - rect.left}px`;
  heart.style.top = `${event.clientY - rect.top}px`;
  stage.append(heart);

  likes += 1;
  count.textContent = likes;
  heart.addEventListener("animationend", () => heart.remove());
});
