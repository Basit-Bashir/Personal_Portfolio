import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import MotionComponent from "../Animation/Animation";
import bgImg from "../../Assets/Imgs/background.jpg";

const Main = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const [revealedText, setRevealedText] = useState("");
  const text = "Basit";

  useEffect(() => {
    let currentIndex = 0;
    let interval;

    const revealNextCharacter = () => {
      if (currentIndex < text.length) {
        setRevealedText(() => text.slice(0, currentIndex));
        currentIndex++;
      } else {
        setRevealedText("");
        currentIndex = 0;
      }
    };

    interval = setInterval(revealNextCharacter, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <MotionComponent>
      <div
        style={backgroundStyle}
        className="relative md:h-screen px-4 shadow-md  shadow-white"
      >
        <div className="md:w-[30%] md:h-2 mx-auto absolute top-[10%] right-[60%] bg-gradient-to-b from-orange-500  " />
        <div className="w-screen md:p-[8%] bg-transparent  rounded-lg shadow-md ">
          <p className="px-10 py-4 bg-transparent text-white text-4xl tracking-[.1em]">
            Hi, I'm
            <br />
            <span className="bg-transparent text-orange-500 md:text-8xl text-6xl">
              {revealedText.padEnd(text.length, "_")}
            </span>
          </p>

          <p className="px-4 py-4 md:text-2xl text-xl rounded-lg text-white bg-transparent text-start mx-8 md:leading-10 leading-10 tracking-[.15em]">
            A passionate front-end developer . I recently graduated with a
            Masters degree in computer Science, and I'm excited to embark on my
            career in web development. Currently being a Freelancer with hands
            on experience in HTML, CSS, JavaScript, ReactJS, TailwindCSS.
          </p>
        </div>
        <div className=" bg-transparent text-center">
          <button className="px-4  py-4 md:text-xl text-white bg-black rounded-xl border-b-2 transition-all duration-500  hover:bg-orange-500 hover:text-black  mt-4 tracking-[.1em] my-[28%] ">
            Download CV{" "}
            <FontAwesomeIcon
              icon={faDownload}
              className="hover:text-black  text-white bg-transparent animate-bounce"
            />
          </button>
        </div>
      </div>
    </MotionComponent>
  );
};
export default Main;
