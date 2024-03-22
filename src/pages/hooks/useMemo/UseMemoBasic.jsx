import { useState } from "react";

const UseMemoBasic = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = slowFunction(number);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark((prev) => !prev)}>chage theme</button>

      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
};

export default UseMemoBasic;

function slowFunction(number) {
  console.log("calling slow function");
  for (let i = 0; i <= 100000000; i++) {
    return number * 2;
  }
}
