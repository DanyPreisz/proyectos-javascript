const scene = document.querySelector("[data-scene]");
const percent = document.querySelector("[data-percent]");
const replay = document.querySelector("[data-replay]");

let frame = 0;

function start() {
  frame += 1;
  const current = frame;
  let load = 0;

  scene.classList.remove("is-ready");
  scene.style.setProperty("--load", 0);
  percent.textContent = "0%";

  const tick = () => {
    if (current !== frame) return;

    load += 1;
    scene.style.setProperty("--load", load);
    percent.textContent = `${load}%`;

    if (load < 100) {
      setTimeout(tick, 18);
      return;
    }

    scene.classList.add("is-ready");
  };

  tick();
}

replay.addEventListener("click", start);
start();
