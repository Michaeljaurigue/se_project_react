import { latitude, longitude, APIKey } from "../utils/constants";

const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIKey}`
  ).then(processServerResponse);
  return weatherApi;
};

function parseWeatherData(data) {
  console.log(data);
  if (!data) {
    return null;
  } else {
    const weather = [];
    weather.city = data.name;
    weather.temp = data.main.temp;
    weather.condition = data.weather[0].main;
    weather.sunrise = data.sys.sunrise;
    weather.sunset = data.sys.sunset;
    return weather;
  }
}

export { getForecastWeather, parseWeatherData };
