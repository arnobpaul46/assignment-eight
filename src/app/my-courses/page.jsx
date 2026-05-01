"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const MyClass = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("my_courses") || "[]");
    setEnrolledCourses(data);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        
        <div className="flex justify-between items-center mb-12 bg-white/5 p-8 rounded-[32px] border border-white/10 shadow-2xl">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">My Classroom</h1>
            <p className="text-gray-500">Track your learning progress and materials</p>
          </div>
          <div className="text-center">
             <span className="text-5xl font-extrabold text-blue-500">{enrolledCourses.length}</span>
             <p className="text-gray-500 text-xs uppercase font-bold mt-1 tracking-widest">Courses</p>
          </div>
        </div>

        
        <div className="space-y-4">
          {enrolledCourses.length > 0 ? (
            enrolledCourses.map((course) => (
              <div 
                key={course.id} 
                className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center justify-between group hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-6">
                  <img src={course.image} className="w-24 h-16 object-cover rounded-xl" alt="" />
                  <div>
                    <h3 className="text-white font-bold text-lg">{course.title}</h3>
                    <p className="text-gray-500 text-sm">{course.instructor}</p>
                  </div>
                </div>
                
                <Link 
                  href={`/all-courses/${course.id}`}
                  className="p-3 bg-white/5 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-all"
                >
                  <i className="ri-play-circle-line text-2xl"></i>
                </Link>
              </div>
            ))
          ) : (
            <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl">
               <i className="ri-book-open-line text-5xl text-gray-700 mb-4 block"></i>
               <p className="text-gray-500">You haven't enrolled in any courses yet.</p>
               <Link href="/all-courses" className="text-blue-500 hover:underline mt-4 inline-block">Explore Courses</Link>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default MyClass;