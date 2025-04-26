import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECT_CARDS } from "@/config/projectCardsConfig";

const Projects = () => {
  return (
    <div className="pt-12 pb-52">
      <div className="text-center">
        <div className="">
          <h1 className="font-semibold text-5xl/[72px] text-black font-poppins">
            Featured Projects
          </h1>
        </div>
        <div className="mt-2">
          <h1 className="text-black font-normal text-base font-poppins">
            Here are a few past design projects I've worked on, including client
            work, personal explorations, and self-initiated projects.
          </h1>
        </div>
      </div>
      <div className="mt-[75px] w-full flex flex-wrap justify-evenly px-[5.25rem] gap-28">
        {PROJECT_CARDS.map((item, index) => (
          // <div key={index} className="flex justify-between gap-4 w-[1000px]">
          <ProjectCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            projectLink={item.projectLink}
          />
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
