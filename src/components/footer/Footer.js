import React from "react";
import Image from "next/image";
import LinkedInLogo from "../../assets/icons/linkedin-linked-in-svgrepo-com 1.svg";
import DribbleLogo from "../../assets/icons/dribbble-svgrepo-com (1) 1.svg";
import BehnaceLogo from "../../assets/icons/behance-svgrepo-com 1.svg";
import Icon from "../../assets/icons/Icon.svg";
import TwitterLogo from "../../assets/icons/mdi_twitter.png";
import useWindowSize from "@/common/useWindowDimensions";

const Footer = () => {
  const { width } = useWindowSize();
  return width > 768 ? (
    <div>
      <div className="pt-[72px] mt-[72px] pl-[72px] pr-[72px] flex justify-between">
        <div>
          <div className="text-black font-poppins text-2xl font-semibold justify-start flex mb-4">
            Cindrella M Dsouza
          </div>
          <div className="text-black font-poppins text-base font-normal">
            Thanks for stopping by! Visit again for more Designs crafting and
            creations.
          </div>
        </div>
        <div>
          <div className="text-black font-poppins text-2xl font-semibold flex justify-start mb-4">
            Social
          </div>
          <div className="flex ">
            <a href="https://dribbble.com/Cindrella-M-Dsouza" target="_blank">
              <Image
                className="mr-3 transition duration-300 ease-in-out transform hover:scale-125"
                src={DribbleLogo}
                alt={"DribbleLogo"}
                width={32}
                height={32}
              />
            </a>
            <a
              href="https://www.behance.net/cindrelmdsou/projects"
              target="_blank"
            >
              <Image
                className="mr-3 transition duration-300 ease-in-out transform hover:scale-125"
                width={32}
                height={32}
                src={BehnaceLogo}
                alt={"BehanceLogo"}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/cindrella-m-d-souza-38494a178/"
              target="_blank"
            >
              <Image
                className="transition duration-300 ease-in-out transform hover:scale-125"
                width={32}
                height={32}
                src={LinkedInLogo}
                alt="LinkedInLogo"
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-12 py-6 text-center font-poppins text-black font-normal text-sm flex justify-center items-center">
          <div className="pr-2">
            <Image src={Icon} alt="" />
          </div>
          <div>
            2025 | Designed with ❤️️ by Cindrella Dsouza and Coded by Sarthak
            Jain
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="p-10 bg-black mt-[72px]">
      <div className="text-white font-poppins text-2xl font-semibold">
        Social
      </div>
      <div className="flex pr-[213px] mt-6">
        <a
          href="https://www.linkedin.com/in/sarthak-jain-b37027213/"
          target="_blank"
        >
          <Image
            className="mr-3 transition duration-300 ease-in-out transform hover:scale-125"
            src={LinkedInLogo}
            alt={"LinkedInLogo"}
            width={32}
            height={32}
          />
        </a>
        <a href="https://github.com/Mesarthak12" target="_blank">
          <Image
            className="mr-3 transition duration-300 ease-in-out transform hover:scale-125"
            width={32}
            height={32}
            src={TwitterLogo}
            alt={TwitterLogo}
          />
        </a>
        <a href="https://x.com/Sarthak_j120" target="_blank">
          <Image
            className="transition duration-300 ease-in-out transform hover:scale-125"
            width={32}
            height={32}
            src={TwitterLogo}
            alt="TwitterLogo"
          />
        </a>
      </div>
      <div className="text-white font-poppins text-2xl font-semibold mt-12">
        Sarthak Jain
      </div>
      <div className="text-white font-poppins text-base font-normal mt-6">
        Thanks for stopping by! Visit again for more front-end magic and digital
        creations.
      </div>
    </div>
  );
};

export default Footer;
