import React from "react";
import Tailwind from "../assets/tailwind.jpg";
import Imagetail from "../assets/image.avif";
import Heroimage from "../assets/tail_2.jpg";

const Testimonial = () => {
  return (
    <div className="bg-indigo-800 p-5 lg:p-20">
      <div className="grid justify-items-center mb-10">
        <h1 className="text-3xl text-white mt-4">Testimonial</h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-4">
        <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse mb-5 lg:mb-0">
          <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
            <img
              src={Tailwind}
              alt=""
              className="absolute -left-6 w-28 h-28 rounded-full shadow-lg"
            />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                Name Goes Here
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
                Assistant Manager
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse mb-5 lg:mb-0">
          <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
            <img
              src={Heroimage}
              alt=""
              className="absolute -left-6 w-28 h-28 rounded-full shadow-lg"
            />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                Name Goes Here
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
                Assistant Manager
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse mb-5 lg:mb-0">
          <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
            <img
              src={Tailwind}
              alt=""
              className="absolute -left-6 w-28 h-28 rounded-full shadow-lg"
            />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                Name Goes Here
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
                Assistant Manager
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse mb-5 lg:mb-0">
          <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
            <img
              src={Imagetail}
              alt=""
              className="absolute -left-6 w-28 h-28 rounded-full shadow-lg"
            />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                Name Goes Here
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
                Assistant Manager
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
