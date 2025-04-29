'use client'
import React, { useState } from 'react'
import Style from './NFTCardTwo.module.css'
import Image from 'next/image'
import images from '../../img'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BsImage } from 'react-icons/bs'
import { MdVerified, MdTimer } from 'react-icons/md'
import { LikeProfile } from '@/app/components/componentsindex'

const NFTCardTwo = ({ NFTData }) => {
    const [like, setLike] = useState(false);
    const [likeInc, setLikeInc] = useState(21);

    // Missing function added here
    const likeNFT = () => {
        if (!like) {
            setLike(true);
            setLikeInc(prev => prev + 1);
        } else {
            setLike(false);
            setLikeInc(prev => prev - 1);
        }
    }

    return (
        <div className={Style.NFTCardTwo}>
            {NFTData.map((el, i) => (
                <div className={Style.NFTCardTwo_box} key={i + 1}>
                    <div className={Style.NFTCardTwo_box_like}>
                        <div className={Style.NFTCardTwo_box_like_box}>
                            <div className={Style.NFTCardTwo_box_like_box_box}>
                                <BsImage className={Style.NFTCardTwo_box_like_box_box_icon} />
                                <p onClick={() => likeNFT()}>
                                    {
                                        like ? <AiFillHeart /> : <AiOutlineHeart />
                                    }{" "}
                                    <span>{likeInc}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={Style.NFTCardTwo_box_img}>
                        <Image src={el} alt="NFT" style={{ objectFit: "cover" }} className={Style.NFTCardTwo_box_img_img} />
                    </div>
                    <div className={Style.NFTCardTwo_box_info}>
                        <div className={Style.NFTCardTwo_box_info_left}>
                            <LikeProfile />
                            <p>Clone #{i + 1}</p>
                        </div>
                        <small>4 {i + 2}</small>
                    </div>
                    <div className={Style.NFTCardTwo_box_price}>
                        <div className={Style.NFTCardTwo_box_price_box}>
                            <small>Current Bid</small>
                            <p>1 {i + 5}.000ETH</p>
                        </div>
                        <p className={Style.NFTCardTwo_box_price_stock}>
                            <MdTimer />
                            <span>{i + 1} hours left</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NFTCardTwo
