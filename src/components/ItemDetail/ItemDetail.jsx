import PropTypes from "prop-types";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import styles from "./ItemDetail.module.css";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { useContext } from "react";

const ItemDetail = ({ item, isLoading }) => {
  const { addItem, removeOneItem } = useContext(CartContext);
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
          <div>
            <img src={"../src/assets/img/" + item.imageId} alt={item.title} className={styles["img-item"]} />
          </div>
          <div>
            <span className={styles["titulo-item"]}>{item.title}</span>
            <span className={styles["description-item"]}>{item.description}</span>
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
              <Link to={`/`}>
                <i className={`bi bi-house ${styles["boton-item"]}`} />
              </Link>
              <Link to={`/cart`}>
                <i className={`bi bi-cart ${styles["boton-item"]}`} />
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  addItem: PropTypes.func,
  removeOneItem: PropTypes.func,
};

export default ItemDetail;