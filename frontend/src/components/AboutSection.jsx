import React from "react";
import { personalInfo } from "../data/mock";
import {
  Wifi,
  Layers,
  Gauge,
  Swords,
  Server,
  Monitor,
  CheckCircle2,
  ArrowRight,
  Trophy,
} from "lucide-react";

const expertiseIcons = [Wifi, Layers, Gauge, Swords, Server, Monitor];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-14">
          <span className="inline-block text-blue-600 text-sm font-semibold tracking-wider uppercase mb-3">
            How I Can Help
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            I build game systems that
            <br />
            scale under real-world conditions.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            {personalInfo.bioExtended}
          </p>
        </div>

        {/* Core Expertise - what I solve for you */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {personalInfo.coreExpertise.map((item, index) => {
            const Icon = expertiseIcons[index];
            return (
              <div
                key={item.title}
                className="group p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-100 hover:shadow-lg hover:shadow-blue-100/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Two-column: What I Bring + Proof */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* What I Bring */}
          <div className="bg-slate-50/70 rounded-2xl p-8 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-blue-600" />
              What I Bring to Your Project
            </h3>
            <ul className="space-y-3.5">
              {personalInfo.whatIBring.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Selected Highlights / Proof */}
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100/50">
            <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-blue-600" />
              Proven Track Record
            </h3>
            <ul className="space-y-3.5">
              {personalInfo.selectedHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span className="text-sm text-slate-600 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
