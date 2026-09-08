const root = document.querySelector("[data-tabs]");
const tabs = [...root.querySelectorAll('[role="tab"]')];
const panels = [...root.querySelectorAll('[role="tabpanel"]')];

root.querySelector('[role="tablist"]').addEventListener("click", (event) => {
  const tab = event.target.closest('[role="tab"]');
  if (tab) activate(tab);
});

root.querySelector('[role="tablist"]').addEventListener("keydown", (event) => {
  const current = document.activeElement;
  const index = tabs.indexOf(current);
  if (index < 0) return;

  const last = tabs.length - 1;
  let next = index;

  if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
  else if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
  else if (event.key === "Home") next = 0;
  else if (event.key === "End") next = last;
  else return;

  event.preventDefault();
  activate(tabs[next]);
  tabs[next].focus();
});

function activate(nextTab) {
  tabs.forEach((tab) => {
    const selected = tab === nextTab;
    tab.setAttribute("aria-selected", selected);
    tab.tabIndex = selected ? 0 : -1;
  });

  panels.forEach((panel) => {
    panel.hidden = panel.id !== nextTab.getAttribute("aria-controls");
  });
}
