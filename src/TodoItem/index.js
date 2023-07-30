import './TodoItem.css'
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';


// Creando un nuevo componente
// Este componente lo insertaremos dentro del componente App
function TodoItem({ text, completed, onComplete, onDelete }) {
    return (
      <li className="TodoItem">
        <CompleteIcon 
          onComplete={onComplete}
          completed={completed}
        />
        {/* <span
          className= {`Icon Icon-check ${ completed && "Icon-check--active"}`}
          onClick={onComplete}
        >V</span> */}
        <p className={`TodoItem-p ${ completed && "TodoItem-p--complete"}`}>{text}</p>
        <DeleteIcon 
          onDelete={onDelete}
        />
        {/* <span
          className="Icon Icon-delete"
          onClick={onDelete}
        >X</span> */}
      </li>
    );
}
export {TodoItem};
