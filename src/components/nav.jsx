import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgNametag } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const opentMenu = () => {
    setToggle(true);
  };
  const closeMenu = () => {
    setToggle(false);
  };
  return (
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row text-slate-600">
        <div className="">
          <a
            href="#"
            className="text-white font-mono text-3xl tracking-wider flex items-center"
          >
            {" "}
            <CgNametag /> prinncewill
          </a>{" "}
        </div>
        <div className="space-x-4 ">
          <div className="ssm:hidden lg:block space-x-2">
            <a
              href="#"
              className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
            >
              Skills
            </a>
            <a
              href="#"
              className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
            >
              Project
            </a>
            <a
              href="#"
              className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
            >
              Testimonial
            </a>
          </div>
          <div className=" ssm:block lg:hidden">
            {toggle ? (
              <FaTimes
                onClick={closeMenu}
                size={30}
                style={{ color: "white", cursor: "pointer" }}
              />
            ) : (
              <FaBars
                onClick={opentMenu}
                size={30}
                style={{ color: "white", cursor: "pointer" }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="">
        {toggle ? (
          <div className="flex justify-between ml-10">
            <ul>
              <li className="text-white text-xl  mb-2 cursor-pointer">
                Skills
              </li>
              <li className="text-white text-xl  mb-2 cursor-pointer">
                Project
              </li>
              <li className="text-white text-xl  mb-2 cursor-pointer">
                Testimonial
              </li>
            </ul>
          </div>
        ) : (
          <div className=""></div>
        )}
      </div>
    </>
  );
};

export default Nav;
