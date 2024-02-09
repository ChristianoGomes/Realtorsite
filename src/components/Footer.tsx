"use client"
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter  mt-4">
      <div className="padding-container max-container flex w-full flex-col gap-14 ">
        <div className="flex flex-col items-start justify-center gap-[10%] mg:flex-row">
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1 ">
          <FooterColumn title={FOOTER_LINKS[0].title}>
  <ul className="regular-14 flex flex-col gap-4 text-gray-30">
    {FOOTER_LINKS[0].links.map((link, index) => (
      <li key={index}>
        <Link href={link.href}>
          <span className="cursor-pointer">{link.label}</span>
        </Link>
      </li>
    ))}
  </ul>
</FooterColumn>

<FooterColumn title={FOOTER_LINKS[1].title}>
  <ul className="regular-14 flex flex-col gap-4 text-gray-30">
    {FOOTER_LINKS[1].links.map((link, index) => (
      <li key={index}>
        <span className="cursor-pointer" onClick={() => window.location.href = link.href}>
          {link.label}
        </span>
      </li>
    ))}
  </ul>
</FooterColumn>

            <div className="flex flex-col gap-5">
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
  {FOOTER_CONTACT_INFO.links.map((link, index) => (
    <div key={index} className="flex gap-4 md:flex-col lg:flex-row">
      <span className="whitespace-nowrap cursor-pointer" onClick={() => window.location.href = link.href}>
        {link.label}
      </span>
   
    </div>
  ))}
</FooterColumn>

            </div>
            <div className="flex flex-col gap-5 ">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30 ">
                  {SOCIALS.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>
                        <Image
                          src={link.src}
                          alt="logo"
                          width={24}
                          height={24}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
            <div></div>
          </div>
        </div>
        <div className=" w-full">
          <div className="border-2 w-full bg-slate-900 br shadow-md rounded-lg">
            <Image
              src="/EMPOWERED-ASSOCIATES.png"
              alt="logo"
              width={200}
              height={50}
            />
          </div>
          <p className="regular-14  text-center text-gray-30">
            2024 made by Christiano Gomes | all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5 ">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
