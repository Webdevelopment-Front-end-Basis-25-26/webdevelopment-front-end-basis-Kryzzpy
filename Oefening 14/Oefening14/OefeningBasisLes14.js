var scoreRed = 0;
var scoreBlue = 0;
document.getElementById("btnRoodPlus1").onclick = function() {
    scoreRed += 1
    document.getElementById("scoreRood").innerText = scoreRed;
}
document.getElementById("btnRoodPlus3").onclick = function() {
    scoreRed += 3
    document.getElementById("scoreRood").innerText = scoreRed;
}
document.getElementById("btnBlauwPlus1").onclick = function() {
    scoreBlue += 1
    document.getElementById("scoreBlauw").innerText = scoreBlue;
}
document.getElementById("btnBlauwPlus3").onclick = function() {
    scoreBlue += 3
    document.getElementById("scoreBlauw").innerText = scoreBlue;
}
document.getElementById("btnResetScores").onclick = function() {
    scoreRed = 0;
    scoreBlue = 0;
    document.getElementById("scoreRood").innerText = scoreRed;
    document.getElementById("scoreBlauw").innerText = scoreBlue;
}
document.getElementById("updateRood").onclick = function() {
    scoreRed = 0;
    var newScoreRed = Number(document.getElementById("valueRood").value);
    document.getElementById("scoreRood").innerText = newScoreRed;
    scoreRed += newScoreRed;
}
document.getElementById("updateBlauw").onclick = function() {
    scoreBlue = 0;
    var newScoreBlue = Number(document.getElementById("valueBlauw").value);
    document.getElementById("scoreBlauw").innerText = newScoreBlue;
    scoreBlue += newScoreBlue;
}

document.getElementById("btnRood").onclick = function() {
    document.getElementById("kleurBox").style.backgroundColor = '#FF0000';
}
document.getElementById("btnBlauw").onclick = function() {
    document.getElementById("kleurBox").style.backgroundColor = '#0000FF';
}
document.getElementById("btnGroen").onclick = function() {
    document.getElementById("kleurBox").style.backgroundColor = '#008000';
}
document.getElementById("kleurKiezer").onchange = function() {
    var selectedColor = document.getElementById("kleurKiezer").value;
    document.getElementById("kleurBox").style.backgroundColor = selectedColor;
}

document.getElementById("btnBericht").onclick = function() {
    var naam = document.getElementById("naam").value;
    var voornaam = document.getElementById("voornaam").value;
    var vandaag = new Date();
    var geboorte = new Date(document.getElementById("geboortedatum").value);   

    var leeftijd = vandaag.getFullYear() - geboorte.getFullYear();

    document.getElementById("leeftijdBericht").innerText = `Hallo ${voornaam} ${naam}, je wordt dit jaar ${leeftijd} jaar oud`;
}

document.getElementById("box").onmouseover = function() {
    document.getElementById("resultaat").innerText = "De box werd betreden"
    document.getElementById("box").style.backgroundColor = '#008000';
}

document.getElementById("box").onmouseout = function() {
    document.getElementById("resultaat").innerText = "De box werd verlaten";
    document.getElementById("box").style.backgroundColor = '#FF0000';
}

document.getElementById("box").onmousedown = function() {
    document.getElementById("box").style.border = '5px solid black';
}

document.getElementById("box").onmouseup = function() {
    document.getElementById("box").style.border = 'none';
}

document.getElementById("menuButton").onclick = function() {
    document.getElementById("menuButton").classList.toggle("closed");
}