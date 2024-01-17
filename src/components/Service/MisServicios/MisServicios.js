import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Rating, Grid, Paper, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, TextareaAutosize, Stack, Dialog, DialogActions, DialogContent, DialogContentText,DialogTitle } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import "./misServicios.css";
import Styles from "../ServiceElemente/ServiceElemente.module.css";



const marginTop = { marginTop: 10, align:"right", width:"10em", marginBottom: 10};

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'Nombre', headerName: 'Nombre', width: 400, editable: true },
  { field: 'TipoServicio', headerName: 'TipoServicio', width: 150, editable: true },
  { field: 'Duración', headerName: 'Duración', width: 150, editable: true },
  {
    field: 'Frecuencia',
    headerName: 'Frecuencia',
    description: 'cada cuanto se presta el servicio, una vez por semana etc',
    sortable: false,
    width: 150,
  },
  { field: 'Costo', headerName: 'Costo', width: 90 },
  { field: 'Estado', headerName: 'Estado', width: 150, editable: true },
];

const colSol = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'Estado', headerName: 'Estado', width: 200, editable: false },
  { field: 'Servicio', headerName: 'Servicio', width: 400, editable: false },
  { field: 'Costo', headerName: 'Costo', width: 90 },
  { field: 'Usuario', headerName: 'Usuario', width: 200, editable: false },
  { field: 'Mail', headerName: 'Mail', width: 200, editable: false },
  { field: 'Edad', headerName: 'Edad', width: 90, editable: false },
  { field: 'Horario', headerName: 'Horario Preferente', width: 200, editable: false },
  {
    field: 'Descripcion',
    headerName: 'Descripcion',
    sortable: false,
    width: 1000,
  },
];

