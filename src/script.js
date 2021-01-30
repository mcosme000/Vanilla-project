/* - - - WEATHER API - - - */

function getDate(timestamp) {
  let now = new Date(timestamp);
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const days = [
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

  const day = days[now.getDay()];
  return `${day}, ${hours}:${minutes}`;
}

//

//

//

function showWeather(results) {
  console.log(results.data);
  const city = document.querySelector("#cityName");
  const temp = document.querySelector("#tempValue");
  const wind = document.querySelector("#wind");
  const humidity = document.querySelector("#humidity");
  const icon = document.querySelector("#icon");
  const maxTemp = document.querySelector("#tempmax");
  const minTemp = document.querySelector("#tempmin");
  const description = document.querySelector("#description");
  const feelslike = document.querySelector("#feelTemp");
  const emoji = document.querySelector("#emoji");
  city.innerHTML = `${results.data.name}`;
  temp.innerHTML = Math.round(results.data.main.temp);
  maxTemp.innerHTML = Math.round(results.data.main.temp_max);
  minTemp.innerHTML = Math.round(results.data.main.temp_min);
  feelslike.innerHTML = Math.round(results.data.main.feels_like) + "ºC";
  wind.innerHTML = Math.round(results.data.wind.speed) + "m/s";
  humidity.innerHTML = results.data.main.humidity + "%";
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
  maxCelsiusTemp = results.data.main.temp_max;
  minCelsiusTemp = results.data.main.temp_min;

  //delete the input element when submit form
  document.querySelector("#input").value = "";
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
  date1.innerHTML = forecastDate(forecast.data.list[0].dt * 1000);

  var icon1 = document.querySelector("#icon1");
  var iconCode1 = `${forecast.data.list[0].weather[0].icon}`;
  icon1.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${iconCode1}@2x.png`
  );

  document.querySelector("#temp1-max").innerHTML = Math.round(
    forecast.data.list[0].main.temp_max
  );
  document.querySelector("#temp1-min").innerHTML = Math.round(
    forecast.data.list[0].main.temp_min
  );

  // 2 //

  var date2 = document.querySelector("#day2");
  date2.innerHTML = forecastDate(forecast.data.list[1].dt * 1000);

  var icon2 = document.querySelector("#icon2");
  var iconCode2 = `${forecast.data.list[1].weather[0].icon}`;
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
  date3.innerHTML = forecastDate(forecast.data.list[2].dt * 1000);

  var icon3 = document.querySelector("#icon3");
  var iconCode3 = `${forecast.data.list[2].weather[0].icon}`;
  icon3.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${iconCode3}@2x.png`
  );

  document.querySelector("#temp3-max").innerHTML = Math.round(
    forecast.data.list[2].main.temp_max
  );
  document.querySelector("#temp3-min").innerHTML = Math.round(
    forecast.data.list[2].main.temp_min
  );

  // 4 //
  var date4 = document.querySelector("#day4");
  date4.innerHTML = forecastDate(forecast.data.list[3].dt * 1000);

  var icon4 = document.querySelector("#icon4");
  var iconCode4 = `${forecast.data.list[3].weather[0].icon}`;
  icon4.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${iconCode4}@2x.png`
  );

  document.querySelector("#temp4-max").innerHTML = Math.round(
    forecast.data.list[3].main.temp_max
  );
  document.querySelector("#temp4-min").innerHTML = Math.round(
    forecast.data.list[3].main.temp_min
  );

  // 5 //

  var date5 = document.querySelector("#day5");
  date5.innerHTML = forecastDate(forecast.data.list[4].dt * 1000);

  var icon5 = document.querySelector("#icon5");
  var iconCode5 = `${forecast.data.list[4].weather[0].icon}`;
  icon5.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${iconCode5}@2x.png`
  );

  document.querySelector("#temp5-max").innerHTML = Math.round(
    forecast.data.list[4].main.temp_max
  );
  document.querySelector("#temp5-min").innerHTML = Math.round(
    forecast.data.list[4].main.temp_min
  );
}

// - - - FUNCTIONS TO CONVERT TEMPERATURE VALUE - - - //

// Convert to Fahrenheit //
document.querySelector("#fa").addEventListener("click", function (e) {
  const temperatureElement = document.querySelector("#tempValue");
  const fahrenheitTemp = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemp);
  //convert min temp to fahrenheit:
  const minTemp = document.querySelector("#tempmin");
  minTemp.innerHTML = Math.round((minCelsiusTemp * 9) / 5 + 32);
  //convert max temp to fahrenheit:
  const maxTemp = document.querySelector("#tempmax");
  maxTemp.innerHTML = Math.round((maxCelsiusTemp * 9) / 5 + 32);
});

// Convert to Celsius //
document.querySelector("#celsius").addEventListener("click", function (e) {
  e.preventDefault();
  const temperatureElement = document.querySelector("#tempValue");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  document.querySelector("#celsius").color = "yellow";
  //convert min temp to celsius:
  const minTemp = document.querySelector("#tempmin");
  minTemp.innerHTML = Math.round(minCelsiusTemp);
  //convert max temp to celsius:
  const maxTemp = document.querySelector("#tempmax");
  maxTemp.innerHTML = Math.round(maxCelsiusTemp);
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
document
  .querySelector("#submit-button")
  .addEventListener("click", function (e) {
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
