"use client";

import React, { useState } from "react";
import "@/lib/firebase";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"operations" | "automotive" | "governance">("operations");
  const [copiedLink, setCopiedLink] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const linkedinUrl = "https://www.linkedin.com/in/lahiru-jayasumana-6b9245157/";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(linkedinUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessageSent(true);
  };

  return (
    <div className="min-h-screen bg-[#080e21] text-slate-100 flex flex-col font-sans selection:bg-[#e63946]/30 selection:text-white">
      
      {/* Top Header / Navbar */}
      <header className="sticky top-0 z-50 bg-[#080e21]/95 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#e63946] flex items-center justify-center font-black text-white text-lg shadow-md shadow-[#e63946]/30 group-hover:scale-105 transition-transform">
              LJ
            </div>
            <div>
              <span className="font-black text-lg tracking-wider text-white uppercase block leading-tight group-hover:text-[#e63946] transition-colors">
                Lahiru Jayasumana
              </span>
              <span className="text-[10px] text-red-400 font-bold tracking-widest uppercase block">
                Executive Operations Leader
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-300">
            <a href="#about" className="hover:text-[#e63946] transition-colors">About</a>
            <a href="#domains" className="hover:text-[#e63946] transition-colors">Key Domains</a>
            <a href="#experience" className="hover:text-[#e63946] transition-colors">Track Record</a>
            <a href="#governance" className="hover:text-[#e63946] transition-colors">CEO Community</a>
            <a href="#contact" className="hover:text-[#e63946] transition-colors">Contact</a>
          </nav>

          {/* Header Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-slate-900 border border-slate-700 text-slate-300 text-xs font-bold hover:border-slate-500 transition-all"
            >
              <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>{copiedLink ? "Copied!" : "Share Profile"}</span>
            </button>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#e63946] hover:bg-[#d90429] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#e63946]/30"
            >
              <span>Connect Now</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>
      </header>

      {/* Hero Section (Senator / Campaign Executive Style) */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 px-6 bg-[#080e21] overflow-hidden">
        
        {/* Subtle red architectural backdrop glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#e63946]/10 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Campaign / Executive Badge */}
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-red-400">
                <span className="w-2 h-2 rounded-full bg-[#e63946]"></span>
                <span>EXECUTIVE PROFILE • 2026</span>
              </div>

              {/* Bold Headline with Red Accent */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.1]">
                A Track Record For <br />
                <span className="text-[#e63946] relative inline-block">
                  Transformative Scale
                  {/* Stylized Red Underline Brush */}
                  <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#e63946] rounded-full"></span>
                </span>
              </h1>

              {/* Mission / Narrative text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal pt-2">
                Proven corporate leader steering multinational commercial expansion as{" "}
                <span className="text-white font-bold">General Manager (Madagascar Operations)</span> at Sadaharitha Plantations Limited, with an extensive legacy as{" "}
                <span className="text-white font-bold">Divisional Manager (After Sales)</span> at David Pieris Motor Company.
              </p>

              {/* Metrics / Countdown-style Blue Cells (Exact Match to Senatory Design) */}
              <div className="grid grid-cols-4 gap-3 max-w-xl pt-2">
                <div className="p-3.5 rounded-lg bg-[#0e1738] border border-blue-900/60 text-center shadow-lg">
                  <div className="text-2xl sm:text-3xl font-black text-white">15+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Years</div>
                </div>
                <div className="p-3.5 rounded-lg bg-[#0e1738] border border-blue-900/60 text-center shadow-lg">
                  <div className="text-2xl sm:text-3xl font-black text-white">02</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Nations</div>
                </div>
                <div className="p-3.5 rounded-lg bg-[#0e1738] border border-blue-900/60 text-center shadow-lg">
                  <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">P&L Scale</div>
                </div>
                <div className="p-3.5 rounded-lg bg-[#0e1738] border border-blue-900/60 text-center shadow-lg">
                  <div className="text-2xl sm:text-3xl font-black text-[#e63946]">CEO</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Member</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#experience"
                  className="px-8 py-3.5 rounded-md bg-[#e63946] hover:bg-[#d90429] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#e63946]/30 inline-flex items-center gap-2"
                >
                  <span>Explore Track Record</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <a
                  href="#about"
                  className="px-7 py-3.5 rounded-md bg-transparent border-2 border-slate-700 hover:border-white text-white font-extrabold text-xs uppercase tracking-wider transition-all"
                >
                  Meet The Executive
                </a>
              </div>

            </div>

            {/* Right: Speaker Podium Photo with Senatory Badge */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                
                {/* Red "EXECUTIVE / LEADERSHIP" Badge top right */}
                <div className="absolute -top-4 -right-4 z-20 bg-white text-slate-900 px-4 py-2.5 rounded shadow-2xl border-2 border-[#e63946] text-center">
                  <div className="text-[11px] font-black text-[#e63946] tracking-widest uppercase">GENERAL MANAGER</div>
                  <div className="text-xs font-black tracking-tight text-slate-950">MADAGASCAR OPERATIONS</div>
                </div>

                {/* Main Photo Card */}
                <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-[#0c1428] aspect-[4/5]">
                  <img
                    src="/lahiru-profile.jpg"
                    alt="Lahiru Jayasumana - Official Event Address"
                    className="w-full h-full object-cover object-[50%_15%]"
                  />

                  {/* Gradient shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080e21] via-transparent to-transparent opacity-80"></div>

                  {/* Bottom title strip */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-[#080e21]/90 border border-slate-800 backdrop-blur-sm">
                    <div className="text-xs font-bold text-red-400 uppercase tracking-wider">Sadaharitha Plantations Limited</div>
                    <div className="text-base font-black text-white">Lahiru Jayasumana</div>
                    <div className="text-[11px] text-slate-300 mt-0.5">Asia CEO Community Member</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3-Column White Section (Exact Match to Senatory Middle Block) */}
      <section id="domains" className="py-20 bg-white text-slate-900 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-[#e63946]">Core Operational Pillars</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mt-1 uppercase tracking-tight">
              Strategic Domains of Impact
            </h2>
            <div className="w-16 h-1 bg-[#e63946] mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Agribusiness & Commercial Forestry */}
            <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-lg bg-red-50 text-[#e63946] border border-red-100 flex items-center justify-center mb-6 group-hover:bg-[#e63946] group-hover:text-white transition-all">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-950 uppercase tracking-tight mb-3">
                  Cross-Border Agribusiness
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Steering offshore commercial plantation expansion in Madagascar, championing regulatory statutory liaison, resource logistics, and sustainable forestry governance.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#e63946] uppercase">
                <span>Sadaharitha Plantations</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>

            {/* Card 2: Automotive After-Sales Strategy */}
            <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-lg bg-red-50 text-[#e63946] border border-red-100 flex items-center justify-center mb-6 group-hover:bg-[#e63946] group-hover:text-white transition-all">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-950 uppercase tracking-tight mb-3">
                  Automotive Network Operations
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Led after-sales technical excellence at David Pieris Motor Company, governing nationwide service dealer networks, warranty benchmarks, and tourism mobility campaigns.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#e63946] uppercase">
                <span>David Pieris Motor Co.</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>

            {/* Card 3: Asia CEO Community & Governance */}
            <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-lg bg-red-50 text-[#e63946] border border-red-100 flex items-center justify-center mb-6 group-hover:bg-[#e63946] group-hover:text-white transition-all">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-950 uppercase tracking-tight mb-3">
                  Executive CEO Stewardship
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Active member of the Asia CEO Community, collaborating with regional decision-makers to champion trade innovation, corporate governance, and sustainable business models.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#e63946] uppercase">
                <span>Asia CEO Community</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* "MEET WITH OUR CANDIDATE" Split Section (Exact Match to Senatory Bottom Block) */}
      <section id="about" className="py-20 bg-[#080e21] text-slate-100 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Professional Portrait / Speaker Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-black">
                <img
                  src="/lahiru-profile.jpg"
                  alt="Lahiru Jayasumana - Executive Speaker"
                  className="w-full h-auto object-cover object-[50%_15%]"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6">
                  <div className="text-xs font-black uppercase text-red-400 tracking-wider">Executive Speaker</div>
                  <div className="text-xl font-black text-white">Lahiru Jayasumana</div>
                  <div className="text-xs text-slate-300">General Manager • Sadaharitha Plantations</div>
                </div>
              </div>
            </div>

            {/* Right: Navy Content Box with Red Highlights */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#e63946]">
                <span>★ ABOUT THE EXECUTIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight">
                Meet With Our <br />
                <span className="text-[#e63946]">Operations Leader</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Lahiru Jayasumana is an established corporate leader with hands-on management expertise across international plantation agribusiness and domestic automotive operations. As the General Manager of Madagascar Operations at Sadaharitha Plantations Limited, he oversees strategic execution and field governance in one of the company’s most pivotal overseas territories.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Prior to his international posting, he served as Divisional Manager (After Sales Operations) at David Pieris Motor Company, where he distinguished himself through community-centric service campaigns, nationwide dealer support, and high customer satisfaction standards.
              </p>

              {/* Blue Highlight Banner (Exact Match to Senatory Box) */}
              <div className="p-5 rounded-lg bg-[#0e1738] border border-blue-800/80">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Track Record</div>
                <div className="text-base sm:text-lg font-black text-white uppercase tracking-tight mt-1">
                  Successfully Providing Operational Excellence for Over 15 Years
                </div>
              </div>

              {/* Red Action Button */}
              <div className="pt-2">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-md bg-[#e63946] hover:bg-[#d90429] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#e63946]/30 inline-flex items-center gap-2"
                >
                  <span>Connect On LinkedIn</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Experience & Career Milestones Section */}
      <section id="experience" className="py-20 bg-[#060b1a] px-6 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e63946]">Verified Career Timeline</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-1 uppercase tracking-tight">
              Executive Appointments
            </h2>
            <div className="w-16 h-1 bg-[#e63946] mx-auto mt-3"></div>
          </div>

          <div className="space-y-8">
            
            {/* Timeline Item 1 */}
            <div className="p-8 rounded-xl bg-[#0e1738] border border-slate-700/80 shadow-xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-widest block">Current Position</span>
                  <h3 className="text-2xl font-black text-white uppercase">General Manager – Madagascar Operations</h3>
                  <div className="text-sm font-bold text-slate-300 mt-1">Sadaharitha Plantations Limited</div>
                </div>
                <span className="px-3 py-1 rounded bg-[#e63946] text-white text-xs font-black uppercase tracking-wider">
                  Madagascar
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Directing international operations and sustainable commercial plantation management for Sadaharitha Plantations in Madagascar. Driving overseas project execution, regulatory compliance, community relations, resource optimization, and sustainable commercial forestry.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="p-8 rounded-xl bg-[#0e1738] border border-slate-700/80 shadow-xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">Prior Leadership</span>
                  <h3 className="text-2xl font-black text-white uppercase">Divisional Manager – After Sales Operations</h3>
                  <div className="text-sm font-bold text-slate-300 mt-1">David Pieris Motor Company (DPMC)</div>
                </div>
                <span className="px-3 py-1 rounded bg-slate-800 text-slate-300 text-xs font-black uppercase tracking-wider">
                  Sri Lanka
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Governed country-wide after-sales operations and service network management at David Pieris Motor Company (DPMC). Led customer satisfaction, dealer service franchise standards, warranty governance, and tourism transport support campaigns in Galle Fort.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white text-slate-900 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#e63946]">Direct Communications</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mt-1 uppercase tracking-tight">
              Connect & Collaborate
            </h2>
            <div className="w-16 h-1 bg-[#e63946] mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Left: Contact Info Cards */}
            <div className="space-y-4">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-lg bg-slate-50 border border-slate-200 hover:border-[#e63946] transition-all flex items-center gap-4 block group"
              >
                <div className="w-12 h-12 rounded bg-[#0a66c2] text-white flex items-center justify-center font-bold">
                  in
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">LinkedIn Profile</div>
                  <div className="text-sm font-black text-slate-900 group-hover:text-[#e63946]">
                    linkedin.com/in/lahiru-jayasumana
                  </div>
                </div>
              </a>

              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-[#080e21] text-white flex items-center justify-center font-bold">
                  GM
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Corporate Role</div>
                  <div className="text-sm font-black text-slate-900">
                    Sadaharitha Plantations Limited
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-[#e63946] text-white flex items-center justify-center font-bold">
                  CEO
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Network Membership</div>
                  <div className="text-sm font-black text-slate-900">
                    Asia CEO Community
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="p-8 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-black text-slate-950 uppercase mb-4">Send An Executive Inquiry</h3>
              
              {messageSent ? (
                <div className="p-6 rounded-lg bg-red-50 border border-red-200 text-center space-y-2">
                  <div className="text-[#e63946] font-black text-base uppercase">Message Recorded</div>
                  <p className="text-xs text-slate-600">
                    Thank you. You may also connect directly via the LinkedIn profile.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#e63946]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@organization.com"
                      className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#e63946]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note or collaboration proposal..."
                      className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#e63946] resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded bg-[#e63946] hover:bg-[#d90429] text-white font-black text-xs uppercase tracking-widest transition-all shadow-md shadow-[#e63946]/30"
                  >
                    Submit Note
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#040813] text-slate-400 text-xs text-center border-t border-slate-800 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Lahiru Jayasumana. Executive Leadership Profile.</p>
          <div className="flex items-center gap-6 font-bold uppercase text-[11px]">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#e63946] transition-colors">
              LinkedIn
            </a>
            <span>•</span>
            <a href="#about" className="hover:text-[#e63946] transition-colors">
              Sadaharitha Plantations
            </a>
            <span>•</span>
            <a href="#experience" className="hover:text-[#e63946] transition-colors">
              Asia CEO Community
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
