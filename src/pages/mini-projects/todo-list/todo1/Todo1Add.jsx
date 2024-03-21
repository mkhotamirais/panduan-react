import { useState } from "react";
import { Button } from "../../../../components/Tags";
// import { enqueueSnackbar } from "notistack";

const Todo1Add = ({ onAddTodo }) => {
  const [text, setText] = useState("");
  const handleAdd = (e) => {
    e.preventDefault();
    onAddTodo(text);
    setText("");
    // enqueueSnackbar(`add ${text} success`, { variant: "success" });
  };
  return (
    <form onSubmit={handleAdd} className="flex">
      <input
        type="text"
        placeholder="add todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded p-2 w-full"
      />
      <Button type="submit" className="min-w-max">
        Add Todo
      </Button>
    </form>
  );
};
Todo1Add.propTypes;

export default Todo1Add;
