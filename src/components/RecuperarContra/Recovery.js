import React, { useState } from 'react';
import { Avatar, Grid, Paper, TextField, Typography, Link, Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Icono from "../../Imagenes/icono home.png";
import Styles from"../Login/login.module.css"


const Recovery=() =>{
    const avatarStyle={backgroundColor:'#1B6DC1'}
    const [mail, setMail] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log([mail])

    } 

    return (
        <Grid marginBlock="auto" align="center" container spacing={2}>
            <Grid className={Styles.box2} align="center" xs={8} md={6} order={{ xs: 2, md: 1 }} direction="column">
                <Paper elevation={20} className={Styles.paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockIcon/></Avatar>                       
                        <Typography variant="h5" gutterBottom>Recuperar Contraseña</Typography>
                    </Grid>
                    <form onSubmit={handleSubmit}>
                    <TextField fullWidth type="email" margin="normal" placeholder="Ingrese su correo electronico"  required value={mail} onChange={e => setMail(e.target.value)}/>
                    <Button align="center" type="submit" variant="contained" color="primary">Recuperar Contraseña</Button>
                    </form>
                    <br/>
                    <br/>
                    <Typography> Enviaremos en breve un mail al correo electronico asociado a este usuario para que pueda reiniciar su contraseña
                    </Typography>
                    <br/>
                    <Typography> ¿No tiene su cuenta aun?
                    <br/>
                    <Link href="/register">
                        Registrarse
                    </Link>
                    </Typography>
       
                </Paper>
            </Grid>
            <Grid className={Styles.box1} align="left" xs={4} md={4} order={{ xs: 2, md: 1 }} direction="column">
                <div >
                    <div className={Styles.textoAthena}>
                        <h1>Athena Educación</h1>
                        <p>Consulte y busque los servicios particulares que necesita para mejorar sus habilidades y obtener un aprendizaje victorioso</p>
                </div>
                <div className={Styles.imagenIcono}>
                    <img className={Styles.imgSize} src= {Icono} alt ="IconoSection1"/>
                </div>
                </div>
            </Grid>


        </Grid> 
    );
}

export default Recovery;