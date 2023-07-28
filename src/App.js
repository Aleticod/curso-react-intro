// Importamos un objeto en espcifico
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';
import './App.css'; // Importamos hoja de estilos App.css des la ruta actual


// Creamos el componente App (por convencion estas funciones inician con mayuscula)
function App() {
  // Este componente retorna un xml (jsx)
  // ClassName es transpilado por babel como class de html
  // El return el lo que retorna este componente
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
      <TodoButton />
    </div>
  );
}

// Habilitamos la exportacion de App
export default App;
