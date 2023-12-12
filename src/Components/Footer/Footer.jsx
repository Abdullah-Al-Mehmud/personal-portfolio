import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-up">
      <footer className="footer footer-center p-10 text-white  bg-gradient-to-r from-[#9926f0f2] to-[#d122e3f2]">
        <aside>
          <a className="text-2xl font-bold">Abdullah Al Mehmud</a>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/Abdullah-Al-Mehmud" target="blank">
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-al-mehmud-393837255/"
              target="blank">
              <FaLinkedin size={30} />
            </a>
            <a href="https://twitter.com/mehmud_ti" target="blank">
              <FaTwitter size={30} />
            </a>
          </div>
        </nav>
        <div>
          <aside className="font-bold text-lg">
            <p>Copyright © 2023 - All right reserved by Abdullah Al Mehmud</p>
          </aside>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
