"use client"
import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '@/constants'
import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className=" flexBetween padding-container relative z-30 py-5   bg-[#1c2143] 3xl:pr-11 shadow-lg">
      <Link href="/">
        <Image src="/EMPOWERED-ASSOCIATES.png" alt="logo" width={200} height={100} className='' />
      </Link>
     
        <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li
            key={link.key}
            className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:underline"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes  className="fill-white" size={30} /> : <FaBars className="fill-white" size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-[#1c2143] to-[#2f5972] text-white ">
          {NAV_LINKS.map((link) => (
            <li
              key={link.key}
              className="px-4 cursor-pointer capitalize hover:scale-105 py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
      </div>
  );
  
}

export default Navbar

