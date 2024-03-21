import { useState } from "react";
import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "inc") {
    return {
      count: state.count + 1,
    };
  }
  throw Error("Unknown action.");
}

export const UseReducer1 = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const handleCount = () => {
    dispatch({ type: "inc" });
  };
  return (
    <div className="border rounded p-2 mb-1">
      useReducer1 count {state.count}{" "}
      <button className="underline" onClick={handleCount}>
        inc count
      </button>
    </div>
  );
};

function reducerUser(state, action) {
  switch (action.type) {
    case "set_name": {
      return { ...state, name: action.newName };
    }
    case "inc_age": {
      return { ...state, age: state.age + 1 };
    }
    case "dec_age": {
      return { ...state, age: state.age - 1 };
    }
    case "set_gender": {
      return { ...state, gender: action.newGender };
    }
  }
  throw Error("Unknown action: " + action.type);
}
const initialState = { name: "ahmad", age: 20, gender: "male" };

export const UseReducer2 = () => {
  const [state, dispatch] = useReducer(reducerUser, initialState);
  const [newName, setNewName] = useState("");

  const handleName = () => {
    dispatch({ type: "set_name", newName });
    setNewName("");
  };

  const handleGender = () => {
    let newGender;
    if (state.gender === "male") newGender = "female";
    else if (state.gender === "female") newGender = "male";
    dispatch({ type: "set_gender", newGender });
  };

  return (
    <div className="border rounded p-2 mb-1">
      <div>
        {state.name}
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} className="border rounded px-1" />
        <button onClick={handleName} className="underline">
          change name
        </button>
      </div>
      <div>
        {state.age}{" "}
        <button className="underline" onClick={() => dispatch({ type: "inc_age" })}>
          inc age
        </button>{" "}
        |{" "}
        <button className="underline" onClick={() => dispatch({ type: "dec_age" })}>
          dec age
        </button>
      </div>
      <div>
        {state.gender}{" "}
        <button onClick={handleGender} className="underline">
          switch gender
        </button>
      </div>
    </div>
  );
};
