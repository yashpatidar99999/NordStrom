import React from "react";
import styles from "/public/css/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faStore,
  faBox,
  faBagShopping,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import logo from "/img/th.jpg";

const Header = () => {
  return (
    <header className={`${styles.head} dflex`}>
      <div className={styles.logo}>
        <img height={45} src={logo} alt="logo" className={styles.limg} />
      </div>
      <div className={styles.search}>
        <FontAwesomeIcon className={styles.search_icon} icon={faMagnifyingGlass} />
        <input className={styles.search_input}
          type="text"
          name="search"
          id="search"
          placeholder="Search for products or brands"
        />
      </div>
      <div className={styles.link}>
        <div className={`${styles.login} dflex`}>
          <li>Sign In</li>
          <FontAwesomeIcon icon={faCaretDown} style={{color:"black"}} />
        </div>
        <div className={`${styles.store} dflex`}>
          <FontAwesomeIcon icon={faStore} style={{color:"black"}} />
          <li>Store</li>
        </div>
        <div className={`${styles.purchas} dflex`}>
          <FontAwesomeIcon icon={faBox} style={{color:"black"}} />
          <li>Purchase</li>
        </div>
        <div className={`${styles.cart} dflex`}>
          <FontAwesomeIcon icon={faBagShopping} style={{color:"black"}} />
        </div>
      </div>
    </header>
  );
};

export default Header;
