import { TodoIcon } from './TodoIcon'

function CompleteIcon( {onComplete, completed} ) {
    return (
        <TodoIcon
            type="check"
            color={completed ? 'green': 'gray'}
            onClick={onComplete}
            completed={completed}
        />
    );
}

export { CompleteIcon };