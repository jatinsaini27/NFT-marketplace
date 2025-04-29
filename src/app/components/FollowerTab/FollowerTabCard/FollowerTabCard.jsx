'use client'
import React, { useState } from 'react'
import Style from './FollowerTabCard.module.css'
import Image from 'next/image'
import { MdVerified } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'
import images from '../../../../../img'

const FollowerTabCard = ({ i, el }) => {
    const [following, setFollowing] = useState(false);

    const followMe = () => {
        setFollowing((prev) => !prev);
    };

    return (
        <div className={Style.FollowerTabCard}>
            <div className={Style.FollowerTabCard_rank}>
                <p>
                    #{i + 1}<span>🥇</span>
                </p>
            </div>
            <div className={Style.FollowerTabCard_box}>
                <div className={Style.FollowerTabCard_box_img}>
                    <Image className={Style.FollowerTabCard_box_img_img} src={el.background} alt="profile background" width={500} height={500} objectFit='covers' />
                </div>

                <div className={Style.FollowerTabCard_box_profile}>
                    <Image className={Style.FollowerTabCard_box_profile_img} alt="profile picture" width={50} height={50}
                        src={el.user} />
                </div>
                <div className={Style.FollowerTabCard_box_info}>
                    <div className={Style.FollowerTabCard_box_info_name}>
                        <h4>Giada Mann{""} <span><MdVerified /></span></h4>
                        <p>12.32 ETH</p>
                    </div>

                    <div className={Style.FollowerTabCard_box_info_following}>
                        {
                            following ? (
                                <a onClick={followMe}>
                                    Following
                                </a>
                            ) : (
                                <a onClick={followMe}>
                                    Follow{""} <span><TiTick /></span>
                                </a>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowerTabCard
