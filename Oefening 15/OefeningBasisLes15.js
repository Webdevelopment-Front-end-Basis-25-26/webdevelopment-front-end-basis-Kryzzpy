// Functie om een getal aan de gebruiker te vragen
function vraagGetal(boodschap) {
    let getal;
    
    var input = prompt("Geef het 1e getal:");
    do {
        input = prompt(boodschap);
        
        // Controleer of input null, leeg of geen getal is
        if (input === null || input === "") {
            getal = NaN;
        } else {
            getal = Number(input);
        }
        
        // Herhaal zolang het geen geldig getal is
        if (isNaN(getal)) {
            alert("Voer alstublieft een geldig getal in!");
        }
    } while (isNaN(getal));
    
    return getal;
}

// Event listener voor Oefening 1
document.getElementById("oefening1").addEventListener("click", function() {
    let eerste = vraagGetal("Voer het eerste getal in:");
    document.getElementById("getal1").textContent = eerste;
    
    // Vraag naar tweede getal
    let tweede = vraagGetal("Voer het tweede getal in:");
    document.getElementById("getal2").textContent = tweede;
    
    // Vergelijk de getallen
    let resultaat = "";
    if (eerste > tweede) {
        resultaat = `${eerste} is groter dan ${tweede}`;
    } else if (eerste < tweede) {
        resultaat = `${eerste} is kleiner dan ${tweede}`;
    } else {
        resultaat = `${eerste} en ${tweede} zijn gelijk`;
    }
    
    document.getElementById("resultaat1").textContent = resultaat;
});