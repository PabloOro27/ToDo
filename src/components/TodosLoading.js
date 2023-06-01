import React from 'react';
import '../styles/TodosLoading.css';

const TodosLoading = () => {
    return (
        <div className="LoadingTodo-container">
            <div className="LoadingTodo-left">
                <span className="LoadingTodo-check">   
                    <i className="bi bi-check-lg"></i>
                </span>
                <p className='LoadingTodo-text'>
                </p>
            </div> 
            <span className='LoadingTodo-delete'>
                X
            </span>      
        </div>
    );
};

export default TodosLoading;