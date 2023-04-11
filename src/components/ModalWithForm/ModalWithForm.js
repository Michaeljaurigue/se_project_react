import "../ModalWithForm/ModalWithForm.css";

const ModalWithForm = ({ children, buttonText, title, onClose }) => {
  return (
    <div className={`modal modal_type_${title}`}>
      <div className="modal__window">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close Modal"
        />
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form">
          <fieldset className="modal__fieldset">
            {children}
            <button className="modal__submit-button" type="submit">
              {buttonText}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
