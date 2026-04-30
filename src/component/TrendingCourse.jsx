"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CourseCard from "./CoursesCard";

const TrendingCourse = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/courses.json");
      const data = await res.json();
      
      const sorted = data.sort((a, b) => b.price - a.price).slice(0, 3);
      setTrending(sorted);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <section className="py-20 bg-[#02071f] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-2">
              Trending Now <span className="text-2xl">🔥</span>
            </h2>
            <p className="text-gray-500 mt-5 text-2xl">Most picked premium courses this week</p>
          </div>
          <Link href="/all-courses" className="text-gray-400 hover:text-white transition-colors text-sm">
            View All
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-10"><span className="loading loading-spinner text-purple-500"></span></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trending.map(course => <CourseCard key={course.id} course={course} />)}
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendingCourse;