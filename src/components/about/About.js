import { SKILL_CONFIG } from "@/config/skillsConfig";
import { EXPERIENCE_CONFIG } from "@/config/experienceConfig";
import React from "react";

const renderSkills = () => {
  return (
    <div className="mt-8 w-full flex justify-center lg:mb-16">
      <div className="pt-10 w-[900px]">
        <div className="text-center">
          {SKILL_CONFIG.map((item, index) => (
            <div
              className="transition duration-300 ease-in-out transform hover:scale-110 mr-6 p-2 mb-6 font-poppins font-semibold text-sm inline-block text-white rounded border-[#525050] bg-[#03045E] border"
              key={index}
            >
              {item.skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const renderExperience = () => {
  return (
    <div className="w-full flex justify-center pb-28">
      <div className="w-[900px]">
        <h2 className="text-black font-poppins font-semibold text-4xl mb-12">
          Experience
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[#03045E]"></div>
          {EXPERIENCE_CONFIG?.map((exp, index) => (
            <div key={index} className="flex items-start gap-6 mb-12">
              <div className="w-[300px] text-right pr-4">
                <h3 className="text-black font-poppins font-bold text-2xl">
                  {exp.role}
                </h3>
                <p className="text-black font-poppins mt-1">{exp.company}</p>
              </div>
              <div className="flex-grow h-[2px] bg-[#03045E] mt-4"></div>
              <div className="w-[300px] bg-[#03045E] p-4 rounded-lg">
                <p className="text-white font-poppins mt-1">{exp.duration}</p>
                <ul className="list-disc pl-5 mt-2 text-white font-poppins">
                  {exp?.details?.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          )) || <p>No experience data available.</p>}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="pt-12">
      <div className="text-center">
        <div className="text-black font-semibold text-5xl/[72px] font-poppins">
          ABOUT ME
        </div>
        <div className="mt-4 text-black font-poppins font-normal text-base">
          My Skills and journey of being a designer
        </div>
        <div className="flex justify-center w-full">
          <div className="w-[824px] mt-12 text-black font-poppins font-normal text-base text-justify">
            As a Product Designer with over{" "}
            <span className="font-semibold">four years</span> of experience, I
            have developed a strong foundation in creating user-centric and
            visually engaging digital experiences. My work focuses on balancing
            aesthetics with functionality, ensuring that design solutions not
            only look appealing but also solve real user problems effectively.
            Over the past four years, I have honed my skills in areas such as
            user research, wireframing, prototyping, and interaction design,
            enabling me to create intuitive interfaces that enhance the overall
            user experience.
            <br />
            <br />
            I am proficient in design tools like Figma, Sketch, and Adobe XD,
            and I am comfortable collaborating across cross-functional teams,
            including product managers, developers, and stakeholders, to ensure
            alignment and bring design visions to life. Throughout my career, I
            have worked on a range of projects, from mobile apps to web
            platforms, allowing me to adapt to various design challenges and
            deliver high-quality, polished results.
            <br />
            <br />
            My experience has taught me the importance of continuous learning,
            keeping up with design trends, and incorporating feedback to improve
            my designs. I am passionate about creating products that users love
            and am excited to keep pushing my design skills further as I grow in
            my career.
          </div>
        </div>
      </div>
      {renderSkills()}
      {renderExperience()}
    </div>
  );
};

export default About;
