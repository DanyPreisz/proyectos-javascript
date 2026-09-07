const STORAGE_KEY = "lista-tareas-vanilla";

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const list = document.querySelector("#list");
const empty = document.querySelector("#empty");
const counter = document.querySelector("#counter");
const clearDoneBtn = document.querySelector("#clear-done");
const filterBtns = document.querySelectorAll(".filter");

let tasks = load();
let filter = "all";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  tasks.unshift({
    id: crypto.randomUUID(),
    text,
    done: false,
  });

  input.value = "";
  save();
  render();
  input.focus();
});

// Un solo listener en la lista (delegación de eventos)
list.addEventListener("click", (event) => {
  const item = event.target.closest(".item");
  if (!item) return;

  const id = item.dataset.id;

  if (event.target.matches("input[type='checkbox']")) {
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, done: event.target.checked } : task
    );
    save();
    render();
  }

  if (event.target.closest(".delete")) {
    tasks = tasks.filter((task) => task.id !== id);
    save();
    render();
  }
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filter = btn.dataset.filter;
    filterBtns.forEach((b) => b.classList.toggle("is-on", b === btn));
    render();
  });
});

clearDoneBtn.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.done);
  save();
  render();
});

function visibleTasks() {
  if (filter === "active") return tasks.filter((task) => !task.done);
  if (filter === "done") return tasks.filter((task) => task.done);
  return tasks;
}

function render() {
  const visible = visibleTasks();
  const pending = tasks.filter((task) => !task.done).length;
  const doneCount = tasks.length - pending;

  list.innerHTML = visible
    .map(
      (task) => `
        <li class="item ${task.done ? "is-done" : ""}" data-id="${task.id}">
          <input type="checkbox" ${task.done ? "checked" : ""} aria-label="Completar tarea" />
          <p class="text">${escapeHtml(task.text)}</p>
          <button class="delete" type="button" aria-label="Eliminar tarea">✕</button>
        </li>
      `
    )
    .join("");

  empty.classList.toggle("is-hidden", visible.length > 0);
  empty.innerHTML =
    tasks.length === 0
      ? "Todavía no hay tareas.<br><span>Escribí arriba y presioná Enter.</span>"
      : "No hay tareas en este filtro.";

  counter.textContent = `${pending} pendiente${pending === 1 ? "" : "s"}`;
  clearDoneBtn.hidden = doneCount === 0;
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

render();
