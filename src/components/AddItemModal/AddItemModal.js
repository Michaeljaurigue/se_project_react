const AddItemModal = ({ selectedCard, onClose }) => {
  console.log("AddItemModal");

  return (
    <div className={"modal"}>
      <div className="modal__content">
        <button type="button" onClick={onClose}>
          Close
        </button>
        <img src={selectedCard.link} alt="Clothing" />
        <div>{selectedCard.name}</div>
        <div>Weather Type: {selectedCard.weather}</div>
      </div>
    </div>
  );
};

export default AddItemModal;
