'use client';

import React, { useState, useCallback } from 'react';
import Style from './account.module.css';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import images from '../../../img';
import Form from '../../../AccountPage/Form/Form';

const Account = () => {
    const [fileUrl, setFileUrl] = useState(null);

    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];
        const previewUrl = URL.createObjectURL(file);
        setFileUrl(previewUrl);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div className={Style.account}>
            <div className={Style.account_info}>
                <h1>Profile Settings</h1>
                <p>You can set preferred display name, create your profile URL and other settings</p>
            </div>

            <div className={Style.account_box}>
                <div className={Style.account_box_img} {...getRootProps()}>
                    <input {...getInputProps()} />

                    <Image
                        src={fileUrl ? fileUrl : images.user1}
                        alt="account upload"
                        width={150}
                        height={150}
                        className={Style.account_box_img_img}
                    />
                    <p className={Style.account_box_img_para}>Change Image</p>
                </div>

                <div className={Style.account_box_form}>
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default Account;
