"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CourseCard from "./CoursesCard"; 

const PopularCourse = () => {
  const [topCourses, setTopCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/courses.json");
      const data = await res.json();
      
      
      const sortedData = data.sort((a, b) => b.rating - a.rating).slice(0, 3);
      
      setTopCourses(sortedData);
      setIsLoading(false); 
    };

    fetchCourses();
  }, []);

  return (
    <section className="py-20 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6">
        
        
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Popular Courses
            </h2>
          </div>
          <Link 
            href="/all-courses"  
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            View All
          </Link>
        </div>

        
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
             {/* DaisyUI Loading apajoto added  */}
             <span className="loading loading-spinner loading-lg text-blue-500"></span>
             <p className="text-gray-500 animate-pulse">Loading Courses...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularCourse;