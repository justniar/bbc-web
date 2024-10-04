import React from 'react';
// import { MdOutlineAttachEmail } from "react-icons/md";
// import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

import Image, { StaticImageData } from 'next/image';

interface PengajarCardProps {
    name: string;
    role: string;
    description: string;
    imgSrc: StaticImageData;
    emailLink: string;
    instagramLink: string;
    linkedinLink: string;
    facebookLink: string;
}

const PengajarCard = ({
    name,
    role,
    description,
    imgSrc,
    // emailLink,
    // instagramLink,
    // facebookLink
}: PengajarCardProps) => {
    return (
        <div className="flex flex-col justify-center bg-orange-100 w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100 shadow">
            <Image
                alt={name}
                className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500 object-cover object-center"
                src={imgSrc}
            />
            <div className="flex-1 my-4 ">
                <p className="text-xl font-semibold leading-snug">{name}</p>
                <p>{role}</p>
            </div>
            <div className="justify-cente p-3 space-x-2">
                <p className="text-sm">{description}</p>
            </div>
            {/* <div className="flex items-center justify-center p-3 space-x-3 border-t-2 border-white">
                <a
                    rel="noopener noreferrer"
                    href={emailLink}
                    title="Email"
                    className="dark:text-gray-50 hover:dark:text-violet-600"
                    target="blank"
                >
                    <MdOutlineAttachEmail />
                </a>
                <a
                    rel="noopener noreferrer"
                    href={instagramLink}
                    title="Instagram"
                    className="dark:text-gray-50 hover:dark:text-violet-600"
                    target="blank"
                >
                    <FaInstagram />
                </a>
                <a
                    rel="noopener noreferrer"
                    href={facebookLink}
                    title="Facebook"
                    className="dark:text-gray-50 hover:dark:text-violet-600"
                    target="blank"
                >
                    <FaFacebookSquare />
                </a>
                
            </div> */}
        </div>
    );
};

export default PengajarCard;
