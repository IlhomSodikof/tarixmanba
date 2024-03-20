import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
// import { fotorlogo } from "../../react/Group 8 (2).svg"

export default function Footer() {
  return (
    <footer>
      <div className="footer-top-box">

      </div>
      <div className="footer-bottom-box">
        <div className="footer-icons">
          <div className="footer-logos">
            <img className='logo-footer' src="./Group 8 (2).svg" alt="Logo" />
          </div>
          <div className="footer-icons-box">
            {/* <p className='footer-title'> Bizni  ichtimoiy tarmoqlarda kuzating:</p> */}
            <div ><a className='footer-insta icon-box' ><FaInstagram /></a></div>
            <div ><a className="footer-telegram icon-box"><FaTelegramPlane /></a></div>
            <div ><a className="footer-youtube icon-box"><FaYoutube /></a></div>
            <div ><a className="footer-facebok icon-box"><FaFacebookF /></a></div>
            <div ><a className="footer-twitter icon-box"><FaXTwitter /></a> </div>
          </div>
        </div >
        <p>© Copyright 2021 - «Tarixmanba.uz» Все права защищены</p>
      </div >
    </footer >
  )
}
