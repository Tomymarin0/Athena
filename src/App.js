import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Service from "./components/Service/Service";
import OneService from "./components/Service/OneService/OneService";
import MisServicios from "./components/Service/MisServicios/MisServicios";
import NotFound from "./components/404/Error404";
import Login from "./components/Login/login";
import Signup from "./components/SignUp/SignUp";
import ClientService from "./components/ClientService/ClientService";
import Recovery from "./components/RecuperarContra/Recovery";
import Footer from "./components/Footer/Footer";
import React, { useState } from "react";
import NavBarLoged from "./components/NavBarLoged/NavBarLoged";



function App() {

  const [user, setUser] = useState([])
  const [newUser, setRegister] = useState([])
  const logearNuevo = (() => {
    if(user.length===0 && newUser.length>0){
      user.push(newUser[0])
      user.push(newUser[9])
      return user;
    } 
  })();
console.log(user.length);
console.log(newUser);

  return (
    <div>
      <Routes>
        <Route path="/" element={ 
        !user.length>0
        ? <><NavBar /><Home /></>
        : <><NavBarLoged user={user} setUser={setUser}/><Home /></>
      } />
        <Route path="/login" element={ 
        !user.length>0
        ? <><NavBar /><Login setUser={setUser} /></>
        : <><NavBarLoged user={user} setUser={setUser}/><Home /></>
      } />
        <Route path="/register" element={
        !newUser.length>0
        ?<><NavBar /><Signup newUser={newUser} setRegister={setRegister}/></>
        :<><NavBarLoged user={logearNuevo} setUser={setUser}/><Home /></>
      } />
        <Route path="/service" element={ 
        !user.length>0
        ? <><NavBar /><Service/></> //si no estoy logeado veo esto
        : <><NavBarLoged user={user}/><Service/></> //si estoy logeado veo esto
      } />
        <Route path="/oneservice/:id" element={ 
        !user.length>0
        ? <><NavBar /><Login setUser={setUser} /></> //si no estoy logeado veo esto
        : <><NavBarLoged user={user} setUser={setUser}/><OneService/></> //si estoy logeado veo esto
      }/>
        <Route path="/myservice" element={ 
        !user.length>0
        ? <><NavBar /><Home /></>
        : <><NavBarLoged user={user} setUser={setUser}/><MisServicios/></>
      }/>
        <Route path="/clientservice" element={ 
        !user.length>0 
        ? <><NavBar /><Home /></>
        : <><NavBarLoged user={user} setUser={setUser}/><ClientService/></>
      }/>
        <Route path="/recovery" element={<><NavBar /><Recovery /></>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
