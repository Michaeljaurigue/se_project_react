import "../ItemModal/ItemModal.css";

const ItemModal = ({ card, onClose, onDelete }) => {
  return (
    <div className="modal modal__preview" onClick={onClose}>
      <div className="modal__container">
        <button
          className="modal__close-preview"
          type="button"
          onClick={onClose}
        ></button>

        <div className="modal__description-wrap">
          <img className="modal__image" src={card.link} alt="Clothing" />
          <div className="modal__description">{card.name}</div>
          <button className="modal__delete-link" onClick={onDelete}>
            Delete Item
          </button>
        </div>
        <div>
          <div className="modal__description">Weather Type: {card.weather}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
