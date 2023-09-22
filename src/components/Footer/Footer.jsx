import styles from "./Footer.module.css";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className={styles["contenedorBanner"]}>
      <div>
        <Link to="https://wa.me/3515913415" className={styles["img"]}>
          <i className="bi bi-whatsapp"></i>
        </Link>
        <Link to="mailto:ventas@iptecnology.com.ar" className={styles["img"]}>
          <i className="bi bi-envelope-at"></i>
        </Link>
        <Link to="https://www.instagram.com/iptecnology/?hl=es" className={styles["img"]}>
          <i className="bi bi-instagram"></i>
        </Link>
        <Link to="https://www.facebook.com/iptecnology/" className={styles["img"]}>
          <i className="bi bi-facebook"></i>
        </Link>
        <Link to="https://mobile.twitter.com/iptecnology" className={styles["img"]}>
          <i className="bi bi-twitter"></i>
        </Link>
        <Link to="https://www.youtube.com/channel/UCfqPimoDu485InK7HjsJtIQ" className={styles["img"]}>
          <i className="bi bi-youtube"></i>
        </Link>

      </div>
      <div className={styles["text"]}>
        <a>Propietario Iptecnology © 2018-2023</a>
      </div>

    </div>
  );
};

export default Footer;