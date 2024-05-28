import React from "react";
import Heroimage from "../assets/tail_2.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-around items-center p-10 mt-10 space-y-10 lg:space-y-0 lg:space-x-10 text-white">
      <div className="lg:w-1/2 w-full text-center lg:text-left">
        <p className="text-4xl mb-5 text-slate-300">I Am</p>
        <h1 className="text-6xl">Princewill A Okon</h1>
        <hr className="border-t border-gray-400 my-4" />
        <p className="mt-10 text-slate-300 font-sans text-lg">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </p>
      </div>
      <div className="lg:w-1/3 w-2/3 mx-auto lg:mx-0">
        <img
          src={Heroimage}
          alt="Hero"
          width={270}
          height={270}
          className="rounded-full w-full border-8 border-white"
        />
      </div>
      <div className="lg:w-1/3 w-full text-center lg:text-left">
        <p className="text-4xl mb-4">About Me</p>
        <p className="text-slate-300">
          Let's build quality in programming and design with our services.
        </p>
        <button className="bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white">
          Show more...
        </button>
        <div className="flex justify-center lg:justify-start mt-5 space-x-4 cursor-pointer">
          <FaFacebook
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
          <FaTwitter
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
          <FaInstagram
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
          <BsPinterest
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
