import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import ListaDeTareas from './components/ListaDeTareas';

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
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
