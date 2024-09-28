import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './ComponentsApp/Home';
import Canvas from './ComponentsApp/canvas';
import Registrar from './ComponentsApp/Registrar';
import Login from './ComponentsApp/login';
import TermYCond from './ComponentsApp/TermYCond';
import AboutUs from './ComponentsApp/AboutUs'
import NotFound from './ComponentsApp/NotFound';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Canvas" element={<Canvas />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrar" element={<Registrar />} />
        <Route path="/TerminosYCondiciones" element={<TermYCond />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
