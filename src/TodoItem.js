// Creando un nuevo componente
// Este componente lo insertaremos dentro del componente App
function TodoItem({ text }) {
    return (
      <li>
        <span>V</span>
        <p>{text}</p>
        <span>X</span>
      </li>
    );
}
export {TodoItem};
