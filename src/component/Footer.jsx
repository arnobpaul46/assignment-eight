"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
            {/* logo section */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                S
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                SkillSphere
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Empowering learners worldwide with expert-led courses. Master new skills and advance your career today.
            </p>
          </div>

          {/* all section link */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-wide">Explore</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-500 transition-all flex items-center gap-2 group">
                  <i className="ri-arrow-right-s-line text-blue-500 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/all-courses" className="text-gray-400 hover:text-blue-500 transition-all flex items-center gap-2 group">
                  <i className="ri-arrow-right-s-line text-blue-500 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0"></i>
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-gray-400 hover:text-blue-500 transition-all flex items-center gap-2 group">
                  <i className="ri-arrow-right-s-line text-blue-500 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0"></i>
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* support section */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-wide">Support</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="#" className="text-gray-400 hover:text-blue-500 transition-all">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-500 transition-all">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-500 transition-all">Help Center</Link></li>
            </ul>
          </div>

          {/* contact us section */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-wide">Contact Us</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <i className="ri-mail-line text-lg"></i>
                </div>
                <span className="text-gray-400 text-sm">support@skillsphere.com</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <i className="ri-phone-line text-lg"></i>
                </div>
                <span className="text-gray-400 text-sm">+880 123 456 789</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <i className="ri-map-pin-line text-lg"></i>
                </div>
                <span className="text-gray-400 text-sm">Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* copy right section */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-sm font-medium">
            &copy; {currentYear} <span className="text-white">SkillSphere</span>. All rights reserved.
          </p>
        {/* social media icon */}
          <div className="flex items-center gap-4">

            <a href="#" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white hover:border-transparent transition-all shadow-lg">
              <i className="ri-facebook-fill text-xl"></i>
            </a>
            <a href="#" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white hover:border-transparent transition-all shadow-lg">
              <i className="ri-twitter-x-fill text-xl"></i>
            </a>
            <a href="#" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:text-white hover:border-transparent transition-all shadow-xl">
              <i className="ri-instagram-line text-xl"></i>
            </a>
            <a href="#" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#0A66C2] hover:text-white hover:border-transparent transition-all shadow-lg">
              <i className="ri-linkedin-box-fill text-xl"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;