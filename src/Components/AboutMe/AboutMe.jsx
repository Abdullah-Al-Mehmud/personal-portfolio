import profileImg from "../../assets/images/profileImg.jpg";
import { Typewriter } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutMe = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="md:flex max-w-5xl mx-auto mt-20 items-center gap-10">
      <div className="w-full ">
        <img
          className="h-[500px] shadow-lg rounded-2xl"
          src={profileImg}
          alt=""
        />
      </div>
      <div className="w-full order-1">
        <h1 className="font-bold text-5xl ">About Me</h1>
        <h2 className="mt-4 text-xl font-bold">
          I AM AVAILABLE FOR <br />
          <span className="mt-2 text-violet-700">
            <Typewriter
              words={["FULL STACK DEVELOPMENT", "MERN STACK DEVELOPMENT"]}
              loop={0 | false}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>{" "}
          <br /> PROJECTS
        </h2>
        <p className="mt-4 font-bold ">
          Hey there! 👋 I'm a super excited MERN stack and frontend developer
          who loves building cool stuff on the internet. I get a kick out of
          making websites and apps that people really enjoy using.
        </p>
        <p className="mt-2 font-bold ">
          I work with a bunch of technologies, like MongoDB, Express.js, React,
          and Node.js – they're like my superhero tools for creating awesome
          online experiences. Imagine a puzzle, and I'm the person putting all
          the pieces together to make things work smoothly.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
