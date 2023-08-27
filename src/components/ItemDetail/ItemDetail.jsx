import PropTypes from "prop-types";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";

const ItemDetail = ({ item, isLoading }) => {
  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (!item) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>${item.price}</p>
      <p>{item.category}</p>
      <img src={"../src/assets/img/" + item.img} alt={item.name} />
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
};

export default ItemDetail;