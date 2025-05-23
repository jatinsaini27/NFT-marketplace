'use client'
import React from 'react'
import Style from './Brand.module.css'
import Image from 'next/image'
import images from "../../../../img"
import {Button} from "../../components/componentsindex"

const Brand = () => {
  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
            <Image src={images.logo} alt="brand logo" width={100} height={100}/>
            <h1>Earn free crypto with Ciscrypt</h1>
            <p>Creative Agency that lead and inspire</p>
            <div className={Style.Brand_box_left_btn}>
                <Button btnName="Create" handleClick={()=>{}}/>
                      <Button btnName="Discover" handleClick={() => { }} />
            </div>
        </div>
              <div className={Style.Brand_box_right}>
                <Image src={images.earn} alt="brand logo" width={800} height={600}/>
              </div>
        </div>
    </div>
  )
}

export default Brand
