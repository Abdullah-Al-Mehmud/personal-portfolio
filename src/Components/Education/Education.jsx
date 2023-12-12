import educationImg from "../../assets/images/education.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-up" className="mt-20">
      <div className="md:flex justify-center items-center gap-4">
        <h1 className="flex justify-center items-center font-bold text-5xl">
          Ed{" "}
          <span>
            {" "}
            <img className="w-14" src={educationImg} />{" "}
          </span>{" "}
          cation
        </h1>
        <h1 className="text-center md:mt-0 mt-2 font-bold text-5xl">
          Qualification
        </h1>
      </div>

      <ul className="timeline my-16 timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2024 (estimated)</time>
            <div className="text-lg font-black">
              Diploma in Computer Science and Technology
            </div>
            <p className="font-bold">CGPA : 3.45(on 5th semester)</p>
            <p className="font-bold">Current Semester : 6th(on going)</p>
            <p className="font-bold">
              Collage : Institute Of Computer Science and Technology,ICST
            </p>
            <p className="font-bold">
              Board : Bangladesh Technical Education Board(BTEB)
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2020</time>
            <div className="text-lg font-black">SSC</div>
            <p className="font-bold">GPA : 4.06</p>
            <p className="font-bold">School : Feni Central High School,Feni</p>
            <p className="font-bold">Board : Cumilla Board</p>
          </div>
          <hr />
        </li>
        {/* <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2001</time>
            <div className="text-lg font-black">iPod</div>
            The iPod is a discontinued series of portable media players and
            multi-purpose mobile devices designed and marketed by Apple Inc. The
            first version was released on October 23, 2001, about 8+1⁄2 months
            after the Macintosh version of iTunes was released. Apple sold an
            estimated 450 million iPod products as of 2022. Apple discontinued
            the iPod product line on May 10, 2022. At over 20 years, the iPod
            brand is the oldest to be discontinued by Apple
          </div>
          <hr />
        </li> */}
      </ul>
    </div>
  );
};

export default Education;
