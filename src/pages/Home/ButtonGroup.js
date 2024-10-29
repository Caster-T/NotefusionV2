import React from 'react';
import { Link } from 'react-router-dom';

const ButtonGroup = () => {
  return (
    <div className="button-group">
      <Link to="/Login"><button className="btn">Inicia Sesión/Registrarse</button></Link>
      {/* <Link to ="/Registrar"><button className="btn">Regístrate</button></Link> */}
    </div>
  );
};

export default ButtonGroup;
