import React from "react";
import Carousel from "better-react-carousel";
import logo1 from "../../../assets/images/logo1.png";
import logo2 from "../../../assets/images/logo2.jpg";
import logo3 from "../../../assets/images/logo3.png";

const AssociatesCarousel = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl lg:text-5xl mb-24 font-bold">
        Associations & Memberships
      </h2>
      <div className="w-[50%]">
        <Carousel
          cols={3}
          rows={1}
          gap={10}
          autoplay={5000}
          loop
          hideArrow={true}
        >
          <Carousel.Item>
            <img width="300px" src={logo1} alt="logo" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="300px" src={logo2} alt="logo" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="300px" src={logo3} alt="logo" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="300px" src={logo1} alt="logo" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="300px" src={logo2} alt="logo" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="300px" src={logo3} alt="logo" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default AssociatesCarousel;
