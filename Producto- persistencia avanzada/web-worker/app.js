const N = 250000;
const msg = document.querySelector("#msg");

document.querySelector("#main").addEventListener("click", () => {
  const t0 = performance.now();
  const count = primes(N);
  msg.textContent = `Main: ${count} primos · ${Math.round(performance.now() - t0)} ms (UI trabada)`;
});

document.querySelector("#work").addEventListener("click", () => {
  const t0 = performance.now();
  msg.textContent = "Worker calculando…";
  const worker = new Worker("./worker.js");
  worker.postMessage(N);
  worker.onmessage = (event) => {
    msg.textContent = `Worker: ${event.data} primos · ${Math.round(performance.now() - t0)} ms`;
    worker.terminate();
  };
});

function primes(max) {
  let n = 0;
  for (let i = 2; i <= max; i += 1) {
    let ok = true;
    for (let j = 2; j * j <= i; j += 1) {
      if (i % j === 0) {
        ok = false;
        break;
      }
    }
    if (ok) n += 1;
  }
  return n;
}
