import logo from "../../Assets/Imgs/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faBell,
  faClock,
} from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <section className="  shadow-xl rounded-md mb-8">
      <div className="flex justify-between  rounded-md">
        <div className="border-2 rounded-md px-4 py-8 shadow-md shadow-white ">
          <img
            src={logo}
            alt="logo"
            className="mx-auto h-14 w-14  my-4 rounded-xl scale-150 md:transform-none"
          />
          <div className="flex gap-4 mt-8 p-4">
            <a href="github.com" target="blank">
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="w-8 h-8 px-2.5 py-2.5 bg-white hover:bg-orange-500 rounded-md"
              />
            </a>
            <a href="linkedin.com" target="blank">
              <FontAwesomeIcon
                icon={faBell}
                className="w-8 h-8 px-2.5 py-2.5 bg-white hover:bg-orange-500 rounded-md"
              />
            </a>
            <a href="twitter.com" target="blank">
              <FontAwesomeIcon
                icon={faClock}
                className="w-8 h-8 px-2.5 py-2.5 bg-white hover:bg-orange-500 rounded-md"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-8 my-auto">
          <p>Logo1</p>
          <p>Logo2</p>
          <p>Logo3</p>
        </div>
        <div className="flex flex-col gap-8 my-auto">
          <p>Logo1</p>
          <p>Logo2</p>
          <p>Logo3</p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
