"use client";
import React, { useState,useEffect,useContext } from 'react';

import Style from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { MdNotificationsNone } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuRight } from 'react-icons/cg';
import { Discover, HelpCenter, Profile, Settings } from '.';

import { Button } from '../componentsindex';
import images from "../../../../img";
import SideBar from '../Navbar/Sidebar/Sidebar';
import Notification from '../Navbar/Notification/Notification';
import {NFTMarketplaceContext} from "../../../../Context/NFTMarketplaceContext";


const Navbar = () => {
    const [discover, setDiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideMenu, setOpenSideMenu] = useState(false);

    const openMenu = (e) => {
        const btnText = e.target.innerText;
        setDiscover(btnText === 'Discover' ? !discover : false);
        setHelp(btnText === 'Help Center' ? !help : false);
        setNotification(false);
        setProfile(false);
    };

    const openNotification = () => {
        setDiscover(false);
        setHelp(false);
        setNotification(!notification);
        setProfile(false);
    };

    const openProfile = () => {
        setProfile(!profile);
    };

    const openSideBar = () => {
        setOpenSideMenu(!openSideMenu);
    };


    const {currentAccount,connectWallet} = useContext(NFTMarketplaceContext);

    return (
        <div className={Style.navbar}>
            <div className={Style.navbar_container}>
                {/* Left Side - Logo & Search Bar */}
                <div className={Style.navbar_container_left}>
                    <div className={Style.logo}>
                        <Image src={images.logo} alt="NFT MARKETPLACE" width={100} height={100} />
                    </div>
                    <div className={Style.navbar_container_left_box_input}>
                        <div className={Style.navbar_container_left_box_input_box}>
                            <input type="text" placeholder="Search NFT" />
                            <BsSearch className={Style.search_icon} />
                        </div>
                    </div>
                </div>

                {/* Right Side - Navigation */}
                <div className={Style.navbar_container_right}>
                    {/* Discover */}
                    <div className={Style.navbar_container_right_discover}>
                        <p onClick={openMenu}>Discover</p>
                        {discover && (
                            <div className={Style.navbar_container_right_discover_box}>
                                <Discover />
                            </div>
                        )}
                    </div>

                    {/* Help Center */}
                    <div className={Style.navbar_container_right_help}>
                        <p onClick={openMenu}>Help Center</p>
                        {help && (
                            <div className={Style.navbar_container_right_help_box}>
                                <HelpCenter />
                            </div>
                        )}
                    </div>

                    {/* Notifications */}
                    <div className={Style.navbar_container_right_notification}>
                        <MdNotificationsNone
                            className={Style.notification}
                            onClick={openNotification}
                            size={30}
                        />
                        {notification && <Notification />}
                    </div>
                    <div className={Style.navbar_container_right_button}>
                        {currentAccount == "" ? (
                            <Button btnName="Connect Wallet" handleClick={() => connectWallet()} />
                        ) : (
                                <Link href="/Upload-nft" passHref>
                                    <Button btnName="Create" handleClick={() => { }} />
                                </Link>
                        )}
                    </div>

                    <div className={Style.navbar_container_right_profile_box}>
                        <div className={Style.navbar_container_right_profile}>
                            <Image
                                src={images.user1}
                                alt="Profile"
                                width={40}
                                height={40}
                                onClick={openProfile}
                                className={Style.navbar_container_right_profile}
                            />
                            {profile && <Profile />}
                        </div>
                    </div>
                    <div className={Style.navbar_container_right_menuBtn}>
                        <CgMenuRight className={Style.menuIcon} onClick={openSideBar} />
                    </div>
                </div>
            </div>

            {openSideMenu && (
                <div className={Style.SideBar}>
                    <SideBar setOpenSideMenu={setOpenSideMenu} currentAccount={currentAccount} 
                    connectWallet={connectWallet} />
                </div>
            )}
        </div>
    );
};

export default Navbar;
