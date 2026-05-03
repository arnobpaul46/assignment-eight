"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

const MyCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [removingId, setRemovingId] = useState(null);
  const STORAGE_KEY = "my_courses";

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    setEnrolledCourses(data);
  }, []);

  const handleRemove = (id, title) => {
    const currentCourses = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const updatedCourses = currentCourses.filter((course) => course.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCourses));
    setEnrolledCourses(updatedCourses);

    toast.error(`"${title}" removed`, {
      theme: "dark",
      position: "top-center",
    });
  };

  const handleAnimatedRemove = (id, title) => {
    setRemovingId(id);
    setTimeout(() => {
      handleRemove(id, title);
      setRemovingId(null);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#020617] pt-32 pb-20 px-4 md:px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        
        
        <div className="flex justify-between items-center mb-10 bg-white/[0.02] p-6 md:p-10 rounded-[32px] border border-white/10 shadow-2xl">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-1">My Learning Path</h1>
            <p className="text-gray-500 text-sm">Manage your enrolled courses</p>
          </div>
          <div className="text-right">
            <span className="text-4xl p-2 md:p-1 md:text-6xl font-black text-blue-500">{enrolledCourses.length}</span>
            <p className="text-gray-500 text-[10px] uppercase font-bold tracking-tighter">Total</p>
          </div>
        </div>

        
        <div className="space-y-4">
          {enrolledCourses.length > 0 ? (
            enrolledCourses.map((course) => (
              <div
                key={course.id}
                className={`bg-white/[0.03] border border-white/10 p-4 md:p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between transition-all duration-500 ${
                  removingId === course.id ? "opacity-0 translate-x-10" : "opacity-100"
                }`}
              >
                
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <img 
                      src={course.image} 
                      className="w-20 h-14 md:w-28 md:h-18 object-cover rounded-xl shadow-lg border border-white/5" 
                      alt="" 
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base md:text-xl leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm mt-1">
                      {course.instructor}
                    </p>
                  </div>
                </div>

                
                <div className="flex items-center gap-3 mt-4 md:mt-0 justify-end border-t border-white/5 pt-3 md:pt-0 md:border-none md:ml-4">
                  
                  <Link
                    href={`/all-courses/${course.id}`}
                    className="flex-1 md:flex-none py-2 px-4 md:p-3 flex items-center justify-center gap-2 bg-blue-500/10 text-blue-400 rounded-xl hover:bg-blue-500 hover:text-white transition-all text-xs font-bold"
                  >
                    <i className="ri-play-circle-line text-lg md:text-2xl"></i>
                    <span className="md:hidden">View</span>
                  </Link>

                  
                  <button
                    onClick={() => handleAnimatedRemove(course.id, course.title)}
                    className="flex-1 md:flex-none py-2 px-4 md:p-3 flex items-center justify-center gap-2 bg-red-500/10 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all text-xs font-bold hover:cursor-pointer"
                  >
                    <i className="ri-delete-bin-6-line text-lg md:text-2xl"></i>
                    <span className="md:hidden">Remove</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 border border-dashed border-white/10 rounded-[32px] bg-white/5">
              <i className="ri-book-open-line text-6xl text-gray-700 mb-4 block"></i>
              <h3 className="text-xl text-white font-semibold">Empty Library</h3>
              <p className="text-gray-500 mt-2 mb-8">You haven't enrolled in any courses yet.</p>
              <Link href="/all-courses" className="px-10 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-xl transition-all">
                Browse Courses
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCourses;