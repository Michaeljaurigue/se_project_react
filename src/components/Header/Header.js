import "../Header/Header.css";
import avatarImage from "../../images/avatar.svg";
import logoImage from "../../images/logo.svg";

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__logo-date">
        <div>
          <img src={logoImage} alt="logo" className="header__logo" />
        </div>
        <div className="header__date">Chicago, 2023</div>
      </div>
      <div className="header__button-avatar">
        <button type="click" onClick={onCreateModal} className="header__button">
          + Add Clothes
        </button>

        <div className="header__username">Terrence Tegegne</div>
        <div>
          <img src={avatarImage} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
