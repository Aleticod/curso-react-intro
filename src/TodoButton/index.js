import './TodoButton.css'
// Creando un nuevo componente
// Este componente lo insertaremos dentro del componente App
function TodoButton() {
    return (
      <button 
        className="CreateTodoButton"
        onClick={
          (event) => {
            console.log('Le diste click');
            console.log(event);
            console.log(event.target);
          }
        }
      >+</button>
    );
}
export {TodoButton};