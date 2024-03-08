import React from "react";
import '/public/css/ItemSlider.css'

const Item1 = (props) => {
  return (
    <div key={props.index} className="item">
      <img src={`/img/items/${props.item.img}`} alt={props.item.title} />
      <div className="item-info">
        <h3>{props.item.title}</h3>
        <p>{props.item.info}</p>
      </div>
    </div>
  );
};

export default Item1;
