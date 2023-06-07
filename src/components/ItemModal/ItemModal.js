import "../ItemModal/ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemModal = ({ card, onClose, onDelete }) => {
  const { currentUser } = useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser._id;

  const itemDeleteButtonClassName = `item__delete ${
    isOwn ? "item__delete_visible" : "item__delete_hidden"
  }`;

  return (
    <div className="modal modal__preview" onClick={onClose}>
      <div className="modal__container">
        <button
          className="modal__close-preview"
          type="button"
          onClick={onClose}
        ></button>
        <img className="modal__image" src={card.link} alt={card.name} />
        <div className="modal__description-wrap">
          <div className="modal__description">{card.name}</div>
          {isOwn && (
            <p className={itemDeleteButtonClassName} onClick={onDelete}>
              Delete Item
            </p>
          )}
        </div>
        <div>
          <div className="modal__description">Weather Type: {card.weather}</div>
          <div className="modal__description">Likes: {card.likes.length}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
