/* - - - WEATHER API - - - */

function getDate(timestamp) {
  let now = new Date(timestamp);
  let hours = now.getHours();
  let minutes = now.getMinutes();
  var days = [
    "Sunday",
    "Monday",
    "Thuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  var day = days[now.getDay()];
  return `${day}, ${hours}:${minutes}`;
}

//

//

//

function showWeather(results) {
  console.log(results.data);
  var city = document.querySelector("#cityName");
  var temp = document.querySelector("#tempValue");
  var wind = document.querySelector("#wind");
  var icon = document.querySelector("#icon");
  // var precipitation = document.querySelector("#precipitation");
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
    `https://openweathermap.org/img/wn/${iconCode}@2x.png`
  );

  let date = document.querySelector("#date");
  date.innerHTML = getDate(results.data.dt * 1000);

  celsiusTemperature = results.data.main.temp;
}

//

// - - - FUNCTIONS TO CONVERT TEMPERATURE VALUE - - - //

// Convert to Fahrenheit //
document.querySelector("#fah").addEventListener("click", function (e) {
  var temperatureElement = document.querySelector("#tempValue");
  let fahrenheitTemp = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemp);
});

// Convert to Celsius //
document.querySelector("#celsius").addEventListener("click", function (e) {
  e.preventDefault();
  var temperatureElement = document.querySelector("#tempValue");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  document.querySelector("#celsius").color = "yellow";
});

let celsiusTemperature = null;
//

/* ABOUT THE TEMPERATURE CONVERSION ! ! ! ! 
①　First I create a GLOBAL VARIABLE (outside all the functions)
let celsiusTemperature = null. 

② When we search for the city and the function getWeather is executed, 
that celsiusTemperature variable is updated with the value 
(resuts.data.main.temp)

③ We use that value to get the fahrenheit data.
Since celsiusTemperature variable doesn't change for the city, 
that value will be the same. 
So it doesn't matter how many times we click on fahrenheit button, 
IT WON'T CHANGE. 

④ To get the fahrenheit back to celsius, we just say that
temperatue = celsiusTemperature. 
*/

//

//

// - - - SUBMIT BUTTON EVENT - - - //
/* when we click on submit button, everything starts */
document.querySelector("#search-form").addEventListener("submit", function (e) {
  e.preventDefault();
  var city = document.querySelector("#input").value;
  var apiKey = "36c8bd885e1b84703cd48d295c95399d";
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
});

//

//

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
