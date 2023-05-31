import {React, useState} from 'react';
import './styles/App.css';
import TodoCounter  from './components/TodoCounter';
import TodoItem  from './components/TodoItem';
import TodoSearch from './components/TodoSearch'; //otra forma de importar
import TodoList from './containers/TodoList';
import TodoHeader from './components/TodoHeader';
import TodoNew from './components/TodoNew';
import TodosLoading from './components/TodosLoading';
import TodosError from './components/TodosError';
import TodosEmpty from './components/TodosEmpty';

function AppUi({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
  CreateNewTask,
  visible,
  setVisible,
  loading,
  error,
})
{
  return (
    //Fragment es un componente de React que no se renderiza, solo sirve para agrupar elementos
    <> 
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
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {(!loading && searchedTodos.length === 0) && <TodosEmpty /> }
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
    </>
  );
}

export default AppUi;
