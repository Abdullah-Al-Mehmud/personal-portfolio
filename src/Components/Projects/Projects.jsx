import Project1 from "./Project1/Project1";
import fireImg from "../../assets/images/fire.png";

const Projects = () => {
  return (
    <div className="mt-32">
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
      <div>
        <Project1></Project1>
      </div>
    </div>
  );
};

export default Projects;
