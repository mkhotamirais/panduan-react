import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import Todo1List from "./Todo1List";
import Todo1Add from "./Todo1Add";

// const initialTodo = [
//   { id: "0", text: "text1", done: true },
//   { id: "1", text: "text2", done: false },
//   { id: "2", text: "text3", done: false },
// ];
const initialTodo = JSON.parse(localStorage.getItem("todo")) || [];

const Todo1 = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodo);

  function onAddTodo(text) {
    dispatch({ type: "added", text });
  }
  function onChangeTodo(todo) {
    dispatch({ type: "changed", todo });
  }
  function onDeleteTodo(id) {
    dispatch({ type: "deleted", id });
  }

  return (
    <div className="border rounded p-2">
      <div>todo1</div>
      <Todo1Add onAddTodo={onAddTodo} />
      <Todo1List todos={todos} onChangeTodo={onChangeTodo} onDeleteTodo={onDeleteTodo} />
    </div>
  );
};

export default Todo1;
