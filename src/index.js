let dateElement = document.querySelector(".day-time");
let currentTime = new Date();

let date = currentTime.getDate();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]
let currentMonth = currentTime.getMonth();

let currentYear = currentTime.getFullYear();

let currentDay = currentTime.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0${ hours }`;
}

let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${ minutes }`;
}

dateElement.innerHTML = `${date} ${months [currentMonth]} ${currentYear} ${ days[ currentDay ] } ${ hours }:${ minutes }`;

// week 5
// to get temperature in celsius


// function unitChange(event) {
//   event.preventDefault();
//   let farenheit = 79;
//   let changeUnit = document.querySelector("#temp");
//   changeUnit.innerHTML = `${farenheit}`;
// }

// let farenheitLink = document.querySelector("#fahrenheit-link");
// farenheitLink.addEventListener("click", unitChange);

// function changeAgain(event) {
//   event.preventDefault();
//   let celsius = 26;
//   let changeUnit = document.querySelector("#temp");
//   changeUnit.innerHTML = `${celsius}`;
// }

// let celsiusLink = document.querySelector("#celsius-link");
// celsiusLink.addEventListener("click", changeAgain);


// to get temperature, humidity & windspeed
  function showTemperature(response) {
  console.log(response);
  console.log(response.data.main.temp);

  let location = response.data.name;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${ location }`;
  
  let temperature = Math.round(response.data.main.temp);
  let h3 = document.querySelector("#temperature");
  h3.innerHTML = ` ${ temperature }`;

  let humidity = Math.round(response.data.main.humidity);
  let humid = document.querySelector("#humidity");
  humid.innerHTML = `💧Humidity ${ humidity }%`;

  let windSpeed = Math.round(response.data.wind.speed);
  let speed = document.querySelector("#wind");
  speed.innerHTML = `💨Wind ${ windSpeed } km/h`;
}

// search city in general
function search(event) {
  event.preventDefault();
  let city = document.querySelector("#country-input").value;
  searchCity(city);
}

function searchCity(city) {
   let units = "metric";
  let apiKey = "ac4eabaa4e24a5a1b4be0fdf6adfaae8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

// to get current location using coordinates
function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let units = "metric";
    let apiKey = "ac4eabaa4e24a5a1b4be0fdf6adfaae8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lon=${longitude}&lat=${latitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

// button for current location
let currentLocationButton = document.querySelector("#currentLocation");
currentLocationButton.addEventListener("click", getCurrentLocation);

// button for search city
let searchForm = document.querySelector("#countryform");
searchForm.addEventListener("submit", search);

searchCity("Singapore");


// function showPosition(position) {
//     let apiKey = "ac4eabaa4e24a5a1b4be0fdf6adfaae8";
//     let apiUrl =
//     `https://api.openweathermap.org/data/2.5/weather?q={cityInput.value}&appid=${apiKey}&units=${units}`;
//     axios.get(apiUrl).then(showPosition);
// }
  
// function currentLocation(event) {
//   event.preventDefault();
//   navigator.geolocation.getCurrentPosition(retrievePosition);
// }

// function search(event) {
//   event.preventDefault();
//   let cityInput = document.querySelector("#country-input");
//   let city = document.querySelector(".location");
//   if (cityInput) {
//     city.innerHTML = `${ cityInput.value }`; 
//   } 
//   let apiKey = "ac4eabaa4e24a5a1b4be0fdf6adfaae8";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={cityInput}&appid=${apiKey}&units=${units}`;
//   console.log(apiUrl);
// }

// let searchForm = document.querySelector("#countryform");
// searchForm.addEventListener("submit", search);

// to get temperature current location's temperature
  // function showTemperature(response) {
  //   console.log(response);
  //   debugger
    // console.log(response.data.main.temp);

  // let location = response.data.name;
  // let h1 = document.querySelector("h1");
  // h1.innerHTML = `${ location }`;
  
  // let temperature = Math.round(response.data.main.temp);
  // let h3 = document.querySelector("#temperature");
  // h3.innerHTML = `Temperature ${ temperature }`;

  // let humidity = Math.round(response.data.humidity);
  // let humid = document.querySelector("#humidity");
  // humid.innerHTML = `💧Humidity ${ humidity }%`;

  // let windSpeed = Math.round(response.data.speed);
  // let speed = document.querySelector("#wind");
  // speed.innerHTML = `💨Wind ${ windSpeed } km/h`;


// // get current location's temperature
//   function retrievePosition(position) {
// }

// let button = document.querySelector("#currentLocation");
// button.addEventListener("click", retrieveLocation);

// https://codesandbox.io/s/homework-5-improved-forked-et8b9?file=/src/index.js:731-890
// https://codesandbox.io/s/weather-app-pmz-q0szu?file=/src/script.js

// function getCurrentLocation(event) {
//   event.preventDefault();
// }


// On your project, when a user searches for a city
// (example: New York), it should display the name
// of the city on the result page and the current
// temperature of the city.

// 🙀 Bonus point:
// Add a Current Location button. When clicking on it,
// it uses the Geolocation API to get your GPS coordinates
// and display and the city and current temperature using
// the OpenWeather API.


// // week 5 homework
// function showWeather(position) {
//   console.log();
//   let temp = Math.round(response.data.main.temp);
//   let h1 = document.querySelector("h1");
//   h1.innerHTML = `${ temp }`;
// }
// function retrievePosition(position) {
//   let latitude = position.coords.latitude;
//   let longitude = position.coords.longitude;
//   let units = "metric";
//   axios.get(apiUrl).then(showWeather);
// }
// navigator.geolocation.getCurrentPosition(retrievePosition);
// // let city = "city"

// function showPosition(position) {
//   // console.log(position);
//   let temperature = Math.round(response.data.main.temp);
//   let temp = document.querySelector("#temperature");
//   temp.innerHTML = `Temperature    ${ temperature }℃`;
// }

// function getLocation(event) {
//   event.preventDefault();
//   let cityInput = document.querySelector("#country-input");
//   let units = "metric";
// }

// let searchButton = document.querySelector("#search-input");
// searchButton.addEventListener("click", getLocation);

// function showWeather(response) {
//   let h1 = document.querySelector("#temperature");
//   let temp = Math.round(response.data.main.temp);
//   h1.innerHTML = `${ temp } degrees`;
//   let h2 = document.querySelector("h2");
//   let location = response.data.name;
//   h2.innerHTML = location;

// function showPosition() {
//   let latitude = position.coords.latitude;
//   let longitude = position.coords.longitude;
//   let apiKey = "ac4eabaa4e24a5a1b4be0fdf6adfaae8";
//   let units = "metric";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lon=${longitude}&lat=${latitude}&appid=${apiKey}&units=${units}`;
//   axios.get(apiUrl).then(showWeather);

// }


// navigator.geolocation.getCurrentPosition(getLocation);

// https://codesandbox.io/s/week-5-homework-nip6u?file=/index.html
// https://codesandbox.io/s/week5-homework-forked-pv3v9?file=/src/index.js
// https://codesandbox.io/s/week-5-homework-nip6u?file=/src/index.js
// https://codesandbox.io/s/weather-app-2sxxy