"use client";

import React, { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"experience" | "expertise" | "leadership" | "about">("experience");
  const [messageSent, setMessageSent] = useState(false);

  const linkedinUrl = "https://www.linkedin.com/in/lahiru-jayasumana-6b9245157/";

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#070b14]/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-bold text-slate-950 text-lg shadow-lg shadow-emerald-500/20">
              LJ
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white block">Lahiru Jayasumana</span>
              <span className="text-xs text-emerald-400 font-medium">Executive Operations Leader</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Career Timeline</a>
            <a href="#expertise" className="hover:text-emerald-400 transition-colors">Core Strengths</a>
            <a href="#leadership" className="hover:text-emerald-400 transition-colors">Leadership Impact</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0077b5]/15 border border-[#0077b5]/40 text-[#38bdf8] hover:bg-[#0077b5]/25 hover:border-[#0077b5] transition-all text-sm font-semibold shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.27a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
              </svg>
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Intro */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Member, Asia CEO Community
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Driving Transformative <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Global Operations
                </span>{" "}
                & Business Growth
              </h1>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Senior corporate executive with extensive cross-border leadership across{" "}
                <span className="text-white font-medium">Sustainable Agribusiness</span>,{" "}
                <span className="text-white font-medium">Commercial Forestry</span>, and{" "}
                <span className="text-white font-medium">Automotive After-Sales Operations</span>.
              </p>

              {/* Current Role Card Highlight */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-4 backdrop-blur-sm">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 mt-1">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Current Executive Position</div>
                  <div className="text-base font-bold text-white">General Manager – Madagascar Operations</div>
                  <div className="text-sm text-emerald-300 font-medium">Sadaharitha Plantations Limited</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#experience"
                  className="px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 inline-flex items-center gap-2"
                >
                  Explore Track Record
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white font-semibold hover:bg-slate-800 hover:border-slate-600 transition-all inline-flex items-center gap-2"
                >
                  Get In Touch
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors inline-flex items-center gap-2 text-sm"
                  title="View LinkedIn Profile"
                >
                  <svg className="w-5 h-5 fill-current text-[#0077b5]" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.27a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Right Column: Key Stats & Leadership Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/90 border border-slate-700/60 p-8 shadow-2xl backdrop-blur-xl">
                <div className="absolute -top-3 -right-3 bg-emerald-500 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  Executive Profile
                </div>

                <div className="flex items-center gap-5 pb-6 border-b border-slate-800">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-slate-950 font-extrabold text-3xl shadow-lg shadow-teal-500/20">
                    LJ
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Lahiru Jayasumana</h3>
                    <p className="text-sm text-slate-400">Sri Lanka & Madagascar</p>
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Verified Professional Profile
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 py-6 border-b border-slate-800">
                  <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
                    <div className="text-2xl font-bold text-emerald-400">Multi-Country</div>
                    <div className="text-xs text-slate-400 mt-1">Cross-Border Operations (LK & MG)</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
                    <div className="text-2xl font-bold text-cyan-400">C-Level</div>
                    <div className="text-xs text-slate-400 mt-1">Asia CEO Community Member</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
                    <div className="text-2xl font-bold text-teal-400">Operational</div>
                    <div className="text-xs text-slate-400 mt-1">Agribusiness & Commercial Forestry</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
                    <div className="text-2xl font-bold text-blue-400">Engineering</div>
                    <div className="text-xs text-slate-400 mt-1">Automotive After-Sales Leadership</div>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Leadership Pillars</div>
                  <div className="flex flex-wrap gap-2">
                    {["Strategic P&L Management", "Sustainable Forestry", "Emerging Market Expansion", "Large-scale Team Leadership", "Stakeholder Relations"].map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Navigation Tabs for In-depth Profile */}
      <section id="experience" className="py-16 bg-slate-900/40 border-y border-slate-800/60 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Career Milestones & Leadership Journey</h2>
            <p className="text-slate-400 mt-3 text-base">
              A proven track record spanning multinational commercial forestry expansion and nationwide automotive operational excellence.
            </p>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800">
              <button
                onClick={() => setActiveTab("experience")}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === "experience"
                    ? "bg-emerald-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Executive Experience
              </button>
              <button
                onClick={() => setActiveTab("expertise")}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === "expertise"
                    ? "bg-emerald-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Operational Domains
              </button>
              <button
                onClick={() => setActiveTab("leadership")}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === "leadership"
                    ? "bg-emerald-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Affiliations & Impact
              </button>
            </div>
          </div>

          {/* Tab 1: Experience */}
          {activeTab === "experience" && (
            <div className="space-y-8 max-w-4xl mx-auto">
              
              {/* Role 1 */}
              <div className="relative pl-8 pb-8 border-l-2 border-emerald-500/50 last:border-0 last:pb-0">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"></div>
                
                <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">General Manager – Madagascar Operations</h3>
                      <div className="text-emerald-400 font-semibold text-base">Sadaharitha Plantations Limited</div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                      Current Executive Role
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    Spearheading international operations and sustainable commercial plantation management for Sadaharitha Plantations in Madagascar. Driving overseas project execution, regulatory compliance, community relations, resource optimization, and sustainable agribusiness practices across international operations.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300">
                      <strong className="text-white block mb-1">Cross-Border Execution</strong>
                      Managing end-to-end logistics, local workforce empowerment, and agricultural asset cultivation in Madagascar.
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300">
                      <strong className="text-white block mb-1">Sustainable Commercial Forestry</strong>
                      Aligning enterprise growth with environmentally sustainable forestry frameworks and long-term investor value.
                    </div>
                  </div>
                </div>
              </div>

              {/* Role 2 */}
              <div className="relative pl-8 pb-8 border-l-2 border-slate-700/50 last:border-0 last:pb-0">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-slate-700 ring-4 ring-slate-800"></div>
                
                <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">Divisional Manager – After Sales Operations</h3>
                      <div className="text-cyan-400 font-semibold text-base">David Pieris Motor Company (DPMC)</div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-semibold">
                      Sri Lanka
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    Led strategic after-sales operations and service network management at David Pieris Motor Company (DPMC)—Sri Lanka’s flagship automotive distribution organization. Championed customer experience, technical operations, service dealership networks, and high-impact stakeholder outreach.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300">
                      <strong className="text-white block mb-1">Community & Industry Initiatives</strong>
                      Pioneered specialized service support campaigns for transport operators in tourist hubs (such as Galle Fort) to elevate safety, performance, and visitor hospitality.
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300">
                      <strong className="text-white block mb-1">Operational Scalability</strong>
                      Strengthened nationwide dealer service performance, warranty governance, and technical personnel training programs.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Tab 2: Operational Domains */}
          {activeTab === "expertise" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Cross-Border Operations</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Proven proficiency in establishing and leading operations in developing and emerging markets, bridging regulatory frameworks, navigating cultural nuances, and building robust supply chains.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-800">
                  <li className="flex items-center gap-2">✓ International Project Leadership</li>
                  <li className="flex items-center gap-2">✓ Regulatory & Statutory Compliance</li>
                  <li className="flex items-center gap-2">✓ Expatriate & Local Team Coordination</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-teal-500/40 transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Agribusiness & Sustainability</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Expertise in managing large-scale commercial plantations and sustainable agriculture initiatives with rigorous yield optimization and long-term environmental value creation.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-800">
                  <li className="flex items-center gap-2">✓ Commercial Forestry Stewardship</li>
                  <li className="flex items-center gap-2">✓ Resource Efficiency & Field Management</li>
                  <li className="flex items-center gap-2">✓ Eco-Friendly Enterprise Operations</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Automotive & Fleet Strategy</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Deep background in leading technical after-sales divisions, service franchise networks, warranty governance, and customer retention programs for mobility leaders.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-800">
                  <li className="flex items-center gap-2">✓ Technical Support Ecosystems</li>
                  <li className="flex items-center gap-2">✓ Dealer Network Performance</li>
                  <li className="flex items-center gap-2">✓ Stakeholder Campaigns & CSR</li>
                </ul>
              </div>

            </div>
          )}

          {/* Tab 3: Leadership & Community */}
          {activeTab === "leadership" && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Asia CEO Community Member</h3>
                    <p className="text-sm text-slate-400">Prestigious Network of Top Asian Business Executives</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Active member of the Asia CEO Community, collaborating with regional corporate decision-makers, industry pioneers, and business executives to foster cross-border partnerships, trade innovation, and modern leadership methodologies across the Asia-Pacific region.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-3">Core Executive Competencies</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  {[
                    "Executive Decision Making",
                    "P&L / Budget Responsibility",
                    "Cross-Cultural Leadership",
                    "Strategic Operations Planning",
                    "Vendor & Dealer Negotiation",
                    "Turnaround & Change Management",
                    "Corporate Governance",
                    "Customer Experience Leadership",
                    "Sustainable Business Modeling"
                  ].map((skill, index) => (
                    <div key={index} className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs font-medium text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      {skill}
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
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <div className="rounded-2xl p-1 bg-gradient-to-tr from-emerald-500/40 via-teal-500/20 to-slate-800">
                <div className="rounded-2xl bg-slate-950 p-8 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center font-black text-slate-950 text-2xl">
                    LJ
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Lahiru Jayasumana</h3>
                    <p className="text-emerald-400 text-sm font-semibold">General Manager – Madagascar Operations</p>
                    <p className="text-slate-400 text-xs mt-1">Sadaharitha Plantations Limited</p>
                  </div>
                  <div className="pt-4 border-t border-slate-800/80 space-y-3 text-xs text-slate-400">
                    <div className="flex items-center justify-between">
                      <span>Location</span>
                      <span className="text-white font-medium">Sri Lanka / Madagascar</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Executive Status</span>
                      <span className="text-emerald-400 font-medium">Active Member, Asia CEO Community</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Core Sectors</span>
                      <span className="text-white font-medium">Agribusiness & Automotive</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Executive Bio</span>
              <h2 className="text-3xl font-bold text-white leading-tight">
                Empowering teams and spearheading cross-border enterprise initiatives.
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Lahiru Jayasumana is an established corporate leader with hands-on management expertise across international plantation agribusiness and domestic automotive operations. As the General Manager of Madagascar Operations at Sadaharitha Plantations Limited, he oversees strategic execution and field governance in one of the company’s most pivotal overseas territories.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Prior to his international posting, he served as Divisional Manager (After Sales Operations) at David Pieris Motor Company, where he distinguished himself through community-centric service campaigns, nationwide dealer support, and high customer satisfaction standards.
              </p>
              <div className="pt-2">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  View complete professional profile on LinkedIn &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/50 border-t border-slate-800/80 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white">Connect & Inquire</h2>
            <p className="text-slate-400 mt-2 text-sm">
              For executive consultations, partnership opportunities, or professional inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Direct Connect Options */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white">Official Channels</h3>
              
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#0077b5] transition-all group"
              >
                <div className="p-3 rounded-lg bg-[#0077b5]/10 text-[#38bdf8] group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.27a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">LinkedIn Profile</div>
                  <div className="text-xs text-slate-400">linkedin.com/in/lahiru-jayasumana-6b9245157</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Current Organization</div>
                  <div className="text-xs text-slate-400">Sadaharitha Plantations Limited</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-4">Send a Message</h3>
              
              {messageSent ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <div className="text-emerald-400 font-bold text-lg">Thank you!</div>
                  <p className="text-xs text-slate-300">
                    Your inquiry has been logged. You may also connect directly via the LinkedIn button.
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
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email / Organization</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Message</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Write your note or inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-colors shadow-lg shadow-emerald-500/20"
                  >
                    Send Inquiries
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 border-t border-slate-800/80 bg-[#070b14] px-6 text-center text-xs text-slate-500">
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
