import React from 'react';
import Link from 'next/link';
import Style from './Discover.module.css';

const Discover = () => {
  const discover = [
    { name: "Collection", link: "collection" },
    { name: "Search", link: "searchPage" },
    { name: "Author Profile", link: "author" },
    { name: "NFT Details", link: "NFT-details" },
    { name: "Account Setting", link: "account" },
    { name: "Upload NFT", link: "Upload-nft" },
    { name: "Connect Wallet", link: "connect-wallet" },
    { name: "Blog", link: "blog" }
  ];

  return (
    <div>
      {discover.map((el, i) => (
        <div key={i} className={Style.discover}>
          <Link href={`/${el.link}`}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
