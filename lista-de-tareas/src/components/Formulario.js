import React, { useState } from "react";
import '../stylesheets/Formulario.css';
import { v4 as uuidv4} from "uuid";

function Formulario(props) {

  const [input, setInput] = useState('');

  const manejarEstado = e => {
    setInput(e.target.value);
  };

  const manejarEnvio = e => {

    e.preventDefault();
    
    const nuevaTarea = {
      id: uuidv4(),
      texto: input,
      completada: false
    };

    props.onSubmit(nuevaTarea);

  };


  return (
    <form className='tarea-formulario' onSubmit={manejarEnvio}>
      <input 
        className= 'tarea-input'
        type= 'text'
        placeholder= 'Añada una tarea'
        name='texto'
        onChange={manejarEstado}
      />
        <button
        className="tarea-boton"> 
          Agregar tarea
        </button>
    </form>
  );
};

export default Formulario;