import React, { useState } from "react";
import "/public/css/Slider.css";
import BtnSlider from "./BtnSlider";

const Slider = () => {
  const dataSlider = [1, 2, 3];
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if(slideIndex !== dataSlider.length){
      setSlideIndex(slideIndex + 1);
    }
    else if(slideIndex === dataSlider.length){
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if(slideIndex !== dataSlider.length){
      setSlideIndex(slideIndex - 1);
    }
    else if(slideIndex === 1){
      setSlideIndex(dataSlider.length);
    }
  };

  const autoSlide = () => {
    if(slideIndex!== dataSlider.length){
      setSlideIndex(slideIndex + 1);
    }
    else if(slideIndex === dataSlider.length){
      setSlideIndex(1);
    }
  }

  setTimeout(()=>{
    autoSlide();
  }, 4000);

  return (
    <div className="slider_container">
      {dataSlider.map((obj, index) => {
        return (
          <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"} key={index}>
            <img src={`/img/slider/img${index + 1}.webp`} alt="image" />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />
    </div>
  );
};

export default Slider;
