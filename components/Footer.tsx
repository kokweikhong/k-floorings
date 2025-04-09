"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import svgMail from "../public/icons/mail.svg";
import svgPhone from "../public/icons/phone.svg";
import svgGmap from "../public/icons/gmap.svg";
import svgFacebook from "../public/icons/facebook.svg";
import svgLinkedin from "../public/icons/linkedin.svg";
import svgWhatsapp from "../public/icons/whatsapp.svg";
import svgYoutube from "../public/icons/youtube.svg";
import svgInstagram from "../public/icons/instagram.svg";
import React, { useEffect, useState } from "react";
import { contactLink } from "@/constants/contacts";

const Footer: React.FC = () => {
  const [margin, setMargin] = useState<string>("mb-0");
  const pathname: string = usePathname();

  useEffect(() => {
    if (pathname.match("/product/(....)")) {
      setMargin("mb-[150px] md:mb-0");
    } else if (pathname.includes("catalogue")) {
      setMargin("mb-[270px] md:mb-0");
    } else {
      setMargin("mb-0");
    }
  }, [pathname]);

  return (
    <footer
      className={`footer mt-[50px] px-[15px] ${margin} container mx-auto`}
    >
      <div className="flex flex-col justify-start gap-[30px] md:grid md:grid-cols-2 text-[20px] font-normal">
        {/* location */}
        <div className="flex flex-col md:row-span-2">
          <div className="border-b border-b-[#d9d9d9] mb-5">
            <h3 className="mb-1">
              <span className="uppercase text-[#000] text-[20px] font-normal">
                Location
              </span>
            </h3>
          </div>
          {/* Singapore */}
          <div className="flex flex-col justify-start gap-1 mb-[20px]">
            <h4 className="text-[#999]">
              <span className="text-[20px] font-medium">SINGAPORE</span>
            </h4>
            <p className="">{contactLink.sg.officeAddr}</p>
            <div className="flex items-center">
              <div className="w-[36px] h-[36px]">
                <Image
                  src={svgMail}
                  alt="email Singapore"
                  className="w-full h-full"
                />
              </div>
              <span className="ml-1">{contactLink.sg.email}</span>
            </div>
            <div className="flex items-center">
              <div className="w-[36px] h-[36px]">
                <Image
                  src={svgPhone}
                  alt="contact number Singapore"
                  className="w-full h-full"
                />
              </div>
              <span className="ml-1">{contactLink.sg.hqContactNumber1}</span>
            </div>
            <div className="flex items-center">
              <div className="w-[36px] h-[36px]">
                <Image
                  src={svgPhone}
                  alt="contact number Singapore"
                  className="w-full h-full"
                />
              </div>
              <span className="ml-1">{contactLink.sg.hqContactNumber2}</span>
            </div>
          </div>
          {/* Malaysia */}
          <div className="flex flex-col justify-start gap-1">
            <h4 className="text-[#999]">
              <span className="text-[20px]">MALAYSIA</span>
            </h4>
            <p>{contactLink.my.factoryAddr}</p>
            <div className="flex items-center">
              <div className="w-[36px] h-[36px]">
                <Image
                  src={svgMail}
                  alt="email Singapore"
                  className="w-full h-full"
                />
              </div>
              <span className="ml-1">{contactLink.my.email}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[36px] h-[36px]">
                <Image
                  src={svgPhone}
                  alt="contact number Singapore"
                  className="w-full h-full"
                />
              </div>
              <span className="ml-1">{contactLink.my.contactNumber}</span>
            </div>
          </div>
        </div>

        {/* contact */}
        <div>
          <div className="border-b border-b-[#d9d9d9] mb-5">
            <h3 className="mb-1">
              <span className="uppercase text-[#000] text-[20px] font-normal">
                contact us
              </span>
            </h3>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <Link
              href={contactLink.sg.contactNumberTel}
              className="w-[52px] h-[52px] p-1 border border-black"
            >
              <Image
                src={svgPhone}
                alt="phone call icon"
                className="w-full h-full"
              />
            </Link>

            <Link
              href={contactLink.sg.whatsapp}
              className="w-[52px] h-[52px] p-1 border border-black"
            >
              <Image
                src={svgWhatsapp}
                alt="whatsapp icon"
                className="w-full h-full"
              />
            </Link>

            <Link
              href={contactLink.sg.linkedin}
              className="w-[52px] h-[52px] p-1 border border-black"
            >
              <Image
                src={svgLinkedin}
                alt="linkedin icon"
                className="w-full h-full"
              />
            </Link>

            <Link
              href={contactLink.sg.googleMap}
              className="w-[52px] h-[52px] p-1 border border-black"
            >
              <Image
                src={svgGmap}
                alt="google map icon"
                className="w-full h-full"
              />
            </Link>

            <Link
              href={contactLink.sg.youtube}
              className="w-[52px] h-[52px] p-1 border border-black"
            >
              <Image
                src={svgYoutube}
                alt="youtube icon"
                className="w-full h-full"
              />
            </Link>

            <Link
              href={contactLink.sg.facebook}
              className="w-[52px] h-[52px] p-1 border border-black"
            >
              <Image
                src={svgFacebook}
                alt="facebook icon"
                className="w-full h-full"
              />
            </Link>

            <Link
              href={contactLink.sg.instagram}
              className="w-[52px] h-[52px] p-1 border border-black"
            >
              <Image
                src={svgInstagram}
                alt="instagram icon"
                className="w-full h-full"
              />
            </Link>
          </div>
        </div>

        {/* legal */}
        <div className="md:col-start-2 md:row-start-2">
          <div className="border-b border-b-[#d9d9d9] mb-5">
            <h3 className="mb-1">
              <span className="uppercase text-[#000] text-[20px] font-normal">
                legal
              </span>
            </h3>
          </div>
          <div>
            <ul className="flex flex-col gap-1">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>Terms of Use</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>

        {/* description */}
        <div className="md:col-span-full">
          <p className="text-base text-center">
            KANDINSKY Engineered Wood is handcrafted with European oak. To
            ensure maximum structural stability with minimum movement between
            the timber boards, the softwood core grains are laid and glued
            perpendicular to the top and bottom hardwood layers.
          </p>
        </div>

        {/* copyright */}
        <div className="md:col-span-full">
          <p className="text-base text-center">201407349E ©2024 k-floorings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
