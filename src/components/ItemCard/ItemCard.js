import "../ItemCard/ItemCard.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useState } from "react";

const ItemCard = ({ card, onCardClick, handleLikeCard }) => {
  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);
  const [isLiked, setIsLiked] = useState(
    card.likes.some((like) => like === currentUser._id)
  );

  function handleLikeClick(e) {
    e.stopPropagation();
    handleLikeCard(card._id, isLiked);
    setIsLiked(!isLiked);
  }

  function setLikeButtonClassNames() {
    return isLiked
      ? "card__like-button card__like-button_active"
      : "card__like-button";
  }

  return (
    <li
      key={card._id}
      className="card"
      style={{ backgroundImage: `url(${card.imageUrl})` }}
      onClick={() => {
        onCardClick(card);
      }}
    >
      <div className="card__header">
        <p className="card__name">{card.name}</p>
        {isLoggedIn && (
          <button
            className={setLikeButtonClassNames()}
            alt="Like"
            onClick={handleLikeClick}
          ></button>
        )}
      </div>
    </li>
  );
};

export default ItemCard;
