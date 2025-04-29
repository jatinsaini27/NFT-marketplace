'use client'
import React, { useState } from 'react'
import Style from './AuthorProfileCard.module.css'
import Image from 'next/image'
import { MdVerified, MdCloudUpload, MdOutlineReportProblem } from 'react-icons/md'
import { FiCopy } from 'react-icons/fi'
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialYoutube,
} from 'react-icons/ti'
import { BsThreeDots } from 'react-icons/bs'
import images from "../../img"
import { Button } from "../../src/app/components/componentsindex"

const AuthorProfileCard = () => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);

  const copyAddress = () => {
    const copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    alert("Address copied: " + copyText.value);
  };

  const openShare = () => {
    setShare(!share);
    setReport(false); // close report if open
  };

  const openReport = () => {
    setReport(!report);
    setShare(false); // close share if open
  };

  return (
    <div className={Style.AuthorProfileCard}>
      <div className={Style.AuthorProfileCard_box}>
        <div className={Style.AuthorProfileCard_box_img}>
          <Image src={images.nft_image_1} className={Style.AuthorProfileCard_box_img_img}
            width={220}
            height={220}
            alt="NFT Images" />
        </div>

        <div className={Style.AuthorProfileCard_box_info}>
          <h2 className={Style.nameVerified}>
            Dony Herrera{" "}
            <span><MdVerified className={Style.verifiedIcon} /></span>
          </h2>
          <div className={Style.AuthorProfileCard_box_info_address}>
            <input type="text" value="0x1a2b3c4d5e6f7g8h9i0j" id="myInput" readOnly />
            <FiCopy onClick={copyAddress} className={Style.AuthorProfileCard_box_info_address_icon} />
          </div>
          <p>
            Punk #4786 / An OG CryptoPunk Collector, hoarder of 100+ CryptoPunks and 50+ Bored Apes.
            Contributing to @ether_cards, an NFT Monetization platform for creators.
          </p>
          <div className={Style.AuthorProfileCard_box_info_social}>
            <a href="#"><TiSocialFacebook /></a>
            <a href="#"><TiSocialInstagram /></a>
            <a href="#"><TiSocialLinkedin /></a>
            <a href="#"><TiSocialYoutube /></a>
          </div>
        </div>

        <div className={Style.AuthorProfileCard_box_share}>
          <Button btnName="Follow" handleClick={() => { }} />
          <MdCloudUpload onClick={openShare} className={Style.AuthorProfileCard_box_share_icon} />

          {share && (
            <div className={Style.AuthorProfileCard_box_share_upload}>
              <p><span><TiSocialFacebook /></span> Facebook</p>
              <p><span><TiSocialInstagram /></span> Instagram</p>
              <p><span><TiSocialLinkedin /></span> Linkedin</p>
              <p><span><TiSocialYoutube /></span> YouTube</p>
            </div>
          )}

          <BsThreeDots onClick={openReport} className={Style.AuthorProfileCard_box_share_icon} />
          {report && (
            <p className={Style.AuthorProfileCard_box_share_report}>
              <span><MdOutlineReportProblem /></span>
              Report Abuse
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthorProfileCard;
