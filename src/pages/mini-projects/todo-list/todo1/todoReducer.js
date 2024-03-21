import { v4 as uuidv4 } from "uuid";

export const todoReducer = (todo, action) => {
  switch (action.type) {
    case "added": {
      const result = [...todo, { id: uuidv4(), text: action.text, done: false }];
      localStorage.setItem("todo", JSON.stringify(result));
      return result;
    }
    case "changed": {
      const result = todo.map((t) => (t.id == action.todo.id ? action.todo : t));
      localStorage.setItem("todo", JSON.stringify(result));
      return result;
    }
    case "deleted": {
      const result = todo.filter((t) => t.id !== action.id);
      localStorage.setItem("todo", JSON.stringify(result));
      return result;
    }
    default: {
      throw Error(`unknown action ${action.type}`);
    }
  }
};
