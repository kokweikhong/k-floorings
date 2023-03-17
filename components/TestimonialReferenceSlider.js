"use client";

import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imgTestimonial1 from "../public/testimonials/Review 1.jpg";
import imgTestimonial2 from "../public/testimonials/Review 2.jpg";
import imgTestimonial3 from "../public/testimonials/Review 3.jpg";

import svgGoogle from "../public/icons/Google-color.svg";
import svgInstagram from "../public/icons/Instagram - White.svg";
import svgMothership from "../public/icons/Testimonal Mothership - White.svg";
import svgStarFill from "../public/icons/star fill - yellow.svg";

const reviews = [
  {
    img: {
      src: imgTestimonial1,
      alt: "google review",
    },
    icon: {
      src: svgGoogle,
      alt: "google review",
    },
    desc: "We contracted Calvary to supply and install all our timber requirements from the engineered wood flooring, living/dining room ceiling wood cladding, car porch ceiling cladding with Accoya wood and main gate Accoya wood panels.",
  },
];

export default function TestimonialReferenceSlider() {
  //   const reviews = [imgTestimonial1, imgTestimonial2, imgTestimonial3];
  const settings = {
    className: "testimonial-references-slider",
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
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="px-[15px] h-full relative">
          <div className="relative h-full after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bg-black/50 after:rounded-[15px]">
            <Image
              src={imgTestimonial1}
              alt="google review"
              className="w-full h-full rounded-[15px] object-cover"
            />
          </div>
          <div className=" absolute top-5 flex items-center justify-center w-full gap-1 text-[#eee] z-10">
            <div className="absolute top-0 left-3">
              <Image src={svgGoogle} alt="mothership review" />
            </div>
            <div className="absolute top-0 -translate-x-1/2 left-1/2 h-[36px] flex items-center">
              <p className="text-[10px] text-[#fff]">
                Positive : Well organised & Responsive
              </p>
            </div>
          </div>
          <div className="px-[50px] py-[30px] absolute bottom-0 left-0 flex flex-col gap-2 items-center justify-center w-full text-[#eee] z-10">
            <div className="flex items-center justify-center w-full gap-2">
              <div>
                <Image
                  src="/testimonials/image 12.png"
                  alt=""
                  width="24"
                  height="24"
                />
              </div>
              <h3 className="text-base font-bold font-inter">Kaetee JKT</h3>
            </div>
            <div className="flex items-center justify-center w-full gap-2">
              <div>
                <Image src={svgStarFill} alt="start fill icon" />
              </div>
              <div>
                <Image src={svgStarFill} alt="start fill icon" />
              </div>
              <div>
                <Image src={svgStarFill} alt="start fill icon" />
              </div>
              <div>
                <Image src={svgStarFill} alt="start fill icon" />
              </div>
              <div>
                <Image src={svgStarFill} alt="start fill icon" />
              </div>
            </div>
            <p className="text-[10px]">
              We contracted Calvary to supply and install all our timber
              requirements from the engineered wood flooring, living/dining room
              ceiling wood cladding, car porch ceiling cladding with Accoya wood
              and main gate Accoya wood panels.
            </p>
          </div>
        </div>

        <div className="px-[15px] h-full relative">
          <div className="relative h-full after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bg-black/50 after:rounded-[15px]">
            <Image
              src={imgTestimonial2}
              alt="google review"
              className="h-full w-full rounded-[15px] object-cover"
            />
          </div>
          <div className="absolute top-5 flex items-center justify-center w-full gap-1 text-[#eee] z-10">
            <div className="absolute top-0 left-3">
              <Image src={svgMothership} alt="mothership review" />
            </div>
            <div className="absolute top-0 -translate-x-1/2 left-1/2 h-[36px] flex items-center">
              <p className="text-[10px] text-[#fff]">
                Commitment to quality workmanship
              </p>
            </div>
          </div>
          <div className="px-[50px] py-[30px] absolute bottom-0 left-0 flex flex-col gap-2 items-center justify-center w-full text-[#eee] z-10">
            <div className="flex items-center justify-center w-full gap-2">
              <h3 className="text-base font-bold font-inter">
                Mothership Article
              </h3>
            </div>
            <p className="text-[10px]">
              August 17, 2022 - Calvary Carpentry, a Singapore-based carpentry
              firm. The company is praised for its commitment to quality
              workmanship, customer service, and sustainability, with a focus on
              using eco-friendly materials and processes to ...
            </p>
          </div>
        </div>

        <div className="relative h-full px-[15px]">
          <div className="h-full relative after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bg-black/50 after:rounded-[15px]">
            <Image
              src={imgTestimonial3}
              alt="google review"
              className="w-full h-full max-h-[600px] rounded-[15px] object-cover"
            />
          </div>
          <div className="absolute w-full left-5 top-5">
            <div className="relative left-0">
              <Image src={svgInstagram} alt="mothership review" />
            </div>
            <div className="absolute top-0 -translate-x-1/2 left-1/2 h-[36px] flex items-center">
              <p className="text-[10px] text-[#fff]">
                Positive : Well organised & Responsive
              </p>
            </div>
          </div>
          <div className="px-[50px] py-[30px] text-[#fff] text-center absolute gap-3 bottom-0 left-0 flex flex-col justify-center w-full">
            <div className="flex items-center justify-center w-full gap-2">
              <div>
                <Image
                  src="/testimonials/image 12.png"
                  alt=""
                  width="24"
                  height="24"
                />
              </div>
              <h3 className="text-base font-bold font-inter">shawnnswan</h3>
            </div>
            <p className="text-[10px]">
              Contacted Calvary Carpentry to work out the engineered timber
              floorings for bedrooms. Vanessa and team were well organised &
              responsive, from providing stained floor samples & ensuring good
              workmanship throughout renovation.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
