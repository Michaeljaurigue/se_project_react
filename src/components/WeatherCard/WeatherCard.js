import "../WeatherCard/WeatherCard.css";

const weatherOptions = [
  {
    id: 1,
    url: require("../../images/weather-conditions/day-sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    id: 2,
    url: require("../../images/weather-conditions/day-cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    id: 3,
    url: require("../../images/weather-conditions/day-fog.svg").default,
    day: true,
    type: "fog",
  },
  {
    id: 4,
    url: require("../../images/weather-conditions/day-rain.svg").default,
    day: true,
    type: "rain",
  },
  {
    id: 5,
    url: require("../../images/weather-conditions/day-snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    id: 6,
    url: require("../../images/weather-conditions/day-storm.svg").default,
    day: true,
    type: "storm",
  },
  {
    id: 7,
    url: require("../../images/weather-conditions/night-clear.svg").default,
    day: false,
    type: "clear",
  },
  {
    id: 8,
    url: require("../../images/weather-conditions/night-cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    id: 9,
    url: require("../../images/weather-conditions/night-fog.svg").default,
    day: false,
    type: "fog",
  },
  {
    id: 10,
    url: require("../../images/weather-conditions/night-rain.svg").default,
    day: false,
    type: "rain",
  },
  {
    id: 11,
    url: require("../../images/weather-conditions/night-snow.svg").default,
    day: false,
    type: "snow",
  },
  {
    id: 12,
    url: require("../../images/weather-conditions/night-storm.svg").default,
    day: false,
    type: "storm",
  },
];

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather">
      <div className="weather_info">{weatherTemp} F</div>
      <img src={imageSrcUrl} alt="weather info" className="weather_image" />
    </section>
  );
};

export default WeatherCard;
