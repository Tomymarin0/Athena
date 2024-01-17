import React, { useState } from "react";
import { Rating, Grid, Paper, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, TextareaAutosize, Stack, Dialog, DialogActions, DialogContent, DialogContentText,DialogTitle } from "@mui/material";
import Styles from "../OneService.module.css";



const FormCalificar = ({texto}) => {

  const marginTop = { marginTop: 10, align:"right" };
  const [calificacion, setCalificacion] = React.useState(0);
  const [comentario, setComentario] = useState("")

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [value, setValue] = React.useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a través de una solicitud o hacer lo que necesites con ellos.
    console.log(calificacion, comentario);
  };

  return (
            <>
            
            <Button className={Styles.buttonCalificar} variant="contained" color="primary" style={marginTop} onClick={handleClickOpen}>
                {texto}
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Calificar</DialogTitle>
              <form onSubmit={handleSubmit}>
                <DialogContent>
                  <DialogContentText>
                    Deja una opinion o reseña respecto a este servicio o proveedor
                  </DialogContentText><br/>
                  <Typography component="legend" >Calificacion</Typography>
                  
                  <Rating
                  name="simple-controlled"
                  value={calificacion}
                  onChange={(event, newValue) => {
                      setCalificacion(newValue);
                  }}
                  />
                  <TextField required multiline rows={4} fullWidth label="Opinion" margin="normal" placeholder="Deja tu opinion" value={comentario} onChange={e => setComentario(e.target.value)} />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancelar</Button>
                  <Button type="submit">Enviar</Button>
                </DialogActions>
              </form>
              
            </Dialog></>
  );
};

export default FormCalificar;