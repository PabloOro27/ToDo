import React from 'react';
import './TodoHeader.css';

const TodoHeader = () => {
    return (
        <nav>
            <div className="img-container">
                <i class="bi bi-person-circle"></i>
            </div>
            <div className='agregar'>
                <button>
                    +
                </button>
            </div>
        </nav>
    );
};

export default TodoHeader;