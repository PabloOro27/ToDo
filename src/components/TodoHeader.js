import {React, useContext} from 'react';
import { TodoContext } from '../context/TodoContext';
import '../styles/TodoHeader.css';

const TodoHeader = () => {
    const{
        setVisible
    } = useContext(TodoContext);
    return (
        <nav>
            <div className="img-container">
                <i className="bi bi-person-circle"></i>
            </div>
            <div className='agregar'>
                <button className='create-todo'
                onClick={() => setVisible(true)}>
                    +
                </button>
            </div>
        </nav>
    );
};

export default TodoHeader;