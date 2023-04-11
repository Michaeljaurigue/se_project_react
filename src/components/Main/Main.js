import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo } from "react";
import "../Main/Main.css";

function Main({ weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={false} type="cloudy" weatherTemp={weatherTemp} />
      <div>
        <div className="main__description">
          Today is {weatherTemp} F. You may want to wear:
        </div>
        <ul className="main__cards">
          {filteredCards.map((item) => (
            <ItemCard key={item.id} item={item} onSelectCard={onSelectCard} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
