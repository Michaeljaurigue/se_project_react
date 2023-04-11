import "../ItemModal/ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  console.log("ItemModal");

  return (
    <div className="modal modal__preview">
      <div className="modal__container">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <img className="modal__image" src={selectedCard.link} alt="Clothing" />
        <div className="modal__description-wrap">
          <div className="modal__description">{selectedCard.name}</div>
          <div className="modal__description">
            Weather Type: {selectedCard.weather}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
