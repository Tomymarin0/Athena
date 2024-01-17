import React from "react";
import Styles from "./Navbar.module.css";
import Logo from "../../Imagenes/logo-app.png";
import { Link } from "react-router-dom";
import ButtonAppBar from "./ButtonAppBar";


function NavBar() {
  return (
    <div>
      <div className={Styles.colorNavbar}>
        <div className={Styles.buttonNavbar}>
        </div>
      </div>
      <div className={Styles.containerNavbar}>
        <ButtonAppBar/>
        <img className={Styles.logo} src={Logo} alt="logo" />
        <Link to="/" className={Styles.link}>
          <h1 className={Styles.navBarButtons}>Home</h1>
        </Link>
        <Link to="/service" className={Styles.link}>
          <h1 className={Styles.navBarButtons}>Servicios</h1>
        </Link>
        <Link to="/login" className={Styles.link}>
          <h1 className={Styles.navBarButtons}>Iniciar Sesion</h1>
        </Link>
        <Link to="/register" className={Styles.link}>
          <h1 className={Styles.navBarButtons}>Registrarse</h1>
        </Link>
      </div>
      <div className={Styles.colorNavbar2}></div>
    </div>
  );
}

export default NavBar;
