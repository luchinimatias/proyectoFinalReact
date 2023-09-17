import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { getCartQuantity } from "../../utils";


const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const quantity = getCartQuantity(cart);

  return <div> <button className="btn btn-outline-primary position-relative buttonCW">
  <i className="bi bi-cart"></i>
  {quantity > 0 && (
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      {quantity}
      <span className="visually-hidden">product in cart</span>
    </span>
  )}
</button> </div>;
};

export default CartWidget;