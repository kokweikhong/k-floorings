"use client";

import Image from "next/image";
import Link from "next/link";

import { ProductContext } from "@/context/product";
import { useContext } from "react";

export default function CataloguePage() {
  const { products, removeSelected } = useContext(ProductContext);
  return (
    <main>
      <section className="mt-[50px]">
        <div className="w-full text-center">
          <h2 className="mb-7">Catalogue</h2>
          <h3 className="uppercase text-primary font-medium py-8 border-y border-y-[#D9D9D9]">
            get your free sample here
          </h3>
          <div className="flex justify-center items-center gap-6 mt-7">
            <div>
              <Image
                src="/icons/Bizsafe.svg"
                alt="biz safe"
                width="70"
                height="70"
              />
            </div>
            <div>
              <Image
                src="/icons/Delivery.svg"
                alt="free delivery"
                width="70"
                height="70"
              />
            </div>
            <div>
              <Image
                src="/icons/Self Collection.svg"
                alt="self collection"
                width="70"
                height="70"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="text-primary mt-[50px] container mx-auto px-[15px]">
        {products.length === 0 ? (
          <div>
            <p className="text-center">
              Your catalogue is empty, add some product to request for free
              sample!
            </p>
          </div>
        ) : (
          products.map((product, index) => {
            return (
              product.isSelected && (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-[15px] border-t border-t-[#D9D9D9] pt-[30px]"
                >
                  <div className="grid grid-cols-3 col-span-full gap-[15px]">
                    {/* product thumbnail */}
                    <div className="w-full h-full">
                      <Image
                        src={`/products/${product.sku}/${product.thumbnail}`}
                        alt=""
                        width="500"
                        height="500"
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* sku and name */}
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col">
                        <h4 className="uppercase text-[#767676] font-normal">
                          sku
                        </h4>
                        <h3 className="uppercase font-inter font-normal">
                          {product.sku}
                        </h3>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="uppercase font-normal text-[#767676]">
                          name
                        </h4>
                        <h3 className="font-inter uppercase leading-[1] text-[#000] font-normal">
                          {product.name}
                        </h3>
                      </div>
                    </div>

                    {/* pattern and grain svg */}
                    <div className="flex flex-wrap items-start justify-end gap-3">
                      <div className="w-full max-w-[60px] flex flex-col items-center">
                        <div className="w-[48px] h-[48px]">
                          <Image
                            src={`/product patterns/${product.pattern.name} - Primary.svg`}
                            alt=""
                            width="48"
                            height="48"
                            className="w-full h-full"
                          />
                        </div>
                        <p className="text-center text-[0.8rem]">
                          {product.pattern.name}
                        </p>
                      </div>
                      <div className="w-full h-full max-w-[60px] flex flex-col items-center">
                        <div className="w-[48px] h-[48px]">
                          <Image
                            src={`/product grains/${product.grain.name} - Primary.svg`}
                            alt=""
                            width="48"
                            height="48"
                            className="w-full h-full"
                          />
                        </div>
                        <p className="text-center text-[0.8rem]">
                          {product.grain.name}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="uppercase font-normal text-[#767676]">
                      material
                    </h4>
                    <h3 className="uppercase font-inter font-normal">
                      {product.specification.species}
                    </h3>
                  </div>
                  <div>
                    <h4 className="uppercase font-normal text-[#767676]">
                      thickness
                    </h4>
                    <h3 className="uppercase font-inter font-normal">
                      {product.specification.thickness}
                    </h3>
                  </div>
                  <div>
                    <h4 className="uppercase font-normal text-[#767676]">
                      dimension
                    </h4>
                    <h3 className="uppercase font-inter font-normal">
                      {product.specification.dimension}
                    </h3>
                  </div>
                  <div>
                    <h4 className="uppercase font-normal text-[#767676]">
                      grain
                    </h4>
                    <h3 className="uppercase font-inter font-normal">
                      {product.specification.grain}
                    </h3>
                  </div>
                  <div className="col-span-full py-4">
                    <button className="flex flex-col justify-center items-center mx-auto mb-4">
                      <div>
                        <Image
                          src="/icons/Remove.svg"
                          alt="remove product icon"
                          width="48"
                          height="48"
                        />
                      </div>
                      <span
                        onClick={() => {
                          console.log(product.index);
                          removeSelected(product.sku);
                        }}
                      >
                        Remove
                      </span>
                    </button>
                  </div>
                </div>
              )
            );
          })
        )}
      </section>

      <section className="mt-[50px] flex flex-col items-center gap-4 justify-center fixed bottom-0 z-10 bg-[#fff] left-0 w-full py-[30px] md:static md:py-0">
        <Link
          href="/catalogue/sample-form"
          className="bg-secondary uppercase text-[#fff] rounded-[40px] text-[14px] tracking-[2px] px-[28px] py-[14px] font-medium"
        >
          {`Request for free sample (${
            products.filter((ele) => ele.isSelected).length
          })`}
        </Link>
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="">or contact us at</p>
          <div className="flex gap-10">
            <div className="w-[52px] h-[52px]">
              <Image
                src="/icons/whatsapp.svg"
                alt="whatsapp icon"
                width="52"
                height="52"
                className="w-full h-full"
              />
            </div>
            <div className="w-[52px] h-[52px]">
              <Image
                src="/icons/phone.svg"
                alt="phone icon"
                width="52"
                height="52"
                className="w-full h-full"
              />
            </div>
          </div>
          <p>to better understand your needs</p>
        </div>
      </section>
    </main>
  );
}
