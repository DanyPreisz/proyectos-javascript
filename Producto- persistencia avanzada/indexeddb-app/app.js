const list = document.querySelector("#list");
const form = document.querySelector("#form");
const input = document.querySelector("#q");
const dbp = open();

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const db = await dbp;
  await req(db.transaction("notes", "readwrite").objectStore("notes").add({ text: input.value.trim(), at: Date.now() }));
  input.value = "";
  paint();
});

list.addEventListener("click", async (event) => {
  const btn = event.target.closest("[data-id]");
  if (!btn) return;
  const db = await dbp;
  await req(db.transaction("notes", "readwrite").objectStore("notes").delete(Number(btn.dataset.id)));
  paint();
});

function open() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("notes-vanilla", 1);
    req.onupgradeneeded = () => req.result.createObjectStore("notes", { keyPath: "id", autoIncrement: true });
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function req(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function paint() {
  const db = await dbp;
  const items = await req(db.transaction("notes").objectStore("notes").getAll());
  items.sort((a, b) => b.at - a.at);
  list.innerHTML = items
    .map(
      (item) =>
        `<li><span>${escapeHtml(item.text)}</span><button class="x" type="button" data-id="${item.id}">✕</button></li>`
    )
    .join("");
}

function escapeHtml(text) {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

paint();
