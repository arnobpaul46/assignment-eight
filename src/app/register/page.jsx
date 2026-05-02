"use client";
import React, { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation"; 
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); 

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
        email, 
        password, 
        name, 
        image, 
    });

    console.log({data, error});

    if (!error) {
      toast.success("Registration successful! Please login");
      router.push('/login'); 
    } else {
      
      toast.error(error.message );
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] md:pt-28 md:pb-18 px-4 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-[-5%] left-[-5%] w-72 h-72 bg-purple-600/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-72 h-72 bg-blue-600/20 blur-[100px] rounded-full"></div>

      <div className="w-full max-w-[400px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[32px] p-5 md:p-8 shadow-2xl relative z-10">
        <div className="text-center mb-4">
          <div className="flex justify-center items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              S
            </div>
            <span className="text-xl font-bold text-white">SkillSphere</span>
          </div>
          <h2 className="text-3xl font-bold text-white">Create Account</h2>
          <p className="text-gray-500 text-xs tracking-wide">Start your learning journey today</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-2">
          <div>
            <label className="text-gray-400 text-[13px] ml-1">Full Name</label>
            <div className="relative group">
              <i className="ri-user-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
              <input required type="text" name="name" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-gray-600" />
            </div>
          </div>

          <div>
            <label className="text-gray-400 text-[13px] ml-1">Image URL</label>
            <div className="relative group">
              <i className="ri-image-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
              <input required type="url" name="image" placeholder="https://image-url.com" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-gray-600" />
            </div>
          </div>

          <div>
            <label className="text-gray-400 text-[13px] ml-1">Email Address</label>
            <div className="relative group">
              <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
              <input required type="email" name="email" placeholder="name@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-gray-600" />
            </div>
          </div>

          <div>
            <label className="text-gray-400 text-[13px] ml-1">Password</label>
            <div className="relative group">
              <i className="ri-lock-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
              <input required minLength={6} type={showPassword ? "text" : "password"} name="password" placeholder="Create password" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-11 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-gray-600" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500">
                <i className={showPassword ? "ri-eye-off-line" : "ri-eye-line"}></i>
              </button>
            </div>
          </div>

          <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:opacity-90 active:scale-[0.98] transition-all text-sm mt-2">
            Create Account
          </button>
        </form>

        <p className="text-center mt-4 text-gray-400 text-xs">
          Already have an account?
          <Link href="/login" className="text-blue-500 hover:underline font-semibold ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;