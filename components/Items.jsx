import React from 'react'
import Item_slider from './Item_Carousel/Item_slider'
import {items, denims, shoes} from '../public/js/data'
import Small_Image_offer from "./offer/Small_Image_offer"
import Big_Image_offer from './offer/Big_Image_offer'

const Items = () => {
  return (
    <div className="items">
      <Item_slider items={items} type={1}/>
      <Small_Image_offer img="/img/soon.webp"/>
      <Item_slider items={denims} type={2} title="Top Denims"/>
      <Big_Image_offer img="/img/marc.webp"/>
      <Item_slider items={shoes} type={2} title="Trending Now"/>
      <Small_Image_offer img="/img/be_first.webp"/>
    </div>
  )
}

export default Items