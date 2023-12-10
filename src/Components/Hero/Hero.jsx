import animationData from "../../assets/images/hero.json";
import Lottie from "react-lottie";
import { Typewriter } from "react-simple-typewriter";
const Hero = () => {
  return (
    <div className="lg:h-[800px] h-[1200px] md:pt-24 pt-32 relative bg-gradient-to-r from-[#9926f0f2] to-[#d122e3f2]">
      <div className="md:flex max-w-6xl lg:gap-0 gap-5 mx-auto items-center">
        <div className="text-5xl font-bold w-full px-5 text-white">
          <h1>Hey!, I'm Mehmud</h1>
          <p className="mt-4">
            I'm a{" "}
            <span className="mt-2">
              <Typewriter
                words={["Full Stack Web Developer", "MERN Stack Developer !!"]}
                loop={0 | false}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>{" "}
          </p>
          <p className="mt-5 text-lg">
            Hi there! I'm a Web Developer who specializes in the MERN stack,
            which stands for MongoDB, Express.js, React.js, and Node.js. I love
            creating websites and applications that look good and work smoothly.
          </p>
          <div className="mt-6">
            <button className="px-6 text-sm py-3 bg-white text-black font-bold rounded-full">
              Download Resume{" "}
            </button>
          </div>
        </div>
        <div className="w-full md:mt-0 mt-14">
          {/* <img src={heroImg} alt="" /> */}
          <Lottie
            options={{ loop: true, autoplay: true, animationData }}
            height={450}
            width={450}
          />
        </div>
      </div>
      <div>
        <svg
          className="absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320">
          <path
            fill="#ffff"
            fill-opacity="1"
            d="M0,0L34.3,21.3C68.6,43,137,85,206,101.3C274.3,117,343,107,411,96C480,85,549,75,617,101.3C685.7,128,754,192,823,192C891.4,192,960,128,1029,112C1097.1,96,1166,128,1234,128C1302.9,128,1371,96,1406,80L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
