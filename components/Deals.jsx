import React from 'react'
import styles from "/public/css/Deals.module.css"
import Slider from './Offer_Carousel/Slider'
import Vd1 from './Vd1'
import Big_Image_offer from './offer/Big_Image_offer'
import Small_Image_offer from './offer/Small_Image_offer'

const Deals = () => {
  return (
   <section className={styles.deals}>
    <div className={styles.great_gift}>
        <h1> Great Gifts. Great Prices.</h1>
        <p>MORE <br />IN <br />STORE</p>
        <div className={styles.easter}>
            <h2>Easter deals up to 60% off.</h2>
            <div className={styles.link}>
                <li>Easter Deals & Gifts</li>
                <li>Find Your Rack</li>
            </div>
        </div>
    </div>
    <Slider />
    <Vd1 />
    <Big_Image_offer img="/img/20.webp"/>
    <Small_Image_offer img="/img/img5.webp"/>
    
   </section>
  )
}

export default Deals
