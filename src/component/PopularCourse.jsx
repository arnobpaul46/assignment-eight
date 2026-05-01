"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CourseCard from "./CoursesCard";

const PopularCourse = () => {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/courses.json");
      const data = await res.json();


      const sorted = data.sort((a, b) => b.rating - a.rating).slice(0, 3);
      setPopular(sorted);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <section className="py-20 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Popular Courses</h2>
            <p className="text-gray-500 mt-5 text-[12px] md:text-2xl">Our top-rated courses by students</p>
          </div>
          <Link href="/all-courses" className="text-gray-400 hover:text-white transition-colors text-sm">
            View All
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-10"><span className="loading loading-spinner text-blue-500"></span></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popular.map(course => <CourseCard key={course.id} course={course} />)}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularCourse;