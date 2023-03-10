"use client";

import Image from "next/image";
import Link from "next/link";

// import Slider from "react-slick";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import homeData from "../data/home.json";

import heroImage from "../public/images/home/hero_image_1.jpg";
import cert1 from "../public/images/home/SGBC.svg";
import cert2 from "../public/images/home/STAT.svg";
import cert3 from "../public/images/home/TUV.svg";

import applicationCeiling from "../public/images/home/application_ceiling.jpeg";
import applicationFloor from "../public/images/home/application_floor.jpg";
import applicationStair from "../public/images/home/application_stair.jpeg";
import applicationWall from "../public/images/home/application_wall.jpg";

import project1 from "../public/images/home/project-reference_KLCC.jpg";
import project2 from "../public/images/home/project-reference_DYSON.jpg";
import project3 from "../public/images/home/project-reference_MONOCOT.jpg";

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

// TODO : alt tags
const projects = [
  { img: { src: project1, alt: "" } },
  { img: { src: project2, alt: "" } },
  { img: { src: project3, alt: "" } },
];

// TODO : hero image alt

export default function Home() {
  const settings = {
    // className: "center",
    dots: true,
    // centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    // dotsClass: "project-ref-dots",
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };

  return (
    <main>
      {/* hero section */}
      <section className="flex flex-col h-screen relative justify-center text-center">
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
                      className="w-full h-full object-cover"
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

      {/* project reference */}
      <section className="pt-[50px] px-[15px] bg-[#f3f3f3]">
        <div className="px-[15px] flex flex-col items-start">
          <h4 className="relative pr-[60px] text-primary tracking-[2px] after:content-[''] after:w-[35px] after:h-[2px] after:bg-primary after:absolute after:top-1/2 after:right-0">
            Asia
          </h4>
          <h2>Project Reference</h2>
        </div>

        <div>
          <Slider {...settings}>
            {projects.map((project, index) => {
              return (
                <div key={index}>
                  <div>
                    <Image src={project.img.src} alt={project.img.alt} />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </main>
  );
}
