import React from "react";
import Image from "next/image";
import LinesBgImage from "../../assets/images/background.svg";
import Typewriter from "typewriter-effect";
import useWindowSize from "@/common/useWindowDimensions";
import Link from "next/link";

const Home = () => {
  const { width } = useWindowSize();
  return (
    <div>
      <div className="w-full">
        <div className="relative w-full">
          <Image
            src={LinesBgImage}
            alt="A beautiful example"
            className="rounded-lg object-cover w-full h-full"
          />
          <div
            className={
              width > 768
                ? "absolute top-[15.375rem] left-1/2 -translate-x-1/2 text-center w-[1088px]"
                : "mt-32 text-center"
            }
          >
            <div>
              <h1
                className={`font-poppins text-black font-normal
                  ${width > 768 ? " text-5xl/[72px] " : "text-3xl"}
                `}
              >
                Hey, I&apos;m{" "}
                <span className="text-[#03045E] font-semibold">
                  Cindrella M Dsouza{" "}
                </span>{" "}
                a passionate Product Designer with 3+ years of experience
              </h1>
            </div>
            <div className="">
              <h1 className="mt-8 text-center font-normal text-2xl">
                crafting intuitive, scalable solutions for B2B and B2C products.
                I collaborate closely with stakeholders to transform complex
                user needs into seamless digital experiences, driving
                engagement, usability, and business growth through innovative
                design thinking.
              </h1>
            </div>
            <div className="mt-8 font-poppins">
              <h1></h1>
            </div>
            <div>
              <Link href={"#contact"}>
                <button className="text-[#03045E] mt-20 w-[158px] h-[64px] !bg-[#FFFFFF] border rounded-lg transition duration-300 ease-in-out transform hover:scale-110">
                  <h1 className="font-medium text-xl font-poppins">
                    Get in Touch
                  </h1>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
