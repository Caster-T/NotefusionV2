import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Canvas from './pages/Canvas/canvas';
import Register from './pages/Register/Register';
import Login from './pages/Login/login';
import TermYCond from './pages/TermYCond/TermYCond';
import AboutUs from './pages/AboutUs/AboutUs'
import NotFound from './pages/NotFound/NotFound';
import Proyectos from './pages/Proyectos/proyectos';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Perfil from './pages/Perfil/Perfil'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Canvas" element={<Canvas />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrar" element={<Register />} />
        <Route path="/TerminosYCondiciones" element={<TermYCond />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="*" eluement={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
