// Importamos un objeto en espcifico
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';
import './App.css'; // Importamos hoja de estilos App.css des la ruta actual
import React from 'react';

// Un array que va a representar los objetos de nuestro todos
const defaultTodos = [
  { text: 'Cortar Cebolla ', completed: true },
  { text: 'Tomar el curso de React ', completed: false },
  { text: 'Llorar con la llorona ', completed: false },
  { text: 'Jugat futbool', completed: false },

];

// Creamos el componente App (por convencion estas funciones inician con mayuscula)
function App() {
  // Este componente retorna un xml (jsx)
  // ClassName es transpilado por babel como class de html
  // El return el lo que retorna este componente
  return ( //el return de un componente es un elemento
    // React Fragment no se renderiza
    <React.Fragment>
      <TodoCounter completed={4} total={5} />
      <TodoSearch />

      <TodoList>
        {/* Todo lo que se encuentra dentro de un componente react los define por defecto como children b */}
        {/* Por cada objeto que se encuentra de los todos array renderizamos un todoItem */}
        {defaultTodos.map(todo => (<TodoItem key={todo.text}  text={todo.text} completed={todo.completed} />))}
      </TodoList>
      <TodoButton />
    </React.Fragment>
  );
}

// Habilitamos la exportacion de App
export default App;
