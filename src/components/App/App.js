import "../App/App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import "../../fonts/fonts.css";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import DeleteCardModal from "../DeleteCardModal/DeleteCardModal";
import { ValidationContext } from "../../contexts/ValidationContext";
import { APIKey, latitude, longitude } from "../../utils/constants";
import api from "../../utils/api";

import NotFound from "../NotFound/NotFound";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { checkToken, signin, signup, updateUser } from "../../utils/auth";
import { errorMessageHandler } from "../../contexts/ValidationContext";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [disableButton, setDisableButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [alternateAvatar, setAlternateAvatar] = useState("");
  const [errorDisplay, setErrorDisplay] = useState(false);

  const history = useHistory(); //this is a hook that allows us to redirect the user to a different page

  function getUserFirstLetter(name) {
    const firstletter = name.slice(0, 1);
    return firstletter;
  }

  const handleAddClothes = () => {
    setActiveModal("create");
  };

  function handleSubmitButtonChange() {
    setDisableButton(!disableButton);
  }

  function handleSignupSubmit(values) {
    setIsLoading(true);

    const { email, password } = values;

    signup(values)
      .then((res) => {
        handleLoginSubmit({ email, password });
        closeModal();
      })
      .catch((err) => {
        handleModalErrorDisplay(true, errorMessageHandler(err));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLoginSubmit({ email, password }) {
    setIsLoading(true);

    const user = { email, password };

    signin(user)
      .then((res) => {
        localStorage.setItem("token", res.token);

        checkToken(res.token).then((res) => {
          console.log(res.token);
          setCurrentUser(JSON.parse(JSON.stringify(res.data)));
          setAlternateAvatar(getUserFirstLetter(res.data.name));
          setIsLoggedIn(true);
          history.push("/");
        });
        closeModal();
      })
      .catch((err) => {
        handleModalErrorDisplay(true, errorMessageHandler(err));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateSubmit({ name, avatar }) {
    setIsLoading(true);

    const token = localStorage.getItem("token");
    const data = { name, avatar, token };

    updateUser(data)
      .then((res) => {
        setCurrentUser(res.data);
        closeModal();
      })
      .catch((err) => {
        handleModalErrorDisplay(true, errorMessageHandler(err));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleAddItemSubmit(name, link, weather) {
    setIsLoading(true);
    const item = { name, link, weather };
    api
      .addCard(item)
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        closeModal();
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleLikeClick = ({ id, isLiked, user }) => {
    const token = localStorage.getItem("jwt");
    // Check if this card is now liked
    isLiked
      ? // if so, send a request to add the user's id to the card's likes array
        api
          .addCardLike({ id, user }, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err))
      : // if not, send a request to remove the user's id from the card's likes array
        api
          .removeCardLike({ id, user }, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err));
  };

  // function handleLikeCard(id, liked) {
  //   const token = localStorage.getItem("token");

  //   if (!liked) {
  //     handleLikeCard(id, token)
  //       .then((updatedCard) => {
  //         setClothingItems((cards) =>
  //           cards.map((card) => (card._id === id ? updatedCard : card))
  //         );
  //       })
  //       .catch((err) => console.log(errorMessageHandler(err)));
  //   } else {
  //     api
  //       .unlikeCard(id, token)
  //       .then((updatedCard) => {
  //         setClothingItems((cards) =>
  //           cards.map((card) => (card._id === id ? updatedCard : card))
  //         );
  //       })
  //       .catch((err) => console.log(errorMessageHandler(err)));
  //   }
  // }

  const closeActiveModal = (evt) => {
    if (
      evt.target.classList.contains("modal") ||
      evt.target.classList.contains("modal__close") ||
      evt.target.classList.contains("modal__close-preview") ||
      evt.target.classList.contains("modal__cancel")
    ) {
      closeModal();
    }
  };

  const handleDeleteCard = () => {
    setIsLoading(true);
    api
      .deleteCard(selectedCard.id)
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

  function handleSignup() {
    handleModalErrorDisplay(false, "");
    setActiveModal("signup");
  }

  function handleSignin() {
    handleModalErrorDisplay(false, "");
    setActiveModal("signin");
  }

  function handleEditProfile() {
    setActiveModal("edit");
  }

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

  function handleModalErrorDisplay(value, message) {
    setErrorDisplay(value, message);
  }

  function getLocalToken() {
    try {
      const jwt = localStorage.getItem("token");
      return jwt;
    } catch {
      return null;
    }
  }

  function checkAccess() {
    const jwt = getLocalToken();

    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          setCurrentUser(JSON.parse(JSON.stringify(res.data)));
          setAlternateAvatar(getUserFirstLetter(res.data.name));
          setIsLoggedIn(true);
          history.push("/");
        })
        .catch((err) => {
          console.log("No token found", err.message);
          handleModalErrorDisplay(true, errorMessageHandler(err));
        });
    }
  }

  function handleSignOut() {
    localStorage.removeItem("token");
    setCurrentUser({});
    setAlternateAvatar("");
    setIsLoggedIn(false);
    history.push("/");
  }

  useEffect(() => {
    if (latitude && longitude) {
      getForecastWeather(latitude, longitude, APIKey)
        .then((data) => {
          setWeatherData(parseWeatherData(data));
        })
        .catch((error) => {
          console.log("Error fetching forecast weather data:", error);
        });
    }
  }, []);

  useEffect(() => {
    api
      .getCards()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((error) => {
        console.log("Error fetching clothing items:", error);
      });
  }, []);

  useEffect(() => {
    checkAccess();
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
      <CurrentUserContext.Provider
        value={{ isLoggedIn, currentUser, alternateAvatar }}
      >
        <CurrentTemperatureUnitContext.Provider
          value={{
            currentTemperatureUnit,
            handleToggleSwitchChange,
            weatherData,
          }}
        >
          <Router>
            <Header
              weatherData={weatherData}
              onCreateModal={handleAddClothes}
              onSignUp={handleSignup}
              onSignIn={handleSignin}
            />
            <Switch>
              <ProtectedRoute path="/profile">
                <Profile
                  cards={clothingItems}
                  onCardClick={handleCardClick}
                  addClothes={handleAddClothes}
                  handleEditProfile={handleEditProfile}
                  handleSignOut={handleSignOut}
                  handleLikeCard={handleLikeClick}
                />
              </ProtectedRoute>
              <Route path="/main">
                <Main
                  weatherData={weatherData}
                  cards={clothingItems}
                  onCardClick={handleCardClick}
                  handleLikeCard={handleLikeClick}
                />
              </Route>
              <Route path="/">
                {isLoggedIn ? (
                  <Redirect to="/profile" />
                ) : (
                  <Redirect to="/main" />
                )}
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <Footer />

            {activeModal === "signup" && (
              <ValidationContext.Provider
                value={{
                  disableButton,
                  errorDisplay,
                  setDisableButton,
                  handleSubmitButtonChange,
                  closeActiveModal,
                  handleSignupSubmit,
                  setActiveModal,
                  handleModalErrorDisplay,
                }}
              >
                <RegisterModal isLoading={isLoading} />
              </ValidationContext.Provider>
            )}

            {activeModal === "signin" && (
              <ValidationContext.Provider
                value={{
                  disableButton,
                  errorDisplay,
                  setDisableButton,
                  handleSubmitButtonChange,
                  closeActiveModal,
                  handleLoginSubmit,
                  setActiveModal,
                  handleModalErrorDisplay,
                }}
              >
                <LoginModal isLoading={isLoading} />
              </ValidationContext.Provider>
            )}

            {activeModal === "edit" && (
              <ValidationContext.Provider
                value={{
                  disableButton,
                  errorDisplay,
                  setDisableButton,
                  handleSubmitButtonChange,
                  closeActiveModal,
                  handleUpdateSubmit,
                  setActiveModal,
                  handleModalErrorDisplay,
                }}
              >
                <EditProfileModal isLoading={isLoading} />
              </ValidationContext.Provider>
            )}

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
                <AddItemModal isLoading={isLoading} />
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
