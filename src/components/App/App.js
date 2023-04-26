import "../App/App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import "../../fonts/fonts.css";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
// import { defaultClothingItems } from "../../utils/constants";
import { addCard, getCards, deleteCard } from "../../utils/api";
import DeleteCardModal from "../DeleteCardModal/DeleteCardModal";
import { ValidationContext } from "../../contexts/ValidationContext";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [disableButton, setDisableButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddClothes = () => {
    setActiveModal("create");
  };

  function handleSubmitButtonChange() {
    setDisableButton(!disableButton);
  }

  function handleAddItemSubmit(name, link, weather) {
    setIsLoading(true);
    const id = clothingItems.length + 1;
    const item = { id, name, link, weather };
    addCard(item)
      .then(() => {
        setClothingItems([item, ...clothingItems]);
        closeModal();
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const closeActiveModal = (evt) => {
    if (
      evt.target.classList.contains("modal") ||
      evt.target.classList.contains("modal__close") ||
      evt.target.classList.contains("modal__close-preview")
    ) {
      setActiveModal(null);
    }
  };

  const handleDeleteCard = () => {
    setIsLoading(true);
    deleteCard(selectedCard.id)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => item.id !== selectedCard.id)
        );
        closeModal();
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleConfirmDelete = () => {
    setActiveModal("confirm");
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  useEffect(() => {
    getCards()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((error) => {
        console.log("Error fetching clothing items:", error);
      });
  }, []);

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        setWeatherData(parseWeatherData(data));
      })
      .catch((error) => {
        console.log("Error fetching forecast weather data:", error);
      });
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <div className="app">
      <CurrentTemperatureUnitContext.Provider
        value={{
          currentTemperatureUnit,
          handleToggleSwitchChange,
          weatherData,
        }}
      >
        <Router>
          <Header weatherData={weatherData} onCreateModal={handleAddClothes} />
          <Switch>
            <Route path="/profile">
              <Profile
                cards={clothingItems}
                onCardClick={handleCardClick}
                addClothes={handleAddClothes}
              />
            </Route>
            <Route path="/">
              <Main
                weatherData={weatherData}
                cards={clothingItems}
                onCardClick={handleCardClick}
              />
            </Route>
          </Switch>
          <Footer />

          {activeModal === "create" && (
            <ValidationContext.Provider
              value={{
                disableButton,
                setDisableButton,
                handleSubmitButtonChange,
                closeActiveModal,
                handleAddItemSubmit,
              }}
            >
              <AddItemModal onClose={closeActiveModal} isLoading={isLoading} />
            </ValidationContext.Provider>
          )}

          {activeModal === "preview" && (
            <ItemModal
              card={selectedCard}
              onCardClick={handleCardClick}
              onClose={closeActiveModal}
              onDelete={handleConfirmDelete}
            />
          )}

          {activeModal === "confirm" && (
            <DeleteCardModal
              onClose={closeActiveModal}
              handleDelete={handleDeleteCard}
              isLoading={isLoading}
            />
          )}
        </Router>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
