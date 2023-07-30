import { TodoIcon } from './'

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