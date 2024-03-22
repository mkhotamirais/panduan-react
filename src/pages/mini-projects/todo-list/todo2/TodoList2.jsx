import { useContext, useState } from "react";
import { Todo2Context } from "./Todo2Provider";
import { enqueueSnackbar } from "notistack";

const TodoList2 = () => {
  const { todos, dispatch } = useContext(Todo2Context);
  const [isEditing, setIsEditing] = useState(null);

  let content;
  if (todos.length > 0) {
    content = todos.map((t) => (
      <Todo key={t.id} t={t} dispatch={dispatch} isEditing={isEditing} setIsEditing={setIsEditing} />
    ));
  } else content = <div className="flex justify-center mt-5">no content</div>;
  return (
    <div>
      <div className="flex flex-col gap-1">{content}</div>
    </div>
  );
};

export default TodoList2;

const Todo = ({ t, dispatch, isEditing, setIsEditing }) => {
  const [text, setText] = useState(t.text);
  const changeDone = (e) => {
    dispatch({ type: "changed", todo: { ...t, done: e.target.checked } });
  };
  const changeText = () => {
    dispatch({ type: "changed", todo: { ...t, text } });
    setIsEditing(null);
    enqueueSnackbar(`update ${text} success`, { variant: "success" });
  };
  const cancelEditMode = () => {
    setIsEditing(null);
    setText(t.text);
  };
  const enterEditMode = () => {
    setIsEditing(t.id);
  };
  const deleteTodo = () => {
    dispatch({ type: "deleted", id: t.id });
    enqueueSnackbar(`deletee ${text} success`, { variant: "success" });
  };

  return (
    <div className="border rounded p-2 flex justify-between">
      <input type="checkbox" checked={t.done} onChange={changeDone} />
      {isEditing === t?.id ? (
        <>
          <input
            autoFocus
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border rounded p-2 w-full mx-2"
          />
          <div className="flex gap-2">
            <button onClick={changeText} className="underline">
              save
            </button>
            <button onClick={cancelEditMode} className="underline">
              cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={`${t.done ? "line-through" : ""} w-full mx-2 p-2`}>{t.text}</div>
          <div className="flex gap-2 justify-between">
            <button onClick={enterEditMode} className="underline">
              edit
            </button>
            <button onClick={deleteTodo} className="underline">
              delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};
Todo.propTypes;
