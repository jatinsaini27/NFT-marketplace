import React from 'react'
import Image from 'next/image'
import Style from "./NFTTabs.module.css"

const NFTTabs = ({ dataTab, icon }) => {
  return (
    <div className={Style.NFTTabs}>
      {
        dataTab.map((el, i) => (
          <div className={Style.NFTTabs_box} key={i}>
            <Image src={el} alt="Profile Image" width={50} height={50} className={Style.NFTTabs_box_img} />
            <div className={Style.NFTTabs_box_info}>
              <div className={Style.NFTTabs_box_info_name}>
                Offer By $770 by <span>Shoaib Bhai {icon}</span>
              </div>
              <small>Jun 14 - 4:12 PM</small>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default NFTTabs
