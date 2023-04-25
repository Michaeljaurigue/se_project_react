import "../AddItemModal/AddItemModal.css";
import "../ModalWithForm/ModalWithForm.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect, useContext } from "react";
import {
  ValidationContext,
  showInputError,
  hideInputError,
} from "../../contexts/ValidationContext";

function AddItemModal({ onClose, isLoading }) {
  const { setDisableButton, handleAddItemSubmit } =
    useContext(ValidationContext);
  const [nameState, setNameState] = useState({
    valid: false,
    value: "",
  });
  const [linkState, setLinkState] = useState({
    valid: false,
    value: "",
  });
  const [weatherState, setWeatherState] = useState("");

  function checkInputValidity(e) {
    if (e.target.checkValidity()) {
      hideInputError(e.target);
      return true;
    } else {
      showInputError(e.target, e.target.validationMessage);
      return false;
    }
  }
  function handleNameChange(e) {
    setNameState({ valid: checkInputValidity(e), value: e.target.value });
  }

  function handleLinkChange(e) {
    setLinkState({
      valid: checkInputValidity(e),
      value: e.target.value,
    });
  }

  function handleWeatherChange(e) {
    setWeatherState(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleAddItemSubmit(nameState.value, linkState.value, weatherState);
  }

  useEffect(() => {
    setDisableButton(!(nameState.valid && linkState.valid && weatherState));
  }, [nameState, linkState, weatherState, setDisableButton]);

  useEffect(() => {
    setNameState({ valid: false, value: "" });
    setLinkState({ valid: false, value: "" });
    setWeatherState();
  }, []);

  return (
    <ModalWithForm
      title="New Garment"
      name="new-card"
      buttonText={isLoading ? "Saving..." : "Save"}
      handleSubmit={handleSubmit}
    >
      <button className="modal__close" type="button" onClick={onClose}></button>
      <label className="modal__label">Name</label>
      <input
        className="modal__input modal__input_type_text"
        type="text"
        name="name"
        minLength="1"
        maxLength="30"
        placeholder="Name"
        id="name"
        required
        value={nameState.value}
        onChange={handleNameChange}
      />

      <span
        className="modal__error name__error modal__name__error"
        id="name-error"
      ></span>
      <label className="modal__label">Link</label>
      <input
        className="modal__input modal__input_type_text"
        type="url"
        name="link"
        minLength="1"
        maxLength="30"
        id="link"
        placeholder="Image URL"
        required
        value={linkState.value}
        onChange={handleLinkChange}
      />

      <span
        className="modal__error link__error modal__link__error"
        id="link-error"
      ></span>
      <label className="modal__label">Select the weather type:</label>
      <div>
        <div className="modal__radio-container">
          <input
            className="modal__input_radio"
            type="radio"
            name="weatherType"
            id="Hot"
            value="Hot"
            onChange={handleWeatherChange}
          />
          <label className="modal__label_radio" htmlFor="Hot">
            Hot
          </label>
        </div>
        <div className="modal__radio-container">
          <input
            className="modal__input_radio"
            type="radio"
            name="weatherType"
            id="Warm"
            value="Warm"
            onChange={handleWeatherChange}
          />
          <label className="modal__label_radio" htmlFor="Warm">
            Warm
          </label>
        </div>
        <div className="modal__radio-container">
          <input
            className=" modal__input_radio"
            type="radio"
            name="weatherType"
            id="Cold"
            value="Cold"
            onChange={handleWeatherChange}
          />
          <label className=" modal__label_radio" htmlFor="Cold">
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
}

export default AddItemModal;
