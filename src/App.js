import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './ComponentsApp/Home';
import Canvas from './ComponentsApp/canvas';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <nav>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/Canvas">Canvas</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Canvas" element={<Canvas />} />
      </Routes>
    </div>
  );
}

export default App;
