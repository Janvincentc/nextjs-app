import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImage from "../public/assets/about.jpg";

const aboutText = [
  `I specialize in building mobile responsive front-end UI applications that connect with API's and other backend technologies. I'm passionate about learning new technologies and understand there ismore than one way to accomplish a task. Though I am most proficientin building front-end applications using HTML, CSS, Javascript, and React, I am a quick learner and can pick up new tech stacks as needed. I believe that being a great developer is not using one specific language, but choosing the best tool for the job.`,
  "I started web developement in 2013 managing multiple e-commerce websites on CMS platforms such as WordPress, BigCommerce, and Shopify. I have experience working directly with clients and taking mock wireframes all the way to deployed applications. In my spare time I run Code Commerce, a Youtube channel where I teach web developement and various front-end technologies.",
];

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          {aboutText.map((about) => (
            <p key={about} className="py-2 text-gray-600">
              {about}
            </p>
          ))}
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImage} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
