"use client";
import React from "react";
import { Timer, Target, BrainCircuit, Smartphone } from "lucide-react";

const LearningTips = () => {
  const tips = [
    {
      title: "Pomodoro Technique",
      desc: "Optimize your cognitive performance by working in focused 25-minute bursts followed by short restorative breaks. Perfect for deep learning sessions.",
      icon: <Timer size={32} className="text-blue-500" />,
      bgColor: "bg-white/5",
      iconBg: "bg-blue-500/10",
      textColor: "text-white",
      descColor: "text-white"
    },
    {
      title: "Focus Zones",
      desc: "Creating environments that signal your brain it's time for high-intensity skill acquisition. Minimize noise and maximize results.",
      icon: <Target size={32} className="text-white" />,
      bgColor: "bg-gradient-to-br from-blue-600 to-purple-700",
      iconBg: "bg-white/20",
      textColor: "text-white",
      descColor: "text-blue-100",
    },
    {
      title: "Digital Minimalism",
      desc: "Reduce noise to increase clarity. Learn how to curate your digital environment to serve your learning goals rather than distract from them.",
      icon: <Smartphone size={32} className="text-orange-500" />,
      bgColor: "bg-white/5",
      iconBg: "bg-orange-500/10",
      textColor: "text-white",
      descColor: "text-white"
    },
    {
      title: "Active Recall",
      desc: "Don't just read; test yourself. Forcing your brain to retrieve information strengthens neural pathways and ensures long-term retention.",
      icon: <BrainCircuit size={32} className="text-emerald-500" />,
      bgColor: "bg-white/5",
      iconBg: "bg-emerald-500/10",
      textColor: "text-white",
      descColor: "text-white"
    }
  ];

  return (
    <section className="py-24 bg-[#020617] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">


        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Master Your Routine
          </h2>
          <p className="text-gray-500 text-lg">Pro-tips to accelerate your learning journey</p>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className={`${tip.bgColor} rounded-[32px] p-8 md:p-12 border border-white/5 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 shadow-2xl`}
            >

              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <div className={`${tip.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-8`}>
                  {tip.icon}
                </div>

                <h3 className={`text-2xl font-bold mb-4 ${tip.textColor}`}>
                  {tip.title}
                </h3>

                <p className={`text-lg leading-relaxed ${tip.descColor}`}>
                  {tip.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LearningTips;