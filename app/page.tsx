"use client";

import React, { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"experience" | "expertise" | "leadership" | "philosophy">("experience");
  const [copiedLink, setCopiedLink] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const linkedinUrl = "https://www.linkedin.com/in/lahiru-jayasumana-6b9245157/";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(linkedinUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Background Lighting Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-32 -right-20 w-[35rem] h-[35rem] bg-emerald-500/12 rounded-full blur-[130px]"></div>
        <div className="absolute top-1/2 -left-32 w-[35rem] h-[35rem] bg-teal-500/10 rounded-full blur-[140px]"></div>
        <div className="absolute -bottom-32 right-1/3 w-[35rem] h-[35rem] bg-cyan-500/10 rounded-full blur-[130px]"></div>
      </div>

      {/* Top Header / Sticky Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#070b14]/90 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-emerald-400/80 shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform flex-shrink-0">
              <img
                src="/lahiru-profile.jpg"
                alt="Lahiru Jayasumana"
                className="w-full h-full object-cover object-[50%_15%]"
              />
            </div>
            <div>
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white block group-hover:text-emerald-400 transition-colors">
                Lahiru Jayasumana
              </span>
              <span className="text-[11px] text-emerald-400 font-semibold tracking-wider uppercase block">
                Executive Operations Leader
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Career Milestones</a>
            <a href="#expertise" className="hover:text-emerald-400 transition-colors">Core Domains</a>
            <a href="#leadership" className="hover:text-emerald-400 transition-colors">Leadership & CEO Network</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              title="Copy LinkedIn Profile URL"
              className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-slate-500 text-slate-300 text-xs font-semibold transition-all inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-slate-400" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>{copiedLink ? "Link Copied!" : "Share"}</span>
            </button>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0a66c2] hover:bg-[#004182] text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-[#0a66c2]/25"
            >
              <svg className="w-4 h-4 fill-current flex-shrink-0" width="16" height="16" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.27a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
              </svg>
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Member • Asia CEO Community</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.14]">
                Transformative <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">
                  Global Operations
                </span> <br />
                & Enterprise Leadership
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
                Accomplished Senior Executive orchestrating multinational expansion in{" "}
                <span className="text-emerald-300 font-bold">Sustainable Agribusiness & Commercial Forestry</span> in Madagascar, with a stellar background directing nationwide{" "}
                <span className="text-cyan-300 font-bold">Automotive After-Sales Operations</span> at David Pieris Motor Company.
              </p>

              {/* Verified Executive Role Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* Role 1 */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0e172a] border border-emerald-500/30 hover:border-emerald-400 transition-all shadow-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold uppercase tracking-wide">
                      Active Leadership
                    </span>
                    <span className="text-xs text-slate-400 font-medium">Madagascar</span>
                  </div>
                  <h3 className="text-sm font-extrabold text-white">General Manager</h3>
                  <p className="text-xs text-emerald-400 font-semibold mt-0.5">Sadaharitha Plantations Limited</p>
                  <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
                    Governing multinational forestry assets, agricultural workforce, and cross-border commercial execution.
                  </p>
                </div>

                {/* Role 2 */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0e172a] border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-extrabold uppercase tracking-wide">
                      Automotive Track Record
                    </span>
                    <span className="text-xs text-slate-400 font-medium">Sri Lanka</span>
                  </div>
                  <h3 className="text-sm font-extrabold text-white">Divisional Manager – After Sales</h3>
                  <p className="text-xs text-cyan-400 font-semibold mt-0.5">David Pieris Motor Company (DPMC)</p>
                  <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
                    Led country-wide service franchise networks, warranty governance, and tourism transport fleet campaigns.
                  </p>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#experience"
                  className="px-7 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-sm tracking-wide transition-all shadow-xl shadow-emerald-500/30 inline-flex items-center gap-2 transform hover:-translate-y-0.5"
                >
                  <span>Explore Career Milestones</span>
                  <svg className="w-4 h-4" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm transition-all inline-flex items-center gap-2 transform hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 text-emerald-400" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Get in Touch</span>
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl border border-slate-800 hover:border-[#0a66c2] text-slate-300 hover:text-white transition-all inline-flex items-center gap-2 text-sm"
                >
                  <svg className="w-4 h-4 fill-current text-[#38bdf8]" width="16" height="16" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.27a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                  </svg>
                  <span>Verify Profile</span>
                </a>
              </div>

            </div>

            {/* Right: Authentic Executive Photo Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                
                {/* Glow ring */}
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-emerald-500/40 via-teal-400/20 to-blue-500/30 blur-xl opacity-80"></div>
                
                <div className="relative rounded-3xl bg-[#0b1222] border border-slate-700/80 p-5 shadow-2xl overflow-hidden">
                  
                  {/* Photo frame */}
                  <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-slate-600/60 shadow-inner group">
                    <img
                      src="/lahiru-profile.jpg"
                      alt="Lahiru Jayasumana - Executive Portrait"
                      className="w-full h-full object-cover object-[50%_15%] transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                    {/* Bottom Floating Badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-slate-950/85 border border-slate-700/80 flex items-center justify-between shadow-lg">
                      <div>
                        <div className="text-base font-extrabold text-white">Lahiru Jayasumana</div>
                        <div className="text-xs text-emerald-400 font-semibold">General Manager • Madagascar Operations</div>
                      </div>
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] text-emerald-300 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Verified
                      </span>
                    </div>
                  </div>

                  {/* Highlights Grid below photo */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                      <div className="text-xl font-black text-emerald-400">Madagascar</div>
                      <div className="text-xs text-slate-300 font-medium mt-0.5">Offshore Operations</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                      <div className="text-xl font-black text-cyan-400">Asia CEO</div>
                      <div className="text-xs text-slate-300 font-medium mt-0.5">Exclusive Community</div>
                    </div>
                  </div>

                  {/* Badges footer */}
                  <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Sadaharitha Plantations
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-500"></span> DPMC Alum
                    </span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Quick Metrics Ribbon */}
      <section className="py-8 bg-slate-900/60 border-y border-slate-800/80 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60">
            <div className="text-3xl sm:text-4xl font-black text-white">15+</div>
            <div className="text-xs sm:text-sm font-semibold text-emerald-400 mt-1">Years Strategic Leadership</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60">
            <div className="text-3xl sm:text-4xl font-black text-white">2+</div>
            <div className="text-xs sm:text-sm font-semibold text-teal-400 mt-1">Sovereign Territories (LK & MG)</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60">
            <div className="text-3xl sm:text-4xl font-black text-white">100%</div>
            <div className="text-xs sm:text-sm font-semibold text-cyan-400 mt-1">P&L & Statutory Governance</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60">
            <div className="text-3xl sm:text-4xl font-black text-white">C-Level</div>
            <div className="text-xs sm:text-sm font-semibold text-emerald-300 mt-1">Asia CEO Community Member</div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Executive Dossier</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Career Trajectory & Operational Domains
            </h2>
            <p className="text-slate-300 mt-3 text-sm sm:text-base">
              Click below to explore his track record in multinational agribusiness, automotive engineering, and corporate governance.
            </p>
          </div>

          {/* Interactive Tab Buttons */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
              <button
                onClick={() => setActiveTab("experience")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === "experience"
                    ? "bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Executive Experience
              </button>
              <button
                onClick={() => setActiveTab("expertise")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === "expertise"
                    ? "bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Operational Domains
              </button>
              <button
                onClick={() => setActiveTab("leadership")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === "leadership"
                    ? "bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                CEO Network & Governance
              </button>
            </div>
          </div>

          {/* Tab 1: Experience */}
          {activeTab === "experience" && (
            <div className="space-y-8 max-w-4xl mx-auto">
              
              {/* Role 1 */}
              <div className="relative pl-8 pb-8 border-l-2 border-emerald-500">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-emerald-400 ring-4 ring-emerald-500/25"></div>
                
                <div className="p-7 rounded-2xl bg-[#0c1424] border border-emerald-500/30 shadow-2xl space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">General Manager – Madagascar Operations</h3>
                      <div className="text-emerald-300 font-bold text-base mt-0.5">Sadaharitha Plantations Limited</div>
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-extrabold uppercase tracking-wide">
                      Current Senior Role
                    </span>
                  </div>

                  <p className="text-slate-200 text-sm leading-relaxed">
                    Directing international plantation operations and commercial forestry management for Sadaharitha Plantations Limited in Madagascar. Entrusted with end-to-end P&L accountability, offshore team empowerment, statutory compliance with host-country authorities, and eco-friendly forestry initiatives.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300">
                      <strong className="text-white block mb-1 font-bold">Cross-Border Execution</strong>
                      Managing offshore logistics, heavy equipment operations, and cross-cultural field teams across Madagascar.
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300">
                      <strong className="text-white block mb-1 font-bold">Sustainable Commercial Forestry</strong>
                      Aligning enterprise growth with environmentally responsible forestry stewardship and high investor return frameworks.
                    </div>
                  </div>
                </div>
              </div>

              {/* Role 2 */}
              <div className="relative pl-8">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-cyan-400 ring-4 ring-cyan-500/25"></div>
                
                <div className="p-7 rounded-2xl bg-[#0c1424] border border-cyan-500/30 shadow-2xl space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">Divisional Manager – After Sales Operations</h3>
                      <div className="text-cyan-300 font-bold text-base mt-0.5">David Pieris Motor Company (DPMC)</div>
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-extrabold uppercase tracking-wide">
                      Sri Lanka
                    </span>
                  </div>

                  <p className="text-slate-200 text-sm leading-relaxed">
                    Spearheaded nationwide automotive technical after-sales operations and service network strategy for David Pieris Motor Company (DPMC)—Sri Lanka’s dominant automotive enterprise. Governed technical service centers, spare parts channels, and nationwide dealer satisfaction programs.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300">
                      <strong className="text-white block mb-1 font-bold">Tourism Transport Service Campaigns</strong>
                      Pioneered specialized service support campaigns for three-wheeler mobility operators in key tourism epicenters (such as Galle Fort) to elevate passenger safety and vehicle reliability for international travelers.
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300">
                      <strong className="text-white block mb-1 font-bold">Franchise & Quality Governance</strong>
                      Standardized service performance indicators, warranty integrity, and technical staff development programs across regional branches.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Tab 2: Operational Domains */}
          {activeTab === "expertise" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              <div className="p-6 rounded-2xl bg-[#0c1424] border border-slate-800 hover:border-emerald-400 transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <svg className="w-6 h-6" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Cross-Border Operations</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Proven proficiency in establishing and leading operations in developing and emerging markets, bridging statutory frameworks, navigating cultural nuances, and building robust supply chains.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-800">
                  <li className="flex items-center gap-2">✓ International Project Governance</li>
                  <li className="flex items-center gap-2">✓ Regulatory & Legal Compliance</li>
                  <li className="flex items-center gap-2">✓ Expatriate & Host Country Coordination</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#0c1424] border border-slate-800 hover:border-teal-400 transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                  <svg className="w-6 h-6" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Agribusiness & Sustainability</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Management of large-scale commercial plantations and sustainable timber initiatives combining agricultural science, productivity, and green asset stewardship.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-800">
                  <li className="flex items-center gap-2">✓ Commercial Forestry Stewardship</li>
                  <li className="flex items-center gap-2">✓ Resource Efficiency & Yield Management</li>
                  <li className="flex items-center gap-2">✓ Sustainable Business Modeling</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#0c1424] border border-slate-800 hover:border-cyan-400 transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                  <svg className="w-6 h-6" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Automotive & Fleet Strategy</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Extensive background leading corporate after-sales divisions, technical customer support lines, warranty policy, and service dealer profitability.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-800">
                  <li className="flex items-center gap-2">✓ Technical Support Networks</li>
                  <li className="flex items-center gap-2">✓ Franchise Dealer Performance</li>
                  <li className="flex items-center gap-2">✓ Strategic CSR & Community Campaigns</li>
                </ul>
              </div>

            </div>
          )}

          {/* Tab 3: Leadership & CEO Community */}
          {activeTab === "leadership" && (
            <div className="max-w-4xl mx-auto space-y-6">
              
              <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0c1424] via-slate-900 to-[#0c1424] border border-amber-500/30 shadow-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 font-bold flex-shrink-0">
                    <svg className="w-6 h-6" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Asia CEO Community Member</h3>
                    <p className="text-sm text-amber-400 font-semibold">Prestigious Network of Visionary Asian Corporate Leaders</p>
                  </div>
                </div>
                <p className="text-slate-200 text-sm leading-relaxed">
                  As an inducted member of the Asia CEO Community, Lahiru Jayasumana collaborates with top corporate leaders, founders, and industry pioneers across Asia-Pacific to champion trade innovation, sustainable commercial models, and cross-border partnerships.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#0c1424] border border-slate-800 shadow-xl">
                <h3 className="text-lg font-bold text-white mb-4">Core Executive Competencies</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    "Cross-Border P&L Management",
                    "International Supply Chains",
                    "Sustainable Forestry Strategy",
                    "Fleet & Mobility Operations",
                    "High-Stakes Negotiations",
                    "Expatriate Team Leadership",
                    "Government & Statutory Liaison",
                    "Dealer Franchise Growth",
                    "Corporate Governance"
                  ].map((skill, index) => (
                    <div key={index} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-bold text-slate-200 flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900/40 border-t border-slate-800/80 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border-2 border-emerald-500/40 p-2 bg-gradient-to-b from-emerald-500/20 to-slate-900 shadow-2xl">
                <div className="rounded-2xl overflow-hidden bg-slate-950 aspect-[4/5] relative">
                  <img
                    src="/lahiru-profile.jpg"
                    alt="Lahiru Jayasumana - Profile"
                    className="w-full h-full object-cover object-[50%_15%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white font-extrabold text-lg block">Lahiru Jayasumana</span>
                    <span className="text-emerald-400 text-xs font-bold">General Manager – Madagascar Operations</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-extrabold">Executive Biography</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Architecting sustainable operations and guiding cross-cultural teams to peak performance.
              </h2>
              <p className="text-slate-200 text-sm leading-relaxed">
                Lahiru Jayasumana is an experienced general manager and corporate operations leader specializing in multinational project execution and commercial enterprise scaling. Currently serving as General Manager of Madagascar Operations at Sadaharitha Plantations Limited, he steers the company’s key offshore commercial forestry presence.
              </p>
              <p className="text-slate-200 text-sm leading-relaxed">
                Previously, he spearheaded technical after-sales operations at David Pieris Motor Company, where he distinguished himself through community-centric service campaigns, nationwide dealer franchise development, and high service quality standards across Sri Lanka.
              </p>
              
              <div className="pt-2">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Connect with Lahiru Jayasumana on LinkedIn</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Contact & Inquiry Section */}
      <section id="contact" className="py-20 bg-[#070b14] border-t border-slate-800/80 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Get In Touch</span>
            <h2 className="text-3xl font-extrabold text-white mt-1">Professional Inquiries & Collaborations</h2>
            <p className="text-slate-300 mt-2 text-sm">
              For partnership discussions, corporate consultations, or direct executive connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Direct Channels */}
            <div className="p-6 rounded-2xl bg-[#0c1424] border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white mb-2">Verified Channels</h3>
              
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#0a66c2] transition-all group"
              >
                <div className="p-3 rounded-xl bg-[#0a66c2]/20 text-[#38bdf8] group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 fill-current" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.27a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">LinkedIn Profile</div>
                  <div className="text-xs text-slate-400">linkedin.com/in/lahiru-jayasumana-6b9245157</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <svg className="w-5 h-5" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Current Organization</div>
                  <div className="text-xs text-slate-400">Sadaharitha Plantations Limited</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="p-3 rounded-xl bg-amber-500/20 text-amber-300">
                  <svg className="w-5 h-5" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Executive Network</div>
                  <div className="text-xs text-slate-400">Asia CEO Community</div>
                </div>
              </div>

            </div>

            {/* Interactive Contact Form */}
            <div className="p-6 rounded-2xl bg-[#0c1424] border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-4">Send a Direct Message</h3>
              
              {contactSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-center space-y-2">
                  <div className="text-emerald-400 font-extrabold text-base">Inquiry Recorded Successfully</div>
                  <p className="text-xs text-slate-200">
                    Thank you, {formData.name || "Colleague"}. You can also connect directly via LinkedIn.
                  </p>
                  <button
                    onClick={() => {
                      setContactSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-3 text-xs text-emerald-400 font-bold underline hover:text-emerald-300"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Your Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Michael Chang"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Email / Organization</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. michael@enterprise.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Message / Collaboration Note</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note, proposal, or inquiry here..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-sm transition-all shadow-lg shadow-emerald-500/25"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 border-t border-slate-800/80 bg-[#070b14] px-6 text-center text-xs text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Lahiru Jayasumana. Executive Leadership Profile.</p>
          <div className="flex items-center gap-4">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              LinkedIn
            </a>
            <span>•</span>
            <a href="#about" className="hover:text-emerald-400 transition-colors">
              Sadaharitha Plantations
            </a>
            <span>•</span>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">
              Asia CEO Community
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
