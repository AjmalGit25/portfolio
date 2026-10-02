import React, { useState } from "react";
import "./Intro.css";
import OneTimeTypewriter from "../OneTimeTypewriter";
import Counter from "../Counter";
import Progress from "../Progress";
import "../../App.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Intro({ exit }) {
  const [welcome, setWelcome] = useState(false);

  setTimeout(() => {
    setWelcome(true);

    return clearTimeout();
  }, 700);

  return (
    <div className={`fixed inset-0 z-60 bg-linear-to-bl from-blue-950 via-black to-blue-950 transition-transform duration-1000 ${exit ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="w-full h-full flex flex-col justify-between text-blue-500 p-4 sm:p-6">
        {/* Upper Part */}
        <div className="flex items-center justify-between text-[10px] sm:text-base pb-36">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <p className="text-blue-500 uppercase">Md Ajmal Hussain</p>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-white/80 uppercase">Full Stack & AI Enthusiast</p>
          </div>
        </div>

        {/* Middle Part */}
        <div className="flex flex-col justify-between gap-20 h-full pb-10">
          <div className="flex items-center gap-2 ml-[10%] sm:ml-[30%]">
            <img
              src="./myFavicon.png" alt="Ajmal"
              className="h-12 sm:h-20 aspect-square object-cover bg-linear-to-t from-blue-500 to-black border rounded-full p-0.5 slideLeft"
            />
            {welcome && <OneTimeTypewriter text="Welcome to my portfolio" speed={20} className={`text-xl sm:text-3xl`} />}
          </div>

          <div className="flex items-center justify-evenly gap-2">
            <div className="flex flex-col items-center gap-2">
              <div className="relative">
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQGycly-UxMmPA/profile-displayphoto-crop_800_800/B4DaCr_qz_J4AI-/0/1789591991789?e=1791417600&v=beta&t=nkdiAr_mBTBM3JU1p13rm2-wz7y5RVO1zqPEJhVVuag" alt="Ajmal"
                  className="h-12 sm:h-20 aspect-square object-cover border-y-2 border-y-blue-500 border-x-2 border-x-blue-300 rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 border-2 border-blue-900">
                  <FaLinkedinIn size={10} className="text-blue-500"/>
                </div>
              </div>
              <span className="text-sm text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-blue-600 font-medium">ajmal-hussain92</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="relative">
                <img src="https://avatars.githubusercontent.com/u/205396557?v=4" alt="Ajmal"
                  className="h-12 sm:h-20 aspect-square object-cover border-y-2 border-y-blue-500 border-x-2 border-x-blue-300 rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 border-2 border-blue-900">
                  <FaGithub size={10} className="text-black"/>
                </div>
              </div>
              <span className="text-sm text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-blue-600 font-medium">AjmalGit25</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="relative">
                <img src="https://assets.leetcode.com/users/AjmalAlgo/avatar_1790843321.png" alt="Ajmal"
                  className="h-12 sm:h-20 aspect-square object-cover border-y-2 border-y-blue-500 border-x-2 border-x-blue-300 rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 border-2 border-blue-900">
                  <SiLeetcode size={10} className="text-orange-500"/>
                </div>
              </div>
              <span className="text-sm text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-blue-600 font-medium">AjmalAlgo</span>
            </div>
            
          </div>

          {/* Progress Bar */}
          <Progress />
        </div>

        {/* Bottom Part */}
        <div className="flex items-center justify-between text-[10px] sm:text-base border-t border-blue-500/20 pt-5">
          <div className="flex flex-col gap-1">
            <span className="w-30 sm:w-xs h-0.5 bg-blue-500"></span>
            <span className="text-white/80 uppercase text-[10px] tracking-wider">Welcome back</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-white/80 uppercase text-[10px] tracking-wider">Progress</span>
            <span className="text-5xl sm:text-7xl xl:text-9xl uppercase ">Home</span>
          </div>
        </div>
      </div>
    </div>
  );
}
