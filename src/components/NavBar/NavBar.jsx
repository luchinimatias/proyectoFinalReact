/* eslint-disable react/prop-types */
import CartWidget from "../CartWidget/CartWidget";
import NavBarItem from "../NavBarItem/NavBarItem";
import {Link} from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src="https://i.postimg.cc/prY6SW5x/isologotipo-imprimir-opcion-1.png" alt="Logo" width="180" height="100" className="d-inline-block align-text-top animate__animated animate__bounce animate__delay-2s" />
        </Link>
        <NavBarItem /> {/* Renderiza el componente NavBarItem */}
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;