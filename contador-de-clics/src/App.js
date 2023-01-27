import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador.js';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
      
      <div className='freeCodeCamp-logo-contenedor'>
        <img 
        className='freeCodeCamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp'
        />
    </div>
    <div className='contenedor-principal'>
      <Contador numClics ={numClics} />
      <Boton 
      texto='Click'
      esBotonDeClic={true}
      manejarClic={manejarClic}/>
      <Boton 
      texto='Reiniciar'
      esBotonDeClic={false}
      manejarClic={reiniciarContador}/>
    </div>
    </div>
  );
};

export default App;
