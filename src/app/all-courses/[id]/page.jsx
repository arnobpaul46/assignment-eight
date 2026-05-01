"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

const CourseDetails = () => {
    const { id } = useParams();
    const router = useRouter();
    const [course, setCourse] = useState(null);
    const [isEnrolled, setIsEnrolled] = useState(false);

    
    const STORAGE_KEY = "my_courses";

    useEffect(() => {
        fetch("/courses.json")
            .then(res => res.json())
            .then(data => {
                const found = data.find(c => c.id === parseInt(id));
                setCourse(found);

                
                const enrolled = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
                setIsEnrolled(enrolled.some(c => c.id === parseInt(id)));
            });
    }, [id]);

    const handleEnroll = () => {
        if (!course) return;

        
        const enrolled = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

        
        if (!enrolled.some(c => c.id === course.id)) {
            const updatedList = [...enrolled, course];
            
            
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
            
            
            setIsEnrolled(true);

            
            toast.success(`Enroll successful! "${course.title}" added to your courses`,{
                position: "top-center",
                theme: "dark",
            });

            
            setTimeout(() => {
                router.push("/my-courses");
            }, 1000);
        }
    };

    

    if (!course) return (
        <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl font-bold mb-4">Course Not Found!</h2>
            <button onClick={() => router.back()} className="text-blue-500 hover:underline">Go Back</button>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#020617] pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">


                <button onClick={() => router.back()} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-all">
                    <i className="ri-arrow-left-line"></i> Back to Courses
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">


                    <div className="space-y-8">
                        <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl h-60 md:h-85 w-full">
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


                    <div className="space-y-5">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                            {course.title}
                        </h1>

                        <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                            Master the essentials of {course.category} with this comprehensive bootcamp.
                            Designed for both beginners and intermediate learners, this course covers everything from
                            foundational concepts to advanced real-world applications.
                        </p>


                        <div className="flex items-center gap-4 p-6 bg-white/5 rounded-3xl border border-white/10">
                            <img src={course.instructor_img} alt="" className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover" />
                            <div>
                                <p className="text-gray-500 text-xs uppercase mb-1">Instructor</p>
                                <h4 className="text-white text-xl font-bold">{course.instructor}</h4>
                            </div>
                        </div>


                        <button
                            onClick={handleEnroll}
                            disabled={isEnrolled}
                            className={`w-full py-5 rounded-2xl font-bold text-xl shadow-xl transition-all flex items-center justify-center gap-3 ${isEnrolled
                                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-[1.02]"
                                }`}
                        >
                            {isEnrolled ? (
                                <div> <i className="ri-checkbox-circle-line"></i> Already Enrolled </div>
                            ) : (
                                <div> Enroll in Course Now for free <i className="ri-arrow-right-line"></i> </div>
                            )}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseDetails;