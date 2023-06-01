import {React, useContext} from 'react';
import { TodoContext } from '../context/TodoContext';
import '../styles/TodoSearch.css';

const TodoSearch = () => {
    // useContext
    const{
        searchValue,
        setSearchValue,
    } = useContext(TodoContext);
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