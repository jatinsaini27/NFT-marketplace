import React from 'react'
import {NFTDescription, NFTDetailsImg, NFTImage, NFTTabs} from './NFTDetailsIndex'
import Style from "./NFTDetailsPage.module.css"


const NFTDetailsPage = () => {
  return (
    <div className={Style.NFTDetailsPage}>
      <div className={Style.NFTDetailsPage_box}>
        <NFTDetailsImg/>
        <NFTDescription/>
        
      </div>

    </div>
  )
}

export default NFTDetailsPage