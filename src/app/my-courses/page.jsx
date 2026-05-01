"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

const MyCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
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


    toast.error(`"${title}" removed from your courses`, {
      theme: "dark",
      position: "top-center",
    });
  };

  const [removingId, setRemovingId] = useState(null);

  const handleAnimatedRemove = (id, title) => {
    setRemovingId(id);

    setTimeout(() => {
      handleRemove(id, title);
      setRemovingId(null);
    }, 500); // animation duration
  };

  return (
    <div className="min-h-screen bg-[#020617] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">


        <div className="flex justify-between items-center mb-12 bg-white/5 p-8 rounded-[32px] border border-white/10 shadow-2xl">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">My Learning Path</h1>
            <p className="text-gray-500">Manage your enrolled courses here</p>
          </div>
          <div className="text-center">
            <span className="text-5xl font-extrabold text-blue-500">{enrolledCourses.length}</span>
            <p className="text-gray-500 text-xs uppercase font-bold mt-1 tracking-widest">Total</p>
          </div>
        </div>


        <div className="space-y-4">
          {enrolledCourses.length > 0 ? (
            enrolledCourses.map((course) => (
              <div
                key={course.id}
                className={`bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center justify-between   group hover:bg-white/10 transition-all animate__animated ${removingId === course.id
                    ? "animate__fadeOutRight"
                    : "animate__fadeInUp"
                  }`}
              >
                <div className="flex items-center gap-4 ">
                  <img src={course.image} className="w-20 h-11 md:w-24 md:h-16 object-cover rounded-xl" alt="" />
                  <div>
                    <h3 className="text-white font-bold text-sm md:text-lg leading-tight">{course.title}</h3>
                    <p className="text-gray-500 text-[10px]">{course.instructor}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">

                  <Link
                    href={`/all-courses/${course.id}`}
                    className=" p-1 md:p-3 bg-blue-500/10 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-all shadow-lg"
                    title="View Course"
                  >
                    <i className="ri-play-circle-line text-sm md:text-2xl"></i>
                  </Link>



                  <button
                    onClick={() => handleAnimatedRemove(course.id, course.title)}
                    className="p-1 md:p-3 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-lg"
                    title="Remove Course"
                  >
                    <i className="ri-delete-bin-6-line text-sm md:text-2xl"></i>
                  </button>
                </div>
              </div>
            ))
          ) : (

            <div className="text-center py-20 border border-dashed border-white/10 rounded-[32px] bg-white/5">
              <i className="ri-book-open-line text-6xl text-gray-700 mb-4 block"></i>
              <h3 className="text-xl text-white font-semibold mb-2">No Courses Enrolled</h3>
              <p className="text-gray-500 mb-6">Start your journey by exploring our top-rated courses.</p>
              <Link href="/all-courses" className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all">
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