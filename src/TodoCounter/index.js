// Propiedades desde archivo css (importamos)
import './TodoCounter.css'

// Propiedes en linea

// Creando el componente todo counter
function TodoCounter({completed, total}) {
/*    return (
      <h1 style={{
        fontSize: '24px',
        textAlign: 'center',
        margin: '0px',
        padding: '48px'
    }}>
      Has copletado { completed } de { total } TODOS
      </h1>
    );
*/

return (
  <>
    {total === completed && (
      <h1 className='TodoCounter'>
        <span>Felicitaciones!!!!!!!!!!!!!!</span>
      </h1>
    )}
    {total !== completed && (
      <h1 className='TodoCounter'>
        Has copletado <span> { completed } </span> de <span>{ total } </span>TODOS
      </h1>
    )}
  </>
  );
}

// Exportar componente especificos
export { TodoCounter };