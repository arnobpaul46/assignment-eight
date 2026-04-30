"use client";
import React, { useEffect, useState } from "react";
import CourseCard from "@/component/CoursesCard";

const AllCoursesPage = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllCourses = async () => {
      const res = await fetch("/courses.json");
      const data = await res.json();
      setAllCourses(data);
      setIsLoading(false);
    };
    fetchAllCourses();
  }, []);


  const filteredCourses = allCourses.filter((course) => {
    const title = course.title.toLowerCase();
    const category = course.category.toLowerCase();
    const search = searchTerm.toLowerCase();
    
    return title.includes(search) || category.includes(search);
  });

  return (
    <div className="min-h-screen bg-[#020617] pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Explore All <br className="hidden md:block" /> Courses
          </h1>
          
          <div className="relative w-full max-w-md">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl"></i>
            <input
              type="text"
              placeholder="Search courses (e.g. Web, Python...)"
              className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-2xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        
        <div className="min-h-[400px]">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <span className="loading loading-spinner loading-lg text-blue-500"></span>
            </div>
          ) : filteredCourses.length > 0 ? (
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            
            <div className="flex flex-col items-center justify-center py-20 text-center bg-white/5 rounded-[32px] border border-dashed border-white/10">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <i className="ri-search-eye-line text-4xl text-gray-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No Courses Found</h3>
              <p className="text-gray-500 max-w-xs mx-auto">
                We couldn't find anything matching <span className="text-blue-400 font-medium">`{searchTerm}`</span>. 
                Try checking for typos or use different keywords.
              </p>
              <button 
                onClick={() => setSearchTerm("")}
                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-medium"
              >
                Show All Courses
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCoursesPage;