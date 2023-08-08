const NavBarItem = () => {
    const menuItems = ["HOME", "PRODUCTOS", "SEGURIDAD", "CONTACTOS"];
  
    return (
      <ul className="navbar-nav me-auto">
        {menuItems.map((menuItem, index) => (
          <li key={index} className="nav-item">
            <a className="navbar-brand navLink" href="#">
              {menuItem}
            </a>
          </li>
        ))}
      </ul>
    );
  }
  
  export default NavBarItem;