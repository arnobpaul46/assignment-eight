"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const CourseDetails = () => {
    const { id } = useParams();
    const router = useRouter();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetail = async () => {
            const res = await fetch("/courses.json");
            const data = await res.json();
            // আইডি অনুযায়ী কোর্সটি খুঁজে বের করা
            const singleCourse = data.find((item) => item.id === parseInt(id));
            setCourse(singleCourse);
            setLoading(false);
        };
        fetchDetail();
    }, [id]);

    if (loading) return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center">
            <span className="loading loading-spinner loading-lg text-blue-500"></span>
        </div>
    );

    if (!course) return (
        <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl font-bold mb-4">Course Not Found!</h2>
            <button onClick={() => router.back()} className="text-blue-500 hover:underline">Go Back</button>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#020617] pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Back Button */}
                <button onClick={() => router.back()} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-all">
                    <i className="ri-arrow-left-line"></i> Back to Courses
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left Side: Image and Basic Info */}
                    <div className="space-y-8">
                        <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl h-85">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                {course.category}
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-2 p-6 bg-white/5 rounded-3xl border border-white/10">
                            <div className="text-center">
                                <p className="text-gray-500 text-xs uppercase mb-1">Rating</p>
                                <p className="text-white font-bold flex items-center gap-1 justify-center">
                                    <i className="ri-star-fill text-yellow-500"></i> {course.rating}
                                </p>
                            </div>
                            <div className="w-[1px] h-10 bg-white/10"></div>
                            <div className="text-center">
                                <p className="text-gray-500 text-xs uppercase mb-1">Price</p>
                                <p className="text-white font-bold text-lg">${course.price}</p>
                            </div>
                            <div className="w-[1px] h-10 bg-white/10"></div>
                            <div className="text-center">
                                <p className="text-gray-500 text-xs uppercase mb-1">Duration</p>
                                <p className="text-white font-bold">12 Weeks</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Title and Instructor */}
                    <div className="space-y-5">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                            {course.title}
                        </h1>

                        <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                            Master the essentials of {course.category} with this comprehensive bootcamp.
                            Designed for both beginners and intermediate learners, this course covers everything from
                            foundational concepts to advanced real-world applications.
                        </p>

                        {/* Instructor Card */}
                        <div className="flex items-center gap-4 p-6 bg-white/5 rounded-3xl border border-white/10">
                            <img src={course.instructor_img} alt="" className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover" />
                            <div>
                                <p className="text-gray-500 text-xs uppercase mb-1">Instructor</p>
                                <h4 className="text-white text-xl font-bold">{course.instructor}</h4>
                            </div>
                        </div>

                        {/* Action Button */}
                        <button className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-xl shadow-xl hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-3">
                            Enroll in Course Now <i className="ri-arrow-right-line "></i>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseDetails;