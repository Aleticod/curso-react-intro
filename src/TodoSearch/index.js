import React from 'react';
import './TodoSearch.css'

// Creando el componente todo search
function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input 
      placeholder="Cortar Cebolla" 
      className="TodoSearch"
      value={searchValue}
      onChange={
        (event) => {
          setSearchValue(event.target.value)
        }
      }
    />
  );
}

  export {TodoSearch};