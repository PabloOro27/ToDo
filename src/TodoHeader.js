import React from 'react';
import './styles/TodoHeader.css';

const TodoHeader = (props) => {
    return (
        <nav>
            <div className="img-container">
                <i className="bi bi-person-circle"></i>
            </div>
            <div className='agregar'>
                <button className='create-todo'
                onClick={() => props.setVisible(true)}>
                    +
                </button>
            </div>
        </nav>
    );
};

export default TodoHeader;