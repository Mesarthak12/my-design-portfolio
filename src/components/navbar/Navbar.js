import { NAV_LINKS } from "@/config/navBarHeader";
import React from "react";
import DownloadButton from "../downloadButton/DownloadButton";
import useWindowSize from "@/common/useWindowDimensions";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  console.log(router.pathname, "pathname");
  const { width } = useWindowSize();
  return (
    <div className="fixed w-full z-50 backdrop-blur-xs">
      <div className="px-[90px] pt-12 flex justify-between">
        <div className="w-full">
          <ul className="flex items-center w-full ">
            {NAV_LINKS.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 transition duration-300 ease-in-out transform hover:scale-110 "
              >
                <Link
                  className=" text-black font-normal text-2xl/[36px] font-poppins "
                  href={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {width > 1024 && (
          <div>
            <DownloadButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
