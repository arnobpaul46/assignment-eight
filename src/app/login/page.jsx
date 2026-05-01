"use client";
import React from "react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#020617] pt-32 pb-20 px-6 flex items-center justify-center  relative overflow-hidden">
      
      <div className="absolute top-[-5%] right-[-5%] w-72 h-72 bg-blue-600/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-72 h-72 bg-purple-600/20 blur-[100px] rounded-full"></div>


      <div className="w-full max-w-[400px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl relative z-10">
        
        


        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">S</div>
            <span className="text-xl font-bold text-white">SkillSphere</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">Welcome Back</h2>
          <p className="text-gray-500 text-xs tracking-wide">Enter your details to continue</p>
        </div>

        
        <form className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-gray-400 text-[13px] ml-1">Email Address</label>
            <div className="relative group">
              <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500"></i>
              <input 
                type="email" 
                placeholder="name@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-gray-600"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-gray-400 text-[13px] ml-1">Password</label>
            <div className="relative group">
              <i className="ri-lock-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500"></i>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-gray-600"
              />
            </div>
            <div className="text-right">
              <Link href="#" className="text-[11px] text-gray-500 hover:text-blue-400 transition-colors">Forgot Password?</Link>
            </div>
          </div>

          <button className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:opacity-90 active:scale-[0.98] transition-all text-sm mt-2">
            Login
          </button>
        </form>

        
        <p className="text-center mt-8 text-gray-400 text-xs">
          Don't have an account? <Link href="/register" className="text-blue-500 hover:underline font-semibold ml-1">Register a account</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;