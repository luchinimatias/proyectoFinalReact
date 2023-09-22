import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { getCartTotal, mapCartToOrderItems } from "../../utils";
import { createOrder } from "../../services";
import styles from "../Checkout/Checkout.module.css"
import logo from "../../assets/img/uno.png";

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [emailError, setEmailError] = useState("");

  const { cart, clear } = useContext(CartContext);

  const total = getCartTotal(cart);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validar el correo electrónico con una expresión regular
    if (name === "email") {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const isValidEmail = emailRegex.test(value);
      if (!isValidEmail) {
        setEmailError("Ingresa un correo electrónico válido.");
      } else {
        setEmailError("");
      }
    }
  };

  const handleCheckout = () => {
    if (emailError) {
      // No continuar con la compra si hay un error en el correo electrónico
      return;
    }

    const order = {
      buyer: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
      },
      items: mapCartToOrderItems(cart),
      total,
      date: serverTimestamp(),
    };

    setIsLoading(true);
    createOrder(order).then((docRef) => {
      setOrderId(docRef.id);
      setIsLoading(false);
      clear();
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.invoice}>
        
      <div className={styles.header}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>Factura</h1>
        </div>

        <div className={styles.date}>Fecha: {new Date().toLocaleDateString()}</div>

        <div>
  <h4>Información del Cliente</h4>
  <div className={styles.inputWithIcon}>
    <i className={`bi bi-person ${styles.icon}`}></i>
    <label htmlFor="name">Nombre:</label>
  </div>
  <input
    type="text"
    id="name"
    name="name"
    value={formData.name}
    onChange={handleInputChange}
    required
  />

  <div className={styles.inputWithIcon}>
    <i className={`bi bi-telephone ${styles.icon}`}></i>
    <label htmlFor="phone">Teléfono:</label>
  </div>
  <input
    type="text"
    id="phone"
    name="phone"
    value={formData.phone}
    onChange={handleInputChange}
    required
  />

  <div className={styles.inputWithIcon}>
    <i className={`bi bi-envelope-at ${styles.icon}`}></i>
    <label htmlFor="email">Correo Electrónico:</label>
  </div>
  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleInputChange}
    required
  />
  {emailError && <p className={styles.error}>{emailError}</p>}
</div>
        <div className={styles.productList}>
          <h4>Productos</h4>
          <table className={styles.productTable}>
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Precio por Unidad</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className={styles.productRow}>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>${item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.total}>Total de la compra: ${total}</div>

        <button className={styles.checkoutButton} onClick={handleCheckout}>
          Finalizar compra
        </button>

        {isLoading && <p className={styles.loading}>Procesando compra...</p>}
        {orderId && <p className={styles.orderId}>ID de la Factura: {orderId}</p>}
      </div>
    </div>
  );
};

export default Checkout;