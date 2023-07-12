import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <section className="h-3/4 relative">
      <div className="  ">
        <p className="text-orange-500 text-7xl text-center mt-8 animate-wiggle underline  decoration-4  underline-offset-[8px]">
          Skills
        </p>
        <div className="px-6 py-8   ">
          <ul className="grid grid-cols-2  gap-8 place-items-center bg-gradient-to-b from-zinc-500 rounded-lg px-8 py-8 tracking-[.15em] text-2xl shadow-md shadow-white h-80 ">
            <li className="text-orange-500 bg-transparent ">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="bg-transparent mr-4 "
              />
              HTML{" "}
            </li>
            <li className="text-orange-500 bg-transparent ">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="bg-transparent mr-4 "
              />
              CSS
            </li>

            <li className="text-orange-500 bg-transparent">
              {" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="bg-transparent mr-4 "
              />
              JavaScript
            </li>
            <li className="text-orange-500 bg-transparent">
              {" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="bg-transparent mr-4 "
              />
              ReactJS
            </li>
            <li className="text-orange-500 bg-transparent text-center col-span-2  py-8 ">
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
