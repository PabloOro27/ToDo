import React from 'react';
import './TodoHeader.css';

const TodoHeader = () => {
    return (
        <nav>
            <div className="img-container">
                <i className="bi bi-person-circle"></i>
            </div>
            <div className='agregar'>
                <button className='create-todo'
                onClick={() => console.log('hiciste click')}>
                    +
                </button>
            </div>
        </nav>
    );
};

export default TodoHeader;