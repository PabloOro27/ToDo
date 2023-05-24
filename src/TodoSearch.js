import React from 'react';
import { useState } from 'react';
import './TodoSearch.css';

const TodoSearch = ({searchValue, setSearchValue}) => {
    return (
        <div className='todo-search'>
            <h1>Buscar TODOs</h1>
            <input 
            type="text" 
            placeholder="Buscar" 
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
            />
            <i className="bi bi-search"></i>
        </div>
    );
};

// otra forma de exportar el componente no siendo objeto
export default TodoSearch;