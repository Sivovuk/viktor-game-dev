import React, { useState } from "react";
import { personalInfo } from "../data/mock";
import { Send, Mail, User, MessageSquare, CheckCircle } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    // Mock: store in localStorage
    const msgs = JSON.parse(localStorage.getItem("contact_messages") || "[]");
    msgs.push({ ...form, date: new Date().toISOString() });
    localStorage.setItem("contact_messages", JSON.stringify(msgs));
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <span className="inline-block text-purple-600 text-sm font-semibold tracking-wider uppercase mb-3">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Let's build something
              <br />
              amazing together.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Have a game concept you need built? Looking for a senior Unity developer
              to join your team? Or just want to geek out about game architecture?
              I'd love to hear from you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-sm font-medium">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-sm font-medium">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-slate-50/70 rounded-2xl p-8 border border-slate-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <CheckCircle className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-slate-700 mb-1.5 block">
                    Your Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="John Doe"
                      className={`pl-10 bg-white border-slate-200 focus:border-purple-300 focus:ring-purple-200 ${
                        errors.name ? "border-red-300" : ""
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-slate-700 mb-1.5 block">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="john@example.com"
                      className={`pl-10 bg-white border-slate-200 focus:border-purple-300 focus:ring-purple-200 ${
                        errors.email ? "border-red-300" : ""
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-slate-700 mb-1.5 block">
                    Message
                  </Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className={`pl-10 bg-white border-slate-200 focus:border-purple-300 focus:ring-purple-200 resize-none ${
                        errors.message ? "border-red-300" : ""
                      }`}
                    />
                  </div>
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-purple-200/50"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
