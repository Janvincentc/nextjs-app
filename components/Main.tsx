import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const anchorLinks = [
  {
    Icon: <FaLinkedinIn />,
    link: "https://ph.linkedin.com/in/jan-vincent-claudio-70723624a",
    target: "_blank",
    rel: "noreferrer",
    id: "A",
  },
  {
    Icon: <FaGithub />,
    link: "https://github.com/gearrthird14",
    target: "_blank",
    rel: "noreferrer",
    id: "B",
  },
];

const profileLinks = [
  { Icon: <AiOutlineMail />, id: "A", route: "/#contact" },
  { Icon: <BsFillPersonLinesFill />, id: "B", route: "/resume" },
];

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="upperacase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#5651e5]">Jan Vincent</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="p-4 text-gray-600 sm:max-w-[70%] m-auto">
            I&#39;m a front-end web developer specializing in building (and
            occasionally designing) exceptional digital experience. Currently,
            I&#39;m focused on building responsive front-end web applications
            while learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[338px] m-auto py-4">
            {anchorLinks.map((anchor) => {
              const { Icon, rel, id, link, target } = anchor;
              return (
                <a
                  href={link}
                  key={id}
                  rel={rel}
                  target={target}
                  className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                >
                  {Icon}
                </a>
              );
            })}
            {profileLinks.map((profile) => {
              const { Icon, id, route } = profile;
              return (
                <Link key={id} href={route}>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    {Icon}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
