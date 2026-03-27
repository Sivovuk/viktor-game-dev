import React from "react";
import { personalInfo } from "../data/mock";
import { MapPin, ArrowDown, Linkedin, Globe, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-purple-50/60 to-violet-100/80" />
      
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-purple-100/50 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-purple-600" />
            <span className="text-sm text-slate-600 font-medium">{personalInfo.location}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-6">
            Hey. I'm Viktor —
            <br />
            <span className="text-purple-600">multiplayer</span> &{" "}
            <span className="text-purple-600">systems</span> engineer.
          </h1>

          {/* Bio */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
            {personalInfo.bio}
          </p>

          {/* Role tags */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {personalInfo.roles.map((role) => (
              <Badge
                key={role}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 cursor-default"
              >
                {role}
              </Badge>
            ))}
          </div>

          {/* Social links + CTA */}
          <div className="flex items-center gap-6">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-slate-900/20"
            >
              Get in Touch
              <ArrowDown className="w-4 h-4" />
            </a>

            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: personalInfo.socialLinks.linkedin, label: "LinkedIn" },
                { icon: Globe, href: personalInfo.socialLinks.portfolio, label: "Portfolio" },
                { icon: ExternalLink, href: personalInfo.socialLinks.website, label: "Website" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm border border-purple-100/50 flex items-center justify-center text-slate-500 hover:text-purple-600 hover:border-purple-200 hover:bg-white transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-slate-400 font-medium">Scroll</span>
        <ArrowDown className="w-4 h-4 text-slate-400" />
      </div>
    </section>
  );
};

export default HeroSection;
