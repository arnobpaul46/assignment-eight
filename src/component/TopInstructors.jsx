"use client";
import React, { useEffect, useState } from "react";
import { Globe, GraduationCap, CheckCircle, Award } from "lucide-react";

const TopInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const getInstructors = async () => {
      const res = await fetch("/courses.json");
      const data = await res.json();

      // ইউনিক ইন্সট্রাক্টর বের করার লজিক
      const uniqueInstructors = [];
      const instructorNames = new Set();

      data.forEach((course) => {
        if (!instructorNames.has(course.instructor)) {
          instructorNames.add(course.instructor);
          uniqueInstructors.push({
            name: course.instructor,
            image: course.instructor_img,
            category: course.category, 
          });
        }
      });

      
      setInstructors(uniqueInstructors.slice(0, 4));
    };

    getInstructors();
  }, []);

  return (
    <section className="py-24 bg-[#020617] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Top Instructors
          </h2>
          <p className="text-gray-500 text-lg">Industry pioneers dedicated to your growth</p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {instructors.map((inst, index) => (
            <div key={index} className="flex flex-col items-center group">
              
              
              <div className="relative w-48 h-48 mb-8">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/40 transition-all duration-500"></div>
                <div className="relative w-full h-full rounded-full border-4 border-white/10 p-1 bg-white/5 overflow-hidden transition-transform duration-500 group-hover:scale-105">
                  <img 
                    src={inst.image} 
                    alt={inst.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              
              <h3 className="text-2xl font-bold text-white mb-2">{inst.name}</h3>
              <p className="text-blue-500 font-semibold text-xs uppercase tracking-widest mb-6">
                {inst.category} Expert
              </p>

              
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-gray-500 hover:text-white transition-all hover:cursor-pointer">
                  <Globe size={16} />
                </div>
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-gray-500 hover:text-white transition-all hover:cursor-pointer">
                  <GraduationCap size={16} />
                </div>
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-gray-500 hover:text-white transition-all hover:cursor-pointer">
                   <Award size={16} />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopInstructors;