import './TodoSearch.css'

// Creando el componente todo search
function TodoSearch() {
    return (
      <input 
        placeholder="Cortar Cebolla" 
        className="TodoSearch"
        onChange={
          (event) => {
            console.log('Escribirste algo');
            console.log(event);
            console.log(event.target);
            console.log(event.target.value);
          }
        }
      />
    );
  }

  export {TodoSearch};