import { Breadcrumb, H1 } from "../../../components/Components";
import { H3 } from "../../../components/Tags";
// import { Carousel1 } from "./Carousel1";
// import Carousel2 from "./Carousel2";
// import Carousel3 from "./Carousel3";
import CarouselWds from "./carouselWds/CarouselWds";

export const Carousel = () => {
  return (
    <div>
      <div>
        <H1>carousel</H1>
        <Breadcrumb />
      </div>{" "}
      <H3>Carousel WebDev Simplified</H3>
      <CarouselWds />
      {/* <Carousel3 />
      <H3>Model1</H3>
      <Carousel1 />
      <H3>Model2</H3>
      <Carousel2 /> */}
    </div>
  );
};
