// Importamos un objeto en espcifico
import './App.css'; // Importamos hoja de estilos App.css des la ruta actual
import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

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

  return (
    <AppUI 
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={ deleteTodo}
    />
  );
}

// Habilitamos la exportacion de App
export default App;
