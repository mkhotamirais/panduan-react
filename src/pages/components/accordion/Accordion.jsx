import { useState } from "react";
import { H3 } from "../../../components/Tags";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { Breadcrumb, H1 } from "../../../components/Components";

const Content1 = () => <>one line</>;
const Content2 = () => (
  <>
    first line <br /> second line
  </>
);
const Content3 = () => (
  <>
    first line <br /> second line <br /> third line
  </>
);

const data = [
  { title: "btn1", content: <Content1 /> },
  { title: "btn2", content: <Content2 /> },
  { title: "btn3", content: <Content3 /> },
];

export const Accordion = () => {
  return (
    <section id="accordion">
      <div>
        <H1>accordion</H1>
        <Breadcrumb />
      </div>
      <H3>Accordion Autoclose</H3>
      <AccAutoclose />
      <H3>Accordion Manualclose</H3>
      <AccManualclose />
      <H3>Accordion Autoclose Animate</H3>
      <AccAutocloseAnimate />
      <H3>Accordion Manualclose Animate</H3>
      <AccManualcloseAnimate />
    </section>
  );
};

// Acc Autoclose
const AccAutoclose = () => {
  const [selected, setSelected] = useState(null);
  const openSelected = (item) => (selected === item ? setSelected(null) : setSelected(item));

  return data.map((item) => (
    <div key={item.title}>
      <button
        onClick={() => openSelected(item)}
        className={`flex hover:bg-slate-300 w-full p-2 items-center justify-between border-b border-slate-500 rounded overflow-hidden ${
          selected === item ? "bg-blue-300" : "bg-slate-200"
        }`}
      >
        <span>{item.title}</span>
        <span>{selected === item ? <FaMinusCircle /> : <FaPlusCircle />}</span>
      </button>
      <p className={`p-2 bg-slate-100 ${selected === item ? "block" : "hidden"}`}>{item.content}</p>
    </div>
  ));
};

// Acc Manualclose
const AccManualclose = () => data.map((item) => <AccManualcloseItem key={item.title} item={item} />);
const AccManualcloseItem = ({ item }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div>
      <button
        onClick={() => setSelected(!selected)}
        className={`flex hover:bg-slate-300 w-full p-2 items-center justify-between border-b border-slate-500 rounded overflow-hidden ${
          selected ? "bg-blue-300" : "bg-slate-200"
        }`}
      >
        <span>{item.title}</span>
        <span>{selected ? <FaMinusCircle /> : <FaPlusCircle />}</span>
      </button>
      <p className={`p-2 bg-slate-100 ${selected ? "block" : "hidden"}`}>{item.content}</p>
    </div>
  );
};
AccManualcloseItem.propTypes;

// Acc Autoclose Animate
const AccAutocloseAnimate = () => {
  const [selected, setSelected] = useState(null);
  const handleSelected = (e, item) => {
    let target = e.target.nextElementSibling;
    const content = document.getElementsByClassName("accAutocloseAnimate");
    for (let i = 0; i < content.length; i++) content[i].style.height = 0;

    if (item === selected) {
      setSelected(null);
      target.style.height = 0;
    } else if (item !== selected) {
      setSelected(item);
      target.style.height = target.scrollHeight + "px";
    }
  };

  return data.map((item, i) => (
    <div key={i}>
      <button
        onClick={(e) => handleSelected(e, item)}
        className={`flex hover:bg-slate-300 w-full p-2 items-center justify-between border-b border-slate-500 rounded overflow-hidden ${
          selected === item ? "bg-blue-300" : "bg-slate-200"
        }`}
      >
        {item.title}
      </button>
      <p className={`accAutocloseAnimate h-0 overflow-hidden transition-all duration-500"`}>{item.content}</p>
    </div>
  ));
};

// Acc Manualclose Animate
const AccManualcloseAnimate = () => {
  const [selected, setSelected] = useState(null);

  const handleSelected = (e, item) => {
    let target = e.target.nextElementSibling;
    target.classList.toggle("buka");
    if (target.classList.contains("buka")) {
      setSelected(item);
      target.style.height = target.scrollHeight + "px";
    } else {
      setSelected(null);
      target.style.height = 0;
    }
  };

  return data.map((item, i) => (
    <div key={i}>
      <button
        onClick={(e) => handleSelected(e, item)}
        className={`flex hover:bg-slate-300 w-full p-2 items-center justify-between border-b border-slate-500 rounded overflow-hidden ${
          selected === item ? "bg-blue-300" : "bg-slate-200"
        }`}
      >
        {item.title}
      </button>
      <p className={`accAutocloseAnimate h-0 overflow-hidden transition-all duration-500"`}>{item.content}</p>
    </div>
  ));
};
