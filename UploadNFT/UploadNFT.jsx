'use client';
import React, { useState, useEffect } from 'react';
import { MdOutlineHttp, MdOutlineAttachFile } from 'react-icons/md';
import { FaPercent } from 'react-icons/fa';
import { AiTwotonePropertySafety } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import Image from 'next/image';
import Style from './uploadNFT.module.css';
import formStyle from "../AccountPage/Form/Form.module.css";
import { Button } from "../src/app/components/componentsindex";
import images from "../img";
import { DropZone } from "../UploadNFT/UploadNFTIndex";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

const UploadNFT = ({ uploadToIPFS, createNFT }) => {
    const [price, setPrice] = useState("");
    const [active, setActive] = useState(0);
    const [name, setName] = useState("");
    const [website, setWebsite] = useState("");
    const [description, setDescription] = useState("");
    const [royalties, setRoyalties] = useState("");
    const [fileSize, setFileSize] = useState("");
    const [category, setCategory] = useState(0);
    const [property, setProperty] = useState("");
    const [image, setImage] = useState(null);

    const router = useRouter(); // Directly call useRouter to get router object

    const categoryArray = [
        { image: images.nft_image_1, category: "Sports" },
        { image: images.nft_image_2, category: "Arts" },
        { image: images.nft_image_3, category: "Music" },
        { image: images.nft_image_1, category: "Digital" },
        { image: images.nft_image_2, category: "Time" },
        { image: images.nft_image_3, category: "Photography" },
    ];

    const handleCreateNFT = async () => {
        if (router) {
            createNFT(name, price, image, description, router, website, royalties, fileSize, category, property);
        }
    };

    return (
        <div className={Style.upload}>
            <DropZone
                title="JPG, PNG, WEBM, MAX 100MB"
                heading="Drag & Drop file"
                subHeading="OR Browse media on your device"
                name={name}
                website={website}
                description={description}
                royalties={royalties}
                fileSize={fileSize}
                category={category}
                property={property}
                images={images.upload}
                setImage={setImage}
                uploadToIPFS={uploadToIPFS}
            />

            <div className={Style.upload_box}>
                <div className={formStyle.Form_box_input}>
                    <label htmlFor="name">Item Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className={formStyle.Form_box_input_userName}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className={formStyle.Form_box_input}>
                    <label htmlFor="website">Website</label>
                    <div className={formStyle.Form_box_input_box}>
                        <div className={formStyle.Form_box_input_box_icon}>
                            <MdOutlineHttp />
                        </div>
                        <input
                            type="text"
                            id="website"
                            placeholder="Enter your website"
                            className={Style.Form_box_input_website}
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                        />
                    </div>
                    <p className={Style.upload_box_input_para}>
                        Ciscrypt will include a link to this URL on this item page, so visitors can click to learn more about you. You are welcome to include social links.
                    </p>
                </div>

                <div className={formStyle.Form_box_input}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        placeholder="Enter your description"
                        rows="6"
                        cols="30"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <p>The description will be included in the item detail page underneath the image.</p>
                </div>

                <div className={formStyle.Form_box_input}>
                    <label htmlFor="category">Choose Collection</label>
                    <p className={Style.upload_box_input_para}>Choose an existing collection or create a new one</p>
                    <div className={Style.upload_box_slider_div}>
                        {
                            categoryArray.map((el, i) => (
                                <div
                                    key={i}
                                    className={`${Style.upload_box_slider} ${active === i ? Style.active : ""}`}
                                    onClick={() => { setActive(i); setCategory(i); }}
                                >
                                    <div className={Style.upload_box_slider_box}>
                                        <div className={Style.upload_box_slider_box_img}>
                                            <Image
                                                src={el.image}
                                                alt={el.category}
                                                width={100}
                                                height={100}
                                                className={Style.upload_box_slider_box_img_img}
                                            />
                                            <p>{el.category}</p>
                                        </div>
                                        <div className={Style.upload_box_slider_box_img_icon}>
                                            <TiTick />
                                        </div>
                                    </div>
                                    <p>Crypto Legend - {el.category}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className={formStyle.Form_box_input_social}>
                    {/* Royalties */}
                    <div className={formStyle.Form_box_input_box}>
                        <div className={formStyle.Form_box_input_box_icon}>
                            <FaPercent />
                        </div>
                        <input
                            type="text"
                            placeholder="20%"
                            value={royalties}
                            onChange={(e) => setRoyalties(e.target.value)}
                        />
                    </div>

                    {/* File Size */}
                    <div className={formStyle.Form_box_input_box}>
                        <div className={formStyle.Form_box_input_box_icon}>
                            <MdOutlineAttachFile />
                        </div>
                        <input
                            type="text"
                            placeholder="165MB"
                            value={fileSize}
                            onChange={(e) => setFileSize(e.target.value)}
                        />
                    </div>

                    {/* Property */}
                    <div className={formStyle.Form_box_input_box}>
                        <div className={formStyle.Form_box_input_box_icon}>
                            <AiTwotonePropertySafety />
                        </div>
                        <input
                            type="text"
                            placeholder="Property"
                            value={property}
                            onChange={(e) => setProperty(e.target.value)}
                        />
                    </div>

                    <div className={formStyle.Form_box_input_box}>
                        <div className={formStyle.Form_box_input_box_icon}>
                            <AiTwotonePropertySafety />
                        </div>
                        <input
                            type="text"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className={Style.upload_box_btn}>
                        <Button
                            btnName="Upload NFT"
                            handleClick={handleCreateNFT} // Use the handler to check router availability
                            classStyle={Style.upload_box_btn_style}
                        />
                        <Button
                            btnName="Preview"
                            handleClick={() => { }}
                            classStyle={Style.upload_box_btn_style}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadNFT;
