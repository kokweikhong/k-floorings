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

      <section className="container mt-[50px]">
        <div className="text-center text-primary flex flex-col gap-4">
          <div className="flex justify-center items-center gap-2">
            <div>
              <Image src="/icons/FSC.svg" alt="FSC" width="52" height="52" />
            </div>
            <div className="flex items-center">
              <div>
                <Image src="/icons/EN.svg" alt="EN" width="52" height="52" />
              </div>
              <h3 className="leading-[1] text-[14px]">
                EUROPEAN <br />
                STANDARDS
              </h3>
            </div>
            <div>
              <Image src="/icons/CE.svg" alt="CE" width="52" height="52" />
            </div>
          </div>
          <h2 className="uppercase">sustainably and ethically sourced</h2>
        </div>
      </section>

      {/* products */}
      <section className="container mx-auto text-center mt-[50px] px-[15px]">
        <div className="grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4">
          {productsData.map((product, index) => {
            return (
              <div key={index} className="relative">
                <div className="w-full h-[350px]">
                  <Link href={`/product/${product.index}`}>
                    <Image
                      src={`/products/${product.sku}/${product.thumbnail}`}
                      alt=""
                      width="500"
                      height="500"
                      className="object-cover w-full h-full"
                    />
                  </Link>
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

                <div className="z-10">
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

      <section className="container mx-auto mt-[50px]">
        <div className="border-top border-t-[#D9D9D9] border py-2">
          <p className="text-center uppercase text-secondary">{`${productsData.length} of ${productsData.length} shown`}</p>
        </div>
        <div className="bg-primary text-center py-3">
          <h3 className="text-[#fff] tracking-widest flex justify-center items-center gap-2">
            <span>KANDINSKY</span>
            <span className="text-[#000] bg-[#fff] font-semibold font-inter tracking-widest text-[1.4rem] px-1">
              LITE
            </span>
          </h3>
        </div>
      </section>
    </main>
  );
}
