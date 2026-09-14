const input = document.querySelector("#text");
const btn = document.querySelector("#copy");
const msg = document.querySelector("#msg");
let timer;

btn.addEventListener("click", async () => {
  const text = input.value;
  if (!text) {
    say("Nada para copiar.");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    ok();
  } catch {
    input.select();
    const done = document.execCommand("copy");
    if (done) ok();
    else say("No se pudo copiar.");
  }
});

function ok() {
  btn.textContent = "Copiado";
  btn.classList.add("is-ok");
  say("Está en el portapapeles.");
  clearTimeout(timer);
  timer = setTimeout(() => {
    btn.textContent = "Copiar";
    btn.classList.remove("is-ok");
    msg.textContent = "";
  }, 1600);
}

function say(text) {
  msg.textContent = text;
}
