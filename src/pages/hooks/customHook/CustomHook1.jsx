import { useState } from "react";
import { useToggle } from "./useToggle";

export const CustomHook1 = () => {
  const [label, setLabel] = useState("ON");
  const [lampu, setLampu] = useToggle();

  const Saklar = () => {
    setLampu(!lampu);
    setLabel((e) => (e === "ON" ? "OFF" : "ON"));
  };

  return (
    <div className="border p-2 rounded">
      <button onClick={Saklar} className={`${lampu ? "bg-yellow-500" : "bg-none"} border p-2 rounded`}>
        Switch {label}
      </button>
    </div>
  );
};

const EdwCustom = () => {};

export default EdwCustom;
