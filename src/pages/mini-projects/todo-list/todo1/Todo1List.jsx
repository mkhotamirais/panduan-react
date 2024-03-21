import { useState } from "react";
// import { enqueueSnackbar } from "notistack";
const Todo1List = ({ todos, onChangeTodo, onDeleteTodo }) => {
  let content;
  if (todos?.length > 0) {
    content = (
      <ul className="rounded my-2 flex flex-col gap-1">
        {todos.map((todo) => (
          <li key={todo.id} className="border rounded p-2">
            <Todo todo={todo} onChangeTodo={onChangeTodo} onDeleteTodo={onDeleteTodo} />
          </li>
        ))}
      </ul>
    );
  } else content = <div className="flex justify-center mt-3">no content</div>;
  return content;
};
Todo1List.propTypes;

export default Todo1List;

const Todo = ({ todo, onChangeTodo, onDeleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);
  const handleSaveText = () => {
    onChangeTodo({ ...todo, text });
    setIsEditing(false);
    // enqueueSnackbar(`update ${todo.text} success`, { variant: "success" });
  };
  const handleChangeDone = (e) => {
    onChangeTodo({ ...todo, done: e.target.checked });
  };
  const handleDelete = () => {
    onDeleteTodo(todo.id);
    // enqueueSnackbar(`delete ${todo.text} success`, { variant: "success" });
  };
  const handleCancel = () => {
    setIsEditing(false);
    setText(todo.text);
  };

  let content;
  if (isEditing) {
    content = (
      <>
        <input
          autoFocus
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border rounded px-1 w-full mx-2"
        />
        <div className="flex gap-2 *:underline">
          <button onClick={handleSaveText}>save</button>
          <button onClick={handleCancel}>cancel</button>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <div className="w-full mx-2">{todo.text}</div>
        <div className="*:underline flex gap-3">
          <button onClick={() => setIsEditing(true)}>edit</button>
          <button onClick={handleDelete}>delete</button>
        </div>
      </>
    );
  }
  return (
    <div className="flex justify-between">
      <input type="checkbox" checked={todo.done} onChange={handleChangeDone} />
      {content}
    </div>
  );
};
Todo.propTypes;
