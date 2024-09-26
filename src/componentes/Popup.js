import React from 'react';
import "../estilos/Popup.css";  // Asegúrate de que la ruta sea correcta

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close' onClick={() => props.setTrigger(false)}>X</button>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default Popup;
