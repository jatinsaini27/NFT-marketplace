import React from 'react';
import Image from 'next/image';
import {
  TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp
} from "react-icons/ti";
import {RiSendPlaneFill} from "react-icons/ri";
import images from "../../../../img";
import {Discover,HelpCenter} from "../Navbar/index";

import Style from './Footer.module.css';

const Footer = () => {
  return <div className={Style.footer}>
    <div className={Style.footer_box}>
      <div className={Style.footer_box_social}>
        <Image src={images.logo} alt="footer logo" height={100} width={100}/>
        <p>The world largest digital marketplace for collectibles and non fungible tokens</p>
        <div className={Style.footer_social}>
          <a href="#">
            <TiSocialFacebook/>
          </a>
          <a href="#">
            <TiSocialLinkedin />
          </a>
          <a href="#">
            <TiSocialTwitter />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
          <a href="#">
            <TiSocialYoutube />
          </a>
        </div>
      </div>
      <div className={Style.footer_box_discover}>
        <h3>Discover</h3>
        <Discover/>
      </div>
      <div className={Style.footer_box_help}>
        <h3>Help Center</h3>
        <HelpCenter/>
      </div>
      <div className={Style.subscribe}>
        <h3>Subscribe</h3>
      </div>
      <div className={Style.subscribe_box}>
        <input type='email' placeholder="Enter your email"/>
        <RiSendPlaneFill className={Style.subscriber_box_send}/>
      </div>
      <div className={Style.subscriber_box_info}>
        <p>Discover, sell and collect NFT</p>
      </div>
    </div>
    </div>;
};
export default Footer;