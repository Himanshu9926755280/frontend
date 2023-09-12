import React, { useRef, useState } from "react";
import Link from "next/link";
import {
    AiOutlineShoppingCart,
    AiOutlinePlusCircle,
    AiOutlineMinusCircle,
} from "react-icons/ai";

import { IoCloseCircleOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import Image from "next/image";
const Navbar = ({
    Logout,
    user,
}) => {
    const [dropdown, setDropdown] = useState(false)
    return (
        <div className="flex flex-col md:flex-row md:justify-start justify-center items-center my-2 py-2 shadow-md sticky top-0 bg-white z-50">
            <div className="logo mr-auto md:mx-5 cursor-pointer">
                <Link href={"/"}>
                    <Image
                        src="/c.png"
                        alt="Picture of the author"
                        width={80}
                        height={100}
                    />
                </Link>
            </div>
            <div className="nav">
                <ul className="flex items-center space-x-6 font-semibold md:text-md">
                    <Link href={"/about"}>
                        <li>About</li>
                    </Link>
                    
                    <Link href={"/career"}>
                        <li>Career</li>
                    </Link>
                    <Link href={"/product"}>
                        <li>Products</li>
                    </Link>
                    <Link href={"/service"}>
                        <li>Service</li>
                    </Link>
                    
                    <Link href={"/contact"}>
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
            <div className="items-center absolute right-0 top-3 mx-5 cursor-pointer flex z-30">
                <span
                    onMouseOver={() => {
                        setDropdown(true);
                    }}
                    onMouseLeave={() => {
                        setDropdown(false);
                    }}
                >
                    {dropdown && (
                        <div
                            onMouseOver={() => {
                                setDropdown(true);
                            }}
                            onMouseLeave={() => {
                                setDropdown(false);
                            }}
                            s
                            className="absolute right-6 top-6 py-2 rounded-md px-5 w-24 bg-[#5540af]    text-sm z-30"
                        >
                            <ul>
                                <li onClick={Logout} className="py-1 hover:text-blue-500">
                                    Logout
                                </li>
                            </ul>
                        </div>
                    )}

                    {user.value && (
                        <RiAccountCircleLine className="text-xl md:text-2xl mx-2" />
                    )}
                </span>
                {!user.value && (
                    <Link href={"/login"}>
                        <button className="bg-blue-600 px-2 py-1 rounded-md text-sm text-white mx-2">
                            Login
                        </button>
                    </Link>
                )}

            </div>


        </div>
    );
};

export default Navbar;
