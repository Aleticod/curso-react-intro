// Creando el componente todo list
function TodoList(props) {
    return (
      <ul>
        {props.children}
      </ul>
    );
  }

  export { TodoList }