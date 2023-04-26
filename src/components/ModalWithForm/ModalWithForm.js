import "../ModalWithForm/ModalWithForm.css";
import { ValidationContext } from "../../contexts/ValidationContext";
import { useContext } from "react";

const ModalWithForm = ({ children, buttonText, title, name, handleSubmit }) => {
  const { disableButton, closeActiveModal } = useContext(ValidationContext);

  return (
    <div className={`modal modal_type_${name}`} onClick={closeActiveModal}>
      <div className="modal__window">
        <button
          className="modal__close"
          type="button"
          onClick={closeActiveModal}
          aria-label="Close Modal"
        />
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" onSubmit={handleSubmit}>
          <fieldset className="modal__fieldset">
            {children}
            <button
              className="modal__submit-button"
              type="submit"
              disabled={disableButton}
            >
              {buttonText}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
