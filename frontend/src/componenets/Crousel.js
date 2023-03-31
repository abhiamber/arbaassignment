import React, { useEffect, useState } from "react";

function Crousel(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        // console.log(prev);
        if (prev === 2) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div
      className="slider"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {props.slides.map((slide, index) => (
        <div
          key={index}
          //   className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{
            display: index === currentSlide ? "block" : "none",
          }}
        >
          <img
            src={slide}
            alt={`Slide ${index}`}
            style={{ width: "100%", height: "100px" }}
          />
          <p>{index}</p>
        </div>
      ))}
    </div>
  );
}

export default Crousel;
