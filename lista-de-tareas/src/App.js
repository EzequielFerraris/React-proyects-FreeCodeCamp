import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import Tarea from './components/Tarea.js';



function App() {
  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de freecodecamp'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <Tarea texto='Aprender React'/>
      </div>
    </div>
  );
}

export default App;
