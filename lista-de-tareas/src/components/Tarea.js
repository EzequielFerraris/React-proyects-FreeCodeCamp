import React from "react";
import '../stylesheets/Tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Tarea({ texto }) {
  return (

    <div className='tarea-contenedor-principal'>
      <div className='tarea-texto'>
        { texto }
      </div>
      <div className='tarea-icono'>
        <AiOutlineCloseCircle />
      </div>
    </div>
  );
};


export default Tarea;