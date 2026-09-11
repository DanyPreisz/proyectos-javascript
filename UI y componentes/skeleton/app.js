const grid = document.querySelector("#grid");

const items = [
  { title: "Lista de tareas", text: "Agregar, completar y borrar." },
  { title: "Modal", text: "Diálogo con foco y Escape." },
  { title: "Acordeón", text: "Un panel abierto a la vez." },
  { title: "Tabs", text: "Pestañas con flechas del teclado." },
];

document.querySelector("#reload").addEventListener("click", load);
load();

function load() {
  grid.innerHTML = items.map(() => skeleton()).join("");

  setTimeout(() => {
    grid.innerHTML = items.map(card).join("");
  }, 1600);
}

function skeleton() {
  return `
    <article class="skeleton" aria-hidden="true">
      <div class="bone img"></div>
      <div class="bone title"></div>
      <div class="bone line"></div>
      <div class="bone line short"></div>
    </article>
  `;
}

function card(item) {
  return `
    <article class="card">
      <div class="thumb"></div>
      <h2>${item.title}</h2>
      <p>${item.text}</p>
    </article>
  `;
}
