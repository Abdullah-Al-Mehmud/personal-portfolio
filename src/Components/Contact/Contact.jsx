import { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../../assets/images/contact.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_06qynd6",
        "template_hkmc4gq",
        form.current,
        "PveuCjdE50UmvZxS1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="md:flex items-center max-w-6xl mt-36 mx-auto">
      <div className="w-full">
        <form ref={form} onSubmit={sendEmail}>
          <div className="w-full bg-gradient-to-r from-[#9926f0f2] to-[#d122e3f2] h-auto rounded-3xl pt-20">
            <div className="font-bold text-white text-center text-5xl">
              Contact.
            </div>
            <div className=" px-10 py-10  gap-4 mb-6 ">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="bg-gray-50 border font-bold border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-violet-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Name "
                  required
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                  Your Email
                </label>
                <input
                  type="text"
                  name="user_email"
                  className="bg-gray-50 border font-bold border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-violet-950  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="-mt-10 mb-5 px-10">
              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                Message
              </label>
              <textarea
                name="message"
                required
                className="w-full px-2 py-3 font-bold h-40"
              />
            </div>
            <div className=" mb-20 flex justify-center">
              <button className="bg-violet-950 px-20 py-3 mb-10 rounded-lg font-bold text-white">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full">
        <img src={contactImg} alt="" />
      </div>
    </div>
  );
};

export default Contact;
