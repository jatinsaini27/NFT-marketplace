import React, { useState } from 'react';
import Style from './AuthorTaps.module.css';
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from 'react-icons/ti';

const AuthorTaps = ({ setCollectibles, setCreated, setLike, setFollower, setFollowing }) => {
  const [openList, setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState('Most Recent');

  const listArray = [
    'Created By Admin',
    'Most Appreciated',
    'Most Discussed',
    'Most Viewed',
  ];

  const openTab = (tabIndex) => {
    setActiveBtn(tabIndex);

    // Reset all to false first
    setCollectibles(false);
    setCreated(false);
    setLike(false);
    setFollower(false);
    setFollowing(false);

    // Then activate only one
    switch (tabIndex) {
      case 1:
        setCollectibles(true);
        break;
      case 2:
        setCreated(true);
        break;
      case 3:
        setLike(true);
        break;
      case 4:
        setFollowing(true);
        break;
      case 5:
        setFollower(true);
        break;
      default:
        break;
    }
  };

  const openDropDown = () => {
    setOpenList((prev) => !prev);
  };

  return (
    <div className={Style.AuthorTaps}>
      <div className={Style.AuthorTaps_box}>
        <div className={Style.AuthorTaps_box_left}>
          <div className={Style.AuthorTaps_box_left_btn}>
            <button
              className={activeBtn === 1 ? Style.active : ''}
              onClick={() => openTab(1)}
            >
              Collectibles
            </button>
            <button
              className={activeBtn === 2 ? Style.active : ''}
              onClick={() => openTab(2)}
            >
              Created
            </button>
            <button
              className={activeBtn === 3 ? Style.active : ''}
              onClick={() => openTab(3)}
            >
              Liked
            </button>
            <button
              className={activeBtn === 4 ? Style.active : ''}
              onClick={() => openTab(4)}
            >
              Following
            </button>
            <button
              className={activeBtn === 5 ? Style.active : ''}
              onClick={() => openTab(5)}
            >
              Follower
            </button>
          </div>
        </div>

        <div className={Style.AuthorTaps_box_right}>
          <div
            className={Style.AuthorTaps_box_right_para}
            onClick={openDropDown}
          >
            <p>{selectedMenu}</p>
            {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>

          {openList && (
            <div className={Style.AuthorTaps_box_right_list}>
              {listArray.map((el, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelectedMenu(el);
                    setOpenList(false);
                  }}
                  className={Style.AuthorTaps_box_right_list_item}
                >
                  <p>{el}</p>
                  <span>{selectedMenu === el && <TiTick />}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorTaps;
