"use client";
import React, { useEffect, useState } from "react";
import CourseCard from "@/component/CoursesCard";
import { Search, FileQuestion } from "lucide-react"; 

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

    
    const filteredCourses = allCourses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

        <div className="min-h-screen bg-[#020617] pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">


                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6 w-full">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                        Explore All <br className="hidden md:block" /> Courses
                    </h1>

                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                        <input
                            type="text"
                            placeholder="Find Your Courses..."
                            className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-2xl"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>


                <div className="min-h-[50vh]">
                    {isLoading ? (
                        <div className="flex justify-center items-center py-20">
                            <span className="loading loading-spinner loading-lg text-blue-500"></span>
                        </div>
                    ) : filteredCourses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredCourses.map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    ) : (
                        /* Not Found Section */
                        <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-300">
                            <div className="bg-white/5 p-6 rounded-full mb-6">
                                <FileQuestion size={60} className="text-gray-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">No Courses Found</h3>

                            <button
                                onClick={() => setSearchTerm("")}
                                className="mt-6 text-blue-500 hover:underline font-medium"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllCoursesPage;