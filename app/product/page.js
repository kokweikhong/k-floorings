import Image from "next/image";
import Link from "next/link";

import heroImage from "../../public/images/home/Sustainability.jpeg";
import productsData from "../../data/product.json";

import logoKandinskyWhite from "../../public/kandinsky_logo_white.svg";
import logoKandinskyLiteWhite from "../../public/kandinsky lite_logo1.svg";
import logoKandinskyLiteWhiteHoz from "../../public/kandinsky lite_logo2.svg";

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
          <h1 className="text-[64px] leading-[68px] font-bold lg:font-black uppercase">
            our product
          </h1>

          <span className="w-full h-[1px] bg-[#fff] my-8"></span>

          <p className="text-[18px] leading-[22px] lg:leading-[28px] lg:text-[24px] font-medium">
            Wooden timber with a cross-grain composition, making our boards
            highly resilient and adaptable to environmental changes. Our
            beautiful natural patterns and wide range of colours make our timber
            a versatile and ideal choice for any interior design project.
          </p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center w-full">
            <div className="max-w-[180px] max-h-[35px]">
              <Image
                src={logoKandinskyLiteWhite}
                alt="kandinksy logo"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="bg-black text-[#fff] flex flex-col justify-center items-center py-[20px]">
            <div>
              <div className="h-[15px] max-w-[180px] mb-1">
                <Image
                  src={logoKandinskyWhite}
                  alt="kandinksy logo"
                  className="w-full h-full"
                />
              </div>
              <span className="uppercase">coming soon</span>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-2">
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
        </div> */}
      </section>

      <section className="container mx-auto mt-[50px]">
        <div className="flex flex-col gap-4 text-center text-primary">
          <div className="flex items-center justify-center gap-2">
            <div className="w-[38px] h-[38px]">
              <Image
                src="/icons/FSC.svg"
                alt="FSC"
                width="52"
                height="52"
                className="w-full h-full"
              />
            </div>
            <div className="flex items-center w-[110px] h-[38px]">
              <div className="w-[38px] h-[38px]">
                <Image
                  src="/icons/EN.svg"
                  alt="EN"
                  width="52"
                  height="52"
                  className="w-full h-full"
                />
              </div>
              <h3 className="leading-[1] text-[12px]">
                EUROPEAN <br />
                STANDARDS
              </h3>
            </div>
            <div className="w-[38px] h-[38px]">
              <Image
                src="/icons/CE.svg"
                alt="CE"
                width="52"
                height="52"
                className="w-full h-full"
              />
            </div>
          </div>
          <h2 className="uppercase text-[32px] font-semibold leading-[39px]">
            sustainably and ethically sourced
          </h2>
        </div>
      </section>

      {/* products */}
      <section className="container mx-auto text-center mt-[50px] px-[15px]">
        <div className="grid grid-cols-2 gap-x-[20px] gap-y-[25px] md:grid-cols-3 xl:grid-cols-4">
          {productsData.map((product, index) => {
            return (
              <div key={index} className="relative">
                <div className="w-full h-[250px] md:h-[335px] relative">
                  <Link href={`/product/${product.index}`}>
                    <Image
                      src={`/products/${product.sku}/${product.thumbnail}`}
                      alt=""
                      width="500"
                      height="500"
                      className="object-cover w-full h-full"
                    />
                  </Link>
                  <div className="z-10">
                    <Link
                      href={`/product/${product.index}`}
                      className="absolute bottom-0 left-0 w-full text-center uppercase text-[#fff] font-semibold text-[12px] p-2 cursor-pointer"
                    >
                      get free sample
                    </Link>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-[50px] m-2">
                  <div>
                    <div>
                      <Image
                        src={`/product patterns/${product.pattern.src}`}
                        alt=""
                        width="42"
                        height="42"
                        className="mx-auto"
                      />
                    </div>
                    <p
                      className={`${
                        product.patternColor === "white"
                          ? "text-[#fff]"
                          : "text-[#000]"
                      } text-[12px] leading-[15px] break-all`}
                    >
                      {product.pattern.name}
                    </p>
                  </div>
                  <div>
                    <div>
                      <Image
                        src={`/product grains/${product.grain.src}`}
                        alt=""
                        width="42"
                        height="42"
                        className="mx-auto"
                      />
                    </div>
                    <p
                      className={`${
                        product.patternColor === "white"
                          ? "text-[#fff]"
                          : "text-[#000]"
                      } text-[12px] leading-[15px] break-all`}
                    >
                      {product.grain.name}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-base">{product.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-[50px]">
        <div className="border-top border-t-[#D9D9D9] border py-2">
          <p className="text-center text-base leading-[19px] uppercase text-secondary">{`${productsData.length} of ${productsData.length} shown`}</p>
        </div>
        <div className="flex items-center justify-center w-full p-3 bg-primary h-[70px]">
          <Image
            src={logoKandinskyLiteWhiteHoz}
            alt="kandinsky lite logo"
            className="max-w-[200px] h-auto"
          />
        </div>
      </section>
    </main>
  );
}
