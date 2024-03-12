import { useState } from "react";
import { H3, Par } from "../../../components/Tags";
import { Breadcrumb, H1 } from "../../../components/Components";

export const UseState = () => {
  return (
    <div>
      <H1>useState</H1>
      <Breadcrumb />
      <Par>
        useState, react v-16.8.0. Untuk membuat state dibutuhkan variable dan updaternya. Parameter updaternya harus berupa
        nilai, tapi bisa juga fungsi callback asalkan kembalikan nilai
      </Par>
      <H3>state counter</H3>
      <StateCounter />
    </div>
  );
};

export const StateCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="border flex p-2 rounded leading-none">
      <button onClick={() => setCount((prev) => prev - 1)} className="border p-1">
        -
      </button>
      <div className="border rounded p-2">{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)} className="border p-1">
        +
      </button>
    </div>
  );
};
