import "../Header/Header.css";
// import avatarImage from "../../images/avatar.svg";
import logoImage from "../../images/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const Header = ({ onCreateModal, weatherData, onSignUp, onSignIn }) => {
  const { isLoggedIn, currentUser, alternateAvatar } =
    useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo-date">
        <Link to="/">
          <img src={logoImage} alt="logo" className="header__logo" />
        </Link>
        <div className="header__date">
          {currentDate}, {weatherData.city}
        </div>
      </div>
      <div className="header__button-avatar">
        <ToggleSwitch />
        {!isLoggedIn && (
          <button
            className="header__button header__button_type_signup"
            onClick={onSignUp}
          >
            Sign Up
          </button>
        )}
        {isLoggedIn && (
          <button
            type="click"
            onClick={onCreateModal}
            className="header__button"
          >
            + Add Clothes
          </button>
        )}
        {!isLoggedIn && (
          <button
            className="header__button header__button_type_signin"
            onClick={onSignIn}
          >
            Log In
          </button>
        )}
        {isLoggedIn && (
          <Link to="/profile" className="header__profile-link">
            <p className="header__username">{currentUser.name}</p>
            {currentUser.avatar !==
            "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Elise.png?etag=0807a449ad64b18fe7cd94781c622e6d" ? (
              <img
                className="header__avatar"
                src={currentUser.avatar}
                alt="avatar"
              />
            ) : (
              <p className="header__default-avatar">{alternateAvatar}</p>
            )}
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
