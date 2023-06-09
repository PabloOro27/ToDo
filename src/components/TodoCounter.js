import {React, useContext} from 'react';
import { TodoContext } from '../context/TodoContext';
import '../styles/TodoCounter.css';

function TodoCounter(){
  const{
    totalTodos: total,
    completedTodos: completed,
  } =  useContext(TodoContext);

  return (
    <>
    <div className='todo-counter'>
      <h1>
        Hola <span>Usuario!</span> 
      </h1>
      <div className='counter'>
        <h2>
          Has completado 
        </h2>
        <h3>
          {completed} de {total} <span>TODOs</span>
        </h3>
      </div>
    </div>
      <div  className='cajas'>
        <div className='caja-izquierda'>
        </div>
        <div className='caja-derecha'>
          <div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoCounter;


// ---------------otra forma de hacerlo----------------
// import React from 'react';

// const TodoCounter = (props) => {
//   return (
//     <h2>
//       Has completado {props.completed} de {props.total} TODOs
//     </h2>
//   );
// };

// export default TodoCounter;
