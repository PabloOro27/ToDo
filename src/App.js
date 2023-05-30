import React from 'react';
import { useState } from 'react';
import './styles/App.css';
import { TodoCounter } from '../src/components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import TodoSearch from './components/TodoSearch'; //otra forma de importar
import TodoList from './containers/TodoList';
import TodoHeader from './components/TodoHeader';
import TodoNew from './components/TodoNew';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() { 
  // estado de boton crear nuevop todo 
  const [visible, setVisible] = useState(false); // [estado, funcion que modifica el estado 
  // estado de los todos recibidos es useLocalStorage
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading,
    error
  } = useLocalStorage('TODO_V1', []);
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
    if (text === '') {
      // si esta vacio el texto no pasa nada 
    }else{
      let newTodos = [...todos];
      const todo = {
        text: text,
        completed: false,
        id: 0,
      };

      if (newTodos.length === 0) {
        // todo.id = 1;
        newTodos.push(todo);
        saveTodos(newTodos);
      } else {
        // todo.id = newTodos[newTodos.length - 1].id + 1;
        newTodos.push(todo);
        saveTodos(newTodos);
      }
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
        {loading && 
        // <p>Cargando...</p>
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
        }
        {error && <p>Hubo un error...</p>}
        {(!loading && searchedTodos.length === 0) && <p>Crea tu primer TODO</p>}
        {/* iterando en le array de todos */}
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
