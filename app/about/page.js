import Image from "next/image";

import heroImage from "../../public/images/about/about_hero_image.jpg";
import svgDissection from "../../public/images/K-Floor dissection.svg";

import svgPetFriendly from "../../public/icons/pet friendly.svg";
import svgKidFriendly from "../../public/icons/Kid friendly.svg";
import svgSGBC from "../../public/icons/SGBC.svg";
import svgStats from "../../public/icons/STAT.svg";

const IconHolder = ({ svgImage, imgAlt, desc }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-[55px] h-[55px]">
        <Image src={svgImage} alt={imgAlt} />
      </div>
      <span className="text-base font-medium">{desc}</span>
    </div>
  );
};

export default function AboutPage() {
  const svgImages = [svgPetFriendly, svgKidFriendly, svgSGBC, svgStats];
  return (
    <main>
      <section className="relative flex items-center justify-center w-full h-screen">
        <div className="after:z-[0] w-full h-full after:h-full after:w-full after:absolute after:top-0 after:left-0 after:bg-black/40">
          <Image
            src={heroImage}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-[#fff] px-[30px] z-10 absolute top-0 left-0 flex flex-col justify-center items-center text-center w-full h-full">
          <h2 className="max-w-[400px] uppercase font-bold text-[64px]">
            About us
          </h2>
          <span className="max-w-[400px] w-full h-[1px] bg-[#fff] my-4"></span>
          <p className="text-[18px] text-left max-w-[400px]">
            Where Wood Meet Art - Kandinsky®. Discover the art of woodworking
            and meet the creative minds behind every piece of wood. Explore our
            stunning projects, impressive statistics, and read testimonials from
            satisfied clients. Experience the beauty of wood with Kandinsky®.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-[15px] mt-[50px]">
        <div className="flex flex-col items-center gap-4">
          <div>
            <Image
              src={svgDissection}
              alt="/images/K-Floor dissection.svg"
              width="500"
              height="500"
            />
          </div>
          <p className="uppercase text-[#767676]">
            Symmetric 3 layer construction
          </p>
        </div>
        <div className="flex flex-col gap-5 font-medium mt-[50px]">
          <p>
            KANDINSKY®’s symmetric-three-layer-construction consist of the top
            and bottom is overlaid with hardwood OAK, a softwood core PINE is
            bonded with PVA adhesive.
          </p>
          <p>
            This construction allows KANDINSKY® to be significantly sturdier,
            more even and durable.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-1 mt-[50px]">
          <IconHolder
            svgImage={svgPetFriendly}
            imgAlt="Pet Friendly"
            desc="Pet Friendly"
          />
          <IconHolder
            svgImage={svgKidFriendly}
            imgAlt="Children Safe"
            desc="Children Safe"
          />
          <IconHolder
            svgImage={svgSGBC}
            imgAlt="SGBC certified 12 ticks"
            desc="SGBC certified (12 ticks)"
          />
          <IconHolder
            svgImage={svgStats}
            imgAlt="STATS certified"
            desc="STATS certified"
          />
        </div>
      </section>
    </main>
  );
}
