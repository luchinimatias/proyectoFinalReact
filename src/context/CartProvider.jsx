import { useState } from "react";
import CartContext from "./CartContext";

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    const itemInCart = cart.find((item) => item.id === id);
    return !!itemInCart;
  };

  const addItem = (product, quantity) => {
    const itemInCart = isInCart(product.id);

    if (itemInCart) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const removeOneItem = (id) => {
    const itemToRemove = cart.find((item) => item.id === id);

    if (itemToRemove) {
      if (itemToRemove.quantity > 1) {
        const newCart = cart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
        setCart(newCart);
      } else {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
      }
    }
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, removeOneItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;