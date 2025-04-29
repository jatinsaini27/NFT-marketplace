'use client';
import React, { useState } from 'react';
import Style from './author.module.css';

import { Banner, NFTCardTwo } from "../../../collectionPage/collectionindex";
import { Brand, Title } from "../components/componentsindex";
import { AuthorProfileCard, AuthorTaps, AuthorNFTCardBox } from "../../../authorPage/componentindex";

import images from "../../../img";
import FollowerTabCard from "../components/FollowerTab/FollowerTabCard/FollowerTabCard";

const Author = () => {
  const followerArray = [
    {
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

  const [collectibles, setCollectibles] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <div className={Style.author}>
      <Banner bannerImage={images.creatorbackground2} />
      <AuthorProfileCard />

      <AuthorTaps
        setCollectibles={setCollectibles}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />

      <AuthorNFTCardBox
        collectibles={collectibles}
        created={created}
        like={like}
        follower={follower}
        following={following}
      />

      <Title
        heading="Popular Creators"
        paragraph="Click on the music icon and enjoy NFT Music"
      />

      <div className={Style.author_box}>
        {followerArray.map((el, i) => (
          <FollowerTabCard key={i} i={i} el={el} />
        ))}
      </div>

      <Brand />
    </div>
  );
};

export default Author;
