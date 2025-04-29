import React from 'react'
import Style from './LikeProfile.module.css'
import Image from 'next/image'
import images from "../../../../img"

const LikeProfile = () => {
    const imageArray= [images.user1, images.user2, images.user3, images.user4];

  return (
    <div className={Style.like}>
        {imageArray.map((el,i)=>
        <div className={Style.like_box} key={i+1}>
            <Image src={el} alt="profile" width={20} height={20} key={i+1} className={Style.like_box_img}/>
        </div>)}
      
    </div>
  )
}

export default LikeProfile
