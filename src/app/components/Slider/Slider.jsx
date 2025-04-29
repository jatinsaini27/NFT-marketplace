'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'
import SliderCard from './SliderCard/SliderCard'
import Style from './Slider.module.css'
import images from "../../../../img"

const Slider = () => {
     const FollowingArray = [{
        background: images.creatorbackground1,
        user: images.user1,
      },
    
        {
          background: images.creatorbackground2,
          user: images.user2,
        },
    
        {
          background: images.creatorbackground3,
          user: images.user3,
        },
    
        {
          background: images.creatorbackground4,
          user: images.user4,
        },
    
        {
          background: images.creatorbackground5,
          user: images.user5,
        },
    
        {
          background: images.creatorbackground6,
          user: images.user6,
        },
    
       ];
    const [width, setWidth] = useState(0);
    const dragSlider = useRef(null);

    useEffect(() => {
        if (dragSlider.current) {
            setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
        }
    }, []); // Added dependency array

    const handleScroll = (direction) => {
        if (!dragSlider.current) return;

        const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
        dragSlider.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    };

    return (
        <div className={Style.slider}>
            <div className={Style.slider_box}>
                <h2>Explore NFT Videos</h2>
                <div className={Style.slider_box_button}>
                    <p>Click on Play icon & enjoy NFT Videos</p>
                    <div className={Style.slider_box_button_btn}>
                        <div className={Style.slider_box_button_btn_icon} onClick={() => handleScroll("left")}>
                            <TiArrowLeftThick />
                        </div>
                        <div className={Style.slider_box_button_btn_icon} onClick={() => handleScroll("right")}>
                            <TiArrowRightThick />
                        </div>
                    </div>
                </div>
                <motion.div className={Style.slider_box_items} ref={dragSlider}>
                    <motion.div
                        className={Style.slider_box_item}
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}>
                        {FollowingArray.map((el, i) => (
                            <SliderCard key={i} el={el} i={i} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Slider;
