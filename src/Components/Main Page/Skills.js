import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <section className="relative">
      <div className="container mx-auto px-4">
        <p className="text-orange-500 text-4xl md:text-7xl text-5xl text-center mt-8 underline underline-offset-[8px] animate-wiggle">
          Skills
        </p>
        <div className="md:flex md:justify-center md:px-6 py-8">
          <ul className="md:grid md:gap-8 md:grid-cols-2 md:place-items-center bg-gradient-to-b from-zinc-500 rounded-lg md:px-8 md:py-8 tracking-[.15em] text-xl md:text-2xl shadow-sm shadow-white text-white flex flex-col items-center">
            <li className="flex items-center bg-transparent py-4">
              HTML
              <FontAwesomeIcon
                icon={faHtml5}
                className="ml-4 bg-transparent text-red-500 md:text-4xl text-2xl"
              />
            </li>
            <li className="flex items-center bg-transparent py-4">
              CSS
              <FontAwesomeIcon
                icon={faCss3Alt}
                className="ml-4 bg-transparent text-blue-500 md:text-4xl text-2xl"
              />
            </li>
            <li className="flex items-center bg-transparent py-4">
              JavaScript
              <FontAwesomeIcon
                icon={faJs}
                className="ml-4 bg-transparent text-yellow-500 md:text-4xl text-2xl"
              />
            </li>
            <li className="flex items-center bg-transparent py-4">
              ReactJS
              <FontAwesomeIcon
                icon={faReact}
                className="ml-4 bg-transparent text-blue-300 md:text-4xl text-2xl"
              />
            </li>
            <li className="flex items-center bg-transparent py-4 md:text-center ">
              TailwindCSS
            </li>
            <li className="flex items-center bg-transparent py-4 md:text-center ">
              GitHub
              <FontAwesomeIcon
                icon={faGithub}
                className="ml-4 bg-transparent text-white md:text-4xl text-2xl"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
