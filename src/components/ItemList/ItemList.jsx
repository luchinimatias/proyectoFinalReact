import PropTypes from "prop-types";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import styles from "./ItemList.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext"; // Importa CartContext aquí

const ItemList = ({ items, isLoading }) => {
  const { addItem, removeOneItem } = useContext(CartContext);

  if (isLoading) {
    return <LoadingIndicator />;
  }
  return (
    <div className={styles["contenedor"]}>
      <ul className={styles["contenedor-items"]}>
        {items.map((item) => (
          <li key={item.id} className={styles["item"]}>
            <div className={styles["item-inner"]}>
              <span className={styles["titulo-item"]}>{item.title}</span>
              <img
                src={"../src/assets/img/" + item.imageId}
                alt={item.title}
                className={styles["img-item"]}
              />
              <span className={styles["precio-item"]}>${item.price}</span>
              <span className={styles["categoria-item"]}>{item.categoryId}</span>
              <div className={styles["button-container"]}>
                <i
                  className={`bi bi-dash-square ${styles["boton-item"]}`}
                  onClick={() => { removeOneItem(item.id); }}
                />

                <i
                  className={`bi bi-plus-square ${styles["boton-item"]}`}
                  onClick={() => { addItem(item, 1); }}
                />
                <Link to={`/item/${item.id}`}>
                  <i className={`bi bi-info-square ${styles["boton-item"]}`} />
                </Link>

              </div>
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