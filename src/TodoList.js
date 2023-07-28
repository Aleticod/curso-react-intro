import './TodoList.css'

// Creando el componente todo list
function TodoList(props) {
    return (
      <ul className="TodoList">
        {props.children}
      </ul>
    );
  }

  export { TodoList }