import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Jsoninfo from "../../cards.json";
import Styles from "./OneService.module.css";
import { useNavigate } from "react-router-dom";
import FormsService from "./Foms/FormsService";
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import foto from "../../../Imagenes/buena foto.jpeg";

function OneService() {
  const navigate = useNavigate();
  const { id } = useParams();
  const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
  const [curso, setCurso] = useState(null);
  
  const handleClick = (objetoParaEnviar) => {
    navigate(`/oneservice/${objetoParaEnviar}`);
  };
  useEffect(() => {
    const fetchCurso = async () => {
      try {
        const cursoEncontrado = Jsoninfo.find((e) => e.id === parseInt(id, 10));
        setCurso(cursoEncontrado);
      } catch (error) {
        console.error("Error al obtener la información:", error);
      }
    };
    fetchCurso();
  }, [id]);
  console.log("curso")
  return (
    
    <>
    
    <Grid align="center" container spacing={0}>
      <Grid item xs={12} direction="column" >
        <img className={Styles.imagen} src= {foto} alt ="IconoSection1"/>
      </Grid>
      <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
        <FormsService />
      </Grid>
      <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
      
      {" "}
      
      {" "}
      {curso ? (
        <div>
          {" "}
          <h1 className={Styles.Title}>{curso.nombre}</h1> <p className={Styles.Cuerpo}> {curso.responsable}</p> <p className={Styles.Cuerpo}> {curso.tipo}</p> <p className={Styles.Cuerpo}> {curso.frecuencia}</p> <p className={Styles.duracion}> {curso.duracion}</p>  <p className={Styles.descripcion}> {curso.descripcion}</p> <p className={Styles.Price}>Costo: {curso.costo}</p>{" "}
        </div>

      ) : (
        <p>No se encontró información para el ID proporcionado.</p>
      )}{" "}

      </Grid>
    </Grid>
    <div className={Styles.box2}>
      <div style={{ padding: 14 }} className={Styles.App}>
        <h1 >Comentarios</h1>
        <Paper style={{ padding: "40px 20px" }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={imgLink} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
              <p style={{ textAlign: "left" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                Suspendisse congue vulputate lobortis. Pellentesque at interdum
                tortor. Quisque arcu quam, malesuada vel mauris et, posuere
                sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
                metus, efficitur lobortis nisi quis, molestie porttitor metus.
                Pellentesque et neque risus. Aliquam vulputate, mauris vitae
                tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
                lectus vitae ex.{" "}
              </p>
              <p style={{ textAlign: "left", color: "gray" }}>
                posted 1 minute ago
              </p>
            </Grid>
          </Grid>
          <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={imgLink} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
              <p style={{ textAlign: "left" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                Suspendisse congue vulputate lobortis. Pellentesque at interdum
                tortor. Quisque arcu quam, malesuada vel mauris et, posuere
                sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
                metus, efficitur lobortis nisi quis, molestie porttitor metus.
                Pellentesque et neque risus. Aliquam vulputate, mauris vitae
                tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
                lectus vitae ex.{" "}
              </p>
              <p style={{ textAlign: "left", color: "gray" }}>
                posted 1 minute ago
              </p>
            </Grid>
          </Grid>
          <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={imgLink} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
              <p style={{ textAlign: "left" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                Suspendisse congue vulputate lobortis. Pellentesque at interdum
                tortor. Quisque arcu quam, malesuada vel mauris et, posuere
                sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
                metus, efficitur lobortis nisi quis, molestie porttitor metus.
                Pellentesque et neque risus. Aliquam vulputate, mauris vitae
                tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
                lectus vitae ex.{" "}
              </p>
              <p style={{ textAlign: "left", color: "gray" }}>
                posted 1 minute ago
              </p>
            </Grid>
          </Grid>
        </Paper>
      </div>  
    </div></>
  );
}
export default OneService;
