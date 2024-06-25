import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Temp } from "../assets/Index";

function Carousel({ position, changeElement }) {
  const elements = [
    {
      component: <ServiceCard heading={"UI/UX Design"} img={Temp} />,
    },
    {
      component: <ServiceCard heading={"Web Development"} img={Temp} />,
    },
    {
      component: <ServiceCard heading={"App Development"} img={Temp} />,
    },
    {
      component: <ServiceCard heading={"SEO Services"} img={Temp} />,
    },
    {
      component: <ServiceCard heading={"Digital Marketing"} img={Temp} />,
    },
  ];

  return (
    <div className="carousel-container">
      <main id="carousel" style={{ "--position": position }}>
        {elements.map((element, index) => (
          <div
            key={index}
            className="carousel-item"
            onClick={() => changeElement(index + 1)}
          >
            {element.component}
          </div>
        ))}
      </main>
    </div>
  );
}

export default Carousel;
