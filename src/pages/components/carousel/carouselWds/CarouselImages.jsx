import { useCallback, useEffect, useState } from "react";
import { LuArrowBigLeft, LuArrowBigRight, LuCircle, LuCircleDot } from "react-icons/lu";

const CarouselImages = ({ images }) => {
  const [index, setIndex] = useState(1);
  const [mouseEnter, setMouseenter] = useState(false);

  const next = useCallback(() => {
    setIndex((index) => {
      if (index === images.length - 1) return 0;
      else return index + 1;
    });
  }, [images.length]);

  const prev = () => {
    setIndex((index) => {
      if (index === 0) return images.length - 1;
      else return index - 1;
    });
  };

  useEffect(() => {
    if (mouseEnter) {
      const move = setInterval(() => {
        next();
      }, [7000]);
      return () => clearInterval(move);
    }
  }, [next, mouseEnter]);

  const btn =
    "absolute top-0 bottom-0 block cursor-pointer p-4 hover:bg-black hover:bg-opacity-20 transition-all duration-100 group";
  const arrow = "stroke-white w-8 h-8 group-hover:animate-[squish_200ms_ease-in-out]";

  return (
    <div
      onMouseEnter={() => setMouseenter(true)}
      onMouseLeave={() => setMouseenter(false)}
      className="w-full h-full relative"
    >
      <div className="w-full h-full flex overflow-hidden">
        {images.map((img) => (
          <img
            key={img}
            src={img}
            alt=""
            style={{ translate: `${-100 * index}%` }}
            className={`scale-110 object-cover w-full h-full block flex-shrink-0 flex-grow-0 ease-in-out duration-300`}
          />
        ))}
      </div>
      <button onClick={() => prev()} className={`${btn} left-0`}>
        <LuArrowBigLeft className={`${arrow}`} />
      </button>
      <button onClick={() => next()} className={`${btn} right-0`}>
        <LuArrowBigRight className={`${arrow}`} />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="*:stroke-white *:fill-black *:hover:scale-110 *:focus-visible:scale-110"
          >
            {i === index ? <LuCircleDot /> : <LuCircle />}
          </button>
        ))}
      </div>
    </div>
  );
};
CarouselImages.propTypes;

export default CarouselImages;
