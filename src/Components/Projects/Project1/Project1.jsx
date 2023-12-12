import { FaGithub } from "react-icons/fa6";
import { MdLiveTv } from "react-icons/md";
import newsImg from "../../../assets/images/globeNews.png";
const Project1 = () => {
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="h-52" src={newsImg} />
        </figure>
        <div className="card-body">
          <h2 className="card-title w-fit text-2xl">Globe News</h2>
          <p className="font-bold">
            This is a Full Stack News Portal Website.You also can login and
            logout to our website and also post articles and read articles.There
            is an admin panel also to manage content.For full information visit
            github.
          </p>
          <ul className="mt-2 font-bold ">
            Tech Used :<li>React</li>
            <li>NodeJs</li>
            <li>ExpressJs</li>
            <li>Mongoose</li>
            <li>TailwindCss</li>
            <li>ReactRouter</li>
            <li>Axios</li>
          </ul>
          <div className="mt-3 flex justify-between">
            <div>
              <a
                className="font-bold text-blue-500 flex items-center gap-1"
                href="https://globenews-f1176.web.app/"
                target="blank">
                <MdLiveTv size={30} />{" "}
                <span className="mt-1">Live Preview</span>
              </a>
            </div>
            <div>
              <a
                className="font-bold text-blue-500 flex items-center gap-1"
                href="https://github.com/Abdullah-Al-Mehmud/GlobeNews-client"
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

export default Project1;
