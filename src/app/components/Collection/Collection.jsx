'use client'
import React , {useState,useEffect} from 'react'
import Style from './Collection.module.css'
import {
    BsFillAlarmFill,
    BsFillCalendarDateFill,
    BsCalendar3
} from 'react-icons/bs'
import DaysComponents from './DaysComponents/DaysComponents'
import images from "../../../../img"


const Collection = () => {
    const [popular,setPopular] = useState(true);
    const[following,setFollowing] = useState(false);
    const[news,setNews] = useState(false);

    const CardArray = [
   
       {
         background:images.creatorbackground1,
         user:images.user1,
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
   
       {
         background: images.creatorbackground7,
         user: images.user7,
       },
   
       {
         background: images.creatorbackground8,
         user: images.user8,
       },
   
   
       
       
       ];
     const followingArray = [{
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
   
       {
         background: images.creatorbackground7,
         user: images.user7,
       },];
     const newsArray = [  {
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
   
     ];

    const openPopular = () => {
        setPopular(true);
        setFollowing(false);
        setNews(false);
    };

    // Function to show Following section
    const openFollower = () => {
        setPopular(false);
        setFollowing(true);
        setNews(false);
    };

    // Function to show News section
    const openNews = () => {
        setPopular(false);
        setFollowing(false);
        setNews(true);
    };




  return (
    <div  className={Style.Collection}>
        <div className={Style.collection_title}>
            <h2>Top List Creators</h2>
            <div className={Style.collection_collections}>
                <div className={Style.collection_collections_btn}>
                    <button onClick={()=>openPopular()}>
                        <BsFillAlarmFill/>24 Hours
                    </button>
                      <button onClick={() => openFollower()}>
                          <BsCalendar3 />7 Days
                      </button>
                      <button onClick={() => openNews()}>
                          <BsFillCalendarDateFill />30 Days
                      </button>
                </div>
            </div>
        </div>

        {
            popular && (
                <div className={Style.collection_box}>
                    {CardArray.map((el,i)=>(
                        <DaysComponents key={i+1} i={i} el={el}/>
                    ))}
                </div>
            )
        }
        {
            following && (
                <div className={Style.collection_box}>
                    {followingArray.map((el,i)=>(
                        <DaysComponents key={i + 1} i={i} el={el} />
                    ))}
                </div>
            )
        }
          {
              news && (
                  <div className={Style.collection_box}>
                      {newsArray.map((el, i) => (
                          <DaysComponents key={i + 1} i={i} el={el} />
                      ))}
                  </div>
              )
          }
      
    </div>
  )
}

export default Collection
