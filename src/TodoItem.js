import React from 'react';
import './TodoItem.css';

function TodoItem({text}){
  return (
    <li>
      <div>
        <i class="bi bi-check-lg"></i>
        <p>{text}</p>
      </div>
      <span>X</span>
    </li>
  );
}

export { TodoItem };