import React from 'react';
import '../styles/TodoList.css';

const TodoList = (props) => {
    return (
        <ul>
           {props.children} 
        </ul>
    );
};

export default TodoList;