import React from 'react';
import './TodoSearch.css';

const TodoSearch = () => {
    return (
        <div className='todo-search'>
            <h1>Buscar TODOs</h1>
            <input type="text" placeholder="Buscar" />
            <i class="bi bi-search"></i>
        </div>
    );
};

// otra forma de exportar el componente no siendo objeto
export default TodoSearch;