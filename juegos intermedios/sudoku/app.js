const PUZZLE =
  "530070000600195000098000060800060003400803001700020006060000280000419005000080079";
const grid = document.querySelector("#grid");
const msg = document.querySelector("#msg");

grid.innerHTML = [...PUZZLE]
  .map((ch, i) =>
    ch === "0"
      ? `<input data-i="${i}" maxlength="1" inputmode="numeric" />`
      : `<input value="${ch}" readonly />`
  )
  .join("");

document.querySelector("#check").addEventListener("click", () => {
  const cells = [...grid.querySelectorAll("input")].map((el) => Number(el.value) || 0);
  if (cells.includes(0)) {
    msg.textContent = "Faltan celdas.";
    return;
  }
  msg.textContent = valid(cells) ? "Correcto." : "Hay un conflicto.";
});

function valid(cells) {
  const groups = [];
  for (let i = 0; i < 9; i += 1) {
    groups.push(cells.slice(i * 9, i * 9 + 9));
    groups.push([0, 1, 2, 3, 4, 5, 6, 7, 8].map((r) => cells[r * 9 + i]));
    const br = Math.floor(i / 3) * 3;
    const bc = (i % 3) * 3;
    const box = [];
    for (let r = 0; r < 3; r += 1) {
      for (let c = 0; c < 3; c += 1) box.push(cells[(br + r) * 9 + bc + c]);
    }
    groups.push(box);
  }
  return groups.every((g) => new Set(g).size === 9);
}
