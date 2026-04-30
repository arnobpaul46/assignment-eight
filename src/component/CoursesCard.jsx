import React from 'react';
import { Star } from 'lucide-react';
import { Chip } from '@heroui/react';
import Link from 'next/link';

const CourseCard = ({ course }) => {
    return (
        <div className="bg-[#111827] border border-white/10 rounded-3xl p-4 transition-all duration-300 hover:border-blue-500/50 group shadow-xl">
            <div className="relative h-44 w-full overflow-hidden rounded-2xl mb-4">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 z-10">
                    <Chip
                        className="font-medium bg-gray-900 text-white"
                    >
                        {course.category}
                    </Chip>
                </div>
            </div>

            <h3 className="text-white text-lg font-semibold mb-3 line-clamp-1">{course.title}</h3>

            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                    <img src={course.instructor_img} className="w-8 h-8 object-cover rounded-full border border-white/10" alt="" />
                    <span className="text-gray-400 text-xs">{course.instructor}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Star size={14} className="text-gray-500 fill-gray-500" />
                    <span className="text-gray-400 text-sm font-medium">{course.rating}</span>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <Link href={`/all-courses/${course.id}`}><button className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all text-xs font-bold">
                    Learn More
                </button></Link>
                <span className="text-xl font-bold text-white">${course.price}</span>
            </div>
        </div>
    );
};

export default CourseCard;