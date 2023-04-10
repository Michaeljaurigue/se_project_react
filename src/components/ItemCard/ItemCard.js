import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <li className="card">  
    <div className="card_name">{item.name}</div>
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