const rowSol = [
  {id:1, Estado:"Aceptado", Servicio: 'Machine Learning Avanzado', Costo: "22500",Usuario:"Benja2004", Mail:"test@test.com", Edad: 23, Horario: "Mañana", Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanluctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis. Pellentesque at interdumtortor. Quisque arcu quam, malesuada vel mauris et, posueresagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elitmetus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam"},
  {id:2, Estado:"Solicitado", Servicio: 'Machine Learning Avanzado', Costo: "22500",Usuario:"Benja2004", Mail:"test@test.com", Edad: 23, Horario: "Mañana", Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanluctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis. Pellentesque at interdumtortor. Quisque arcu quam, malesuada vel mauris et, posueresagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elitmetus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam"},
  {id:3, Estado:"Finalizado", Servicio: 'Machine Learning Avanzado', Costo: "22500",Usuario:"Benja2004", Mail:"test@test.com", Edad: 23, Horario: "Mañana", Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanluctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis. Pellentesque at interdumtortor. Quisque arcu quam, malesuada vel mauris et, posueresagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elitmetus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam"},
  {id:4, Estado:"Cancelado", Servicio: 'Machine Learning Avanzado', Costo: "22500",Usuario:"Benja2004", Mail:"test@test.com", Edad: 23, Horario: "Mañana", Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanluctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis. Pellentesque at interdumtortor. Quisque arcu quam, malesuada vel mauris et, posueresagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elitmetus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam"},
  {id:5, Estado:"Aceptado", Servicio: 'Machine Learning Avanzado', Costo: "22500",Usuario:"Benja2004", Mail:"test@test.com", Edad: 23, Horario: "Mañana", Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanluctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis. Pellentesque at interdumtortor. Quisque arcu quam, malesuada vel mauris et, posueresagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elitmetus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam"},
  {id:6, Estado:"Solicitado", Servicio: 'Machine Learning Avanzado', Costo: "22500",Usuario:"Benja2004", Mail:"test@test.com", Edad: 23, Horario: "Mañana", Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanluctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis. Pellentesque at interdumtortor. Quisque arcu quam, malesuada vel mauris et, posueresagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elitmetus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam"},
  {id:7, Estado:"Aceptado", Servicio: 'Machine Learning Avanzado', Costo: "22500",Usuario:"Benja2004", Mail:"test@test.com", Edad: 23, Horario: "Mañana", Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanluctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis. Pellentesque at interdumtortor. Quisque arcu quam, malesuada vel mauris et, posueresagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elitmetus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam"},
  {id:8, Estado:"Solicitado", Servicio: 'Machine Learning Avanzado', Costo: "22500",Usuario:"Benja2004", Mail:"test@test.com", Edad: 23, Horario: "Mañana", Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanluctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis. Pellentesque at interdumtortor. Quisque arcu quam, malesuada vel mauris et, posueresagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elitmetus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam"},
  {id:9, Estado:"Aceptado", Servicio: 'Machine Learning Avanzado', Costo: "22500",Usuario:"Benja2004", Mail:"test@test.com", Edad: 23, Horario: "Mañana", Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanluctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis. Pellentesque at interdumtortor. Quisque arcu quam, malesuada vel mauris et, posueresagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elitmetus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam"},
  {id:10, Estado:"Finalizado", Servicio: 'Machine Learning Avanzado', Costo: "22500",Usuario:"Benja2004", Mail:"test@test.com", Edad: 23, Horario: "Mañana", Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanluctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis. Pellentesque at interdumtortor. Quisque arcu quam, malesuada vel mauris et, posueresagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elitmetus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam"},
];

const rows = [
  { id: 1, Nombre: 'Machine Learning Avanzado', TipoServicio: 'IA', Duración: '3 semanas', Frecuencia: '2 veces por semana', Costo: "22500", Estado: "Publicado" },
  { id: 2, Nombre: 'Desarrollo de Videojuegos con Unity', TipoServicio: 'Programación', Duración: '4 semanas', Frecuencia: '1 vez por semana', Costo: "22500", Estado: "Despublicado" },
  { id: 3, Nombre: 'Fundamentos de Java', TipoServicio: 'Programación', Duración: '5 semanas', Frecuencia: '1 vez por semana', Costo: "22500", Estado: "Publicado" },
  { id: 4, Nombre: 'Diseño de Interfaces de Usuario', TipoServicio: 'Diseño IU', Duración: '16 semanas', Frecuencia: '1 vez por semana', Costo: "22500", Estado: "Publicado" },
  { id: 5, Nombre: 'Ciberseguridad y Hacking Ético', TipoServicio: 'Ciberseguridad', Duración: '3 semanas', Frecuencia: '1 vez por semana', Costo: "22500", Estado: "Despublicado" },
  { id: 6, Nombre: 'Desarrollo de Aplicaciones Empresariales con Java', TipoServicio: null, Duración: '3 semanas', Frecuencia: '1 vez por semana', Costo: "22500", Estado: "Publicado" },
  { id: 7, Nombre: 'Programación Funcional con Haskell', TipoServicio: 'Programación', Duración: '3 semanas', Frecuencia: '1 vez por semana', Costo: "22500", Estado: "Despublicado" },
  { id: 8, Nombre: 'Desarrollo de Aplicaciones con Vue.js', TipoServicio: 'Programación', Duración: '3 semanas', Frecuencia: '1 vez por semana', Costo: "22500", Estado: "Despublicado" },
  { id: 9, Nombre: 'Desarrollo de Aplicaciones con Flutter', TipoServicio: 'Programación', Duración: '3 semanas', Frecuencia: '1 vez por semana', Costo: "22500", Estado: "Publicado" },
];

const colCom = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'Estado', headerName: 'Estado', width: 200, editable: false },
  { field: 'Servicio', headerName: 'Servicio', width: 400, editable: false },
  { field: 'Usuario', headerName: 'Usuario', width: 200, editable: false },
  { field: 'Mail', headerName: 'Mail', width: 200, editable: false },
  { field: 'Calificacion', headerName: 'Calificacion', width: 200, editable: false },
  {
    field: 'Comentario',
    headerName: 'Comentario',
    sortable: false,
    width: 1000,
  },
];

const rowCom = [
  {id:1, Estado:"Aceptado", Servicio: 'Machine Learning Avanzado', Usuario:"Benja2004", Mail:"test@test.com", Calificacion: "Muy Bueno", Comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanluctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis. Pellentesque at interdumtortor. Quisque arcu quam, malesuada vel mauris et, posueresagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elitmetus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam"},
  {id:2, Estado:"Eliminado", Servicio: 'Machine Learning Avanzado', Usuario:"Benja2004", Mail:"test@test.com", Calificacion: "Muy Malo", Comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanluctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis. Pellentesque at interdumtortor. Quisque arcu quam, malesuada vel mauris et, posueresagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elitmetus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam"},
  {id:3, Estado:"Aceptado", Servicio: 'Machine Learning Avanzado', Usuario:"Benja2004", Mail:"test@test.com", Calificacion: "Excelente", Comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanluctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis. Pellentesque at interdumtortor. Quisque arcu quam, malesuada vel mauris et, posueresagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elitmetus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam"},
  {id:4, Estado:"Aceptado", Servicio: 'Machine Learning Avanzado', Usuario:"Benja2004", Mail:"test@test.com", Calificacion: "Bueno", Comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanluctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis. Pellentesque at interdumtortor. Quisque arcu quam, malesuada vel mauris et, posueresagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elitmetus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam"},
  {id:5, Estado:"Eliminado", Servicio: 'Machine Learning Avanzado', Usuario:"Benja2004", Mail:"test@test.com", Calificacion: "Muy Malo", Comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanluctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis. Pellentesque at interdumtortor. Quisque arcu quam, malesuada vel mauris et, posueresagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elitmetus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam"},
  {id:6, Estado:"Eliminado", Servicio: 'Machine Learning Avanzado', Usuario:"Benja2004", Mail:"test@test.com", Calificacion: "Malo", Comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanluctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis. Pellentesque at interdumtortor. Quisque arcu quam, malesuada vel mauris et, posueresagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elitmetus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam"},
  {id:7, Estado:"Aceptado", Servicio: 'Machine Learning Avanzado', Usuario:"Benja2004", Mail:"test@test.com", Calificacion: "Excelente", Comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanluctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis. Pellentesque at interdumtortor. Quisque arcu quam, malesuada vel mauris et, posueresagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elitmetus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam"},
  {id:8, Estado:"Aceptado", Servicio: 'Machine Learning Avanzado', Usuario:"Benja2004", Mail:"test@test.com", Calificacion: "Bueno", Comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanluctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis. Pellentesque at interdumtortor. Quisque arcu quam, malesuada vel mauris et, posueresagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elitmetus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam"},
  {id:9, Estado:"Aceptado", Servicio: 'Machine Learning Avanzado', Usuario:"Benja2004", Mail:"test@test.com", Calificacion: "Excelente", Comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanluctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis. Pellentesque at interdumtortor. Quisque arcu quam, malesuada vel mauris et, posueresagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elitmetus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam"},
];

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

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

function MisServicios() {
  const [nombre, setNombre] = useState("")
  const [categoria, setCategoria] = useState("")
  const [duracion, setDuracion] = useState("")
  const [tipo, setTipo] = useState("")
  const [frecuencia, setFrecuencia] = useState("")  
  const [costo, setCosto] = useState("") 
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(nombre, categoria, duracion, tipo, frecuencia, costo)
    setOpen(false);

} 
  
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <Grid align="center">
    <br/>
    <h1 class="Title">Mis Servicios</h1>
    <br/>
    <Stack class="botones" align="center" direction="row" spacing={10} display="block">    
      <Button type="submit" variant="contained" color="primary" style={marginTop} onClick={handleClickOpen}>
        Crear Servicio
      </Button>
      <Button type="submit" variant="contained" color="primary" style={marginTop}>
        Guardar Cambios
      </Button>
      <Button type="submit" variant="contained" color="primary" style={marginTop}>
        Eliminar Seleccionados
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
        <DialogTitle>Publicar Servicio</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Complete los datos del servicio que quiere publicar
          </DialogContentText>
          <div className={Styles.filterBox}>
            <div className={Styles.individualBox}>
              <TextField style = {{width: 210}} label="Nombre de la clase" margin="normal" placeholder="Nombre de la clase" required value={nombre} onChange={e => setNombre(e.target.value)} />
            </div>
            <div className={Styles.individualBox}>
              <TextField select style = {{width: 210}}  label="Tipo" margin="normal" placeholder="Tipo" required value={tipo} onChange={e => setTipo(e.target.value)}
                      >
                        {tipos.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
              </TextField>
            </div>
            <div className={Styles.individualBox}>
              <TextField select style = {{width: 210}}  label="Categoria" margin="normal" placeholder="Categoria" required value={categoria} onChange={e => setCategoria(e.target.value)}
                      >
                        {categorias.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
              </TextField>
            </div>
            <div className={Styles.individualBox}>
              <TextField select style = {{width: 210}}  label="Duracion" margin="normal" placeholder="Duracion" required value={duracion} onChange={e => setDuracion(e.target.value)}
                      >
                        {duraciones.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
              </TextField>
            </div>
            <div className={Styles.individualBox}>
              <TextField select style = {{width: 210}}  label="Frecuencia" margin="normal" placeholder="Frecuencia" required value={frecuencia} onChange={e => setFrecuencia(e.target.value)}
                      >
                        {frecuencias.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
              </TextField>
            </div>
            <div className={Styles.individualBox}>
              <TextField type='number' style = {{width: 210}} label="Costo" margin="normal" placeholder="Costo" required value={costo} onChange={e => setCosto(e.target.value)}  />
            </div>
            <div className={Styles.individualBox}>
              <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                Subir Imagen
                <VisuallyHiddenInput type="file" />
              </Button>
            </div>
          </div>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Publicar</Button>
        </DialogActions>
        </form>
      </Dialog>

    </Stack>
    </Grid>
    <Grid align="center">
      <div class="BoxGrid">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick />
        
      </div>
    </Grid><br/>


    <Grid align="center">
      <h1 class="Title">Solicitudes de contacto</h1>
      <br/>
      <Stack class="botones" align="center" direction="row" spacing={10} display="block">    
      <Button type="submit" variant="contained" color="primary" style={marginTop}>
        Aceptar Seleccionados
      </Button>
      <Button type="submit" variant="contained" color="primary" style={marginTop}>
        Finalizar Seleccionados
      </Button>
      <Button type="submit" variant="contained" color="primary" style={marginTop}>
        Cancelar Seleccionados
      </Button>
    </Stack>
    </Grid>
    <Grid align="center">
      <div class="BoxGrid">
        <DataGrid
          rows={rowSol}
          columns={colSol}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick />
        
      </div>
    </Grid>
    <br/>


    <Grid align="center">
      <h1 class="Title">Gestion de Comentarios</h1>
      <br/>
      <Stack  class="botones" align="center" spacing={10}>    
      <Button type="submit" variant="contained" color="primary" style={marginTop}>
        Aceptar Seleccionados
      </Button>
      <Button type="submit" variant="contained" color="primary" style={marginTop}>
        Eliminar Seleccionados
      </Button>
    </Stack>
    </Grid>
    <Grid align="center">
      <div class="BoxGrid">
        <DataGrid
          rows={rowCom}
          columns={colCom}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick />
        
      </div>
    </Grid>
    <br/>
    </>
  
  );
}

export default MisServicios;
