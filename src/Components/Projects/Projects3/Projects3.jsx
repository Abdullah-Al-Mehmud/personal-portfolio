import { FaGithub } from "react-icons/fa6";
import { MdLiveTv } from "react-icons/md";
import automotiveImg from "../../../assets/images/automotive.png";
const Projects3 = () => {
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="h-52" src={automotiveImg} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">Automotive Website</h2>
          <p className="font-bold">
            This is a Full Stack Automotive Website.You can add products and
            also can purchase products.You can see different kinds of Brands to
            purchase .For full information visit github.
          </p>
          <ul className="mt-2 font-bold ">
            Tech Used :<li>React</li>
            <li>NodeJs</li>
            <li>ExpressJs</li>
            <li>MongoDB</li>
            <li>TailwindCss</li>
            <li>ReactRouter</li>
            <li>Axios</li>
          </ul>
          <div className="mt-3 flex justify-between">
            <div>
              <a
                className="font-bold text-blue-500 flex items-center gap-1"
                href="https://automotive-project-a89be.web.app/"
                target="blank">
                <MdLiveTv size={30} />{" "}
                <span className="mt-1">Live Preview</span>
              </a>
            </div>
            <div>
              <a
                className="font-bold text-blue-500 flex items-center gap-1"
                href="https://github.com/Abdullah-Al-Mehmud/automotive-CRUD-client"
                target="blank">
                <FaGithub size={30} /> <span className="mt-1">View Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects3;
