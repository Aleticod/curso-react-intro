// Importamos un objeto en espcifico
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoButton } from '../TodoButton';
import './App.css'; // Importamos hoja de estilos App.css des la ruta actual
import React from 'react';
import { useLocalStorage } from './useLocalStorage';

// Un array que va a representar los objetos de nuestro todos
// const defaultTodos = [
//   { text: 'Cortar Cebolla ', completed: true },
//   { text: 'Tomar el curso de React ', completed: true },
//   { text: 'Llorar con la llorona ', completed: false },
//   { text: 'Jugat futbool', completed: false },

// ];

// const defaultTodosString = JSON.stringify(defaultTodos)

// localStorage.setItem('TODOS_V1', defaultTodosString)

// localStorage.removeItem('TODOS_V1')

// Creamos el componente App (por convencion estas funciones inician con mayuscula)

// Custom hooks

function App() {
  
  const [todos, setTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState(''); // Uso de estados se inicializa la funcion useState
  
  // Estados derivados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter( (todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });


  const completeTodo = (todoIdent) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === todoIdent
    );
    const actualState = newTodos[todoIndex].completed;
    newTodos[todoIndex].completed = !actualState;
    setTodos(newTodos);
  };

  const deleteTodo = (todoIdent) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === todoIdent)
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  };
  // Este componente retorna un xml (jsx)
  // ClassName es transpilado por babel como class de html
  // El return el lo que retorna este componente
  return ( //el return de un componente es un elemento
    // React Fragment no se renderiza
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {/* Todo lo que se encuentra dentro de un componente react los define por defecto como children b */}
        {/* Por cada objeto que se encuentra de los todos array renderizamos un todoItem */}
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <TodoButton />
    </React.Fragment>
  );
}

// Habilitamos la exportacion de App
export default App;
