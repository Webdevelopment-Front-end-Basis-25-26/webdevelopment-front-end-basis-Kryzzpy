let knop = document.querySelector("button");
knop.addEventListener("click", function () {
  let Plaatsnaam = document.querySelector("input").value;
  if (Plaatsnaam === "") {
    alert("Vul een plaatsnaam in!");
    return;
  }
  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    Plaatsnaam +
    "&appid=01731837ced6b0e3df283fe4eefbb170";
  //document.getElementById('resultaat').innerHTML = weer; // Voor debuggen, laat de URL zien
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let iconUrl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      let weer = data.weather[0].description;
      let naam = data.name;
      let land = data.sys.country;
      let temp = data.main.temp;

      let wind = data.wind.speed;

      document.getElementById("resultaat").innerHTML = `
                <p><strong>Plaats:</strong> ${naam}, ${land},${temp},${weer},${wind}
                <img src="${iconUrl}" alt="Weer icoon"></p>`;
    });
  //document.getElementById('resultaat').innerHTML = weer;
});