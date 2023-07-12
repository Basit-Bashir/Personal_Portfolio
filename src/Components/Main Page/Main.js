import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="h-screen w-full relative flex  px-4 mx-auto items-center shadow-md  shadow-white bg-[url('https://unsplash.com/photos/gpa8Y_Fk7Rg/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg4OTcyNjIzfA&force=true')] bg-cover  ">
      <div className="flex flex-row  gap-8 items-start text-center gap-5 bg-transparent px-4 py-4 rounded-lg shadow-md mx-auto   absolute inset-0 top-[100px] max-w-7xl ">
        <div className="w-1.5 sm:h-80 h-60 bg-gradient-to-b from-orange-500" />

        <p className="px-4 py-4 text-6l text-white   rounded-lg bg-transparent text-4xl tracking-[.1em] ">
          Hi, I'm
          <br />
          <span className="bg-transparent text-orange-500 text-7xl ">
            {" "}
            Basit
          </span>
        </p>

        <p className="px-4 py-4 text-xl bg-transparent text-white  rounded-lg    text-start mx-4 leading-[2] tracking-[.1em]">
          A passionate front-end developer . I recently graduated with a Masters
          degree in computer Science, and I'm excited to embark on my career in
          web development. Currently being a Freelancer with hands on experience
          in HTML, CSS, JavaScript, ReactJS, TailwindCSS.
        </p>
      </div>
      <div className="mx-auto bg-transparent absolute  top-[65%] left-[50%] max-w-7xl">
        <button className="px-4  py-4 text-xl text-white bg-black rounded-xl border-b-2 transition-all duration-500  hover:bg-orange-500 hover:text-black  mt-4 tracking-[.1em]">
          Download CV{" "}
          <FontAwesomeIcon
            icon={faDownload}
            className="hover:text-black  text-white bg-transparent animate-bounce"
          />
        </button>
      </div>
    </div>
  );
};
export default Main;
