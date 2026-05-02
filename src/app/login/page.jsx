"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/"
    });
    if (!error) {
      toast.success("Login successful");

    } else {

      toast.error(error.message);
    }
  }


  const googleLogin =async ()=>{
    await authClient.signIn.social({
    provider: "google",
  });
  if (!error) {
      toast.success("Login successful");

    } else {

      toast.error(error.message);
    }
  }


  return (
    <div className="min-h-screen bg-[#020617] pt-15 md:pt-30 pb-18 px-5 flex items-center justify-center relative overflow-hidden">


      <div className="absolute top-[-5%] right-[-5%] w-72 h-72 bg-blue-600/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-72 h-72 bg-purple-600/20 blur-[100px] rounded-full"></div>


      <div className="w-full max-w-[400px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl relative z-10">


        <div className="text-center mb-5">
          <div className="flex justify-center items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
              S
            </div>
            <span className="text-xl font-bold text-white tracking-tight">SkillSphere</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-1">Welcome Back</h2>
          <p className="text-gray-500 text-sm tracking-wide">Enter your details to continue</p>
        </div>


        <form className="space-y-1"  onSubmit={onSubmit} >
          <div className="space-y-1.5">
            <label className="text-gray-400 text-[13px] ml-1 font-medium">Email Address</label>
            <div className="relative group">
              <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors"></i>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all placeholder:text-gray-600"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-gray-400 text-[13px] ml-1 font-medium">Password</label>
            <div className="relative group">
              <i className="ri-lock-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors"></i>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-12 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all placeholder:text-gray-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-400 transition-colors"
              >
                <i className={showPassword ? "ri-eye-off-line" : "ri-eye-line"}></i>
              </button>
            </div>
            <div className="text-right">
              <Link href="#" className="text-[12px] text-gray-500 hover:text-blue-400 transition-colors font-medium">Forgot Password?</Link>
            </div>
          </div>


          <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] hover:opacity-90 active:scale-[0.98] transition-all text-sm mt-2">
            Login In
          </button>


          <div className="flex items-center my-2.5">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="px-4 text-[11px] font-bold text-gray-500 uppercase tracking-widest">OR</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>


          
        </form>
        <Button
            onClick={googleLogin}
            variant="bordered"
            className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 hover:border-white/20 transition-all font-medium flex items-center justify-center gap-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-4 h-4">
              <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z" />
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
              <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z" />
              <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.5-6.2 7.1l6.2 5.2C39.9 36.5 44 30.8 44 24c0-1.3-.1-2.3-.4-3.5z" />
            </svg>
            Continue with Google
          </Button>


        <p className="text-center mt-6 text-gray-400 text-xs">
          Don't have an account?
          <Link href="/register" className="text-blue-500 hover:text-blue-400 hover:underline font-bold ml-1 transition-all">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;