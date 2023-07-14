import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <section className=" relative ">
      <div className="">
        <p className="text-orange-500 text-7xl text-center mt-8 animate-wiggle underline  decoration-4  underline-offset-[8px]">
          Skills
        </p>
        <div className="px-6 py-8">
          <ul className="md:grid  md:gap-8 md:grid-cols-2  md:place-items-center bg-gradient-to-b from-zinc-500 rounded-lg md:px-8 md:py-8 tracking-[.15em] text-2xl shadow-md shadow-white md:h-80 text-white">
            <li className=" bg-transparent ">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="bg-transparent mr-4 "
              />
              HTML{" "}
            </li>
            <li className=" bg-transparent ">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="bg-transparent mr-4 "
              />
              CSS
            </li>

            <li className="bg-transparent">
              {" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="bg-transparent mr-4 "
              />
              JavaScript
            </li>
            <li className=" bg-transparent">
              {" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="bg-transparent mr-4 "
              />
              ReactJS
            </li>
            <li className="bg-transparent text-center col-span-2  py-8 ">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="bg-transparent mr-4 "
              />
              TailwindCSS
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Skills;
