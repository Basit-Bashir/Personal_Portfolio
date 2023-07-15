import React from "react";
import "tailwindcss/tailwind.css";
import omni from "../../Assets/Imgs/omni.png";
import northstar from "../../Assets/Imgs/northstar.png";
import weather from "../../Assets/Imgs/weather.png";
import map from "../../Assets/Imgs/map.png";
const Projects = () => {
  return (
    <section className="py-16 tracking-[.15em]" id="works">
      <h2 className="text-4xl md:text-7xl font-bold text-center mb-8 text-orange-500 underline underline-offset-[10px] animate-wiggle bg-transparent">
        My Projects
      </h2>
      <div className="container p-6 bg-transparent mx-auto tracking-[.1em]">
        <div className="grid grid-cols-1  md:grid-cols-2  gap-10 shadow-sm shadow-white bg-transparent p-8 ">
          {/* Project 1 */}
          <div className=" rounded overflow-hidden animate-wiggle shadow-md shadow-white">
            <img
              src={omni}
              alt="omnifood"
              className="h-64 w-full object-scale-down md:object-cover border-b-2"
            />
            <div className="p-6 bg-gradient-to-r from-zinc-500 h-full">
              <h3 className="text-xl text-orange-500 font-semibold mb-4 bg-transparent">
                Developed the frontend for a Food ordering website.
              </h3>
              <p className="text-white mb-6 bg-transparent">
                Also includes various sections related to Pricing, Gallery of
                food.
              </p>
              <p className="text-white mb-6 bg-transparent">
                <span className="text-orange-500 bg-transparent">Tech </span>
                Used: HTML, CSS, JavaScript
              </p>
              <a
                href="https://omnifood-basits.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link block text-center py-2 px-4 text-white rounded-xl transition all duration-500 border-2 hover:bg-orange-500 bg-transparent"
              >
                Click here!
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded shadow-md overflow-hidden shadow-md shadow-white">
            <img
              src={northstar}
              alt="omnifood"
              className="h-64 w-full object-scale-down md:object-cover border-b-2"
            />
            <div className="p-6 h-full bg-gradient-to-r from-zinc-500">
              <h3 className="text-xl text-orange-500 font-semibold mb-4 bg-transparent">
                Developed the frontend interface for e-commerce site.
              </h3>
              <p className="text-white mb-6 bg-transparent">
                The interface was designed to be clean and intuitive for an
                e-commerce site.
              </p>
              <p className="text-white mb-6 bg-transparent">
                <span className="text-orange-500 bg-transparent">Tech </span>
                Used: HTML, CSS-Modules, ReactJS
              </p>
              <a
                href="https://north-star-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link block text-center py-2 px-4 text-white rounded-xl transition all duration-500 border-2 hover:bg-orange-500 bg-transparent"
              >
                Click here!
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className=" rounded shadow-md overflow-hidden shadow-md shadow-white">
            <img
              src={weather}
              alt="omnifood"
              className="h-64 w-full object-scale-down md:object-cover border-b-2"
            />
            <div className="p-6 h-full bg-gradient-to-r from-zinc-500">
              <h3 className="text-xl text-orange-500 font-semibold mb-4 bg-transparent">
                Simple Weather App.
              </h3>
              <p className="text-white mb-6 bg-transparent">
                Enter the location you wish and get the weather details for the
                current day.
              </p>
              <p className="text-white mb-6 bg-transparent">
                <span className="text-orange-500 bg-transparent">Tech </span>
                Used: HTML, CSS, JavaScript
              </p>
              <a
                href="https://basit-weather-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link block text-center py-2 px-4 text-white rounded-xl transition all duration-500 border-2 hover:bg-orange-500 bg-transparent"
              >
                Click here!
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-white rounded shadow-md overflow-hidden animate-wiggle shadow-md shadow-white">
            <img
              src={map}
              alt="omnifood"
              className="h-64 w-full object-scale-down md:object-cover border-b-2 "
            />
            <div className="p-6 h-full bg-gradient-to-r from-zinc-500">
              <h3 className="text-xl text-orange-500 font-semibold mb-4 bg-transparent">
                Workout tracker with API integration.
              </h3>
              <p className="text-white mb-6 bg-transparent">
                Drop a location on the map and start your excercise and the
                calculate it.
              </p>
              <p className="text-white mb-6 bg-transparent">
                <span className="text-orange-500 bg-transparent">Tech </span>
                Used: HTML, CSS, JavaScript
              </p>
              <a
                href="https://workout-calculation.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link block text-center py-2 px-4 text-white rounded-xl transition all duration-500 border-2 hover:bg-orange-500 bg-transparent"
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
