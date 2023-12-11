import Project1 from "./Project1/Project1";
import fireImg from "../../assets/images/fire.png";
import Project2 from "./Project2/Project2";
import Projects3 from "./Projects3/Projects3";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-up" className="mt-32">
      <div>
        <h1 className="font-bold flex justify-center items-center text-5xl text-center">
          My Pr{" "}
          <span>
            {" "}
            <img className="w-14" src={fireImg} alt="" />{" "}
          </span>{" "}
          jects
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-10">
        <Project1></Project1>
        <Project2></Project2>
        <Projects3></Projects3>
      </div>
    </div>
  );
};

export default Projects;
