import * as React from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { TextField, Button, MenuItem, Rating, Typography } from "@mui/material";
import Styles from "../ServiceElemente.module.css"

const tipos = [
  {
    value: 'Individual',
    label: 'Individual',
  },
  {
    value: 'Grupal',
    label: 'Grupal',
  },
];

const categorias = [
  {
    value: 'Programacion',
    label: 'Programacion',
  },
  {
    value: 'Lengua',
    label: 'Lengua',
  },
  {
    value: 'Matematica',
    label: 'Matematica',
  },
  {
    value: 'Ciencias Sociales',
    label: 'Ciencias Sociales',
  },
  {
    value: 'Ciencias Naturales',
    label: 'Ciencias Naturales',
  },
  {
    value: 'Fisica',
    label: 'Fisica',
  },
  {
    value: 'Quimica',
    label: 'Quimica',
  },
  {
    value: 'Historia',
    label: 'Historia',
  },
  {
    value: 'Ingles',
    label: 'Ingles',
  },
  {
    value: 'Portugues',
    label: 'Portugues',
  },

  ];

  const frecuencias = [
    {
      value: 'Semanal',
      label: 'Semanal',
    },
    {
      value: 'Quincenal',
      label: 'Quincenal',
    },
    {
      value: 'Mensual',
      label: 'Mensual',
    },
    {
      value: '2 clases por semana',
      label: '2 clases por semana',
    },
    {
      value: '3 clases por semana',
      label: '3 clases por semana',
    },
    {
      value: '4 clases por semana',
      label: '4 clases por semana',
    },
    {
      value: '5 clases por semana',
      label: '5 clases por semana',
    },
  
    ];

  const duraciones = [
    {
      value: 'Media Hora',
      label: 'Media Hora',
    },
    {
      value: '1 Hora',
      label: '1 Hora',
    },
    {
      value: '1 Hora y media',
      label: '1 Hora y media',
    },
    {
      value: '2 Horas',
      label: '2 Horas',
    },
    {
      value: '2 Horas y media',
      label: '2 Horas y media',
    },
    {
      value: '3 Horas',
      label: '3 Horas',
    },
    {
      value: '3 Horas y media',
      label: '3 Horas y media',
    },
    {
      value: '4 Horas',
      label: '4 Horas',
    },
    {
      value: '4 Horas y media',
      label: '4 Horas y media',
    },
  
    ];

export default function DialogSelect() {
  const [open, setOpen] = React.useState(false);
  const [calificacion, setCalificacion] = React.useState(0);
  const [nombre, setNombre] = useState("")
  const [categoria, setCategoria] = useState("")
  const [duracion, setDuracion] = useState("")
  const [frecuencia, setFrecuencia] = useState("")  
  const [tipo, setTipo] = useState("")

  const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(nombre, categoria, duracion, tipo, frecuencia, calificacion)
      setOpen(false);

  } 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };


  return (
    <div className={Styles.filterButton}>
      <Button onClick={handleClickOpen}variant="contained" color="primary">Filtrar</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Filtros</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <form onSubmit={handleSubmit}>
            <div className={Styles.filterBox}>
              <div className={Styles.individualBox}>
                <TextField style = {{width: 210}} label="Buscar por nombre" margin="normal" placeholder="Buscar por nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
              </div>
              <div className={Styles.individualBox}>
                <TextField select style = {{width: 210}}  label="Categoria" margin="normal" placeholder="Categoria" value={categoria} onChange={e => setCategoria(e.target.value)}
                  >
                    {categorias.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                </TextField>
              </div>
              <div className={Styles.individualBox}>
                <TextField select style = {{width: 210}}  label="Duracion" margin="normal" placeholder="Duracion" value={duracion} onChange={e => setDuracion(e.target.value)}
                  >
                    {duraciones.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                </TextField>
              </div>
              <div className={Styles.individualBox}>
                <TextField select style = {{width: 210}}  label="Frecuencia" margin="normal" placeholder="Frecuencia" value={frecuencia} onChange={e => setFrecuencia(e.target.value)}
                        >
                          {frecuencias.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                </TextField>
              </div>
              <div className={Styles.individualBox}>
                <TextField select style = {{width: 210}}  label="Tipo" margin="normal" placeholder="Tipo" value={tipo} onChange={e => setTipo(e.target.value)}
                  >
                    {tipos.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                </TextField>
              </div>
              <div className={Styles.individualBox}>
                <div className={Styles.ratingbox}>
                   <Typography component="legend" >Calificacion</Typography>
                   <Rating
                      name="simple-controlled"
                      value={calificacion}
                      onChange={(event, newValue) => {
                        setCalificacion(newValue);
                      }}
                    />
                </div>    
              </div>
            </div>
            </form>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSubmit}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  
  );
}