import { v4 as uuidv4 } from "uuid";

export const todoReducer = (todos, action) => {
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
