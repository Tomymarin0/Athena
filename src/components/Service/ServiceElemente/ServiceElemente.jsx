import React, { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Json from "../../cards.json";
import Styles from "./ServiceElemente.module.css"
import DialogSelect from "./Forms/DialogSelect";


function ServiceElemente() {
  const navigate = useNavigate();
  const [cursos, setCursos] = useState([]);
  
  useEffect(() => {
    setCursos(Json);
  }, []);
  const handleClick = (objetoParaEnviar) => {
    navigate(`/oneservice/${objetoParaEnviar}`);

  };
 
  return (


    <>  <br/>
    <DialogSelect/>
    <br/>
    
    <div className={Styles.containerCards}>
        {" "}

        {cursos.map((prop, index) => (
          <div key={index} className={Styles.stylesCard}>
            {" "}
            <div className={Styles.divTitle}>
              {prop.nombre && <h1 className={Styles.cardTitle}> {prop.nombre}</h1>}{" "}
            </div>
            <div className={Styles.divResponsable}>
              {prop.responsable && <h3 className={Styles.cardResponsable}>Tutor: {prop.responsable}</h3>}{" "}
            </div>
            <div className={Styles.divResponsable}>
              {prop.tipo && <p className={Styles.cardResponsable}>Tipo: {prop.tipo}</p>}{" "}
            </div>
            <div className={Styles.divResponsable}>
              {prop.duracion && <p className={Styles.cardResponsable}>Duración: {prop.duracion}</p>}{" "}
            </div>
            <div className={Styles.divResponsable}>
              {prop.frecuencia && <p className={Styles.cardResponsable}>Frecuencia: {prop.frecuencia}</p>}{" "}
            </div>
            <div className={Styles.divcalificacion}>
              <Rating
                name="simple-controlled"
                value={prop.calificacion}
                readOnly
              />
            </div>
            <div className={Styles.divPrice}>
              {prop.costo && (
                <div>
                  {" "}
                  <h2 className={Styles.cardPrice}>{prop.costo}</h2>{" "}
                </div>
              )}{" "}
            </div>
            <div className={Styles.ButtonDiv}>
              <button className={Styles.cardButton} onClick={() => handleClick(prop.id)}>Ver Mas</button>{" "}
            </div>
          </div>
        ))}{" "}
      </div></>
  );
}
export default ServiceElemente;

