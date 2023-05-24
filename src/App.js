import React from 'react';
import { useState } from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import TodoSearch from './TodoSearch'; //otra forma de importar
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import TodoNew from './TodoNew';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false}
];

function App() {
  // estado de boton crear
  const [visible, setVisible] = useState(true); // [estado, funcion que modifica el estado 
  // estado de los todos
  const [todos, setTodos] = useState(defaultTodos);
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length; 
  // estado de busqueda de todos
  const [searchValue, setSearchValue] = useState('');
  // console.log('los usuarios buscan todos de ' + searchValue);
  const searchedTodos = todos.filter(
    todo => 
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );
  
  return (
    //Fragment es un componente de React que no se renderiza, solo sirve para agrupar elementos
    <React.Fragment> 
      <TodoHeader />
      <TodoNew setVisible = {setVisible} visible = {visible}/>
      {visible && <TodoNew />}
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} 
      />
      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
      />
      
      <TodoList> 
        {searchedTodos.map(todo => (
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
