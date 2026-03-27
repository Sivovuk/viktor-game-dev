import React from "react";
import { experience } from "../data/mock";
import { Briefcase, MapPin, ChevronRight } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-14">
          <span className="inline-block text-blue-600 text-sm font-semibold tracking-wider uppercase mb-3">
            Work Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Where I've built things.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            From indie collectives to production studios — every role has sharpened my craft.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-200 via-blue-300 to-blue-100 hidden md:block" />

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative md:pl-14">
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-2 hidden md:flex">
                  <div className="w-[15px] h-[15px] rounded-full bg-blue-600 ring-4 ring-blue-100" />
                </div>

                <div className="group bg-slate-50/60 rounded-2xl p-6 sm:p-8 border border-slate-100 hover:border-blue-100 hover:bg-white hover:shadow-lg hover:shadow-blue-50/40 transition-all duration-300">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1.5 text-sm text-blue-600 font-medium">
                          <Briefcase className="w-3.5 h-3.5" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-slate-400">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-mono text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-100 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
