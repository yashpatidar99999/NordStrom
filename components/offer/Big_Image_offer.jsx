import React from 'react'
import styles from '/public/css/Deals.module.css';

const Big_Image_offer = (props) => {
  return (
    <div className={styles.container_image}>
        <img className={styles.image_offer} src={props.img} alt="20 ki image"/>
    </div>
  )
}

export default Big_Image_offer