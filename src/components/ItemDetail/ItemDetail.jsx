import PropTypes from "prop-types";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ item, isLoading, addItem}) => {
  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (!item) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className={styles["contenedor"]}>
      <ul className={styles["contenedor-items"]}>
      <li key={item.id} className={styles["item"]}>
        <img src={"../src/assets/img/" + item.imageId} alt={item.title} className={styles["img-item"]}/>
        <span className={styles["titulo-item"]}>{item.title}</span>
        <span className={styles["description-item"]}>{item.description}</span>
        <span className={styles["precio-item"]}>${item.price}</span>
        <span className={styles["categoria-item"]}>{item.categoryId}</span>
        <button className={styles["boton-item"]} onClick={() => addItem(item, 1)}>Agregar al Carrito</button>
        </li>
      </ul>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  addItem: PropTypes.func,
};

export default ItemDetail;