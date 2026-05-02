"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";


const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#020617] pt-15  md:pt-30 pb-18 px-5  flex items-center justify-center  relative overflow-hidden">

      <div className="absolute top-[-5%] right-[-5%] w-72 h-72 bg-blue-600/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-72 h-72 bg-purple-600/20 blur-[100px] rounded-full"></div>


      <div className="w-full max-w-[400px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl relative z-10">




        <div className="text-center mb-5">
          <div className="flex justify-center items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">S</div>
            <span className="text-xl font-bold text-white">SkillSphere</span>
          </div>
          <h2 className="text-3xl font-bold text-white ">Welcome Back</h2>
          <p className="text-gray-500 text-xs tracking-wide">Enter your details to continue</p>
        </div>


        <form className="space-y-2">
          <div className="space-y-1">
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

          <div className="space-y-1">
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

          <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:opacity-90 active:scale-[0.98] transition-all text-sm mt-1">
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center my-2">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="px-3 text-xs text-gray-500">OR</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Hero UI Google Login Button */}
          <Button
            variant="bordered"
            className="w-full py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-4 h-4 mr-2"
            >
              <path
                fill="#FFC107"
                d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
              />
              <path
                fill="#FF3D00"
                d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
              />
              <path
                fill="#4CAF50"
                d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
              />
              <path
                fill="#1976D2"
                d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.5-6.2 7.1l6.2 5.2C39.9 36.5 44 30.8 44 24c0-1.3-.1-2.3-.4-3.5z"
              />
            </svg>

            Continue with Google
          </Button>


        </form>


        <p className="text-center mt-6 text-gray-400 text-xs">
          Don't have an account? <Link href="/register" className="text-blue-500 hover:underline font-semibold ml-1">Register a account</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;