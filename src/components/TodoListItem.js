import React from 'react'

export const TodoListItem = ( { todo, i, handleDelete, handleToggle} ) => {
    return (
        <>
            <li
                className="list-group-item d-flex justify-content-between pointer"
            >
                <p
                    className={`${todo.done && 'complete'}`}
                    onClick={() => handleToggle(todo.id)}
                >
                    {i + 1}. {todo.desc}
                </p>
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(todo.id)}
                >
                    Delete
                </button>

            </li>
        </>
    )
}