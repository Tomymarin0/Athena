import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Rating, Grid, Paper, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, TextareaAutosize, Stack, Dialog, DialogActions, DialogContent, DialogContentText,DialogTitle } from "@mui/material";
import FormCalificar from '../Service/OneService/Foms/FormCalificar';
import "./ClientService.css";

const marginTop = { marginTop: 10, align:"right", width:"30em", marginBottom: 10};

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

function ClientService() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <br/>
    <Grid align="center">
      <h1 class="Title">Mis Servicios</h1>
      <Stack align="center" direction="column" spacing={10} display="block" class="buttonCalificar">    
        <FormCalificar texto="Calificar Seleccionado"/>
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
    </>
  
  );
}

export default ClientService;
