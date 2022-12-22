import Image from "next/image";
import React from "react";
import Css from "../public/assets/css.png";
import Sass from "../public/assets/Sass.png";
import Javascript from "../public/assets/javascript.png";
import Typescript from "../public/assets/Typescript.png";
import ReactImg from "../public/assets/react.png";
import Tailwind from "../public/assets/tailwind.png";
import Github from "../public/assets/github1.png";
import Git from "../public/assets/Git.png";
import Firebase from "../public/assets/firebase.png";
import NextJS from "../public/assets/nextjs.png";
import FramerMotion from "../public/assets/FramerMotion.png";
import Jenkins from "../public/assets/Jenkins.png";
import html5 from "../public/assets/html5.png";
import Redux from "../public/assets/redux.png";

const skillsTab = [
  { image: Css, title: "CSS", width: 64, height: 64 },
  { image: Sass, title: "SASS", width: 64, height: 64 },
  { image: Javascript, title: "Javascript", width: 64, height: 64 },
  { image: Typescript, title: "Typescript", width: 70, height: 70 },
  { image: ReactImg, title: "React", width: 64, height: 64 },
  { image: Tailwind, title: "Tailwind", width: 64, height: 64 },
  { image: Github, title: "GitHub", width: 64, height: 64 },
  { image: Git, title: "GIT", width: 64, height: 64 },
  { image: NextJS, title: "NextJS", width: 64, height: 64 },
  { image: FramerMotion, title: "Framer", width: 64, height: 64 },
  { image: Jenkins, title: "Jenkins", width: 64, height: 64 },
  { image: Firebase, title: "Firebase", width: 64, height: 64 },
  { image: Redux, title: "Redux", width: 70, height: 70 },
  { image: html5, title: "HTML5", width: 70, height: 70 },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsTab?.map((skills) => {
            const { image, title, width, height } = skills;
            return (
              <div
                key={title}
                className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 cursor-pointer"
              >
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={image} width={width} height={height} alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>{title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
