import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Carousel1 = () => {
  const [index, setIndex] = useState(0);

  const nomor = [
    { num: "1", color: "bg-red-500" },
    { num: "2", color: "bg-orange-500" },
    { num: "3", color: "bg-yellow-500" },
    { num: "4", color: "bg-green-500" },
    { num: "5", color: "bg-blue-500" },
    { num: "6", color: "bg-indigo-500" },
    { num: "7", color: "bg-purple-500" },
  ];

  const handleNext = () => {
    setIndex((prev) => (prev === nomor.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? nomor.length - 1 : prev - 1));
  };

  const conditions = (i) => {
    if (index == i) {
      return "translate-x-0 visible";
    } else if (index - 1 == i || index + (nomor.length - 1) == i) {
      return "translate-x-full invisible";
    } else return "-translate-x-full invisible";
  };

  const slideItemClasses =
    "h-full w-full absolute border rounded transition-all duration-500 flex items-center justify-center";
  const slideBtnClasses =
    "absolute z-50 bg-blue-500 border rounded-full p-2 mb-2 hover:bg-blue-400 bottom-1/2 translate-y-1/2";

  return (
    <section className="relative">
      <button onClick={() => handlePrev()} className={`${slideBtnClasses} left-3`}>
        <FaChevronLeft />
      </button>
      <button onClick={() => handleNext()} className={`${slideBtnClasses} right-3`}>
        <FaChevronRight />
      </button>
      <div className="flex relative rounded h-56 overflow-hidden bg-gray-50">
        {nomor.map((n, i) => (
          <div key={i} className={`${n.color} ${slideItemClasses} ${conditions(i)}`}>
            <div className="text-gray-800 text-3xl">{i}</div>
          </div>
        ))}
      </div>
      <div className="flex absolute bottom-3 gap-2 right-1/2 translate-x-1/2">
        {nomor.map((n, i) => (
          <button
            onClick={() => setIndex(i)}
            key={i}
            className={`${index == i ? "bg-gray-200" : ""} border w-3 h-3 rounded-full hover:bg-gray-200`}
          ></button>
        ))}
      </div>
    </section>
  );
};
