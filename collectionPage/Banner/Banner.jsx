import React from 'react'
import Image from 'next/image'
import Style from './Banner.module.css'

const Banner = ({ bannerImage }) => {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_img}>
        <Image
          src={bannerImage}
          alt="background"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className={Style.banner_img_mobile}>
        <Image
          src={bannerImage}
          alt="background"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  )
}

export default Banner
