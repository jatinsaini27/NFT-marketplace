'use client'

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import Style from './DropZone.module.css';
import images from '../../img';

const DropZone = ({
    title, heading, subHeading,
    name, website, description, royalties,
    fileSize, category, property,
    uploadToIPFS, setImage
}) => {

    const [fileUrl, setFileUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const onDrop = useCallback(async (acceptedFiles) => {
        setLoading(true);
        setError(null);
        try {
            const url = await uploadToIPFS(acceptedFiles[0]); // ✅ Awaited upload
            setFileUrl(url);
            setImage(url);
        } catch (err) {
            console.error("Upload failed:", err);
            setError("Failed to upload file. Please try again.");
        } finally {
            setLoading(false);
        }
    }, [uploadToIPFS, setImage]);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div className={Style.DropZone}>
            <div className={Style.DropZone_box} {...getRootProps()}>
                <input {...getInputProps()} />
                <div className={Style.DropZone_box_input}>
                    <p>{title}</p>
                    <div className={Style.DropZone_box_input_img}>
                        <Image
                            src={images.upload}
                            alt="upload"
                            width={100}
                            height={100}
                            className={Style.DropZone_box_input_img_img}
                        />
                    </div>
                    <p>{heading}</p>
                    <p>{subHeading}</p>
                </div>
            </div>

            {/* Loading state */}
            {loading && (
                <div className={Style.DropZone_loading}>
                    <p>Uploading file to IPFS, please wait...</p>
                </div>
            )}

            {/* Error state */}
            {error && (
                <div className={Style.DropZone_error}>
                    <p>{error}</p>
                </div>
            )}

            {/* Preview after successful upload */}
            {fileUrl && (
                <aside className={Style.DropZone_box_aside}>
                    <div className={Style.DropZone_box_aside_box}>
                        <Image
                            src={fileUrl}
                            alt="nft image"
                            width={200}
                            height={200}
                            style={{ objectFit: "cover" }}
                            className={Style.DropZone_box_input_img_img}
                        />

                        <div className={Style.DropZone_box_aside_box_preview}>
                            <div className={Style.DropZone_box_aside_box_preview_one}>
                                <p><span>NFT Name:</span> {name || ""}</p>
                                <p><span>Website Name:</span> {website || ""}</p>
                            </div>

                            <div className={Style.DropZone_box_aside_box_preview_two}>
                                <p>
                                    <span>Description: </span>{description || ""}
                                </p>
                            </div>

                            <div className={Style.DropZone_box_aside_box_preview_three}>
                                <p><span>Royalties: </span>{royalties || ""}</p>
                                <p><span>File Size: </span>{fileSize || ""}</p>
                                <p><span>Property: </span>{property || ""}</p>
                                <p><span>Category: </span>{category || ""}</p>
                            </div>
                        </div>
                    </div>
                </aside>
            )}
        </div>
    );
};

export default DropZone;
