var ingredientArray = [];
var ingredientInput = document.getElementById("ingredientInput");
var ingredientResultaat = document.getElementById("ingredientenResultaat");
var pizzaArray = [];
var pizzaNaam = document.getElementById("pizzaNaam");
var pizzaPrijs = document.getElementById("pizzaPrijs");
var pizzaAantal = document.getElementById("pizzaAantal");

document.getElementById("addIngredient").addEventListener("click", function () {
  inputIngredienten();
});
document.getElementById("showIngredients").addEventListener("click", function () {
  toonIngredienten();
});
document.getElementById("showIngredients").addEventListener("click", function () {
  toonIngredienten();
});
document.getElementById("addPizza").addEventListener("click", function () {
  AddPizza();
});
document.getElementById("showPizzas").addEventListener("click", function () {
  ShowPizza();
});
document.getElementById("showTotal").addEventListener("click", function () {
  berekenTotaal();
});
document.getElementById("filterPizzas").addEventListener("click", function () {
  filterPizzas();
});

function message(tekst) {
  document.getElementById("ingredientenResultaat").innerHTML = tekst;
}
function PizzaMessage(tekst) {
  document.getElementById("pizzasResultaat").innerHTML = tekst;
}
function inputIngredienten() {
  var input = ingredientInput.value.toLowerCase();

  if (input == "") {
    message(`Voer een ingrediënt in!`);
  } else if (ingredientArray.includes(input)) {
    message(`Dit ingrediënt is al toegevoegd!`);
  } else {
    ingredientArray.push(input);
    message(`${input} toegevoegd`);
    ingredientInput.value = "";
  }
}
function toonIngredienten() {
  ingredientResultaat.innerText = "";

  var aantal = ingredientArray.length;
  var lijst = ingredientArray.join(", ");

  message(`<b>Aantal ingrediënten: ${aantal}</b></br> ${lijst}`);
}
function AddPizza() {
  var name = pizzaNaam.value;
  var price = pizzaPrijs.value;
  var amount = pizzaAantal.value;

  price = Number(price);
  amount = Number(amount);

  if (name === "" || isNaN(price) || isNaN(amount) || price < 0.01 || amount < 1) {
    PizzaMessage(`Vul alle velden correct in`);
  } else {
    let pizza = {
      name: name,
      price: price,
      amount: amount,
    };

    // controleer of pizza al bestaat (case-insensitive op naam)
    var idx = pizzaArray.findIndex(function (p) {
      return p.name.toLowerCase() === name.toLowerCase();
    });
    if (idx !== -1) {
      // aanpassen
      pizzaArray[idx].price = price;
      pizzaArray[idx].amount = amount;
      PizzaMessage(`pizza ${name} aangepast!`);
    } else {
      pizzaArray.push(pizza);
      PizzaMessage(`Pizza ${name} toegevoegd`);
    }

    pizzaNaam.value = "";
    pizzaPrijs.value = "";
    pizzaAantal.value = 1;
  }
}
function ShowPizza() {
  if (!Array.isArray(pizzaArray) || pizzaArray.length === 0) {
    PizzaMessage(`Nog geen pizza's toegevoegd`);
  } else {
    PizzaMessage(toonPizzaTabel(pizzaArray));
  }
}

function toonPizzaTabel(pizzas) {
  var html = "<table>";

  var eerste = pizzas[0];
  var keys = Object.keys(eerste);
  html += "<tr>";
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    html += `<th>${key}</th>`;
  }
  html += `<th>subtotaal</th>`;
  html += "</tr>";

  for (var r = 0; r < pizzas.length; r++) {
    var p = pizzas[r];
    html += "<tr>";
    for (var k = 0; k < keys.length; k++) {
      var naam = keys[k];
      html += `<td>${p[naam]}</td>`;
    }

    var prijs = Number(p.price) || 0;
    var aantal = Number(p.amount) || 0;
    var subtotaal = (prijs * aantal).toFixed(2);
    html += `<td>€${subtotaal}</td>`;

    html += "</tr>";
  }

  html += "</table>";
  return html;
}

function berekenTotaal() {
  if (!Array.isArray(pizzaArray) || pizzaArray.length === 0) {
    PizzaMessage(`Voeg eerst pizza's toe!`);
    return;
  }

  var subtotalen = pizzaArray.map(function (p) {
    return Number(p.price) * Number(p.amount);
  });

  var totaal = subtotalen.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);

  var html = toonPizzaTabel(pizzaArray);
  html += "<div class='totaal'>Totaal: €" + totaal.toFixed(2) + "</div>";
  PizzaMessage(html);
}

function filterPizzas() {
  var minInput = document.getElementById("minAantal");
  var min = Number(minInput.value);

  if (isNaN(min) || min < 1) {
    PizzaMessage(`Voer een geldig getal in!`);
    return;
  }

  if (!Array.isArray(pizzaArray) || pizzaArray.length === 0) {
    PizzaMessage(`Voeg eerst pizza's toe`);
    return;
  }

  var gefilterd = pizzaArray.filter(function (p) {
    return Number(p.amount) > min;
  });

  if (gefilterd.length === 0) {
    PizzaMessage(`Geen pizza's gevonden met minimum ${min} stuks`);
  } else {
    PizzaMessage(toonPizzaTabel(gefilterd));
  }
}