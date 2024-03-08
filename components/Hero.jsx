import React from 'react'
import styles from '/public/css/Hero.module.css'
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.category}>
        <li>New</li>
        <li>Clearance</li>
        <li>Women</li>
        <li>Men</li>
        <li>Kids</li>
        <li>Shoes</li>
        <li>Bags & Accessories</li>
        <li>Home</li>
        <li>Beauty</li>
        <li>Gift Guide</li>
        <li>FLash Events</li>
      </div>
      <div className={styles.acc}>
        <h1>More to Rack, easier and faster.</h1>
        <button className={styles.acc_btn}>Sign In or Create an Account</button>
      </div>
    </section>
  )
}

export default Hero