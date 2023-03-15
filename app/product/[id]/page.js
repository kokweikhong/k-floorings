"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/context/product";

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

const ProductDetail = ({ label, value, isBold }) => {
  return (
    <>
      <h5 className="text-[#767676] uppercase text-[16px] leading-[20px]">
        {label}
      </h5>
      <h3
        className={`${
          isBold
            ? "font-semibold text-[32px] leading-[39px]"
            : "font-normal text-[24px] leading-[32px]"
        } uppercase font-inter`}
      >
        {value}
      </h3>
    </>
  );
};

export default function IndividualProductPage({ params }) {
  const { products, initProducts, addSelected, removeSelected } =
    useContext(ProductContext);
  const [product, setProduct] = useState();

  useEffect(() => {
    if (products.length < 1) {
      initProducts();
    }
  }, [initProducts, products.length]);

  useEffect(() => {
    console.log(products.length);
    setProduct(Array.from(products).find((ele) => ele.index === params.id));
    console.log(product);
  }, [products, params.id, product]);

  const handleAddCatalogue = () => {
    console.log(product.isSelected);
    if (product.isSelected) {
      removeSelected(product.sku);
    } else if (!product.isSelected) {
      addSelected(product.sku);
    }
    console.log(product.isSelected);
  };

  if (products.length < 1 || product === undefined)
    return <div>Loading...</div>;

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
      </section>

      {/* breadcrumb */}
      <section></section>

      <section className="container mx-auto mt-[50px] px-[15px] text-primary">
        <div className="grid grid-cols-3 gap-6 relative md:pb-[160px] lg:pb-0">
          <div className="grid grid-cols-2 gap-[20px] col-span-full md:col-span-2">
            {/* name */}
            <div className="col-span-full">
              <ProductDetail label="name" value={product.name} isBold />
            </div>

            {/* sku */}
            <div className="uppercase col-span-full md:col-span-1">
              <ProductDetail label="sku" value={product.sku} isBold />
            </div>

            {/* click to view pdf */}
            <div className="flex items-end cursor-pointer col-span-full">
              <Link
                href={`/product showcase/${product.showcase}`}
                download
                rel="noopener noreferrer"
                className="underline text-[#1128F8] text-[24px] leading-[15px] self-center md:text-[1.3rem] lg:text-[1.7rem]"
              >
                Click to view
              </Link>
              <div className="ml-2 w-[28px] h-[28px]">
                <Image
                  src="/icons/PDF.svg"
                  alt="pdf project showcase"
                  width="56"
                  height="56"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* product description */}
            <div className="col-span-full">
              <p className="text-[24px] leading-[33px]">
                {product.description}
              </p>
            </div>

            {/* material */}
            <div>
              <ProductDetail
                label="Material"
                value={product.specification.species}
              />
            </div>

            {/* thickness */}
            <div>
              <ProductDetail
                label="thickness"
                value={product.specification.thickness}
              />
            </div>

            {/* dimension */}
            <div>
              <ProductDetail
                label="dimension"
                value={product.specification.dimension}
              />
            </div>

            {/* grain */}
            <div>
              <ProductDetail
                label="grain"
                value={product.specification.grain}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-end gap-2 text-center absolute top-0 right-0 md:static md:justify-center">
              <div className="flex flex-col items-center justify-start">
                <div>
                  <Image
                    src={`/product patterns/${product.pattern.name} - Primary.svg`}
                    alt=""
                    width="38"
                    height="38"
                    className="md:w-[70px] md:h-[70px] lg:md:w-[90px] lg:h-[90px]"
                  />
                </div>
                <p className="text-[12px] md:text-[14px] lg:text-[18px]">
                  {product.pattern.name}
                </p>
              </div>
              <div className="flex flex-col items-center justify-start">
                <div>
                  <Image
                    src={`/product grains/${product.grain.name} - Primary.svg`}
                    alt=""
                    width="38"
                    height="38"
                    className="md:w-[70px] md:h-[70px] lg:md:w-[90px] lg:h-[90px]"
                  />
                </div>
                <p className="text-[12px] md:text-[14px] lg:text-[18px]">
                  {product.grain.name}
                </p>
              </div>
            </div>

            {/* add to catalogue and get your free sample */}
            <div className="fixed bottom-0 left-0 md:absolute md:bottom-0 md:left-0 lg:static flex flex-col justify-center gap-2 w-full bg-[#fff] z-20 py-6 ">
              <button
                onClick={handleAddCatalogue}
                className="flex items-center justify-center text-center"
              >
                <div>
                  {product.isSelected ? (
                    <Image
                      src="/icons/Star Activated.svg"
                      alt=""
                      width="52"
                      height="52"
                    />
                  ) : (
                    <Image
                      src="/icons/Star Idle.svg"
                      alt=""
                      width="52"
                      height="52"
                    />
                  )}
                </div>
                <span className="text-[#000] font-semibold">
                  Add to Catalogue
                </span>
              </button>
              {/* <div className="text-center h-full"> */}
              <Link
                href="/catalogue"
                className="uppercase rounded-[40px] bg-primary text-[#fff] text-[14px] px-[18px] py-[14px] mx-auto shadow-xl"
              >
                get your free sample now
              </Link>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-[50px]">
        <div className="h-[70px] w-full bg-primary"></div>
      </section>
    </main>
  );
}
