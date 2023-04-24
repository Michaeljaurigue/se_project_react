import "../WeatherCard/WeatherCard.css";
import { weatherOptions } from "../../utils/constants.js";

const WeatherCard = ({ day, type, weatherData = "", deg }) => {
  const imageSrc = weatherOptions.filter((item) => {
    return item.day === day && item.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather">
      <div className="weather_info">{deg}</div>
      <img src={imageSrcUrl} alt="weather info" className="weather_image" />
    </section>
  );
};

export default WeatherCard;
