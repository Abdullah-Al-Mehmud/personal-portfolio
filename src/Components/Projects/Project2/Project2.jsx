import { FaGithub } from "react-icons/fa6";
import { MdLiveTv } from "react-icons/md";
import rideImg from "../../../assets/images/rideShare.png";
const Project2 = () => {
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="h-52" src={rideImg} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">Drive Whey</h2>
          <p className="font-bold">
            This is a MERN Stack Ride Sharing Website.You can Login and use our
            services.We Provide ride share,Food Delivery,Parcel Delivery etc.For
            full information visit github.
          </p>
          <p className="mt-2 font-bold">
            Tech Used : React,nodeJs,ExpressJs,MongoDB,TailwindCss,React-Router
          </p>
          <div className="mt-3 flex justify-between">
            <div>
              <a
                className="font-bold text-blue-500 flex items-center gap-1"
                href="https://assignment11-drivewhey.web.app/"
                target="blank">
                <MdLiveTv size={30} />{" "}
                <span className="mt-1">Live Preview</span>
              </a>
            </div>
            <div>
              <a
                className="font-bold text-blue-500 flex items-center gap-1"
                href="https://github.com/Abdullah-Al-Mehmud/DriveWhey-Client"
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

export default Project2;
