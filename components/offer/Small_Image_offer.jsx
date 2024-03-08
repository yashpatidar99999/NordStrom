import React from 'react'
import styles from '/public/css/Deals.module.css'

const Small_Image_offer = (props) => {
  return (
    <div className={styles.container_small_image}>
        <img className={styles.image_offer} src={props.img} alt="20 ki image"/>
    </div>
  )
}

export default Small_Image_offer