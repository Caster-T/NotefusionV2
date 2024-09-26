<<<<<<< HEAD
import React, { useState } from 'react';

function App() {

  return (
L
=======
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './ComponentsApp/Home';
import Canvas from './ComponentsApp/canvas';
import Registrar from './ComponentsApp/Registrar';
import Login from './ComponentsApp/login';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <nav>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/Canvas" style={{ marginRight: '10px' }}>Canvas</Link>
        <Link to="/Login" style={{ marginRight: '10px' }}>login</Link>
        <Link to="/Registrar">Registrar</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Canvas" element={<Canvas />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrar" element={<Registrar />} />
      </Routes>
    </div>
>>>>>>> main
  );
}

export default App;
