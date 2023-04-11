import "../AddItemModal/AddItemModal.css";
import "../ModalWithForm/ModalWithForm.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ onClose }) {
  return (
    <ModalWithForm title="New Garment">
      <button className="modal__close" type="button" onClick={onClose}></button>
      <label className="modal__label">
        Name
        <input
          className="modal__input modal__input_type_text"
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
        />
      </label>
      <span className="modal__error name__error" id="name-error"></span>
      <label className="modal__label">
        Image
        <input
          className="modal__input modal__input_type_text"
          type="url"
          name="link"
          minLength="1"
          maxLength="30"
        />
      </label>
      <span className="modal__error name__error" id="name-error"></span>
      <label className="modal__label">Select the weather type:</label>
      <div>
        <div className="modal__radio-container">
          <input
            className="modal__input modal__input_radio"
            type="radio"
            id="hot"
            value="hot"
          />
          <label className="modal__label modal__label_radio">Hot</label>
        </div>
        <div className="modal__radio-container">
          <input
            className="modal__input modal__input_radio"
            type="radio"
            id="Warm"
            value="Warm"
          />
          <label className="modal__label modal__label_radio">Warm</label>
        </div>
        <div className="modal__radio-container">
          <input
            className="modal__input modal__input_radio"
            type="radio"
            id="Cold"
            value="Cold"
          />
          <label className="modal__label modal__label_radio">Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
}

export default AddItemModal;
