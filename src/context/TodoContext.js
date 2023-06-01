import { React, createContext, useState } from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";

const TodoContext = createContext();

// TODO Provider
const TodoProvider = ({children}) => {
  // estado de boton crear nuevop todo
  const [visible, setVisible] = useState(false); // [estado, funcion que modifica el estado
  // estado de los todos recibidos es useLocalStorage
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODO_V1", []);
  // ----------------------------------------------
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  // estado de busqueda de todos
  const [searchValue, setSearchValue] = useState("");
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  // completar todos
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  // eliminar todos
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  // ----------------------------------------------
  // // crear nuevos todos
  const CreateNewTask = (textValue) => {
    if (textValue === "") {
      // si esta vacio el texto no pasa nada
    } else {
      let newTodos = [...todos];
      const todo = {
        text: textValue,
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
    return <TodoContext.Provider></TodoContext.Provider>;
  };
    // ----------------------------------------------
  return (
    <TodoContext.Provider
      value={{
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
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};


export { TodoContext, TodoProvider};
