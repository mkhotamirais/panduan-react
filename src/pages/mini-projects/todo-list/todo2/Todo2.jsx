import Todo2Provider from "./Todo2Provider";
import TodoAdd2 from "./TodoAdd2";
import TodoList2 from "./TodoList2";

const Todo2 = () => {
  return (
    <Todo2Provider>
      <div className="border rounded p-2">
        <TodoAdd2 />
        <TodoList2 />
      </div>
    </Todo2Provider>
  );
};

export default Todo2;
