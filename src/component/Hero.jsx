"use client";
import { Chip } from "@heroui/react";
import { BadgeInfo, CircleParkingOffIcon } from "lucide-react";


import Link from "next/link";
import React from "react";

const Hero = () => {
  return (

    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-10 overflow-hidden bg-[#020617]">


      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-[350px] h-[350px] bg-purple-600/10 blur-[100px] rounded-full"></div>


      <div className="max-w-6xl mx-auto w-full px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">

       




        <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">

          <div>
            <Chip color="success" size="md" variant="soft" className="animate__animated animate__pulse animate__infinite">
              <BadgeInfo width={20} />
              <Chip.Label className=" md:pl-1 ">Enjoy free access to all courses. View details now.</Chip.Label>

            </Chip>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
            Upgrade Your <br />
            <span className="flex items-center justify-center lg:justify-start gap-4">
              Skills Today <span className="inline-block animate-bounce text-4xl md:text-6xl">🚀</span>
            </span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-lg leading-relaxed">
            Master new skills with our professional, instructor-led
            online courses. Start your journey to career success.
          </p>

          <div className="mt-4">
            <Link href="/all-courses"><button className="px-8 py-4 text-white font-bold text-lg rounded-2xl bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:scale-105 hover:shadow-[0_15px-40px_rgba(59,130,246,0.5)] transition-all duration-300 active:scale-95">
              Explore Courses
            </button></Link>
          </div>
        </div>

  
        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-full max-w-[500px] lg:max-w-[550px]">

            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>


            <img
              src="/heroImg.png"
              alt="Upgrade Your Skills"
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
            />

            <div className="absolute top-10 -right-4 hidden md:block animate-pulse bg-white/5 backdrop-blur-xl border border-white/10 p-3 rounded-2xl shadow-2xl">
              <div className="w-12 h-2 bg-blue-500/50 rounded-full mb-2"></div>
              <div className="w-8 h-2 bg-purple-500/50 rounded-full"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;