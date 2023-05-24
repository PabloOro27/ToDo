import React from 'react';
import './TodoItem.css';

function TodoItem({text}){
  return (
    <li>
      <div>
        <i className="bi bi-check-lg"></i>
        <p>{text}</p>
      </div>
      <span>X</span>
    </li>
  );
}

export { TodoItem };