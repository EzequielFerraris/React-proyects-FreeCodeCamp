import React from 'react';
import '../hojas-de-estilo/Boton.css'

function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button
    className={ esBotonDeClic ? 'botonClic' : 'botonReiniciar' }
    onClick= { manejarClic }>
      {texto}
    </button>
  );
};

export default Boton;