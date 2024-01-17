import React from 'react';
import Icono from "../../Imagenes/icono home.png";
import Styles from "./Home.module.css"
import estudio from "../../Imagenes/estudio 1.png"
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer';
function Home() {
    return (
      <div className={Styles.piedepagina}>
    
      <div className={Styles.containerSection1}>
        <div className={Styles.textoAthena}>
            <h1>Athena Educación</h1>
            <p>Consulte y busque los servicios particulares que necesita para mejorar sus habilidades y obtener un aprendizaje victorioso</p>
        </div>
        <div className={Styles.imagenIcono}>
            <img className={Styles.imgSize} src= {Icono} alt ="IconoSection1"/>
        </div>
      </div>
      <div className={Styles.imagenIcono}>
        <img className={Styles.imgEstudio} src= {estudio} alt ="IconoSection1"/>
        <div className={Styles.boxEstudio}>
          <h1 className={Styles.titleEstudio}>Comience aquí su viaje de aprendizaje</h1>
          <p className={Styles.textEstudio}>Athena Educación esta abierta a cualquier estudiante, en cualquier lugar y en cualquier momento. Encontrarás información de aprendizaje de toda clase. Desde cursos de tecnología de la información hasta clases de idioma, música, liderazgo, coaching y programas welness.
Obtendrás habilidades altamente competitivas, desde cualquier lugar, desde el sofá, jardín, camino al trabajo. </p>
          <Link to="/service" className={Styles.boxBotonEstudio}>
            <h1 className={Styles.botonEstudio}>Ver Servicios</h1>
          </Link>
        </div>
      </div>
      <div className={Styles.footer}>
      </div>
      </div>
    );
}

export default Home;