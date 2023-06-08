import "../ModalWithForm/ModalWithForm.css";
import { ValidationContext } from "../../contexts/ValidationContext";
import { useContext } from "react";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  name,
  handleSubmit,
  alternateButton,
}) => {
  const {
    disableButton,
    closeActiveModal,
    setActiveModal,
    errorDisplay,
    handleModalErrorDisplay,
  } = useContext(ValidationContext);

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
            {alternateButton && (
              <button
                className="modal__button-modifier"
                type="button"
                onClick={() => {
                  setActiveModal(alternateButton.path);
                  handleModalErrorDisplay(false);
                }}
              >
                {alternateButton.text}
              </button>
            )}
            {errorDisplay && (
              <p className="modal__error">{errorDisplay.message}</p>
            )}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
