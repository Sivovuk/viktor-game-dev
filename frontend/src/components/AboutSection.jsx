import React from "react";
import { personalInfo } from "../data/mock";
import { Gamepad2, Code2, Cpu, Rocket, CheckCircle2 } from "lucide-react";

const highlights = [
  {
    icon: Gamepad2,
    title: "7+ Years in Unity",
    desc: "Deep expertise across 2D, 3D, mobile, WebGL, and VR platforms — from prototypes to shipped titles.",
  },
  {
    icon: Code2,
    title: "C# & Architecture",
    desc: "OOP, SOLID, design patterns, and Scriptable Object Architecture for scalable, maintainable code.",
  },
  {
    icon: Cpu,
    title: "Performance First",
    desc: "CPU/GPU profiling, Addressables, memory optimization — silky smooth on any target device.",
  },
  {
    icon: Rocket,
    title: "Ship & Iterate",
    desc: "End-to-end delivery from mechanics to deployment. Multiple titles with millions of downloads.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <span className="inline-block text-purple-600 text-sm font-semibold tracking-wider uppercase mb-3">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Game and tools craftsman,
            <br />
            turning ideas into realities.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
            {personalInfo.aboutExtended}
          </p>

          {/* What I Offer */}
          <div className="flex flex-wrap gap-3 max-w-3xl">
            {personalInfo.whatIOffer.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 bg-purple-50/60 rounded-full px-4 py-2 border border-purple-100/50"
              >
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span className="text-sm text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-purple-100 hover:shadow-lg hover:shadow-purple-100/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                <Icon className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
