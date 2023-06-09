import {React, useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import '../styles/TodoNew.css';

const TodoNew = () => {
    //useContext
    const {
        setVisible,
        visible,
        CreateNewTask,
    } = useContext(TodoContext);
    // useState
    const [inputValue, setInputValue] = useState('');

    const closeTodo = () => {
        setInputValue('');
        setVisible(false);
    };
// ----------------------------------------------
    const CreateTodo = (event) => {
        event.preventDefault();
        CreateNewTask(inputValue);
        setInputValue('');
        setVisible(false);
    };
    return (
        <>
            <form 
                className={
                    `todo-new ${!visible && "inactive"}`
                }
                onSubmit={CreateTodo}
            >
                <div className='titulo'>
                    <h1>Crear TODO</h1>
                    <input 
                        type="text" 
                        placeholder="Nombre del TODO" 
                        onChange={(event) => (setInputValue(event.target.value))}
                        value={inputValue}
                    />            
                </div>
                <div className='botones'>            
                    <button 
                        className='crear'
                        type='submit'
                    >
                        Crear
                    </button>
                    <button className='cancelar'
                        onClick={closeTodo}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </>
    );
};

export default TodoNew;