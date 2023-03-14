"use client";

import Image from "next/image";

import { ProductContext } from "@/context/product";
import { useContext } from "react";

export default function CataloguePage() {
  const { products } = useContext(ProductContext);
  return (
    <main className="container mx-auto px-[15px]">
      <section className="text-primary mt-[50px]">
        {products.length === 0 ? (
          <div>
            <p>
              Your catalogue is empty, add some product to request for free
              sample!
            </p>
          </div>
        ) : (
          products.map((product, index) => {
            return (
              product.isSelected && (
                <div key={index} className="grid grid-cols-2 gap-[15px]">
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
                        <h4 className="uppercase text-[#767676]">
                          <span className="!font-light">sku</span>
                        </h4>
                        <h3 className="uppercase font-inter">{product.sku}</h3>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="uppercase">name</h4>
                        <h3 className="font-inter uppercase leading-[1]">
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
                    <h4 className="uppercase">material</h4>
                    <h3 className="uppercase font-inter">
                      {product.specification.species}
                    </h3>
                  </div>
                  <div>
                    <h4 className="uppercase">thickness</h4>
                    <h3 className="uppercase font-inter">
                      {product.specification.thickness}
                    </h3>
                  </div>
                  <div>
                    <h4 className="uppercase">dimension</h4>
                    <h3 className="uppercase font-inter">
                      {product.specification.dimension}
                    </h3>
                  </div>
                  <div>
                    <h4 className="uppercase">grain</h4>
                    <h3 className="uppercase font-inter">
                      {product.specification.grain}
                    </h3>
                  </div>
                  <div>
                    <button>
                      <div></div>Remove
                    </button>
                  </div>
                </div>
              )
            );
          })
        )}
      </section>
    </main>
  );
}
