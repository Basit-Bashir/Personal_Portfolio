import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import MotionComponent from "../Animation/Animation";

const Skills = () => {
  return (
    <MotionComponent>
      <section className="relative border-y-2 py-16">
        <div className="container mx-auto px-4">
          <p className="text-orange-500 text-5xl md:text-7xl text-center mt-8 font-bold animate-wiggle">
            Skills
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12 ">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center shadow-md shadow-orange-500"
              >
                <FontAwesomeIcon
                  icon={skill.icon}
                  className={`text-${skill.color} text-5xl mb-4 bg-transparent`}
                />
                <p className="text-xl font-bold text-gray-800 mb-2 bg-transparent">
                  {skill.name}
                </p>
                <p className="tracking-widest font-semibold bg-transparent">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MotionComponent>
  );
};

const skillsData = [
  {
    name: "HTML",
    description: "Build the structure of web pages.",
    icon: faHtml5,
    color: "red-500",
  },
  {
    name: "CSS",
    description: "Style and design web pages.",
    icon: faCss3Alt,
    color: "blue-500",
  },
  {
    name: "JavaScript",
    description: "Add interactivity and functionality to websites.",
    icon: faJs,
    color: "yellow-500",
  },
  {
    name: "ReactJS",
    description: "Build modern and dynamic user interfaces.",
    icon: faReact,
    color: "blue-500",
  },
  {
    name: "TailwindCSS",
    description: "Utilize a utility-first CSS framework.",
  },
  {
    name: "GitHub",
    description: "Collaborate and manage code repositories.",
    icon: faGithub,
    color: "black",
  },
];

export default Skills;
