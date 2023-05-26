import React from 'react';
import { useState } from 'react';
import './styles/App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import TodoSearch from './TodoSearch'; //otra forma de importar
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import TodoNew from './TodoNew';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() { 
  // estado de boton crear nuevop todo 
  const [visible, setVisible] = useState(false); // [estado, funcion que modifica el estado 
  // estado de los todos
  const [todos, saveTodos] = useLocalStorage('TODO_V1', []);
  // ----------------------------------------------
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length; 
  // estado de busqueda de todos
  const [searchValue, setSearchValue] = useState('');
  // console.log('los usuarios buscan todos de ' + searchValue);
  const searchedTodos = todos.filter(
    todo => 
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );

// completar todos
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
    )
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
// eliminar todos 
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
    )
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  // ----------------------------------------------
  // crear nuevos todos
  const CreateNewTask = (text) => {
          let newTodos = [...todos];
          const todo = {
            text: text,
            completed: false,
            id: 0,
          };

          if (newTodos.length === 0) {
            todo.id = 1;
            newTodos.push(todo);
            saveTodos(newTodos);
          } else {
            todo.id = newTodos[newTodos.length - 1].id + 1;
            newTodos.push(todo);
            saveTodos(newTodos);
          }
      };
  return (
    //Fragment es un componente de React que no se renderiza, solo sirve para agrupar elementos
    <React.Fragment> 
      <TodoHeader
        setVisible = {setVisible} 
        visible = {visible}
      />
      <TodoNew 
        setVisible = {setVisible} 
        visible = {visible}
        CreateNewTask = {CreateNewTask} 
      />
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
            onComplete= {() => completeTodo(todo.text)}
            onDelete= {() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
    </React.Fragment>
  );
}

export default App;
