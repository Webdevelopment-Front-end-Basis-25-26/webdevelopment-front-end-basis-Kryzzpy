document.getElementById("oefening1").addEventListener("click", function () {
  const getal1 = vraagGetal("Geef het 1ste getal!");
  const getal2 = vraagGetal("Geef het 2de getal!");
  document.getElementById("getal1").innerText = getal1;
  document.getElementById("getal2").innerText = getal2;

  const resultaat = vergelijkGetallen(getal1, getal2);
  document.getElementById("resultaat1").innerText = resultaat;
});
document.getElementById("oefening2").addEventListener("click", function () {
  const getal = vraagGetalInBereik("Geef een getal van 1 t.e.m. 20", 1, 20);
  document.getElementById("getal").innerText = getal;

  const resultaat = genereerTafels(getal);
  document.getElementById("resultaat2").innerText = resultaat;
});
document.getElementById("oefening3").addEventListener("click", function () {
  demonstreerVarVsLet();
});
document.getElementById("oefening4").addEventListener("click", function () {
  const getal = vraagGetalInBereik("Geef een getal van 1 t.e.m. 100", 1, 100);
  const resultaat = document.getElementById("resultaat4");
  resultaat.innerText = "";
  for (let i = 1; i <= getal; i++) {
    resultaat.innerText += `${i}: ${getFizzBuzzWaarde(i)} \n`;
  }
});
document.getElementById("oefening5").addEventListener("click", function () {
  const getal = vraagGetalInBereik("Geef een getal tussen 1 en 100:", 1, 100);

  let waarde = "";

  waarde += "<strong>Getal: " + getal + "</strong><br><br>";

  if (isPriem(getal)) {
    waarde += "<span style='color: green;'>" + getal + " is een priemgetal.</span><br><br>";
  } else {
    waarde += "<span style='color: red;'>" + getal + " is geen priemgetal.</span><br><br>";
  }

  const lijst = toonPriemgetallen(2, getal);
  waarde += "Priemgetallen van 2 tot " + getal + ":<br>" + lijst;

  document.getElementById("resultaat5").innerHTML = waarde;
});

function vraagGetal(value) {
  let invoer;
  do {
    invoer = prompt(value);
    if (invoer === "" || invoer === null || isNaN(invoer)) {
      alert("Ongeldige invoer. Gelieve een geldig getal in te voeren");
    }
  } while (invoer === "" || invoer === null || isNaN(invoer));

  return Number(invoer);
}

function vergelijkGetallen(getal1, getal2) {
  let resultaat;
  if (getal1 > getal2) {
    resultaat = `Getal 1 (${getal1}) is groter dan getal 2 (${getal2})`;
  } else if (getal1 < getal2) {
    resultaat = `Getal 1 (${getal1}) is kleiner dan getal 2 (${getal2})`;
  } else {
    resultaat = `Beide getallen (${getal1} en ${getal2}) zijn even groot`;
  }
  return resultaat;
}

function vraagGetalInBereik(waarde, min, max) {
  let getal;
  do {
    getal = vraagGetal(waarde);
    if (getal < min || getal > max || isNaN(getal) || getal === "") {
      alert(`Ongeldige invoer. Voer een getal in tussen ${min} en ${max}.`);
    }
  } while (getal < min || getal > max || isNaN(getal));
  return getal;
}

function genereerTafels(getal) {
  let resultaat = "";
  for (let i = 1; i <= 20; i++) {
    resultaat += `${i} * ${getal} = ${i * getal} \n`;
  }
  return resultaat;
}

function demonstreerVarVsLet() {
  let resultaatDiv = document.getElementById("resultaat3");
  resultaatDiv.innerHTML = "<h3>Verschil tussen var en let:</h3>";

  // Voorbeeld 1: Block scope
  resultaatDiv.innerHTML += "<strong>1. Block Scope:</strong><br>";
  if (true) {
    var varGetal = 10;
    // let letGetal = 20;
  }
  resultaatDiv.innerHTML += "var buiten block: " + varGetal + "<br>";
  // resultaatDiv.innerHTML += "let buiten block:" + letGetal + "<br>";
  resultaatDiv.innerHTML += "let buiten block: niet toegankelijk (ReferenceError)<br><br>";

  // Voorbeeld 2: Loop scope probleem met var
  resultaatDiv.innerHTML += "<strong>2. Loop Scope Probleem:</strong><br>";
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log("var i:", i); // Print altijd 3!
      resultaatDiv.innerHTML += "var i in timeout: " + i + "<br>"; // wordt pas geprint na timeout
    }, 100);
  }
  resultaatDiv.innerHTML += "var i na loop: " + i + "<br>";

  for (let j = 0; j < 3; j++) {
    setTimeout(function () {
      console.log("let j:", j); // Print 0, 1, 2
      resultaatDiv.innerHTML += "var j in timeout: " + j + "<br>"; // wordt pas geprint na timeout
    }, 100);
  }
  //   resultaatDiv.innerHTML += "let j na loop:" + j + "<br>";
  resultaatDiv.innerHTML += "let j na loop: niet toegankelijk (ReferenceError)<br><br>";
}

function getFizzBuzzWaarde(getal) {
  let resultaat;
  if (getal % 3 == 0 && getal % 5 == 0) {
    resultaat = "FizzBuzz";
  } else if (getal % 3 == 0) {
    resultaat = "Fizz";
  } else if (getal % 5 == 0) {
    resultaat = "Buzz";
  } else {
    resultaat = getal;
  }
  return resultaat;
}

function isPriem(getal) {
  if (getal < 2) return false;
  if (getal === 2) return true;
  if (getal % 2 === 0) return false;

  for (let deler = 3; deler < getal; deler += 2) {
    if (getal % deler === 0) {
      return false;
    }
  }

  return true;
}

function toonPriemgetallen(ondergrens, bovengrens) {
  let resultaat = "";
  let eerste = true;

  for (let i = ondergrens; i <= bovengrens; i++) {
    if (isPriem(i)) {
      if (!eerste) {
        resultaat += ", ";
      }
      resultaat += i;
      eerste = false;
    }
  }

  return resultaat;
}