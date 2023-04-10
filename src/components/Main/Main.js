import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo } from "react";

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
      <section className="main__description" id="card-section">
        Today is {weatherTemp} F. You may want to wear:
        <div className="main__items">
          {filteredCards.map((item) => (
            <ItemCard item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
