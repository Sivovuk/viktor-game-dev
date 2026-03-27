import React, { useState } from "react";
import { projects } from "../data/mock";
import { Badge } from "./ui/badge";
import { ExternalLink, Folder } from "lucide-react";

const statusColors = {
  Shipped: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "In Development": "bg-amber-50 text-amber-700 border-amber-200",
  "Open Source": "bg-sky-50 text-sky-700 border-sky-200",
  "5M+ Downloads": "bg-blue-50 text-blue-700 border-blue-200",
};

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="py-24 bg-slate-50/70">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-14">
          <span className="inline-block text-blue-600 text-sm font-semibold tracking-wider uppercase mb-3">
            Projects & Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Games I've shipped.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            A selection of projects that showcase my skills across different genres and platforms.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/40 transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card top accent */}
              <div className="h-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200">
                    <Folder className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className={`text-xs font-medium ${statusColors[project.status] || "bg-slate-50 text-slate-600"}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Title & Category */}
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors duration-200">
                  {project.title}
                </h3>
                <span className="text-xs text-blue-500 font-medium uppercase tracking-wider">
                  {project.category} · {project.year}
                </span>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mt-3 mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 font-mono border border-slate-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover overlay link */}
              <div
                className={`absolute inset-0 bg-blue-600/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              >
                <div className="absolute bottom-4 right-4 pointer-events-auto">
                  <button className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
