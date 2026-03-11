import React, { useState } from "react";
import { skills } from "../data/mock";
import { Badge } from "./ui/badge";

const categories = ["All", ...new Set(skills.map((s) => s.category))];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-slate-50/70">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <span className="inline-block text-purple-600 text-sm font-semibold tracking-wider uppercase mb-3">
            Skills & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            My technical toolkit.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            A deep stack built over 8+ years of shipping games across platforms.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-purple-600 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-purple-200 hover:text-purple-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className="group bg-white rounded-xl p-5 border border-slate-100 hover:border-purple-100 hover:shadow-md hover:shadow-purple-50/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-slate-800">
                  {skill.name}
                </h3>
                <Badge
                  variant="secondary"
                  className="text-xs font-medium bg-purple-50 text-purple-600 border-0"
                >
                  {skill.level}%
                </Badge>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="text-xs text-slate-400 mt-2 inline-block">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
