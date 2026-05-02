"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage, Button } from "@heroui/react";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Courses", href: "/all-courses" },
    { name: "My Courses", href: "/my-courses" },
    { name: "My Profile", href: "/my-profile" },
  ];

  const handleLogout = async () => {
    await authClient.signOut({
        fetchOptions: {
            onSuccess: () => {
                toast.success("Logged out successfully");
                router.push("/login"); 
            }
        }
    });
  };

  return (
    <div className="fixed top-5 w-full flex justify-center z-50 px-4">
      <nav className="navbar bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl max-w-6xl shadow-2xl px-4 md:px-8 py-2 relative flex justify-between items-center w-full">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl font-extrabold shadow-lg">
              S
            </div>
            <span className="text-xl font-bold text-white tracking-tight">SkillSphere</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
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
                    <span className={`absolute bottom-0 left-0 h-[2px] bg-blue-500 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Auth Buttons / Profile */}
        <div className="flex items-center gap-4">
          {!user ? (
            <div className="hidden sm:flex items-center gap-4">
              <Link href="/login" className="text-gray-300 hover:text-white font-medium text-sm transition-colors">
                Login
              </Link>
              <Link href="/register" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:opacity-90 transition-all shadow-lg">
                Register
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Avatar  
                color="primary" 
                className="w-8 h-8 cursor-pointer">
                  <AvatarImage src={user.image} referrerPolicy="no-referrer"/>
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
              <button 
                onClick={handleLogout}
                className="hidden sm:flex items-center gap-2 bg-white/5 hover:bg-red-500/20 text-red-400 border border-red-500/20 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
              >
                <LogOut size={14} /> Log out
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-1">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Sidebar/Menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full p-4 lg:hidden">
            <div className="bg-gray-900 border  border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-6 ">
              <ul className="flex flex-col gap-4 ">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      onClick={() => setIsOpen(false)}
                      href={link.href}
                      className={`text-lg font-medium block p-2   rounded-lg ${
                        pathname === link.href ? "bg-white/10 text-white border-l-5 border-l-blue-600" : "text-gray-400"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <hr className="border-white/10" />

              <div className="flex flex-col gap-3">
                {!user ? (
                  <>
                    <Link href="/login" onClick={() => setIsOpen(false)} className="w-full text-center py-3 border border-white/10 text-white rounded-xl">Login</Link>
                    <Link href="/register" onClick={() => setIsOpen(false)} className="w-full text-center py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl">Register</Link>
                  </>
                ) : (
                  <button onClick={handleLogout} className="w-full py-3 bg-red-500/20 text-red-400 rounded-xl font-bold">Logout</button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;