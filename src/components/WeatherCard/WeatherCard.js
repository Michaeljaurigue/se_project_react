import "./WeatherCard.css";
// import { weatherImages } from "../../utils/constants";

const weatherOptions = [
  {
    id: 1,
    url: require("../images/weather-conditions/day-sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    id: 2,
    url: require("../images/weather-conditions/day-cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    id: 3,
    url: require("../images/weather-conditions/night-moony.svg").default,
    day: false,
    type: "sunny",
  },
  {
    id: 4,
    url: require("../images/weather-conditions/night-cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
];

const WeatherCard = ({ day, type, weatherTemp = '' }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather">
      <div className="weather_info">{weatherTemp} F</div>
      <img
        src={imageSrcUrl}
        alt="weather info"
        className="weather_image"
      />
    </section>
  );
};

export default WeatherCard;
