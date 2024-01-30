import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import MotionComponent from "../Animation/Animation";
import bgImg from "../../Assets/Imgs/background.jpg";
import { motion } from "framer-motion";
import resumePDF from "../../Assets/resume.pdf";

const Main = () => {
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const textOptions = ["Web Developer", "part time Gamer"];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= textOptions[currentTextIndex].length) {
        setTypedText(textOptions[currentTextIndex].slice(0, currentIndex));
        currentIndex += 1;
      } else {
        setTypedText("");
        currentIndex = 0;
        setCurrentTextIndex(
          (prevIndex) => (prevIndex + 1) % textOptions.length
        );
      }
    }, 300);

    return () => clearInterval(intervalId);
  }, [currentTextIndex]);
  const backgroundStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <MotionComponent>
      <div
        style={backgroundStyle}
        className="relative md:h-screen px-4 shadow-md  shadow-white"
      >
        <div className="md:w-[30%] md:h-2 mx-auto absolute top-[10%] right-[60%] bg-gradient-to-b from-orange-500  " />
        <div className="w-screen md:p-[8%] bg-transparent  rounded-lg shadow-md ">
          <p className="px-10 py-4 bg-transparent text-white text-4xl tracking-[.1em] leading-[3rem]">
            Hi, I'm{" "}
            <span className="font-bold text-5xl bg-transparent">Basit</span>
            <br />a <t />
            <span className="text-orange-500 font-bold bg-transparent lg:text-5xl text-2xl">
              {typedText}
            </span>
          </p>

          <p className="px-4 py-4 md:text-2xl text-xl rounded-lg text-white bg-transparent text-start mx-8 md:leading-10 leading-10 tracking-[.15em] font-bold">
            A passionate front-end developer. I recently graduated with a
            Masters degree in computer Science, and I'm excited to embark on my
            career in web development. Currently being a Freelancer with hands
            on experience in HTML, CSS, JavaScript, ReactJS, TailwindCSS.
          </p>
        </div>
        <div className=" bg-transparent text-center">
          <motion.button
            initial={{ y: 0 }}
            animate={{
              y: [-20, 20, -20],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            className="px-4  py-4 md:text-xl text-white bg-black rounded-xl border-b-2 transition-all duration-500  hover:bg-orange-500 hover:text-black  mt-4 tracking-[.1em] my-[28%] "
            onClick={handleDownload}
          >
            Download CV{" "}
            <FontAwesomeIcon
              icon={faDownload}
              className="hover:text-black  text-white bg-transparent"
            />
          </motion.button>
        </div>
      </div>
    </MotionComponent>
  );
};
export default Main;
