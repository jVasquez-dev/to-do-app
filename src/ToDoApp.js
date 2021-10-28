import React, { useEffect, useReducer } from 'react';

import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { todoReducer } from './reducer/TodoReducer';

import './styles/styles.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const ToDoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);
    
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos])

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId,
        }
        dispatch( action )
    }

    const handleToggle = ( todoId ) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    return (
        <div className="bg-light container">
            <h1 className="my-3">To Do APP ( { todos.length } ) </h1>
            <div className="row">
                <div className="col-12 col-md-5">
                        <TodoAdd
                            handleAddTodo={ handleAddTodo }
                        />
                </div>

                <div className="col-12 col-md-5 py-3 py-md-5">
                <TodoList 
                    todos = { todos }
                    handleDelete = { handleDelete }
                    handleToggle = { handleToggle }
                />     
                </div>
            </div>
        </div>
    )
}