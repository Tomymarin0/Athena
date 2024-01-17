import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logo from "../../Imagenes/logo-app - mobile.png";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={Styles.mobileBar} sx={{ flexGrow: 1 }}>
      <AppBar className={Styles.mobileBar} position="static">
        <Toolbar className={Styles.mobileBar} >
          <IconButton 
            size="large"
            edge="start"
            color="default"
            aria-label="menu"
            onClick={handleClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >     
            <MenuItem onClick={handleClose} ><Link to="/" className={Styles.linkMobile}>Home</Link></MenuItem>
            <MenuItem onClick={handleClose} ><Link to="/service" className={Styles.linkMobile}>Servicios</Link></MenuItem>
            <MenuItem onClick={handleClose} ><Link to="/login" className={Styles.linkMobile}>Iniciar Sesion</Link></MenuItem>
            <MenuItem onClick={handleClose} ><Link to="/register" className={Styles.linkMobile}>Registrarse</Link></MenuItem>

          </Menu>          
          <img className={Styles.logoMobile} src={Logo} alt="logo" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}