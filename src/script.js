/* - - - WEATHER API - - - */
function showWeather(results) {
  console.log(results.data);
  var city = document.querySelector("#cityName");
  var temp = document.querySelector("#tempValue");
  var humidity = document.querySelector("#humidity");
  var description = document.querySelector("#description");
  city.innerHTML = `${results.data.name}`;
  temp.innerHTML = `${results.data.main.temp}`;
  humidity.innerHTML = `${results.data.main.humidity}%`;
  description.innerHTML = `${results.data.weather[0].main}`;
}

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

function showLocation(location) {
  console.log(location.data);
}
navigator.geolocation.getCurrentPosition(showLocation);
