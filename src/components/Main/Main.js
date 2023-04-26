import { useContext } from "react";
// import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "../Main/Main.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { convertTemp, weatherTemp } from "../../utils/tempLogic";

function Main({ weatherData, cards, onCardClick }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const deg = convertTemp(weatherData.temp, currentTemperatureUnit);
  const weatherType = weatherTemp(weatherData.temp);

  // const filteredCards = clothingItems.filter((item) => {
  //   return item.weather.toLowerCase() === weatherType;
  // });

  return (
    <main className="main">
      <WeatherCard
        day={false}
        type="cloudy"
        weatherData={weatherData}
        deg={deg}
        unit={currentTemperatureUnit}
      />
      <div>
        <p className="main__description">
          Today is {deg}. You may want to wear:
        </p>
        <ul className="main__cards">
          {cards.filter((card) => card.weather === weatherType)
          .map((filteredCards) => (
            <ItemCard key={filteredCards.id} card={filteredCards} onCardClick={onCardClick} />
          ))}
          {/* {filteredCards.map((card) => (
            <ItemCard key={card.id} card={card} onCardClick={onCardClick} />
          ))} */}
        </ul>
      </div>
    </main>
  );
}

export default Main;
