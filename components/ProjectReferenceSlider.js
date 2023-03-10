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
  { img: { src: project1, alt: "" } },
  { img: { src: project2, alt: "" } },
  { img: { src: project3, alt: "" } },
];

export default function ProjectReferenceSlider() {
  const settings = {
    // className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    // dotsClass: "project-ref-dots",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          //   centerPadding: "60px",
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
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
    ],
  };
  return (
    <section>
      {/* project reference */}
      <section className="pt-[50px] bg-[#f3f3f3]">
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
                <div key={index} className="px-[15px] w-full h-full">
                  <div>
                    <Image
                      src={project.img.src}
                      alt={project.img.alt}
                      className="w-full h-full rounded-[15px] object-cover"
                    />
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
