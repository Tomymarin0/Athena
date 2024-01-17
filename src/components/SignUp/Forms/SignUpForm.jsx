import React, { useState } from "react";
import { Avatar, Link, Grid, Paper, Typography, TextField, Button, FormControl, FormLabel, RadioGroup, Radio, MenuItem } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";


const currencies2 = [
  {
    value: 'proveedor',
    label: 'Proveedor',
  },
  {
    value: 'cliente',
    label: 'Cliente',
  },


];

const currencies = [
    {
      value: 'primario',
      label: 'Primario',
    },
    {
      value: 'secundario',
      label: 'Secundario',
    },
    {
      value: 'terciario',
      label: 'Terciario',
    },
    {
      value: 'universitario',
      label: 'Universitario',
    },


  ];

const SignUpForm = ({setRegister}) => {
    const paperStyle = { padding: "30px 20px", width: "60em", margin: "20px auto" };
    const avatarStyle = { backgroundColor: "#1B6DC1" };
    const [tipo, setTipo] = useState("cliente")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [mail, setMail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [contraseñaConfirm, setContraseñaConfirm] = useState("")
    const [telefono, setTelefono] = useState("")
    const [estudios, setEstudios] = useState("")
    const [titulo, setTitulo] = useState("")
    const [experiencia, setExperiencia] = useState("")
    const marginTop = { marginTop: 10, width: "15em" , align:"center"}
    const handleSubmit = (e) =>{
        e.preventDefault()

        setRegister([nombre, apellido, mail, contraseña, contraseñaConfirm, telefono, estudios, titulo, experiencia, tipo])

    } 
console.log(setRegister)
  return (
    <Grid container justifyContent="center" display="block">
      <Paper elevation={20} style={paperStyle}>
        <form onSubmit={handleSubmit}> 
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddIcon />
          </Avatar>
          <Typography variant="h5" gutterBottom>
            Registrarse
          </Typography>
          <Typography variant="caption" gutterBottom>
            Por favor, complete el formulario para crear una cuenta.
          </Typography><br /><br />
        </Grid>
        <Grid align="center" container spacing={2}>
            <Grid item xs={6} direction="column">
              <TextField type="text" fullWidth label="Ingresar nombre" margin="normal" placeholder="Ingresar nombre" required value={nombre} onChange={e => setNombre(e.target.value)} />
              <TextField type="text" fullWidth label="Ingresar apellido" margin="normal" placeholder="Ingresar apellido" required value={apellido} onChange={e => setApellido(e.target.value)}/>
              <TextField type="email" fullWidth label="Ingresar Correo Electronico" margin="normal" placeholder="Ingresar Correo Electronico" required value={mail} onChange={e => setMail(e.target.value)}/>
              <TextField fullWidth label="Contraseña" type="password" placeholder="Ingresar contraseña" margin="normal" required  value={contraseña} onChange={e => setContraseña(e.target.value)}/>
              <TextField fullWidth label="Confirmar contraseña" type="password" placeholder="Confirmar contraseña" margin="normal" required  value={contraseñaConfirm} onChange={e => setContraseñaConfirm(e.target.value)}/>
            </Grid>
            <Grid item xs={6} direction="column">
              <TextField type="text" fullWidth label="Ingresar teléfono" margin="normal" placeholder="Ingresar teléfono" required value={telefono} onChange={e => setTelefono(e.target.value)}/>
              <TextField select fullWidth  label="Nivel de Estudios" margin="normal" placeholder="Nivel de Estudios" required value={estudios} onChange={e => setEstudios(e.target.value)}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
              <TextField type="text" fullWidth label="Título de Grado" placeholder="Ingresar título de grado" margin="normal" required value={titulo} onChange={e => setTitulo(e.target.value)}/>
              <TextField type="text" fullWidth label="Su experiencia (0 a 70 años)" placeholder="Ingresar experiencia" margin="normal" required value={experiencia} onChange={e => setExperiencia(e.target.value)}/>
              <TextField select fullWidth  label="¿Que te trae por aqui?" margin="normal" placeholder="¿Que te trae por aqui?" required value={tipo} onChange={e => setTipo(e.target.value)}
          >
            {currencies2.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
            </Grid>
        </Grid><br />
        <Grid align="center">
          <Button align="center" type="submit" variant="contained" color="primary">
            Registrarse
          </Button><br />
          <br />
          <Typography variant="caption" style={{ marginTop: '40px' }}>
            ¿Ya tienes una cuenta? <Link href="/login">Iniciar sesión</Link>
          </Typography>         
        </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUpForm;
