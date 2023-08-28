import PropTypes from "prop-types";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import styles from "./ItemList.module.css";

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <div className={styles["contenedor"]}>
      <ul className={styles["contenedor-items"]}>
        {items.map((item) => (
          <li key={item.id} className={styles["item"]}>
            <div className={styles["item-inner"]}>
              <span className={styles["titulo-item"]}>{item.name}</span>
              <img
                src={"../src/assets/img/" + item.img}
                alt={item.name}
                className={styles["img-item"]}
              />
              <span className={styles["precio-item"]}>${item.price}</span>
              <span className={styles["categoria-item"]}>{item.category}</span>

              <button className={styles["boton-item"]}>Agregar al Carrito</button>
            </div>
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