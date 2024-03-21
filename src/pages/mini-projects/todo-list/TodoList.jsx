import { Breadcrumb, H1 } from "../../../components/Components";
import Todo1 from "./todo1/Todo1";

const TodoList = () => {
  return (
    <div>
      <H1>Todo List</H1>
      <Breadcrumb />
      project ini menggunakan useState useReducer
      <Todo1 />
    </div>
  );
};

export default TodoList;
