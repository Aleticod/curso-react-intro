import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoButton } from '../TodoButton';
import React from 'react';

function AppUI({ completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo }) {
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

export { AppUI }