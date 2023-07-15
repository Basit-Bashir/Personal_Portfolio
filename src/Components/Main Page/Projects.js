import React from "react";
import "tailwindcss/tailwind.css";
import omni from "../../Assets/Imgs/omni.png";
import bank from "../../Assets/Imgs/bank.png";
import guess from "../../Assets/Imgs/guess.png";
import map from "../../Assets/Imgs/map.png";
const Projects = () => {
  return (
    <section
      className="bg-gradient-to-t from-zinc-500 py-16 tracking-[.15em]"
      id="works"
    >
      <h2 className="text-4xl md:text-7xl font-bold text-center mb-8 text-orange-500 underline underline-offset-[10px] animate-wiggle bg-transparent">
        My Projects
      </h2>
      <div className="container p-6 bg-transparent mx-auto tracking-[.1em]">
        <div className="grid grid-cols-1  md:grid-cols-2  gap-10 shadow-lg shadow-white bg-transparent p-8 ">
          {/* Project 1 */}
          <div className=" rounded overflow-hidden animate-wiggle">
            <img
              src={omni}
              alt="omnifood"
              className="h-64 w-full object-scale-down md:object-cover border-b-2"
            />
            <div className="p-6 ">
              <h3 className="text-xl text-orange-500 font-semibold mb-4">
                Created a website for Food ordering.
              </h3>
              <p className="text-white mb-6">
                Also includes various sections related to Pricing, Gallery of
                food.
              </p>
              <a
                href="https://omnifood-basits.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link block text-center py-2 px-4 text-white rounded-xl transition all duration-500 border-2 hover:bg-orange-500"
              >
                Click here!
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded shadow-md overflow-hidden">
            <img
              src={bank}
              alt="omnifood"
              className="h-64 w-full object-scale-down md:object-cover border-b-2"
            />
            <div className="p-6 h-full">
              <h3 className="text-xl text-orange-500 font-semibold mb-4">
                User-friendly interface design.
              </h3>
              <p className="text-white mb-6">
                The interface was designed to be clean and intuitive for a bank.
              </p>
              <a
                href="https://bank-interfaces.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link block text-center py-2 px-4 text-white rounded-xl transition all duration-500 border-2 hover:bg-orange-500"
              >
                Click here!
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded shadow-md overflow-hidden">
            <img
              src={guess}
              alt="omnifood"
              className="h-64 w-full object-scale-down md:object-cover border-b-2"
            />
            <div className="p-6 h-full">
              <h3 className="text-xl text-orange-500 font-semibold mb-4">
                Simple and engaging game.
              </h3>
              <p className="text-white mb-6">
                The project is a number guessing game with randomly generated
                numbers.
              </p>
              <a
                href="https://guess-it-num.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link block text-center py-2 px-4 text-white rounded-xl transition all duration-500 border-2 hover:bg-orange-500"
              >
                Click here!
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-white rounded shadow-md overflow-hidden animate-wiggle">
            <img
              src={map}
              alt="omnifood"
              className="h-64 w-full object-scale-down md:object-cover border-b-2 "
            />
            <div className="p-6 h-full">
              <h3 className="text-xl text-orange-500 font-semibold mb-4">
                Workout tracker with API integration.
              </h3>
              <p className="text-white mb-6">
                The excercise tracker was built using HTML, CSS, and JavaScript.
              </p>
              <a
                href="https://workout-calculation.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link block text-center py-2 px-4 text-white rounded-xl transition all duration-500 border-2 hover:bg-orange-500"
              >
                Click here!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
