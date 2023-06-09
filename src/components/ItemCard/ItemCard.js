import "../ItemCard/ItemCard.css";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ card, onCardClick, handleLikeCard }) => {
  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(card.likes.some((like) => like === currentUser._id));
  }, [card, currentUser]);

  async function handleLikeClick(e) {
    e.stopPropagation();

    // Optimistically update local state
    setIsLiked(!isLiked);

    try {
      // Make the server request to update actual data
      await handleLikeCard(card._id, !isLiked);
    } catch (error) {
      console.error("Failed to update like status:", error);
      // Revert local state if server request fails
      setIsLiked(!isLiked);
    }
  }

  function setLikeButtonClassNames() {
    return isLiked
      ? "card__like-button card__like-button_active"
      : "card__like-button";
  }

  return (
    <li
      key={currentUser._id}
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
