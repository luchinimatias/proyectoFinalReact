import NavBar from "../nav/navBar/NavBar";


// eslint-disable-next-line react/prop-types
const Nav = ({ imageLogo }) => {
    const menuItems = ["HOME", "PRODUCTOS", "SEGURIDAD", "CONTACTOS"];
    const productoItems = ["ALARMAS", "CAMARAS", "CERCOS ELECTRICOS"];
    const cartQuantity = 1;
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiar bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src={imageLogo} alt="Logo" width="180" height="100" className="d-inline-block align-text-top" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavBar menuItems={menuItems} cartQuantity={cartQuantity} productoItems={productoItems} />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;