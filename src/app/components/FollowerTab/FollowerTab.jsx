'use client'
import React, { useState,useEffect } from 'react'
import Style from './FollowerTab.module.css'
import {
  RiUserFollowFill,
  RiAwardLine
} from 'react-icons/ri'
import FollowerTabCard from './FollowerTabCard/FollowerTabCard'
import images from "../../../../img";

const FollowerTab = () => {
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

    {
      background: images.creatorbackground7,
      user: images.user7,
    },];
  const NewsArray = [  {
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

  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const openPopular = () => {
    setPopular(true);
    setFollowing(false);
    setNews(false);
  };

  const openFollower = () => {
    setPopular(false);
    setFollowing(true);
    setNews(false);
  };

  const openNews = () => {
    setPopular(false);
    setFollowing(false);
    setNews(true);
  };

  return (
    <div className={Style.followerTab}>
      <div className={Style.followerTab_title}>
        <h2> Top Creators.... </h2>
        <div className={Style.followerTab_tabs}>
          <div className={Style.followerTab_tabs_btn}>
            <button onClick={()=>openPopular()}>
              <RiUserFollowFill /> Popular
            </button>
            <button onClick={()=>openFollower()}>
              <RiUserFollowFill /> Following
            </button>
            <button onClick={()=>openNews()}>
              <RiAwardLine /> NoteWorthy
            </button>
          </div>
        </div>
      </div>

      {popular && (
        <div className={Style.followerTab_box}>
          {CardArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.followerTab_box}>
          {FollowingArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
      {news && (
        <div className={Style.followerTab_box}>
          {NewsArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      <div className={Style.followerTab_member}>
        <div className={Style.followerTab_member_box}>
          <a href="#">Show me more</a>
          <a href="#">Become an author</a>
        </div>
      </div>
    </div>
  );
};

export default FollowerTab;
