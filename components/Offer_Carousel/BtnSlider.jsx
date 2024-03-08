import React from "react";
import "/public/css/Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
const BtnSlider = (props) => {
  return (
    <button
      onClick={props.moveSlide}
      className={props.direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <FontAwesomeIcon
        className="icon"
        icon={props.direction === "next" ? faArrowRightLong : faArrowLeftLong}
      />
    </button>
  );
};

export default BtnSlider;
