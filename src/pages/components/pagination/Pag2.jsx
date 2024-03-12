import { useEffect, useState } from "react";

const Pag2 = () => {
  const pages = 12;
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }
  const [currentButton, setCurrentButton] = useState(1);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];
    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = "...";
    if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
    } else if (currentButton === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton);
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
      tempNumberOfPages = [1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length];
    } else if (currentButton > numberOfPages.length - 3) {
      const sliced = numberOfPages.slice(numberOfPages.length - 4);
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (currentButton === dotsInitial) {
      setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (currentButton === dotsRight) {
      setCurrentButton(arrOfCurrButtons[3] + 2);
    } else if (currentButton === dotsLeft) {
      setCurrentButton(arrOfCurrButtons[3] - 2);
    }
    setArrOfCurrButtons(tempNumberOfPages);
  }, [currentButton]);
  return (
    <section id="pag2">
      <h1>Pagination</h1>
      <div className="flex">
        <button
          onClick={() => setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))}
          className={`${currentButton === 1 ? "opacity-50" : ""} border px-2`}
        >
          Prev
        </button>
        {arrOfCurrButtons.map((page, i) => (
          <button
            key={i}
            onClick={() => setCurrentButton(page)}
            className={`${currentButton === page ? "bg-blue-500" : ""} border px-2`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => setCurrentButton((prev) => (prev === pages ? prev : prev + 1))}
          className={`${currentButton === numberOfPages.length ? "opacity-50" : ""} border px-2`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Pag2;
