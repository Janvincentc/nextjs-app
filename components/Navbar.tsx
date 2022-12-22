import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const NavbarList = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About",
    route: "/#about",
  },
  {
    title: "Skills",
    route: "/#skills",
  },
  // {
  //   title: "Projects",
  //   route: "/#projects",
  // },
  {
    title: "Contact",
    route: "/#contact",
  },
];

const anchorLinks = [
  {
    Icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/jan-vincent-claudio-70723624a/",
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

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };
  const handleShadow = () => {
    if (window.scrollY >= 100) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-1000"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <h1>Logo</h1>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            {NavbarList.map((navbar) => {
              const { title, route } = navbar;
              return (
                <Link key={title} href={route}>
                  <li className="ml-10 text-sm uppercase hover:border-b">
                    {title}
                  </li>
                </Link>
              );
            })}
          </ul>
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h2>Logo</h2>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              {NavbarList.map((navbar) => {
                const { title, route } = navbar;
                return (
                  <Link onClick={() => setNav(!nav)} key={title} href={route}>
                    <li className="py-4 text-sm">{title}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="pt-40">
            <p className="uppercase tracking-widest text-[#5651e5]">
              Let&#39;s Connect
            </p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              {anchorLinks.map((links) => {
                const { Icon, link, target, rel, id } = links;
                return (
                  <a key={id} href={link} target={target} rel={rel}>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      {Icon}
                    </div>
                  </a>
                );
              })}
              {profileLinks.map((profile) => {
                const { Icon, id, route } = profile;
                return (
                  <Link key={id} href={route}>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      {Icon}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
