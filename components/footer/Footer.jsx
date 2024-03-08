import React from 'react'
import Footer_Div from './Footer_Div'
import { customer, about, community, card, company } from '../../public/js/footer_data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'
import '../../public/css/Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="footer_container">
            <Footer_Div title="Customer Service" items={customer}/>
            <Footer_Div title="About Us" items={about}/>
            <Footer_Div title="Nordstrom Rack & The Community" items={community}/>
            <Footer_Div title="Nordstrom Card" items={card}/>
            <Footer_Div title="Nordstrom, Inc." items={company}/>
            <div className="footer_download">
                <div className="text">
                    <img src="/img/download.png" alt="download" />
                    <h1>Download Our Apps</h1>
                </div>
                <div className="links">
                    <FontAwesomeIcon icon={faFacebook}/>
                    <FontAwesomeIcon icon={faXTwitter}/>
                    <FontAwesomeIcon icon={faPinterest}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                </div>
            </div>
        </div>
        <div className="copy_right">
            <div className="links">
                <li>Privacy</li>
                <li>Your Privacy Rights</li>
                <li>Terms & Conditions</li>
                <li>California Supply Chain Act</li>
                <li>©2024 Nordstrom Rack</li>
            </div>
        </div>
    </footer>
  )
}

export default Footer