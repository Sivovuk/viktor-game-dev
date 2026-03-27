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
            The technical toolkit behind every shipped title and production system.
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
        <div className="flex flex-wrap gap-3">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className="group bg-white rounded-xl px-5 py-3.5 border border-slate-100 hover:border-purple-200 hover:shadow-md hover:shadow-purple-50/50 transition-all duration-300"
            >
              <span className="text-sm font-semibold text-slate-800 group-hover:text-purple-700 transition-colors duration-200">
                {skill.name}
              </span>
              <Badge
                variant="secondary"
                className="ml-2.5 text-xs font-medium bg-purple-50 text-purple-600 border-0"
              >
                {skill.category}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
