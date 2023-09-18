import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { getCartTotal } from "../../utils";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clear, addItem, removeOneItem } = useContext(CartContext);

  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  const handleClearCart = () => {
    clear();
  };

  return (
    <div className={styles["contenedor"]}>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className={styles["contenedor-items"]}>
          {cart.map((item) => (
            <li key={item.id} className={styles["item"]}>
              <div>
                <span className={styles["titulo-item"]}>{item.title}</span>
                <img
                  src={"../src/assets/img/" + item.imageId}
                  alt={item.title}
                  className={styles["img-item"]}
                />
                <span className={styles["precio-item"]}>${item.price}</span>
                <span className={styles["item-quantity"]}>
                  Cantidad: {item.quantity}
                </span>
                <div className={styles["button-container"]}>
                  <i
                    className={`bi bi-dash-square ${styles["boton-item"]}`}
                    onClick={() => { removeOneItem(item.id); }}
                  />
                  <Link to={`/item/${item.id}`}>
                    <i className={`bi bi-arrow-90deg-left ${styles["boton-item"]}`}></i>
                  </Link>
                  <i
                    className={`bi bi-plus-square ${styles["boton-item"]}`}
                    onClick={() => { addItem(item, 1); }}
                  />
                  <i
                    className={`bi bi-trash3 ${styles["boton-item"]}`}
                    onClick={() => handleRemoveItem(item.id)}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <div>
          <strong >Total Price: ${getCartTotal(cart)}</strong>
          <button className={styles["botonB"]} onClick={handleClearCart}>Borrar</button>
        </div>
      )}

    </div>
  );
};

export default Cart;

