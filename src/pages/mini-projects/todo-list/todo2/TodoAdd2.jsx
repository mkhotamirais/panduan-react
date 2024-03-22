import { useContext, useState } from "react";
import { Todo2Context } from "./Todo2Provider";
import { Button } from "../../../../components/Tags";
import { enqueueSnackbar } from "notistack";

const TodoAdd2 = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(Todo2Context);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "added", text });
    setText("");
    enqueueSnackbar(`post ${text} success`, { variant: "success" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex">
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="w-full border rounde p-2" />
        <Button type="submit" className="max-w-max">
          add todo
        </Button>
      </form>
    </div>
  );
};

export default TodoAdd2;
