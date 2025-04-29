'use client';

import React from 'react';
import Style from './Form.module.css';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineHttp, MdOutlineContentCopy } from 'react-icons/md';
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from 'react-icons/ti';
import { Button } from "../../src/app/components/componentsindex";

const Form = () => {
    const handleCopyWallet = () => {
        const walletInput = document.getElementById("walletAddress");
        if (walletInput) {
            navigator.clipboard.writeText(walletInput.value);
            alert("Wallet address copied!");
        }
    };

    return (
        <div className={Style.Form}>
            <div className={Style.Form_box}>
                <form>
                    {/* Username */}
                    <div className={Style.Form_box_input}>
                        <label htmlFor="name">User Name</label>
                        <input type="text" id="name" placeholder="Enter your name" className={Style.Form_box_input_userName} />
                    </div>

                    {/* Email */}
                    <div className={Style.Form_box_input}>
                        <label htmlFor="email">Email</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <HiOutlineMail />
                            </div>
                            <input type="email" id="email" placeholder="Enter your email" className={Style.Form_box_input_email} />
                        </div>
                    </div>

                    {/* Description */}
                    <div className={Style.Form_box_input}>
                        <label htmlFor="description">Description</label>
                        <textarea id="description" placeholder="Enter your description" rows="6" cols="30"></textarea>
                    </div>

                    {/* Website */}
                    <div className={Style.Form_box_input}>
                        <label htmlFor="website">Website</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <MdOutlineHttp />
                            </div>
                            <input type="text" id="website" placeholder="Enter your website" className={Style.Form_box_input_website} />
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className={Style.Form_box_input}>
                        <label>Social Links</label>
                        <div className={Style.Form_box_input_social}>
                            {/* Facebook */}
                            <div className={Style.Form_box_input_box}>
                                <div className={Style.Form_box_input_box_icon}>
                                    <TiSocialFacebook />
                                </div>
                                <input type="text" placeholder="Facebook link" />
                            </div>

                            {/* Instagram */}
                            <div className={Style.Form_box_input_box}>
                                <div className={Style.Form_box_input_box_icon}>
                                    <TiSocialInstagram />
                                </div>
                                <input type="text" placeholder="Instagram link" />
                            </div>

                            {/* Twitter */}
                            <div className={Style.Form_box_input_box}>
                                <div className={Style.Form_box_input_box_icon}>
                                    <TiSocialTwitter />
                                </div>
                                <input type="text" placeholder="Twitter link" />
                            </div>
                        </div>
                    </div>

                    {/* Wallet Address */}
                    <div className={Style.Form_box_input}>
                        <label htmlFor="walletAddress">Wallet Address</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <MdOutlineHttp />
                            </div>
                            <input type="text" id="walletAddress" placeholder="Enter your wallet address" className={Style.Form_box_input_wallet} />
                            <div className={Style.Form_box_input_box_icon} onClick={handleCopyWallet}>
                                <MdOutlineContentCopy />
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <div className={Style.Form_box_btn}>
                        <Button btnName="Upload Profile" handleClick={() => { }} classStyle={Style.button} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
