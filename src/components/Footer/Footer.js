// src/components/Footer/Footer.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="primary-background section">
      <div className="container footer">
        <Image className="footer-logo" src="/assets/Logo2.png" alt="Logo" width={135} height={150} />
        <div>
          <span className="footerHd">Sitemap</span>
          <menu>
            <li><Link className="footerItem footer-hover" href="/">Home</Link></li>
            <li><Link className="footerItem footer-hover" href="/menu">Menu</Link></li>
            <li><Link className="footerItem footer-hover" href="/reservation">Reservation</Link></li>
            <li><Link className="footerItem footer-hover" href="/about">About</Link></li>
            <li><Link className="footerItem footer-hover" href="/login">Login</Link></li>
          </menu>
        </div>
        <div>
          <span className="footerHd">Contact Us</span>
          <menu>
            <li className="footerItem">678 Pisa Ave, Chicago, IL 60611s</li>
            <li className="footerItem">(312) 593-2744</li>
            <li className="footerItem">customer@littlelemon.com</li>
          </menu>
        </div>
        <div className="footerSocials">
          <span className="footerHd">Connect with Us</span>
          <div>
            <span className="footerSocialItem footer-hover"><BsFacebook /></span>
            <span className="footerSocialItem footer-hover"><BsInstagram /></span>
            <span className="footerSocialItem footer-hover"><BsTwitter /></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
