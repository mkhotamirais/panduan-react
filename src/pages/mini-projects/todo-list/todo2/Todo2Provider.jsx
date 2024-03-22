import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const todoReducer = (todos, action) => {
  switch (action.type) {
    case "added": {
      const result = [...todos, { id: uuidv4(), text: action.text, done: false }];
      localStorage.setItem("todo2", JSON.stringify(result));
      return result;
    }
    case "changed": {
      const result = todos.map((t) => (t.id === action.todo.id ? action.todo : t));
      localStorage.setItem("todo2", JSON.stringify(result));
      return result;
    }
    case "deleted": {
      const result = todos.filter((t) => t.id !== action.id);
      localStorage.setItem("todo2", JSON.stringify(result));
      return result;
    }
    default: {
      throw Error(`Unknown action ${action.type}`);
    }
  }
};

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
