'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MdVerified, MdCloudUpload, MdTimer, MdReportProblem, MdDeleteSweep } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { FaWallet, FaPercentage } from 'react-icons/fa';
import {
  TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from 'react-icons/bi';
import Style from "./NFTDescription.module.css";
import images from "../../img";
import { Button } from "../../src/app/components/componentsindex";
import { NFTTabs } from '../NFTDetailsIndex';

const NFTDescription = () => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true);
  const [provenance, setProvenance] = useState(false);
  const [owner, setOwner] = useState(false);

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ];

  const ownerArray = [
    images.user1,
    images.user8,
    images.user3,
    images.user6,
    images.user5,
  ];

  const provenanceArray = [
    images.user6,
    images.user7,
    images.user8,
    images.user9,
    images.user10,
  ];

  // Functions to handle clicks
  const openSocial = () => {
    setSocial(!social);
    setNFTMenu(false);
  };

  const openNFTMenu = () => {
    setNFTMenu(!NFTMenu);
    setSocial(false);
  };

  const openTabs = (e) => {
    const buttonText = e.target.innerText;
    if (buttonText === "Bid History") {
      setHistory(true);
      setProvenance(false);
      setOwner(false);
    } else if (buttonText === "Provanance" || buttonText === "Provenance") {
      setHistory(false);
      setProvenance(true);
      setOwner(false);
    } else if (buttonText === "Owner") {
      setHistory(false);
      setProvenance(false);
      setOwner(true);
    }
  };

  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        {/* Share Section */}
        <div className={Style.NFTDescription_box_share}>
          <p>Virtual Worlds</p>
          <div className={Style.NFTDescription_box_share_box}>
            <MdCloudUpload
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => openSocial()}
            />
            {social && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#"><TiSocialFacebook />Facebook</a>
                <a href="#"><TiSocialInstagram />Instagram</a>
                <a href="#"><TiSocialLinkedin />Linkedin</a>
                <a href="#"><TiSocialTwitter />Twitter</a>
                <a href="#"><TiSocialYoutube />YouTube</a>
              </div>
            )}
            <BsThreeDots
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => openNFTMenu()}
            />
            {NFTMenu && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#"><BiDollar />Change Price</a>
                <a href="#"><BiTransferAlt />Transfer Price</a>
                <a href="#"><MdReportProblem />Report Problem</a>
                <a href="#"><MdDeleteSweep />Delete Item</a>
              </div>
            )}
          </div>
        </div>

        {/* Profile Section */}
        <div className={Style.NFTDescription_box_profile}>
          <h1>BearX #23453</h1>
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_left}>
              <Image
                src={images.user1}
                alt="profile"
                width={50}
                height={50}
                className={Style.NFTDescription_box_profile_box_left_img}
              />
              <div className={Style.NFTDescription_box_profile_box_left_info}>
                <small>Creator</small><br />
                <span>Karli Costa <MdVerified /></span>
              </div>
            </div>

            <div className={Style.NFTDescription_box_profile_box_right}>
              <Image
                src={images.user2}
                alt="profile"
                width={50}
                height={50}
                className={Style.NFTDescription_box_profile_box_left_img}
              />
              <div className={Style.NFTDescription_box_profile_box_right_info}>
                <small>Owner</small><br />
                <span>Karli Costa <MdVerified /></span>
              </div>
            </div>
          </div>

          {/* Bidding Section */}
          <div className={Style.NFTDescription_box_profile_biding}>
            <p><MdTimer /> <span>Auction Ending in:</span></p>

            <div className={Style.NFTDescription_box_profile_biding_box_timer}>
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                <p>2</p>
                <span>Days</span>
              </div>
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                <p>45</p>
                <span>Hours</span>
              </div>
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                <p>50</p>
                <span>Minutes</span>
              </div>
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                <p>24</p>
                <span>Seconds</span>
              </div>
            </div>

            <div className={Style.NFTDescription_box_profile_biding_box_price}>
              <div className={Style.NFTDescription_box_profile_biding_box_price_bid}>
                <small>Current Bid</small>
                <p>1.000 ETH <span>($3,221.22)</span></p>
              </div>
              <span>[96 in Stock]</span>
            </div>

            <div className={Style.NFTDescription_box_profile_biding_box_button}>
              <Button
                icon={<FaWallet />}
                btnName="Place a Bid"
                handleClick={() => { }}
                className={Style.button}
              />
              <Button
                icon={<FaPercentage />}
                btnName="Make an Offer"
                handleClick={() => { }}
                className={Style.button}
              />
            </div>

            {/* Tabs */}
            <div className={Style.NFTDescription_box_profile_biding_box_tabs}>
              <button onClick={(e) => openTabs(e)}>Bid History</button>
              <button onClick={(e) => openTabs(e)}>Provenance</button>
              <button onClick={(e) => openTabs(e)}>Owner</button>
            </div>

            {/* Content based on selected tab */}
            {history && (
              <div className={Style.NFTDescription_box_profile_biding_box_card}>
                <NFTTabs dataTab={historyArray} />
              </div>
            )}
            {provenance && (
              <div className={Style.NFTDescription_box_profile_biding_box_card}>
                <NFTTabs dataTab={provenanceArray} />
              </div>
            )}
            {owner && (
              <div className={Style.NFTDescription_box_profile_biding_box_card}>
                <NFTTabs dataTab={ownerArray} icon=<MdVerified/> />
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;
