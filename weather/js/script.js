import { getElementData } from "./modules/show_data.js";
import { getElement } from "./modules/get_element.js";
import API from "./api/api.js";
import cities from "./cities/cities.js";

let dateToDay = new Date();
getElementData(".weather-date__day", dateToDay.getDate());
getElementData(".weather-date__month", dateToDay.getMonth() + 1);
getElementData(".weather-date__year", dateToDay.getFullYear());

for (let key in cities) {
  let select = document.querySelector(".choose-contry__input");
  let option = document.createElement("option");
  option.value = key;
  option.innerHTML = cities[key];
  select.append(option);
}

function getWeather() {
  let cityId = document.querySelector("#city").value;
  fetch(`${API.url}weather?id=${cityId}&units=metric&APPID=${API.apid}`)
    .then((response) => response.json())
    .then(showWeather);
}

function showWeather({ name, weather, wind, main }) {
  const iconWeather = `<img src="https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png">`;

  getElement(".current-contry", name);
  getElement(".wind-number", wind.speed);
  getElement(".pressure-number", main.pressure);
  getElement(".humidity-number", main.humidity);
  getElement(".cloudly-title", weather[0]["description"]);
  getElement(".cloudly-number", Math.round(main.temp));
  getElement(".cloudly-icon", iconWeather);
}


document.querySelector("#city").onchange = getWeather;


