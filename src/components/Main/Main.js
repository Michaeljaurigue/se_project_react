import { useContext } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "../Main/Main.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { convertTemp, weatherTemp } from "../../utils/tempLogic";
import HeroBanner from "../HeroBanner/HeroBanner";
//make it so that if logged in, hero banner will not show

function Main({ weatherData, cards, onCardClick, handleLikeCard, onSignUp, isLoggedIn }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const deg = convertTemp(weatherData.temp, currentTemperatureUnit);
  const weatherType = weatherTemp(weatherData.temp);

  return (
    <main className="main">
      <WeatherCard
        weatherData={weatherData}
        deg={deg}
        unit={currentTemperatureUnit}
      />
      <div>
        {/* <div>{isLoggedIn ? null : <HeroBanner onSignUp={onSignUp} />}</div> */}
      </div>
      <p className="main__description">
        Today is {deg}. You may want to wear:
      </p>
      <div className="main__hero">

        <ul className="main__cards">
          {cards
            .filter((card) => card.weather === weatherType)
            .map((filteredCard) => (
              <ItemCard
                key={filteredCard._id}
                card={filteredCard}
                onCardClick={onCardClick}
                handleLikeCard={handleLikeCard}
              />
            ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
