"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"experience" | "expertise" | "leadership">("experience");
  const [messageSent, setMessageSent] = useState(false);

  const linkedinUrl = "https://www.linkedin.com/in/lahiru-jayasumana-6b9245157/";

  return (
    <div className="min-h-screen bg-[#060911] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Background Ambient Lights */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] bg-emerald-600/15 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 -left-40 w-[30rem] h-[30rem] bg-teal-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-40 right-1/4 w-[34rem] h-[34rem] bg-blue-600/10 rounded-full blur-[140px]"></div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#060911]/85 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-emerald-400/40 shadow-lg shadow-emerald-500/20 group-hover:border-emerald-400 transition-all">
              <img
                src="/lahiru-profile.jpg"
                alt="Lahiru Jayasumana"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white block group-hover:text-emerald-400 transition-colors">
                Lahiru Jayasumana
              </span>
              <span className="text-xs text-emerald-400 font-medium tracking-wide">
                General Manager • Operations Executive
              </span>
            </div>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#expertise" className="hover:text-emerald-400 transition-colors">Domains</a>
            <a href="#leadership" className="hover:text-emerald-400 transition-colors">Leadership</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </nav>

          {/* LinkedIn CTA */}
          <div className="flex items-center gap-3">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0077b5]/15 border border-[#0077b5]/50 text-[#38bdf8] hover:bg-[#0077b5]/25 hover:border-[#0077b5] transition-all text-xs sm:text-sm font-semibold shadow-md shadow-[#0077b5]/10"
            >
              <svg className="w-4 h-4 fill-current flex-shrink-0" width="16" height="16" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.27a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
              </svg>
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Asia CEO Community Member</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                Global Operational Leadership & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Multinational Enterprise Scale
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Senior corporate executive driving cross-border operations in{" "}
                <span className="text-white font-semibold">Sustainable Agribusiness & Commercial Forestry</span>{" "}
                in Madagascar, with deep prior leadership in{" "}
                <span className="text-white font-semibold">Automotive After-Sales Engineering Operations</span>{" "}
                at David Pieris Motor Company.
              </p>

              {/* Key Appointments Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/90 flex items-start gap-3.5 backdrop-blur-sm hover:border-emerald-500/30 transition-all">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 mt-0.5 flex-shrink-0">
                    <svg className="w-5 h-5" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider block">Current Role</span>
                    <h4 className="text-sm font-bold text-white">General Manager (Madagascar)</h4>
                    <span className="text-xs text-slate-400 block mt-0.5">Sadaharitha Plantations Limited</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/90 flex items-start gap-3.5 backdrop-blur-sm hover:border-cyan-500/30 transition-all">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 mt-0.5 flex-shrink-0">
                    <svg className="w-5 h-5" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] text-cyan-400 font-bold uppercase tracking-wider block">Prior Leadership</span>
                    <h4 className="text-sm font-bold text-white">Divisional Manager – After Sales</h4>
                    <span className="text-xs text-slate-400 block mt-0.5">David Pieris Motor Company (DPMC)</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#experience"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-extrabold hover:from-emerald-400 hover:to-teal-300 transition-all shadow-lg shadow-emerald-500/25 inline-flex items-center gap-2 text-sm"
                >
                  Explore Track Record
                  <svg className="w-4 h-4" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white font-semibold hover:bg-slate-800 hover:border-slate-600 transition-all inline-flex items-center gap-2 text-sm"
                >
                  Executive Inquiries
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 rounded-xl border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all inline-flex items-center gap-2 text-sm"
                >
                  <svg className="w-4 h-4 fill-current text-[#0077b5]" width="16" height="16" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.27a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>
              </div>

            </div>

            {/* Right: High-Res Executive Photo Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                
                {/* Decorative border halo */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-emerald-500/40 via-teal-500/20 to-blue-500/30 blur-lg opacity-70"></div>
                
                <div className="relative rounded-3xl bg-[#0c1324] border border-slate-700/80 p-5 shadow-2xl overflow-hidden">
                  
                  {/* Photo Container */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-slate-700/60 shadow-inner group">
                    <img
                      src="/lahiru-profile.jpg"
                      alt="Lahiru Jayasumana - Executive Portrait"
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2 rounded-xl backdrop-blur-md bg-slate-950/85 border border-slate-700/80 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">Lahiru Jayasumana</div>
                        <div className="text-[11px] text-emerald-400 font-medium">General Manager</div>
                      </div>
                      <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[10px] text-emerald-300 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Verified
                      </span>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                      <div className="text-lg font-black text-emerald-400">Madagascar</div>
                      <div className="text-[11px] text-slate-400">International Operations</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                      <div className="text-lg font-black text-cyan-400">Asia CEO</div>
                      <div className="text-[11px] text-slate-400">Community Member</div>
                    </div>
                  </div>

                  {/* Badges footer */}
                  <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
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

      {/* Career Timeline Section */}
      <section id="experience" className="py-20 bg-slate-900/40 border-y border-slate-800/80 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Executive Track Record</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Career Timeline & Leadership Milestones
            </h2>
            <p className="text-slate-400 mt-3 text-sm sm:text-base">
              Hands-on leadership governing international commercial agribusiness, resource development, and country-wide automotive operational networks.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800">
              <button
                onClick={() => setActiveTab("experience")}
                className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "experience"
                    ? "bg-emerald-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Executive Experience
              </button>
              <button
                onClick={() => setActiveTab("expertise")}
                className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "expertise"
                    ? "bg-emerald-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Operational Domains
              </button>
              <button
                onClick={() => setActiveTab("leadership")}
                className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "leadership"
                    ? "bg-emerald-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Network & Affiliations
              </button>
            </div>
          </div>

          {/* Tab 1: Experience */}
          {activeTab === "experience" && (
            <div className="space-y-8 max-w-4xl mx-auto">
              
              {/* Role 1 */}
              <div className="relative pl-8 pb-8 border-l-2 border-emerald-500/50">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"></div>
                
                <div className="p-7 rounded-2xl bg-[#0c1324] border border-slate-800 shadow-xl space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">General Manager – Madagascar Operations</h3>
                      <div className="text-emerald-400 font-semibold text-base">Sadaharitha Plantations Limited</div>
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                      Current Executive Role
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    Spearheading international operations and sustainable commercial plantation management for Sadaharitha Plantations Limited in Madagascar. Championing cross-border execution, local workforce governance, host-country regulatory alignment, and environmentally sustainable commercial forestry practices.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300">
                      <strong className="text-white block mb-1 font-bold">Cross-Border Operations & Supply Chain</strong>
                      Leading overseas cultivation projects, resource logistics, and cross-cultural field team leadership in Madagascar.
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300">
                      <strong className="text-white block mb-1 font-bold">Sustainable Commercial Forestry</strong>
                      Maximizing yield and operational longevity while championing ecological stewardship and stakeholder value.
                    </div>
                  </div>
                </div>
              </div>

              {/* Role 2 */}
              <div className="relative pl-8">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-slate-700 ring-4 ring-slate-800"></div>
                
                <div className="p-7 rounded-2xl bg-[#0c1324] border border-slate-800 shadow-xl space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">Divisional Manager – After Sales Operations</h3>
                      <div className="text-cyan-400 font-semibold text-base">David Pieris Motor Company (DPMC)</div>
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-semibold">
                      Sri Lanka
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    Governed nationwide after-sales operations and service network strategy for David Pieris Motor Company (DPMC), Sri Lanka’s premier automotive brand distributor. Steered dealer franchise standards, technical workforce upskilling, warranty management, and customer satisfaction metrics.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300">
                      <strong className="text-white block mb-1 font-bold">Tourism & Transport Service Campaigns</strong>
                      Pioneered targeted servicing campaigns for three-wheeler mobility operators in key tourism epicenters (such as Galle Fort) to elevate safety and vehicle reliability for international travelers.
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300">
                      <strong className="text-white block mb-1 font-bold">Nationwide Service Franchise Governance</strong>
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
              
              <div className="p-6 rounded-2xl bg-[#0c1324] border border-slate-800 hover:border-emerald-500/40 transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                  <svg className="w-6 h-6" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Cross-Border Operations</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Expertise in launching and scaling enterprise operations in emerging international territories, bridging statutory frameworks, and steering multicultural workforces.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-800">
                  <li className="flex items-center gap-2">✓ International Project Governance</li>
                  <li className="flex items-center gap-2">✓ Regulatory & Legal Compliance</li>
                  <li className="flex items-center gap-2">✓ Expatriate & Host Country Coordination</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#0c1324] border border-slate-800 hover:border-teal-500/40 transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold">
                  <svg className="w-6 h-6" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Agribusiness & Sustainability</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Management of large-scale commercial plantations and sustainable timber initiatives combining agricultural science, productivity, and green asset stewardship.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-800">
                  <li className="flex items-center gap-2">✓ Commercial Forestry Stewardship</li>
                  <li className="flex items-center gap-2">✓ Resource Efficiency & Yield Management</li>
                  <li className="flex items-center gap-2">✓ Sustainable Business Modeling</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#0c1324] border border-slate-800 hover:border-cyan-500/40 transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
                  <svg className="w-6 h-6" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Automotive & Fleet Strategy</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
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

          {/* Tab 3: Leadership & Affiliations */}
          {activeTab === "leadership" && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="p-8 rounded-2xl bg-[#0c1324] border border-slate-800 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold flex-shrink-0">
                    <svg className="w-6 h-6" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Asia CEO Community Member</h3>
                    <p className="text-sm text-slate-400">Prestigious Network of Visionary Asian Corporate Leaders</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  As an inducted member of the Asia CEO Community, Lahiru Jayasumana participates in peer exchanges with regional corporate chiefs, founders, and industry trailblazers to exchange strategic insights on international business expansion, sustainability benchmarks, and transformative leadership.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#0c1324] border border-slate-800 shadow-xl">
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
                    <div key={index} className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs font-semibold text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
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
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border-2 border-emerald-500/30 p-2 bg-gradient-to-b from-emerald-500/20 to-slate-900 shadow-2xl">
                <div className="rounded-2xl overflow-hidden bg-slate-950 aspect-[4/5] relative">
                  <img
                    src="/lahiru-profile.jpg"
                    alt="Lahiru Jayasumana - Profile"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white font-bold text-lg block">Lahiru Jayasumana</span>
                    <span className="text-emerald-400 text-xs font-medium">General Manager – Madagascar Operations</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Executive Biography</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Architecting sustainable operations and guiding cross-cultural teams to peak performance.
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Lahiru Jayasumana is an experienced general manager and corporate operations leader specializing in multinational project execution and commercial enterprise scaling. Currently serving as General Manager of Madagascar Operations at Sadaharitha Plantations Limited, he steers the company’s key offshore commercial forestry presence.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Previously, he spearheaded technical after-sales operations at David Pieris Motor Company, where he distinguished himself through community-centric service campaigns, nationwide dealer franchise development, and high service quality standards across Sri Lanka.
              </p>
              
              <div className="pt-2">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Connect with Lahiru Jayasumana on LinkedIn</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/50 border-t border-slate-800/80 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Get In Touch</span>
            <h2 className="text-3xl font-extrabold text-white mt-1">Professional Inquiries & Collaborations</h2>
            <p className="text-slate-400 mt-2 text-sm">
              For partnership discussions, corporate consultations, or direct executive connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Direct Connect Options */}
            <div className="p-6 rounded-2xl bg-[#0c1324] border border-slate-800 space-y-5">
              <h3 className="text-lg font-bold text-white">Direct Connect</h3>
              
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-[#0077b5] transition-all group"
              >
                <div className="p-3 rounded-lg bg-[#0077b5]/15 text-[#38bdf8] group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 fill-current" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.27a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">LinkedIn Profile</div>
                  <div className="text-xs text-slate-400">View Verified Profile & Career History</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="p-3 rounded-lg bg-emerald-500/15 text-emerald-400">
                  <svg className="w-5 h-5" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Corporate Appointment</div>
                  <div className="text-xs text-slate-400">Sadaharitha Plantations Limited</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="p-3 rounded-lg bg-amber-500/15 text-amber-400">
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

            {/* Quick Contact Form */}
            <div className="p-6 rounded-2xl bg-[#0c1324] border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-4">Send a Message</h3>
              
              {messageSent ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <div className="text-emerald-400 font-bold text-base">Inquiry Submitted Successfully</div>
                  <p className="text-xs text-slate-300">
                    Thank you. You can also connect directly via his LinkedIn profile.
                  </p>
                  <button
                    onClick={() => setMessageSent(false)}
                    className="mt-3 text-xs text-emerald-400 underline hover:text-emerald-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setMessageSent(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. John Smith"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email / Organization</label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. john@enterprise.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Inquiry / Note</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Write your note or collaboration inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20"
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
      <footer className="mt-auto py-8 border-t border-slate-800/80 bg-[#060911] px-6 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Lahiru Jayasumana. All rights reserved.</p>
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
