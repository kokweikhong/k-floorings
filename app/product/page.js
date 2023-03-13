import Image from "next/image";
import Link from "next/link";

import heroImage from "../../public/images/home/Sustainability.jpeg";
import productsData from "../../data/product.json";

export default function ProductPage() {
  return (
    <main>
      <section className="h-screen w-full relative after:h-full after:w-full after:bg-black/40 after:absolute after:top-0 after:left-0 after:-z-[1]">
        <div className="w-full h-full absolute top-o left-0 -z-[1]">
          <Image
            src={heroImage}
            alt="sustainability product | nature forest"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-[#fff] max-w-[500px] flex flex-col items-center justify-center h-full text-center mx-auto px-[15px]">
          <h1 className="tracking-wider uppercase">product page</h1>

          <span className="w-full h-[1px] bg-[#fff] my-8"></span>

          <p>
            Wooden timber with a cross-grain composition, making our boards
            highly resilient and adaptable to environmental changes. Our
            beautiful natural patterns and wide range of colours make our timber
            a versatile and ideal choice for any interior design project.
          </p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center py-2">
            <div className="text-left">
              <h3>
                <span className="tracking-widest uppercase">kandinsky</span>
              </h3>
              <span className="uppercase bg-[#000] text-[#fff] px-3">lite</span>
            </div>
          </div>
          <div className="bg-black text-[#fff] flex justify-center items-center py-2">
            <div className="text-left">
              <h3>
                <span className="tracking-widest uppercase">kandinsky</span>
              </h3>
              <span className="w-full uppercase">coming soon</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto text-center mt-[50px] px-[15px]">
        <h2 className="uppercase text-primary">
          sustainably and ethically sourced
        </h2>
        <div className="grid grid-cols-2 gap-[15px]">
          {productsData.map((product, index) => {
            return (
              <div key={index} className="relative">
                <div className="w-full h-[350px]">
                  <Image
                    src={`/products/${product.sku}/Thumbnails_${product.sku}.jpg`}
                    alt=""
                    width="500"
                    height="500"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute top-0 right-0 w-[50px] m-2">
                  <div>
                    <div>
                      <Image
                        src={`/product patterns/${product.pattern.src}`}
                        alt=""
                        width="48"
                        height="48"
                      />
                    </div>
                    <p
                      className={`${
                        product.patternColor === "white"
                          ? "text-[#fff]"
                          : "text-[#000]"
                      } text-[12px] break-all`}
                    >
                      {product.pattern.name}
                    </p>
                  </div>
                  <div>
                    <div>
                      <Image
                        src={`/product grains/${product.grain.src}`}
                        alt=""
                        width="48"
                        height="48"
                      />
                    </div>
                    <p
                      className={`${
                        product.patternColor === "white"
                          ? "text-[#fff]"
                          : "text-[#000]"
                      } text-[12px] break-all`}
                    >
                      {product.grain.name}
                    </p>
                  </div>
                </div>

                <div>
                  <Link
                    href="#"
                    className="absolute bottom-0 left-0 w-full text-center uppercase text-[#fff] font-semibold text-[12px] p-2 cursor-pointer"
                  >
                    get free sample
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
