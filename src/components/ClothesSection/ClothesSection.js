import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ClothesSection({ cards, onCardClick, addClothes, handleLikeCard }) {
const { currentUser } = useContext(CurrentUserContext);

  return (
    <>
      <div className="clothes__main-text">
        <p className="clothes__your-items">Your Items</p>
        <p className="clothes__add-clothes" onClick={addClothes}>
          + Add new
        </p>
      </div>
      <ul className="clothes__cards">
        {cards
        .filter((card) => card.owner === currentUser._id)
        .map((filteredCard) => (
          <ItemCard
          key={filteredCard._id}
          card={filteredCard}
          onCardClick={onCardClick}
          handleLikeCard={handleLikeCard}
          />
        ))}
        {/* {cards.map((card) => (
          <ItemCard key={card.id} card={card} onCardClick={onCardClick} />
        ))} */}
      </ul>
    </>
  );
}

export default ClothesSection;
