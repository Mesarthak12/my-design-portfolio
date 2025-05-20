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
            Here are a few past design projects that I have worked on, including
            personal explorations, self-initiated projects and my current
            company work.
          </h1>
        </div>
      </div>
      <div className="mt-[75px] w-full flex flex-wrap justify-evenly px-[5.25rem] gap-28">
        {PROJECT_CARDS.map((item, index) => (
          <ProjectCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            projectLink={item.projectLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
