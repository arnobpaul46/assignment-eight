"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFound = () => {
const router = useRouter();

return ( <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">


  {/* Background Glows */}
  <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/15 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] bg-purple-600/10 blur-[100px] rounded-full"></div>

  <div className="max-w-2xl w-full text-center relative z-10">
    
    {/* Animated 404 Text */}
    <div className="relative inline-block mb-8">
      <h1 className="text-[120px] md:text-[180px] font-black text-white/5 leading-none select-none italic">
        404
      </h1>
      <div className="absolute inset-0 flex items-center justify-center">
        <i className="ri-compass-discover-line text-7xl md:text-9xl text-blue-500 animate-pulse"></i>
      </div>
    </div>

    {/* Message Section */}
    <div className="space-y-6">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-400 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
    </div>

    {/* Action Buttons */}
    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link 
        href="/" 
        className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
      >
        <i className="ri-home-4-line text-xl"></i>
        Back to Home
      </Link>
      
      <button 
        type="button"
        onClick={() => router.back()}
        className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
      >
        <i className="ri-arrow-left-line text-xl"></i>
        Go Back
      </button>
    </div>

    {/* Footer */}
    <div className="mt-20">
      <Link 
        href="/all-courses" 
        className="text-blue-500 hover:text-white transition-colors font-medium underline underline-offset-8 decoration-blue-500/30"
      >
        Explore our courses instead?
      </Link>
    </div>

  </div>
</div>

);
};

export default NotFound;
