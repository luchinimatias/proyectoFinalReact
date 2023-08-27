import PropTypes from "prop-types";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <p>{item.category}</p>
            <img src={"../src/assets/img/" + item.img} alt={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ItemList;