import "../Header/Header.css";
import avatarImage from "../../images/avatar.svg";
import logoImage from "../../images/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const Header = ({ onCreateModal, weatherData }) => {
  return (
    <header className="header">
      <div className="header__logo-date">
        <Link to="/">
          <img src={logoImage} alt="logo" className="header__logo" />
        </Link>
        <div className="header__date">Chicago, 2023</div>
      </div>
      <div className="header__button-avatar">
        <ToggleSwitch />
        <button type="click" onClick={onCreateModal} className="header__button">
          + Add Clothes
        </button>
        <Link to="/profile" className="header__profile-link">
          <div className="header__username">Terrence Tegegne</div>
          <div>
            <img src={avatarImage} alt="avatar" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
