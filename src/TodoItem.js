import React from 'react';
import './styles/TodoItem.css';

function TodoItem(props){
  return (
    <li
      className={
        `${props.completed && "TodoItem-complete"}`
      }
    >
      <div>
        <i 
          className={
            `bi bi-check-lg 
            ${props.completed && "Icon-check-active"}`
          }
          onClick={props.onComplete}
        >
        </i> 
        <p
          className={
            `${props.completed && "TodoItem-p-complete"}`
        }>
          {props.text}
        </p>
      </div>
      <span
        className='icon-delete'
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };