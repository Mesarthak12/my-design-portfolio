import React from "react";
import Image from "next/image";
import Image1 from "../../assets/images/Vector.svg";
import Image2 from "../../assets/images/arrow-down-icon.svg";

const ProjectCard = ({ title, description, projectLink, image }) => {
  return (
    <div className="bg-white rounded-lg w-[500px]">
      <div className="">
        <Image
          width={550}
          height={400}
          src={image}
          alt="This is the project image"
        />
      </div>
      <div className="w-full p-8">
        <div>
          <h1 className="font-extrabold text-[32px]/[140%]">{title}</h1>
        </div>
        <div className="mt-2.5">
          <h1 className=" font-normal text-[21px]/[150%]">{description}</h1>
        </div>
        {title == "My Work @ Rakuten" ? (
          <div className="mt-8">
            <a href={"#contact"}>
              <span className=" flex items-center gap-2 font-semibold text-xl underline">
                Contact me for access
                <Image src={Image2} alt="" width={16} height={16} />
              </span>
            </a>
          </div>
        ) : (
          <div className="mt-8">
            <a href={projectLink} target="_blank">
              <span className=" flex gap-2 font-semibold text-xl underline">
                Explore now
                <Image src={Image1} alt="" width={16} height={16} />
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
