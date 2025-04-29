'use client'
import React from 'react'
import Style from './DaysComponents.module.css'
import Image from 'next/image'
import { MdVerified } from 'react-icons/md'
import images from '../../../../../img'

const DaysComponents = ({el,i}) => {
  return (
    <div className={Style.daysComponent}>
      <div className={Style.daysComponent_box}>
        <div className={Style.daysComponent_box_img}>
          <Image
            src={el.background}
            alt="profile background"
            width={800}
            height={500}
            className={Style.daysComponent_box_img_img}
            layout="responsive"
          />
        </div>
        <div className={Style.daysComponent_box_profile}>
          <Image
            src={images.creatorbackground2}
            alt="Profile image 1"
            width={200}
            height={200}
            className={Style.daysComponent_box_img_1}
            layout="intrinsic"
          />
          <Image
            src={images.creatorbackground2}
            alt="Profile image 2"
            width={200}
            height={200}
            className={Style.daysComponent_box_img_2}
            layout="intrinsic"
          />
          <Image
            src={images.creatorbackground2}
            alt="Profile image 3"
            width={200}
            height={200}
            className={Style.daysComponent_box_img_3}
            layout="intrinsic"
          />
        </div>
        <div className={Style.daysComponent_box_title}>
          <h2>Amazing Collection</h2>
          <div className={Style.daysComponent_box_title_info}>
            <div className={Style.daysComponent_box_title_info_profile}>
              <Image
                src={images.user1}
                alt="Creator profile"
                width={30}
                height={30}
                className={Style.daysComponent_box_title_info_profile_img}
                layout="intrinsic"
              />
              <p>Creator
                <span>Shoaib Bhai<small><MdVerified className={Style.verifiedIcon} /></small></span>
              </p>
            </div>
            <div className={Style.daysComponent_box_title_info_price}>
              <small>1.255 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DaysComponents
