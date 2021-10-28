import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className="d-flex flex-column m-0 p-0">
            {
                todos.map((todo, i) => (
                    <TodoListItem 
                        key={ todo.id }
                        todo={ todo }
                        i={ i }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                ))
            }

        </ul>
    )
}
