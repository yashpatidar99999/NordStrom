import React from 'react'
import '/public/css/ItemSlider.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Item1 from "./Item1"
import Item2 from "./Item2"

const Item_slider = (props) => {
    const settings = props.type === 1 ? {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    } : {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
    };
  return (
    <div className="container">
        <div className="slide_container">
            <h1 style={{marginBottom: "2rem"}}>{props.title}</h1>
            <Slider {...settings}>
            {
                props.items.map((item, index) => {
                    return (
                        props.type === 1 ? <Item1 item={item} index={index}/> : <Item2 item={item} index={index}/>
                    )
                })
            }
            </Slider>
        </div>
    </div>
  )
}

export default Item_slider