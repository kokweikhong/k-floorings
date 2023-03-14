import Image from "next/image";
import Link from "next/link";

import svgMail from "../public/icons/mail.svg";
import svgPhone from "../public/icons/phone.svg";
import svgGmap from "../public/icons/gmap.svg";
import svgFacebook from "../public/icons/facebook.svg";
import svgLinkedin from "../public/icons/linkedin.svg";
import svgWhatsapp from "../public/icons/whatsapp.svg";
import svgYoutube from "../public/icons/youtube.svg";

export default function Footer() {
  return (
    <footer className="footer mt-[50px] px-[15px] mb-[150px] md:mb-0">
      <div className="flex flex-col justify-start gap-[30px] md:grid md:grid-cols-2">
        {/* location */}
        <div className="flex flex-col md:row-span-2">
          <div className="border-b border-b-[#d9d9d9] mb-5">
            <h3 className="mb-1">
              <span className="uppercase text-[#333333] text-[22px]">
                Location
              </span>
            </h3>
          </div>
          {/* Singapore */}
          <div className="flex flex-col justify-start gap-1 mb-[20px]">
            <h4 className="text-[#999]">
              <span className="text-[20px]">SINGAPORE</span>
            </h4>
            <p>54 Senoko Road, Singapore 758118, Floor 1</p>
            <div className="flex items-center">
              <div className="w-[36px] h-[36px]">
                <Image
                  src={svgMail}
                  alt="email Singapore"
                  className="w-full h-full"
                />
              </div>
              <span className="ml-1">sales@calvarycarpentry.com</span>
            </div>
            <div className="flex items-center">
              <div className="w-[36px] h-[36px]">
                <Image
                  src={svgPhone}
                  alt="contact number Singapore"
                  className="w-full h-full"
                />
              </div>
              <span className="ml-1">+65 8776 7837</span>
            </div>
          </div>
          {/* Malaysia */}
          <div className="flex flex-col justify-start gap-1">
            <h4 className="text-[#999]">
              <span className="text-[20px]">MALAYSIA</span>
            </h4>
            <p>
              No. 26, Jalan Laman Setia 7/6, Taman Laman Setia,81550 Gelang
              Patah, Johor, Malaysia.
            </p>
            <div className="flex items-center">
              <div className="w-[36px] h-[36px]">
                <Image
                  src={svgMail}
                  alt="email Singapore"
                  className="w-full h-full"
                />
              </div>
              <span className="ml-1">msia@calvarycarpentry.com</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[36px] h-[36px]">
                <Image
                  src={svgPhone}
                  alt="contact number Singapore"
                  className="w-full h-full"
                />
              </div>
              <span className="ml-1">+60 16-778 5788</span>
            </div>
          </div>
        </div>

        {/* contact */}
        <div>
          <div className="border-b border-b-[#d9d9d9] mb-5">
            <h3 className="mb-1">
              <span className="uppercase text-[#333333] text-[22px]">
                contact us
              </span>
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Link
              href="#"
              className="w-[52px] h-[52px] p-1 border border-black"
            >
              <Image
                src={svgPhone}
                alt="phone call icon"
                className="w-full h-full"
              />
            </Link>

            <Link
              href="#"
              className="w-[52px] h-[52px] p-1 border border-black"
            >
              <Image
                src={svgWhatsapp}
                alt="whatsapp icon"
                className="w-full h-full"
              />
            </Link>

            <Link
              href="#"
              className="w-[52px] h-[52px] p-1 border border-black"
            >
              <Image
                src={svgLinkedin}
                alt="linkedin icon"
                className="w-full h-full"
              />
            </Link>

            <Link
              href="#"
              className="w-[52px] h-[52px] p-1 border border-black"
            >
              <Image
                src={svgGmap}
                alt="google map icon"
                className="w-full h-full"
              />
            </Link>

            <Link
              href="#"
              className="w-[52px] h-[52px] p-1 border border-black"
            >
              <Image
                src={svgYoutube}
                alt="youtube icon"
                className="w-full h-full"
              />
            </Link>

            <Link
              href="#"
              className="w-[52px] h-[52px] p-1 border border-black"
            >
              <Image
                src={svgFacebook}
                alt="facebook icon"
                className="w-full h-full"
              />
            </Link>
          </div>
        </div>

        {/* legal */}
        <div className="md:col-start-2 md:row-start-2">
          <div className="border-b border-b-[#d9d9d9] mb-5">
            <h3 className="mb-1">
              <span className="uppercase text-[#333333] text-[22px]">
                legal
              </span>
            </h3>
          </div>
          <div>
            <ul className="flex flex-col gap-1">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>

        {/* description */}
        <div className="md:col-span-full">
          <p className="text-center">
            KANDINSKY Engineered Wood is handcrafted with European oak. To
            ensure maximum structural stability with minimum movement between
            the timber boards, the softwood core grains are laid and glued
            perpendicular to the top and bottom hardwood layers.
          </p>
        </div>

        {/* copyright */}
        <div className="md:col-span-full">
          <p className="text-center">201407349E ©2023 k-floorings</p>
        </div>
      </div>
    </footer>
  );
}
