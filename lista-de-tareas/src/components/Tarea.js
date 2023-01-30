import React from "react";
import '../stylesheets/Tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (

    <div className={completada ? 'tarea-contenedor-principal completada' : 'tarea-contenedor-principal'}>
      <div className='tarea-texto'
      onClick={() => completarTarea(id)}>
        { texto }
      </div>
      <div className='tarea-contenedor-iconos'>
        <AiOutlineCloseCircle className='tarea-icono' 
        onClick={() => eliminarTarea(id)}/>
      </div>
    </div>
  );
};


export default Tarea;