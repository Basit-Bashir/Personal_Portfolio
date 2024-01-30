import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  faCss3Alt,
  faGithub,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();

  const skillsData = [
    {
      name: "HTML",
      description: "Creating structured and semantic markup for web pages.",
      icon: faHtml5,
      proficiency: "Expert",
    },
    {
      name: "CSS",
      description:
        "Styling web pages with modern CSS, including Flexbox and Grid.",
      icon: faCss3Alt,
      proficiency: "Expert",
    },
    {
      name: "JavaScript",
      description: "Building interactive and dynamic user interfaces.",
      icon: faJs,
      proficiency: "Intermediate",
    },
    {
      name: "Tailwind CSS",
      description: "Designing modern and responsive user interfaces.",
      icon: faPalette,
      proficiency: "Expert",
    },
    {
      name: "React.js",
      description: "Developing scalable and efficient web applications.",
      icon: faReact,
      proficiency: "Intermediate",
    },
    {
      name: "GitHub",
      description: "Version control and collaboration using Git and GitHub.",
      icon: faGithub,
      proficiency: "Intermediate",
    },
    {
      name: "Next.js",
      description: "Building modern and optimized React applications.",
      icon: faReact,
      proficiency: "Fresher",
    },
  ];

  useEffect(() => {
    controls.start({ opacity: 1, x: 0 });
    setLoading(false);
  }, [setLoading, controls]);
  const progressColor = (proficiency) => {
    return proficiency === "Fresher"
      ? "bg-red-500"
      : proficiency === "Intermediate"
      ? "bg-yellow-500"
      : "bg-green-500";
  };

  return (
    <motion.div
      className="flex justify-center items-center m-8"
      initial={{ opacity: 0, x: 100 }}
      animate={controls}
    >
      {loading ? (
        <div className="text-3xl font-semibold text-gray-600">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded p-6 text-center transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <FontAwesomeIcon
                icon={skill.icon}
                className="text-4xl mb-4 text-blue-500 bg-transparent"
              />
              <h3 className="text-xl font-semibold mb-2 bg-transparent">
                {skill.name}
              </h3>
              <p className="text-gray-600 bg-transparent">
                {skill.description}
              </p>
              <p
                className={`${progressColor(
                  skill.proficiency
                )} rounded-full text-white tracking-wider w-1/3 mx-auto mt-2 h-6 text-sm`}
              >
                {skill.proficiency}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Skills;
