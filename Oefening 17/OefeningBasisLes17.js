let taken = [
  {
    id: 1,
    tekst: "JavaScript oefening maken",
    prioriteit: "hoog",
    voltooid: false,
  },
  {
    id: 2,
    tekst: "Boodschappen doen",
    prioriteit: "laag",
    voltooid: true,
  },
];

let volgendId = 3;

const ulTaken = document.getElementById("taken-lijst");
const inputTaak = document.getElementById("taak-input");
const selectPrioriteit = document.getElementById("prioriteit-select");
const btnToevoegen = document.getElementById("toevoegen-btn");
const btnMarkeerHoog = document.getElementById("markeer-hoog-btn");
const btnVerbergVoltooide = document.getElementById("verberg-voltooide-btn");
const spanAantal = document.getElementById("aantal");

function toonTaak(taak) {
  const li = document.createElement("li");
  li.classList.add("taak-item");

  // priority class
  const priorClass = "prioriteit-" + (taak.prioriteit || "normaal");
  li.classList.add(priorClass);

  // checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = !!taak.voltooid;
  checkbox.addEventListener("change", () => toggleTaak(taak.id));

  // tekst
  const span = document.createElement("span");
  span.textContent = taak.tekst;
  if (taak.voltooid) {
    span.style.textDecoration = "line-through";
  }

  // verwijderknop
  const btnVerwijder = document.createElement("button");
  btnVerwijder.textContent = "x";
  btnVerwijder.classList.add("verwijder-btn");
  btnVerwijder.addEventListener("click", () => verwijderTaak(taak.id));

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(btnVerwijder);

  // insert position
  if (taak.voltooid) {
    ulTaken.appendChild(li);
  } else {
    // insert after the title (second child)
    const tweede = ulTaken.children[1];
    ulTaken.insertBefore(li, tweede || null);
  }
}

function hertoonAlleTaken() {
  // verwijder alle items behalve eerste (titel)
  while (ulTaken.children.length > 1) {
    ulTaken.removeChild(ulTaken.lastChild);
  }

  taken.forEach((t) => toonTaak(t));
  updateTeller();
}

function updateTeller() {
  const nietVoltooid = taken.filter((t) => !t.voltooid).length;
  spanAantal.textContent = nietVoltooid;
}

function toggleTaak(taakId) {
  const taak = taken.find((t) => t.id === taakId);
  if (!taak) return;
  taak.voltooid = !taak.voltooid;
  hertoonAlleTaken();
}

function verwijderTaak(taakId) {
  taken = taken.filter((t) => t.id !== taakId);
  hertoonAlleTaken();
}

btnToevoegen.addEventListener("click", () => {
  const tekst = inputTaak.value.trim();
  if (!tekst) {
    alert("Voer een taak in!");
    return;
  }
  const prioriteit = selectPrioriteit.value || "normaal";

  const nieuweTaak = {
    id: volgendId,
    tekst: tekst,
    prioriteit: prioriteit,
    voltooid: false,
  };

  taken.push(nieuweTaak);
  volgendId++;

  toonTaak(nieuweTaak);
  updateTeller();
  inputTaak.value = "";
});

btnMarkeerHoog.addEventListener("click", () => {
  const items = ulTaken.querySelectorAll(".prioriteit-hoog");
  items.forEach((li) => {
    const cb = li.querySelector("input[type='checkbox']");
    if (cb && cb.checked) {
      li.classList.add("gemarkeerd");
    }
  });
});

btnVerbergVoltooide.addEventListener("click", () => {
  const checkedBoxes = ulTaken.querySelectorAll("input[type='checkbox']:checked");
  checkedBoxes.forEach((cb) => {
    const li = cb.parentElement;
    if (li.style.display === "none") {
      li.style.display = "";
    } else {
      li.style.display = "none";
    }
  });
});

// initial render
document.addEventListener("DOMContentLoaded", () => {
  hertoonAlleTaken();
});