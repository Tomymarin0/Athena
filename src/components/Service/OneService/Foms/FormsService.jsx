import React, { useState } from "react";
import { Rating, Grid, Paper, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, TextareaAutosize, Stack, Dialog, DialogActions, DialogContent, DialogContentText,DialogTitle } from "@mui/material";
import FormCalificar from "./FormCalificar";
import Styles from "../OneService.module.css";
const FormsService = () => {
  const headerStyle = { margin: 0 };
  const marginTop = { marginTop: 10, align:"right" };


  const horarios = [
    {
      value: 'Mañana',
      label: 'Mañana',
    },
    {
      value: 'Tarde',
      label: 'Tarde',
    },

    {
      value: 'Noche',
      label: 'Noche',
    },
  ];

  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")
  const [edad, setEdad] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [horario, setHorario] = useState("")


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [value, setValue] = React.useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(telefono, email, edad, descripcion, horario)
    setOpen(false);

} 
  

  return (
    <Grid container justifyContent="center" display="block">
      <Paper elevation={20} className={Styles.paperStyle}>
        <Grid align="center">
          <Typography variant="h5" gutterBottom style={headerStyle}>
            Contratar Servicio
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Teléfono"
            name="telefono"
            margin="normal"
            required value={telefono} onChange={e => setTelefono(e.target.value)}
            
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            margin="normal"
            required value={email} onChange={e => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Edad"
            name="edad"
            type="number"
            margin="normal"
            required value={edad} onChange={e => setEdad(e.target.value)}

          />
          <TextField
            multiline rows={4}
            fullWidth
            label="Descripcion"
            name="descripcion"
            type="text"
            placeholder="Deja una breve descripcion de por que solicitas este servicio"
            margin="normal"
            required value={descripcion} onChange={e => setDescripcion(e.target.value)}
          />
              <TextField select fullWidth  label="Horario Preferente" margin="normal" placeholder="Horario Preferente" required value={horario} onChange={e => setHorario(e.target.value)}
                      >
                        {horarios.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
              </TextField>
          <Stack align="center" direction="row" spacing={24} className={Styles.cajaBotones}>
            <Button type="submit" variant="contained" color="primary" style={marginTop}>
              Contratar
            </Button>
            <FormCalificar texto={"Calificar"}/>
          </Stack>

        </form>
      </Paper>
    </Grid>
  );
};

export default FormsService;
