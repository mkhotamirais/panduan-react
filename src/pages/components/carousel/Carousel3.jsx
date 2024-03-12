import { useState } from "react";

const data = [
  { title: "0", content: "content0" },
  { title: "1", content: "content1" },
  { title: "2", content: "content2" },
  { title: "3", content: "content3" },
];

const Carousel3 = () => {
  const [current, setCurrent] = useState(0);

  const conditions = (i) => {
    if (current === i) {
      return "left-1/3";
    } else if (current + 1 === i) {
      return "left-0";
    } else if (current - 1 === i) {
      return "right-0";
    } else {
      return "hidden";
    }
  };

  return (
    <div className="border rounded p-2 h-32">
      <div className="relative h-full w-full border">
        {data.map((d, i) => {
          console.log(i);
          return (
            <div key={i} className={`${conditions(i)} left- border rounded absolute w-1/3 h-full`}>
              <div>{d.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel3;
