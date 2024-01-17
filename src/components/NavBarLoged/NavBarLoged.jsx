import React from "react";
import Styles from "../NavBar/Navbar.module.css";
import Logo from "../../Imagenes/logo-app.png";
import { LiaUserCircleSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ButtonAppBarLoged from "./ButtonAppBarLoged";


function NavBarLoged({user, setUser}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const cerrarSesion = () => {
    setUser([]);


  };

  const link = (() => {
    if(user[1]===0){
      return "/clientservice" // 0 cliente
    } else {
      return "/myservice" // 1 proveedor
    }
  })();


  return (
    <div>
      <div className={Styles.colorNavbar}>
        <div className={Styles.buttonNavbar}>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={Styles.button}
      >
        <Typography className={Styles.buttontext}>
          {user[0]}
        </Typography>
      </Button>
      <LiaUserCircleSolid className={Styles.iconito}/>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Mi Cuenta</MenuItem>
        <MenuItem onClick={cerrarSesion}>Cerrar Sesion</MenuItem>
      </Menu>

        </div>
      </div>
      <div className={Styles.containerNavbar}>
        <ButtonAppBarLoged link={[link,user, setUser]}/>
        <img className={Styles.logo} src={Logo} alt="logo" />
        <Link to="/" className={Styles.link}>
          <h1 className={Styles.navBarButtons}>Home</h1>
        </Link>
        <Link to="/service" className={Styles.link}>
          <h1 className={Styles.navBarButtons}>Servicios</h1>
        </Link>
        <Link to={link} className={Styles.link}>
          <h1 className={Styles.navBarButtons}>Mis Servicios</h1>
        </Link>
      </div>
      <div className={Styles.colorNavbar2}></div>
    </div>
  );
}

export default NavBarLoged;