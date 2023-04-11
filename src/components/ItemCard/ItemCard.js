import "../ItemCard/ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <li className="card">
      <p className="card_name">{item.name}</p>
      <img
        src={item.link}
        alt="Clothing Items"
        className="card_image"
        onClick={() => onSelectCard(item)}
      />
    </li>
  );
};

export default ItemCard;
