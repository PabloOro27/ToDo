import { React} from "react";
import { TodoContext } from "./context/TodoContext";
import "./styles/App.css";
import TodoCounter from "./components/TodoCounter";
import TodoItem from "./components/TodoItem";
import TodoSearch from "./components/TodoSearch"; //otra forma de importar
import TodoList from "./containers/TodoList";
import TodoHeader from "./components/TodoHeader";
import TodoNew from "./components/TodoNew";
import TodosLoading from "./components/TodosLoading";
import TodosError from "./components/TodosError";
import TodosEmpty from "./components/TodosEmpty";

function AppUi() {
  return (
    //Fragment es un componente de React que no se renderiza, solo sirve para agrupar elementos
    <>
      <TodoHeader />
      <TodoNew />
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {({
          loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }) => (
          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError />}
            {!loading && searchedTodos.length === 0 && <TodosEmpty />}
            {/* iterando en le array de todos */}
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>
    </>
  );
}

export default AppUi;
