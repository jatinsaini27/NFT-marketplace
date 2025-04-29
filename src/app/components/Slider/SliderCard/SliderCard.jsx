'use client'
import React, { useState, useEffect, useRef } from 'react'
import Style from './SliderCard.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import images from "../../../../../img"
import LikeProfile from '../../LikeProfile/LikeProfile'

const SliderCard = ({el,i}) => {

  return (
   <motion.div className={Style.sliderCard}>
    <div className={Style.sliderCard_box}>
        <motion.div className={Style.sliderCard_box_img}>
                  <Image src={el.background} alt="slider profile" width={500} height={300} objectFit='covers' className={Style.sliderCard_box_img_img} />
        </motion.div>
        <div className={Style.sliderCard_box_title}>
            <p>NFT Video #1245</p>
            <div className={Style.sliderCard_box_title_like}>
                
                <small>1 0f 100</small>
            </div>
        </div>
        <div className={Style.sliderCard_box_price}>
            <div className={Style.sliderCard_box_price_box}>
                <small>Current Bid</small>
                <p>1.00 ETH</p>

            </div>
            <div className={Style.sliderCard_box_price_time}>
                <small>Remaining Time</small>
                <p>12h  : 30m :  45s</p>
            </div>
        </div>
    </div>
   </motion.div>
  )
}

export default SliderCard
