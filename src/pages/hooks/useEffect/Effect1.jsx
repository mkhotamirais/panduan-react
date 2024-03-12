import { useEffect, useState } from "react";
import axios from "axios";

export const Effect1 = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("");
  const [second, setSecond] = useState(0);

  const Plus = () => {
    setCount((prev) => prev + 1);
  };

  const Minus = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  useEffect(() => {
    localStorage.setItem("name", name);
    console.log("sinkronisasi");
  }, [name]);

  useEffect(() => {
    setCount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => setUser(res.data));
  }, []);

  useEffect(() => {
    // console.log("interval");
    let intervalId = setInterval(() => {
      setSecond((s) => s + 1);
    }, 1000);
    // clean up
    return () => {
      //   console.log("clean up");
      clearInterval(intervalId);
    };
  }, []);
  // }, [second]);
  return (
    <div className="border p-2 rounded">
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} className="border" placeholder="input name" />
        <p>{name}</p>
      </div>
      <div className="flex">
        <button onClick={Minus} className="border p-1 leading-none">
          -
        </button>
        <div>{count}</div>
        <button onClick={Plus} className="border p-1 leading-none">
          +
        </button>
      </div>
      <div>
        <p>{user.name}</p>
      </div>
      <div>
        <p>{second}</p>
      </div>
    </div>
  );
};
