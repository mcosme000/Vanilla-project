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
  var maxTemp = document.querySelector("#tempmax");
  var minTemp = document.querySelector("#tempmin");
  // var precipitation = document.querySelector("#precipitation");
  var description = document.querySelector("#description");
  city.innerHTML = `${results.data.name}`;
  temp.innerHTML = Math.round(results.data.main.temp);
  maxTemp.innerHTML = Math.round(results.data.main.temp_max);
  minTemp.innerHTML = Math.round(results.data.main.temp_min);
  wind.innerHTML = Math.round(results.data.wind.speed) + "m/s";
  //precipitation = `${}`
  description.innerHTML = `${results.data.weather[0].description}`;
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

// - - - FORECAST - - - //

function forecastDate(date) {
  var now = new Date(date);
  var hours = now.getHours();
  return `${hours}:00`;
}

function showForecast(forecast) {
  console.log(forecast.data);

  // 1 //
  var date1 = document.querySelector("#day1");
  date1.innerHTML = forecastDate(forecast.data.list[1].dt * 1000);

  var icon1 = document.querySelector("#icon1");
  var iconCode1 = `${forecast.data.list[1].weather[0].icon}`;
  icon1.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${iconCode1}@2x.png`
  );

  document.querySelector("#temp1-max").innerHTML = Math.round(
    forecast.data.list[1].main.temp_max
  );
  document.querySelector("#temp1-min").innerHTML = Math.round(
    forecast.data.list[1].main.temp_min
  );

  // 2 //

  var date2 = document.querySelector("#day2");
  date2.innerHTML = forecastDate(forecast.data.list[2].dt * 1000);

  var icon2 = document.querySelector("#icon2");
  var iconCode2 = `${forecast.data.list[2].weather[0].icon}`;
  icon2.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${iconCode2}@2x.png`
  );

  document.querySelector("#temp2-max").innerHTML = Math.round(
    forecast.data.list[1].main.temp_max
  );
  document.querySelector("#temp2-min").innerHTML = Math.round(
    forecast.data.list[1].main.temp_min
  );

  // 3 //

  var date3 = document.querySelector("#day3");
  date3.innerHTML = forecastDate(forecast.data.list[3].dt * 1000);

  var icon3 = document.querySelector("#icon3");
  var iconCode3 = `${forecast.data.list[3].weather[0].icon}`;
  icon3.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${iconCode3}@2x.png`
  );

  document.querySelector("#temp3-max").innerHTML = Math.round(
    forecast.data.list[1].main.temp_max
  );
  document.querySelector("#temp3-min").innerHTML = Math.round(
    forecast.data.list[1].main.temp_min
  );

  // 4 //
  var date4 = document.querySelector("#day4");
  date4.innerHTML = forecastDate(forecast.data.list[4].dt * 1000);

  var icon4 = document.querySelector("#icon4");
  var iconCode4 = `${forecast.data.list[4].weather[0].icon}`;
  icon4.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${iconCode4}@2x.png`
  );

  document.querySelector("#temp4-max").innerHTML = Math.round(
    forecast.data.list[1].main.temp_max
  );
  document.querySelector("#temp4-min").innerHTML = Math.round(
    forecast.data.list[1].main.temp_min
  );

  // 5 //

  var date5 = document.querySelector("#day5");
  date5.innerHTML = forecastDate(forecast.data.list[5].dt * 1000);

  var icon5 = document.querySelector("#icon5");
  var iconCode5 = `${forecast.data.list[5].weather[0].icon}`;
  icon5.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${iconCode5}@2x.png`
  );

  document.querySelector("#temp5-max").innerHTML = Math.round(
    forecast.data.list[1].main.temp_max
  );
  document.querySelector("#temp5-min").innerHTML = Math.round(
    forecast.data.list[1].main.temp_min
  );
}

// - - - FUNCTIONS TO CONVERT TEMPERATURE VALUE - - - //

// Convert to Fahrenheit //
document.querySelector("#fa").addEventListener("click", function (e) {
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

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showForecast);
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
/*
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
*/
