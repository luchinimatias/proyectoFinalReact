import PropTypes from "prop-types";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import styles from "./ItemList.module.css";
import {Link} from "react-router-dom";


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
              <span className={styles["titulo-item"]}>{item.title}</span>
              <Link to={`/item/${item.id}`}>
              <img
                src={"../src/assets/img/" + item.imageId}
                alt={item.title}
                className={styles["img-item"]}
              />
              </Link>
              <span className={styles["precio-item"]}>${item.price}</span>
              <span className={styles["categoria-item"]}>{item.categoryId}</span>

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