import {NavLink} from "react-router-dom";

const NavBarItem = () => {
    const menuItems = ["Alarmas", "Video", "Accesos", "Complementos", "Incendio"];
  
    return (
      <ul className="navbar-nav me-auto">
        {menuItems.map((menuItem, index) => (
          <li key={index} className="nav-item">
            <NavLink className="navbar-brand navLink" to={`/category/${menuItem}`} activeClassName="active">
              {menuItem}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }
  
  export default NavBarItem;