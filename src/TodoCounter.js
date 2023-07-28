// Creando el componente todo counter
function TodoCounter({completed, total}) {
    return (
      <h1>Has copletado { completed } de { total } TODOS</h1>
    );
}

// Exportar componente especificos
export { TodoCounter };