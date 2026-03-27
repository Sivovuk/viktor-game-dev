import React from "react";
import { personalInfo } from "../data/mock";
import { Gamepad2, Linkedin, Globe, ExternalLink, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
                <Gamepad2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-sm tracking-tight">
                {personalInfo.name.split(" ")[0].toLowerCase()}
                <span className="text-purple-400">.dev</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              Senior Unity Developer & Systems Engineer based in {personalInfo.location}.
              Building multiplayer systems that scale.
            </p>
          </div>

          {/* Social + Back to top */}
          <div className="flex items-center gap-4">
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
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:bg-slate-700 transition-all duration-200"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-9 h-9 rounded-lg bg-purple-600 flex items-center justify-center text-white hover:bg-purple-500 transition-all duration-200 ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Crafted with passion & caffeine
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
