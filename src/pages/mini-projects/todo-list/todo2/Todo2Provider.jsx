import { createContext, useReducer } from "react";
import { todoReducer } from "./Todo2Reducer";

// const initialTodo = [
//   { id: "0", text: "hamad", done: true },
//   { id: "1", text: "abdul", done: false },
//   { id: "2", text: "siti", done: false },
// ];
const initialTodo = JSON.parse(localStorage.getItem("todo2")) || [];

export const Todo2Context = createContext(null);

const Todo2Provider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodo);
  return <Todo2Context.Provider value={{ todos, dispatch }}>{children}</Todo2Context.Provider>;
};
Todo2Provider.propTypes;

export default Todo2Provider;
