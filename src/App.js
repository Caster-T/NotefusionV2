import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Canvas from './pages/Canvas/canvas';

import Login from './pages/Login/login';
import TermYCond from './pages/TermYCond/TermYCond';
import AboutUs from './pages/AboutUs/AboutUs'
import NotFound from './pages/NotFound/NotFound';
import Proyectos from './pages/Proyectos/proyectos';
import '@fortawesome/fontawesome-free/css/all.min.css';

import SuccessPage from './pages/SuccesPage/SuccessPage';

import Perfil from './pages/Perfil/Perfil'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Canvas/:titulo" element={<Canvas />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Success" element={<SuccessPage />} />
        
        <Route path="/TerminosYCondiciones" element={<TermYCond />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/proyectos" element={<Proyectos />} />

        <Route path="*" element={<NotFound />} />

        <Route path="/perfil" element={<Perfil />} />

        <Route path="*" element={<NotFound />} />

        <Route path="*" eluement={<NotFound />} />
        
      </Routes>
    </>
  );
}

export default App;
