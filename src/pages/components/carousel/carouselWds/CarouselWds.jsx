import CarouselImages from "./CarouselImages";

const img1 = "../images/img1.jpg";
const img2 = "../images/img2.jpg";
const img3 = "../images/img3.jpg";
const img4 = "../images/img4.jpg";
const img5 = "../images/img5.jpg";

const images = [img1, img2, img3, img4, img5];

const CarouselWds = () => {
  return (
    <div className="max-w-[1200px] w-full aspect-[10/6] my-0 mx-auto">
      <CarouselImages images={images} />
    </div>
  );
};

export default CarouselWds;
