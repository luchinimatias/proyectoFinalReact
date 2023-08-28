import PropTypes from "prop-types";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ item, isLoading }) => {
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
        <img src={"../src/assets/img/" + item.img} alt={item.name} className={styles["img-item"]}/>
        <span className={styles["titulo-item"]}>{item.name}</span>
        <span className={styles["precio-item"]}>${item.price}</span>
        <span className={styles["categoria-item"]}>{item.category}</span>
        <button className={styles["boton-item"]}>Agregar al Carrito</button>
        </li>
      </ul>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
};

export default ItemDetail;