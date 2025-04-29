"use client";
import React, { useState, useCallback, useEffect } from "react";
import Style from './BigNFTSlider.module.css';
import Image from 'next/image';
import {AiFillFire,AiFillHeart,AiOutlineHeart} from 'react-icons/ai';
import {MdVerified,MdTimer} from 'react-icons/md';
import {TbArrowBigLeftLines,TbArrowBigRightLine} from 'react-icons/tb';
import images from '../../../../img';
import Button from '../Button/Button';
const BigNFTSlider = () => {

    const[idNumber,setIdNumber] = useState(1);
    const sliderData = [
        {
            title:"Hello NFT",
            id:1,
            name:"Jatin Saini",
            collection: "Gym",
            price:"00000064664 ETH",
            like:243,
            image:images.user1,
            nftImage:images.nft_image_1,
            time:{
                days:27,
                hour:10,
                minutes:11,
                seconds:35
            },
        },
        {
            title: "Buddy NFT",
            id: 2,
            name: "Rohan Saini",
            collection: "Home",
            price: "00000064664 ETH",
            like: 789,
            image: images.user2,
            nftImage: images.nft_image_2,
            time: {
                days: 27,
                hour: 10,
                minutes: 11,
                seconds: 35
            },
        },
        {
            title: "Gym NFT",
            id: 3,
            name: "Raman Saini",
            collection: "Outside",
            price: "00000064664 ETH",
            like: 300,
            image: images.user3,
            nftImage: images.nft_image_3,
            time: {
                days: 27,
                hour: 10,
                minutes: 11,
                seconds: 35
            },
        },
        {
            title: "Home NFT",
            id: 4,
            name: "Akshit Saini",
            collection: "Rome",
            price: "00000064664 ETH",
            like: 295,
            image: images.user4,
            nftImage: images.nft_image_3,
            time: {
                days: 27,
                hour: 10,
                minutes: 11,
                seconds: 35
            },
        },
    ]

    const inc = useCallback(()=>{
        if(idNumber+1<sliderData.length)
        {
            setIdNumber(idNumber+1);
        }
    }, [idNumber,sliderData.length]);
    const dec = useCallback(() => {
        if (idNumber > 0) {
            setIdNumber(idNumber - 1);
        }
    }, [idNumber]);

    useEffect(()=>{
        inc();
    },[]);
    return(
        <div className={Style.bigNFTSlider}>
        <div className={Style.bigNFTSlider_box}>
            <div className={Style.bigNFTSlider_box_left}>
                <h2>{sliderData[idNumber].title}</h2>
                <div className={Style.bigNFTSlider_box_left_creator}>
                    <div className={Style.bigNFTSlider_box_left_creator_profile}>
                        <Image className={Style.bigNFTSlider_box_left_creator_profile_img}
                         src={sliderData[idNumber].image} alt="profile image" width={50} height={50} />
                         <div className={Style.bigNFTSlider_box_left_creator_profile_img}>
                            <p >Creator</p>
                            <h4>
                                {sliderData[idNumber].name}{""}
                                <span><MdVerified/></span>
                            </h4>
                         </div>
                    </div>

                    <div className={Style.bigNFTSlider_box_left_creator_collection}>
                        <AiFillFire className={Style.bigNFTSlider_box_left_creator_collection_icon}/>
                        <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                            <p>Collection</p>
                            <h4>{sliderData[idNumber].collection}</h4>
                        </div>
                    </div>
                </div>

                <div className={Style.bigNFTSlider_box_left_bidding}>
                    <div className={Style.bigNFTSlider_box_left_bidding_box}>
                        <small>Current Bid</small>
                        <p>{sliderData[idNumber].price} <span>$221,21</span></p>
                    </div>
                    <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
                        <MdTimer className={Style.bigNFTSlider_box_left_bidding_box_icon}/>
                        <span>Auction ending in </span>

                    </p>
                    <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>
                                {sliderData[idNumber].time.days} <span>Days</span>
                            </p>
                        </div>
                            <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>
                                    {sliderData[idNumber].time.hour} <span>Hours</span>
                                </p>
                            </div>
                            <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>
                                    {sliderData[idNumber].time.minutes} <span>Minutes</span>
                                </p>
                            </div>
                            <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>
                                    {sliderData[idNumber].time.seconds} <span>Seconds</span>
                                </p>
                            </div>
                        
                    </div>

                    <div className={Style.bigNFTSlider_box_left_button}>
                        <Button btnName="Place" handleClick={() => {}}/>
                        <Button btnName="View" handleClick={() => { }} />
                    </div>
                </div>

                <div className={Style.bigNFTSlider_box_left_sliderBtn}>
                    <TbArrowBigLeftLines className={Style.bigNFTSlider_box_left_sliderBtn_icon} size={80}
                    onClick={()=> dec() }/>
                     <TbArrowBigRightLine className={Style.bigNFTSlider_box_left_sliderBtn_icon} size={80}
                            onClick={() => inc()} />
                </div>
                

            </div>

            <div className={Style.bigNFTSlider_box_right}>
                <div className={Style.bigNFTSlider_box_right_box}>
                    <Image src={sliderData[idNumber].nftImage} alt="NFT image" className={Style.bigNFTSlider_box_right_box_img}/>
                    <div className={Style.bigNFTSlider_box_right_box_like}>
                        <AiFillHeart/>
                        <span>{sliderData[idNumber].like}</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default BigNFTSlider;