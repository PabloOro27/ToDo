import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import TodoSearch from './TodoSearch'; //otra forma de importar
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
];

function App() {
  return (
    //Fragment es un componente de React que no se renderiza, solo sirve para agrupar elementos
    <React.Fragment> 
      <TodoHeader />
      <TodoCounter completed={16} total={25} />
      <TodoSearch />
      
      <TodoList> 
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
    </React.Fragment>
  );
}

export default App;
