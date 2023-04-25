import "../ItemCard/ItemCard.css";

const ItemCard = ({ card, onCardClick }) => {
  return (
    <li className="card">
      <p className="card_name">{card.name}</p>
      <img
        src={card.link}
        alt="Clothing Items"
        className="card_image"
        onClick={() => {
          onCardClick(card);
        }}
      />
    </li>
  );
};

export default ItemCard;
