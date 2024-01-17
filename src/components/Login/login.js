import React from 'react';
import { Grid} from '@mui/material';
import Icono from "../../Imagenes/icono home.png";
import Styles from"../Login/login.module.css"
import LoginForm from './Forms/LoginForm';


const Login=({setUser}) =>{


    return (
        <Grid marginBlock="auto" align="center" container spacing={2}>
            <Grid className={Styles.box2} align="center" xs={8} md={6} order={{ xs: 2, md: 1 }} direction="column">
                <LoginForm setUser={setUser}/>
            </Grid>
            <Grid className={Styles.box1} align="left" xs={4} md={4} order={{ xs: 2, md: 1 }} direction="column">
                <div>
                    <div className={Styles.textoAthena}>
                        <h1>Athena Educación</h1>
                        <p>Consulte y busque los servicios particulares que necesita para mejorar sus habilidades y obtener un aprendizaje victorioso</p>
                    </div>
                    <div className={Styles.boxImg}>
                        <img className={Styles.imgSize} src= {Icono} alt ="IconoSection1"/>
                    </div>
                </div>
                    <div className={Styles.footer}>
                </div>
            </Grid>

        </Grid> 
    );
}

export default Login;