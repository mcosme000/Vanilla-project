/* - - - WEATHER API - - - */
function showWeather(results) {
  console.log(results.data);
  var city = document.querySelector("#cityName");
  var temp = document.querySelector("#tempValue");
  var wind = document.querySelector("#wind");
  var icon = document.querySelector("#icon");
  var precipitation = document.querySelector("#precipitation");
  var description = document.querySelector("#description");
  city.innerHTML = `${results.data.name}`;
  temp.innerHTML = Math.round(results.data.main.temp);
  wind.innerHTML = Math.round(results.data.wind.speed) + "m/s";
  //precipitation = `${}`
  description.innerHTML = `${results.data.weather[0].main}`;
  //change icons depending on the temp. and icon code:
  var iconCode = `${results.data.weather[0].icon}`;
  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${iconCode}@2x.png`
  );
}

// Convert to Celsius //
document.querySelector("#celsius").addEventListener("click", function (e) {
  e.preventDefault();
  var temperatureElement = document.querySelector("#tempValue");
  var temperature = temperatureElement.innerHTML;
  temperature = Number(temperature);
  temperatureElement.innerHTML = Math.round((temperature - 32) * 5) / 9;
});

// Convert to Fahrenheit //
document.querySelector("#fah").addEventListener("click", function (e) {
  e.preventDefault();
  var temperatureElement = document.querySelector("#tempValue");
  var temperature = temperatureElement.innerHTML;
  temperature = Number(temperature);
  temperatureElement.innerHTML = Math.round((temperature * 9) / 5) + 32;
});

/* when we click on submit button, everything starts */
document.querySelector("#search-form").addEventListener("submit", function (e) {
  e.preventDefault();
  var city = document.querySelector("#input").value;
  var apiKey = "36c8bd885e1b84703cd48d295c95399d";
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
});

// - - - - -  GEOLOCATION BUTTON - - - - - //

/*document.querySelector(".geolocation").addEventListener("click", function (e) {
  e.preventDefault();
  var geoapi =
    "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
  var apiKey = "36c8bd885e1b84703cd48d295c95399d";
  axios.get().then(showLocation);
});
*/

function getLocation(position) {
  console.log(position);

  var lat = `${position.coords.latitude}`;
  var lon = `${position.coords.longitude}`;

  // with lat and lon variables I can get the weather API
  // of the current geolocation.

  function currentLocation(result) {
    console.log(result);
    var text = document.querySelector(".locationInfo");
    var city = result.data.name;
    var temp = Math.round(result.data.main.temp);
    var description = result.data.weather[0].description;

    text.innerHTML = `Current city: ${city}, ${temp}ºC, ${description}`;
  }

  var apiKey = "36c8bd885e1b84703cd48d295c95399d";
  var geoapi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(geoapi).then(currentLocation);
}

document.querySelector("#geolocation").addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(getLocation);
});
