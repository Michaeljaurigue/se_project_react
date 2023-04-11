import "../AddItemModal/AddItemModal.css";
import "../ModalWithForm/ModalWithForm.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ onClose }) {
  return (
    <ModalWithForm title="New Garment">
      <button className="modal__close" type="button" onClick={onClose}></button>
      <label className="modal__label">Name</label>
      <input
        className="modal__input modal__input_type_text"
        type="text"
        name="name"
        minLength="1"
        maxLength="30"
        placeholder="Name"
        required
      />

      <span className="modal__error modal__name__error" id="name-error"></span>
      <label className="modal__label">Image</label>
      <input
        className="modal__input modal__input_type_text"
        type="url"
        name="link"
        minLength="1"
        maxLength="30"
        placeholder="Image URL"
        required
      />

      <span className="modal__error modal__link__error" id="link-error"></span>
      <label className="modal__label">Select the weather type:</label>
      <div>
        <div className="modal__radio-container">
          <input
            className="modal__input_radio"
            type="radio"
            name="weatherType"
            id="Hot"
            value="Hot"
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
