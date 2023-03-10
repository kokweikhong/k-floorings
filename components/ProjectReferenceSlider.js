"use client";

import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import project1 from "../public/images/home/project-reference_KLCC.jpg";
import project2 from "../public/images/home/project-reference_DYSON.jpg";
import project3 from "../public/images/home/project-reference_MONOCOT.jpg";

// TODO : alt tags
const projects = [
  {
    img: { src: project1, alt: "" },
    title: "Channel @ KLCC",
    material: "Kandinsky (Kildare)",
  },
  {
    img: { src: project2, alt: "" },
    title: "Dyson @ St James Power Station",
    material: "Kandinsky (Zerno)",
  },
  {
    img: { src: project3, alt: "" },
    title: "Monocot Soleil",
    material: "Kandinsk (Pugachov & Bartek)",
  },
];

export default function ProjectReferenceSlider() {
  const settings = {
    // className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "300px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    // dotsClass: "project-ref-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          centerPadding: "0px",
        },
      },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1
      //     }
      //   }
    ],
  };
  return (
    <section>
      {/* project reference */}
      <section className="py-[50px] bg-[#f3f3f3]">
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
                <div key={index} className="px-[15px] h-full relative">
                  <div>
                    <Image
                      src={project.img.src}
                      alt={project.img.alt}
                      className="w-full h-full rounded-[15px] object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 flex flex-col items-center justify-center w-full gap-1 text-[#fff]">
                    <h3>{project.title}</h3>
                    <h4>{project.material}</h4>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </section>
  );
}
