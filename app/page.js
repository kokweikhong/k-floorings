import Image from "next/image";
import Link from "next/link";

import ProjectReferenceSlider from "@/components/ProjectReferenceSlider";

import heroImage from "../public/images/home/hero_image_1.jpg";

import cert1 from "../public/images/home/SGBC.svg";
import cert2 from "../public/images/home/STAT.svg";
import cert3 from "../public/images/home/TUV.svg";

import applicationCeiling from "../public/images/home/application_ceiling.jpeg";
import applicationFloor from "../public/images/home/application_floor.jpg";
import applicationStair from "../public/images/home/application_stair.jpeg";
import applicationWall from "../public/images/home/application_wall.jpg";

import callToActionImage from "../public/images/home/Sustainability.jpeg";
import certEuropeanStandard from "../public/icons/european standards.svg";

const certs = [
  {
    src: cert1,
    alt: "SGBC certified (2 ticks)",
    desc: "SGBC certified (2 ticks)",
  },
  { src: cert2, alt: "STATS certified", desc: "STATS certified" },
  {
    src: cert3,
    alt: "Class 2 fire rated | Tested with TUV",
    desc: "Class 2 fire rated (Tested with TUV)",
  },
];

const applications = [
  {
    title: "ceiling",
    desc: "Transform your space with our professional wood ceiling installation services. Custom design with a range of wood types and finishes available.",
    img: { src: applicationCeiling, alt: "wood ceiling" },
  },
  {
    title: "floor",
    desc: "Our wood floor installation service offers a custom design with a variety of wood types and finishes for a long-lasting flooring solution.",
    img: { src: applicationFloor, alt: "wood flooring" },
  },
  {
    title: "stair",
    desc: "Our high-quality wooden stair installation services add beauty and function to your space, with safety and durability in mind.",
    img: { src: applicationStair, alt: "wood stair" },
  },
  {
    title: "wall",
    desc: "Add natural beauty and warmth to any space with our wood wall installation services. Custom design with a range of wood types and finishes available.",
    img: { src: applicationWall, alt: "wood wall" },
  },
];

// TODO : hero image alt

export default function Home() {
  return (
    <main>
      {/* hero section */}
      <section className="relative flex flex-col justify-center h-screen text-center">
        <div className="absolute top-0 left-0 -z-[1] w-full h-full">
          <Image
            src={heroImage}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col items-center gap-5 px-[15px] lg:ml-auto 2xl:mr-[10%]">
          <h1 className="uppercase text-[#fff] lg:max-w-[700px]">
            wood meets art
          </h1>
          <p className="text-[#eee] max-w-[400px]">
            Sustainable and ethically sourced, KANDINSKY offers engineered
            timber for walls, ceilings, stairs, and flooring.
          </p>
          <a href="" className="btn-primary-fill">
            get your free sample now
          </a>
        </div>
      </section>

      {/* application */}
      <section className="mt-[50px]">
        <div className="px-[15px] flex flex-col items-start">
          <h4 className="relative pr-[60px] text-primary tracking-[2px] after:content-[''] after:w-[35px] after:h-[2px] after:bg-primary after:absolute after:top-1/2 after:right-0">
            Application
          </h4>
          <h2>Handcrafted European Wood</h2>
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:mt-[30px]">
          {/* certificates */}
          <div className="px-[15px] grid grid-cols-3 gap-[10px] my-[30px] lg:col-start-3 lg:grid-cols-1">
            {certs.map((cert, index) => {
              return (
                <div
                  key={index}
                  className="text-center lg:flex lg:flex-col lg:justify-center"
                >
                  <div className="w-full h-[150px]">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="leading-[0.5]">
                    <span className="text-[12px] lg:text-base">
                      {cert.desc}
                    </span>
                  </h3>
                </div>
              );
            })}
          </div>

          {/* services */}
          <div className="flex flex-col lg:col-span-2 lg:col-start-1 lg:row-start-1">
            {applications.map((app, index) => {
              return (
                <div
                  key={index}
                  className="py-[80px] w-full relative flex items-center justify-center border-b-[#eee] border-b"
                >
                  <div className="absolute top-0 left-0 -z-[1] w-full h-full after:h-full after:w-full after:absolute after:top-0 after:left-0 after:bg-black/40">
                    <Image
                      src={app.img.src}
                      alt={app.img.alt}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-start px-[20px] max-w-[500px]">
                    <h3 className="uppercase text-[#fff]">{app.title}</h3>
                    <p className="text-[#eee]">{app.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* call to action */}
      <section>
        <div className="relative my-[50px] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/40 after:-z-[1]">
          <div className="absolute top-0 left-0 -z-[1] w-full h-full">
            <Image
              src={callToActionImage}
              alt="natural, forest, wood"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="grid grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="text-left">
                <h3>
                  <span className="uppercase text-[#fff] tracking-widest">
                    kandinsky
                  </span>
                </h3>
                <span className="uppercase bg-[#fff] px-3">lite</span>
              </div>
            </div>
            <div className="bg-black text-[#fff] flex justify-center items-center">
              <div className="text-left">
                <h3>
                  <span className="uppercase tracking-widest">kandinsky</span>
                </h3>
                <span className="w-full uppercase">coming soon</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-[80px] py-[30px]">
            <div className="w-[400px] max-w-[400px] text-[#fff] text-center flex flex-col justify-center items-center">
              <div className="w-[250px]">
                <Image
                  src={certEuropeanStandard}
                  alt="european standards | FSC"
                  className="w-full h-fll"
                />
              </div>
              <h2 className="py-3 text-[32px] leading-[1.5]">
                <span className="uppercase">
                  sustainably and ethically sourced
                </span>
              </h2>
            </div>

            <div className="hidden lg:block">
              <Link
                href="#"
                className="bg-[#fff] font-semibold uppercase text-[15px] py-[20px] px-[24px] rounded-[40px]"
              >
                find out more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* project references */}
      <ProjectReferenceSlider />
    </main>
  );
}
