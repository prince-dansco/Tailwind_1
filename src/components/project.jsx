import React from "react";
import Tailwind from "../assets/tailwind.jpg";
import Imagetail from "../assets/image.avif";
import Heroimage from "../assets/tail_2.jpg";

const Project = () => {
  return (
    <div className="bg-indigo-800 p-5 lg:p-20">
      <div className="grid justify-items-center mb-10">
        <h1 className="text-3xl text-white mt-10">Project</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
          <div className="md:flex items-center">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Hospital Management System
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Subheader
              </a>
              <p className="mt-2 text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                excepturi!
              </p>
            </div>
            <div className="md:shrink-0 p-5">
              <img
                src={Heroimage}
                alt="Hospital Management System"
                className="h-48 w-full object-cover md:w-48"
              />
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
          <div className="md:flex items-center">
            <div className="md:shrink-0 p-5">
              <img
                src={Tailwind}
                alt="School Management System"
                className="h-48 w-full object-cover md:w-48"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                School Management System
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Subheader
              </a>
              <p className="mt-2 text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                excepturi!
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
          <div className="md:flex items-center">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Inventory Management System
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Subheader
              </a>
              <p className="mt-2 text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                excepturi!
              </p>
            </div>
            <div className="md:shrink-0 p-5">
              <img
                src={Heroimage}
                alt="Inventory Management System"
                className="h-48 w-full object-cover md:w-48"
              />
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
          <div className="md:flex items-center">
            <div className="md:shrink-0 p-5">
              <img
                src={Imagetail}
                alt="POS Management System"
                className="h-48 w-full object-cover md:w-48"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                POS Management System
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Subheader
              </a>
              <p className="mt-2 text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                excepturi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
