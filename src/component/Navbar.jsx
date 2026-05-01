"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Courses", href: "/all-courses" },
    { name: "My Courses", href: "/my-courses" },
    { name: "My Profile", href: "/profile" },
  ];

  return (
    <div className="fixed top-5 w-full flex justify-center z-50 px-4">
      

      <nav className="navbar bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl max-w-6xl shadow-2xl px-4 md:px-8 py-2 relative">
        
        {/* Logo Section */}
        <div className="navbar-start">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl font-extrabold shadow-lg">
              S
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              SkillSphere
            </span>
          </Link>
        </div>

        {/* Desktop section */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex flex-row gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-all duration-300 pb-2 ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {/* for the Border  */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-blue-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        
        <div className="navbar-end gap-2 md:gap-4">
          <Link 
            href="/login" 
            className="text-gray-300   hover:text-blue-300 text-lg font-bold transition-colors hidden sm:block"
          >
            Login
          </Link>
          
          <Link 
            href="/register" 
            className="btn border-none bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 px-5 min-h-0 h-10 rounded-xl shadow-lg text-sm hidden sm:flex"
          >
            Register
          </Link>

          {/* for the mobile version */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        
        {isOpen && (
          <div className="absolute top-20 left-0 w-full p-4 lg:hidden animate-in fade-in zoom-in duration-300">
            <div className="bg-gray-900  border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-6">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href={link.href}
                        className={`text-lg font-medium block p-2 rounded-lg hover:outline ${
                          isActive 
                            ? "bg-white/10 text-white border-l-4 border-blue-500 hover:outline-0" 
                            : "text-gray-400"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              
              <hr className="border-white/10" />
              
              <div className="flex flex-col gap-3">
                <Link 
                  href="/login" 
                  onClick={() => setIsOpen(false)}
                  className="btn btn-outline text-white border-white/20 hover:bg-white/10"
                >
                  Login
                </Link>
                <Link 
                  href="/register" 
                  onClick={() => setIsOpen(false)}
                  className="btn border-none bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;