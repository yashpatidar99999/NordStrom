import React from 'react'

const Item2 = (props) => {
  return (
    <div key={props.index} className="item">
      <img src={`/img/${props.item.img}`} alt={props.item.title} />
      <div className="item-info">
        <h3>{props.item.title}</h3>
        <p>{props.item.dis_price}</p>
        <p>{props.item.actual_price}</p>
        <p>{props.item.ratings}</p>
      </div>
    </div>
  )
}

export default Item2