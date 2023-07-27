import logo from './platzi.webp'; // Importamos el logo desde la ruta actual
import './App.css'; // Importamos hoja de estilos App.css des la ruta actual

// Creamos el componente App (por convencion estas funciones inician con mayuscula)
function App() {
  // Este componente retorna un xml (jsx)
  // ClassName es transpilado por babel como class de html
  // El return el lo que retorna este componente
  return (
    <div className="App">

      <TodoItem />
      <TodoItem />
      <TodoItem />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Creando un nuevo componente
// Este componente lo insertaremos dentro del componente App
function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Llora con la Llorona</p>
      <span>X</span>
    </li>
  );
}

// Habilitamos la exportacion de App
export default App;
