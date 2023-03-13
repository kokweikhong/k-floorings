"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productsData from "../../../data/product.json";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !right-0 z-10`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !left-0 z-10`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const ProductDetail = ({ label, value }) => {
  return (
    <>
      <h5 className="text-[#767676] uppercase">{label}</h5>
      <h3 className="font-inter uppercase">{value}</h3>
    </>
  );
};

export default function IndividualProductPage({ params }) {
  console.log(params);
  console.log(productsData);
  const product = Array.from(productsData).find(
    (ele) => ele.index === params.id
  );
  console.log(product);
  const settings = {
    className: "product-slider",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <main>
      <section>
        <div>
          <Slider {...settings}>
            {product?.images.map((img, index) => {
              return (
                <div key={index} className="max-h-[550px]">
                  <Image
                    src={`/products/${product.sku}/${img}`}
                    alt=""
                    width="1980"
                    height="1280"
                    className="object-cover w-full h-full"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </section>

      {/* breadcrumb */}
      <section></section>

      <section className="container mx-auto mt-[50px] px-[15px] text-primary">
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <ProductDetail label="name" value={product.name} />
          </div>

          <div className="text-center flex justify-end gap-2">
            <div className="flex flex-col items-center justify-start max-w-[40px]">
              <div>
                <Image
                  src={`/product patterns/${product.pattern.name} - Primary.svg`}
                  alt=""
                  width="38"
                  height="38"
                />
              </div>
              <p className="text-[10px]">{product.pattern.name}</p>
            </div>
            <div className="flex flex-col items-center justify-start max-w-[40px]">
              <div>
                <Image
                  src={`/product grains/${product.grain.name} - Primary.svg`}
                  alt=""
                  width="38"
                  height="38"
                />
              </div>
              <p className="text-[10px]">{product.grain.name}</p>
            </div>
          </div>

          <div className="uppercase col-span-full">
            <ProductDetail label="sku" value={product.sku} />
          </div>

          <div className="fixed bottom-0 flex flex-col justify-center gap-2 w-full bg-[#fff] z-20 py-6">
            <div className="flex items-center text-center justify-center">
              <div>
                <Image
                  src="/icons/Star Idle.svg"
                  alt=""
                  width="52"
                  height="52"
                />
              </div>
              <span className="text-[#000] font-semibold">
                Add to Catalogue
              </span>
            </div>
            <div className="text-center">
              <Link
                href=""
                className="uppercase rounded-[40px] bg-primary text-[#fff] text-[14px] px-[18px] py-[14px]"
              >
                get your free sample now
              </Link>
            </div>
          </div>

          <div className="col-span-full flex items-end cursor-pointer">
            <Link href="" className="underline text-[#1128F8]">
              Click to view
            </Link>
            <div className="ml-2">
              <Image
                src="/icons/PDF.svg"
                alt="pdf project showcase"
                width="28"
                height="28"
              />
            </div>
          </div>

          <div className="col-span-full">
            <p>{product.description}</p>
          </div>

          <div className="w-1/2">
            <ProductDetail label="Material" value="" />
          </div>
          <div className="w-1/2">
            <ProductDetail label="thickness" value="" />
          </div>
          <div>
            <ProductDetail label="dimension" value="" />
          </div>
          <div>
            <ProductDetail label="grain" value="" />
          </div>
        </div>
      </section>
    </main>
  );
}
