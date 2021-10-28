import React from 'react'
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm( {
        description: ''
    });

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if( description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        }

        handleAddTodo( newTodo )
        reset()
    }

    return (
        <>
           <h4>Add activity</h4>
            <hr />

            <form onSubmit={ handleSubmit }>

                <input 
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="...buy milk"
                    autoComplete="off"
                    value = { description }
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Add
                </button>

            </form> 
        </>
    )
}