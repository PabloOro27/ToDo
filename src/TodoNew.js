import React from 'react';
import { useState } from 'react';
import './TodoNew.css';

const TodoNew = ({setVisible, visible}) => {

    const closeTodo = () => {
        setVisible(false);
    };

    return (
        <>
        <div className='todo-new'>
            <div className='titulo'>
                <h1>Crear TODO</h1>
                <input type="text" placeholder="Nombre del TODO" />            
            </div>
            <div className='botones'>            
                <button className='crear'>Crear</button>
                <button className='cancelar'
                onClick={closeTodo}
                >
                    Cancelar
                </button>
            </div>
        </div>
        </>
    );
};

export default TodoNew;