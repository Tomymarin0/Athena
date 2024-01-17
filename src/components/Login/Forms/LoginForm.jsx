import React, { useState } from "react";
import { Avatar, Link, Grid, Paper, Typography, TextField, Button } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Styles from "../login.module.css";


const LoginForm = ({setUser}) => {
    const avatarStyle={backgroundColor:'#1B6DC1'}
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const type= Math.floor(Math.random() * (1 - 0 + 1))  //0 cliente 1 proveedor
    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser([nombre, type])

    }

  return (
    <Grid container justifyContent="center" display="block">
      <Paper elevation={20} className={Styles.paperStyle}>
        <form onSubmit={handleSubmit}> 
        <Grid align='center'>
            <Avatar style={avatarStyle}><LockIcon/></Avatar>                       
            <Typography variant="h5" gutterBottom>Iniciar Sesion</Typography>
        </Grid>
        <TextField type="text" fullWidth margin="normal" placeholder="Usuario" required value={nombre} onChange={e => setNombre(e.target.value)}/>
        <TextField type="password" fullWidth margin="normal" placeholder="Contraseña" required value={contraseña} onChange={e => setContraseña(e.target.value)}/>
        <Button align="center" type="submit" variant="contained" color="primary">Iniciar Sesion</Button><br/>
        <FormControlLabel 
            control={<Checkbox default />} label="Recordame" 
        />

        <Typography> ¿No puede acceder a tu cuenta?
        <br/>
        <Link href="/recovery">
            Olvide contraseña
        </Link>
        </Typography>
        <Typography> ¿No tiene su cuenta aun?
        <br/>
        <Link href="/register">
            Registrarse
        </Link>
        </Typography>

        </form>
      </Paper>
    </Grid>
  );
};

export default LoginForm;
