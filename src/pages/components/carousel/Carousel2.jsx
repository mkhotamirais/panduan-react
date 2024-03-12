import { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const accList = [
  { title: "0", content: "content0" },
  { title: "1", content: "content1" },
  { title: "2", content: "content2" },
  { title: "3", content: "content3" },
];

const Carousel2 = () => {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState("");
  const [anim, setAnim] = useState(false);
  let animTime = 500;

  const moveRight = (i) => {
    console.log(i);
    setCurrent((prev) => prev + 1);
  };

  const moveLeft = () => {
    setCurrent((prev) => prev - 1);
  };

  const moveDots = (i) => {
    console.log(i);
    conditions(current, current + 1, i);
    setAnimate("toLeft");
    if (i === current + 1) {
      setAnimate("comeRight");
    }
  };

  const conditions = (center, left, right) => {
    if (current > accList.length - 1) setCurrent(0);
    if (current < 0) setCurrent(accList.length - 1);
    if (current === center) {
      return "block left-0";
    } else if (current === left) {
      return "block -left-full";
    } else if (current === right) {
      return "block left-full";
    } else {
      return "hidden";
    }
  };

  const conditions2 = () => {
    if (current < accList.length - 1) {
      return "toLeft";
    }
  };

  useEffect(() => {
    accList.map((al, i) => {
      conditions(i);
    });
  }, []);

  const chevron =
    "z-50 absolute rounded-full top-1/2 -translate-y-1/2 bg-black bg-opacity-20 text-white hover:bg-opacity-60 w-8 h-8 flex items-center justify-center transition-all duration-200";
  const dots = "border w-3 h-3 rounded-full cursor-pointer hover:bg-white transition-all duration-200";
  return (
    <div className="border rounded p-2">
      <div className="relative w-full h-56 bg-blue-500 overflow-hidden">
        <div className="z-50 absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3">
          {accList.map((al, i) => (
            <button key={i} onClick={() => moveDots(i)} className={`${dots} ${current === i ? "bg-white" : ""}`}></button>
          ))}
        </div>
        <button onClick={() => moveLeft()} type="button" className={`${chevron} left-5`}>
          <FaChevronLeft />
        </button>
        <button onClick={() => moveRight()} type="button" className={`${chevron} right-5`}>
          <FaChevronRight />
        </button>
        {accList.map((al, i) => {
          return (
            <div
              key={i}
              className={`${conditions(i, i - 1, i + 1)} ${conditions2()} z-40 absolute w-full h-full top-0 bg-red-500`}
            >
              <div className="absolute top-0 border">lainnya</div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-50">
                <h3 className="text-4xl">{al.title}</h3>
                <p>{al.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel2;
