import React from 'react';
import { Link } from 'react-router-dom';

const ButtonGroup = () => {
  return (
    <div className="button-group">
      <Link to="/Login"><button className="btn">Inicia Sesión</button></Link>
    </div>
  );
};

export default ButtonGroup;
