const MILLISECONDS_TO_SECONDS = 1000;

function isDay(sunrise, sunset) {
  return (
    Date.now() / MILLISECONDS_TO_SECONDS > sunrise &&
    Date.now() / MILLISECONDS_TO_SECONDS < sunset
  );
}

function getForecastWeather(latitude, longitude, APIKey) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIKey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    console.log(`Error: ${res.status}`);
    return Promise.reject(`Error: ${res.status}`);
  });
}

function parseWeatherData(data) {
  if (!data) {
    return null;
  } else {
    const weather = [];
    weather.city = data.name;
    weather.temp = data.main.temp;
    weather.condition = data.weather[0].main;
    weather.sunrise = data.sys.sunrise;
    weather.sunset = data.sys.sunset;
    weather.isDay = isDay(data.sys.sunrise, data.sys.sunset);
    return weather;
  }
}

export { getForecastWeather, parseWeatherData };
