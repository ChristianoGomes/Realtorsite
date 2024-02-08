import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NAV_LINKS } from '@/constants'


const Navbar = () => {
  return (
    <nav className=" flexBetween padding-container relative z-30 py-5   bg-[#1c2143] 3xl:pr-11 shadow-lg">
      <Link href="/">
        <Image src="/EMPOWERED-ASSOCIATES.png" alt="logo" width={200} height={100} className='' />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      {/* implement drop down menu links for mobile */}
   
      <Image 
      src="menu.svg" 
      alt="menu"
      width={32}
      height={32}
      className='inline-block lg:hidden cursor-pointer fill:white'
      />
    </nav>
  );
}

export default Navbar

