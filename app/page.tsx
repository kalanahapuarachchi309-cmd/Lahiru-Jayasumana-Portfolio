"use client";

import React, { useState } from "react";
import "@/lib/firebase";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"candidacy" | "experience" | "domains" | "leadership">("candidacy");
  const [showPosterModal, setShowPosterModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", batch: "", message: "" });

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
    <div className="min-h-screen bg-[#11030c] text-slate-100 flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-[#f3e5ab]">
      
      {/* Ambient Lighting Gradients with Smooth Breathing Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-32 -right-20 w-[42rem] h-[42rem] bg-[#6b1143]/20 rounded-full blur-[150px] animate-pulse-glow"></div>
        <div className="absolute top-1/3 -left-32 w-[38rem] h-[38rem] bg-[#d4af37]/10 rounded-full blur-[160px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-[42rem] h-[42rem] bg-[#8b1538]/15 rounded-full blur-[150px] animate-pulse-glow"></div>
      </div>

      {/* Top Header / Sticky Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur-2xl bg-[#11030c]/90 border-b border-[#d4af37]/25 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-3">
          
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border-2 border-[#d4af37] shadow-lg shadow-[#d4af37]/20 group-hover:scale-105 transition-transform flex-shrink-0 bg-[#2b061c]">
              <img
                src="/lahiru-profile.jpg"
                alt="Lahiru Jayasumana"
                className="w-full h-full object-cover object-[50%_15%]"
              />
            </div>
            <div className="min-w-0 max-w-[190px] xs:max-w-[240px] sm:max-w-none">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-black text-sm sm:text-base lg:text-lg tracking-wide text-white uppercase group-hover:text-[#ffd700] transition-colors truncate">
                  Lahiru Jayasumana
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] sm:text-[11px] font-black bg-gradient-to-r from-[#d4af37] to-[#e5c158] text-slate-950 uppercase shadow-sm flex-shrink-0">
                  MBA
                </span>
              </div>
              
              {/* Mobile: Ticker marquee animation so full title is visible without truncation */}
              <div className="block sm:hidden overflow-hidden w-full relative">
                <div className="animate-marquee text-[10px] text-[#ffd700] font-bold tracking-wider uppercase">
                  <span>Senior Management • OBU Vice President Candidate&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
                  <span>Senior Management • OBU Vice President Candidate&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
                </div>
              </div>

              {/* Desktop & Tablet: Static clean text */}
              <span className="hidden sm:block text-[11px] text-[#e5c158] font-bold tracking-wider uppercase">
                Senior Management • OBU Vice President Candidate
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-black uppercase tracking-wider text-slate-200">
            <a href="#campaign" className="hover:text-[#ffd700] transition-colors text-[#ffd700] flex items-center gap-1">
              <span>OBU Candidacy</span>
            </a>
            <a href="#about" className="hover:text-[#ffd700] transition-colors">About</a>
            <a href="#experience" className="hover:text-[#ffd700] transition-colors">Experience</a>
            <a href="#domains" className="hover:text-[#ffd700] transition-colors">Key Domains</a>
            <a href="#contact" className="hover:text-[#ffd700] transition-colors">Contact</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={handleCopyLink}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#200516] border border-[#d4af37]/40 text-[#f3e5ab] text-xs font-bold hover:border-[#ffd700] transition-all shadow"
            >
              <svg className="w-3.5 h-3.5 text-[#ffd700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>{copiedLink ? "Copied!" : "Share Profile"}</span>
            </button>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#e5c158] hover:brightness-110 text-slate-950 font-black text-[11px] sm:text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#d4af37]/25 transform hover:-translate-y-0.5"
            >
              <span>LinkedIn</span>
              <span className="hidden sm:inline">Profile</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 px-4 sm:px-6 bg-[#11030c] overflow-hidden">
        
        {/* Soft atmospheric gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#6b1143]/20 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Featured Campaign Poster Showcase (Shows FIRST on mobile: order-1, and on right on desktop: lg:order-2) */}
            <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-sm sm:max-w-md animate-float-gentle">
                
                {/* Radiant Golden Glow Ring */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#d4af37]/35 via-[#8b1538]/25 to-[#ffd700]/30 blur-2xl opacity-75"></div>
                
                <div className="relative rounded-2xl bg-[#200516] border-2 border-[#d4af37] p-2.5 shadow-2xl overflow-hidden transition-all duration-300 hover:border-[#ffd700]">
                  
                  {/* Poster Image Container */}
                  <div
                    onClick={() => setShowPosterModal(true)}
                    className="relative rounded-xl overflow-hidden shadow-inner aspect-[7/10] w-full cursor-pointer group"
                  >
                    <img
                      src="/hcc-campaign-poster.jpg"
                      alt="Holy Cross College Kalutara - Lahiru Jayasumana OBU Vice President Candidacy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#11030c]/55 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center backdrop-blur-[2px]">
                      <div className="w-14 h-14 rounded-full bg-[#d4af37] text-slate-950 flex items-center justify-center mb-3 shadow-xl shadow-[#d4af37]/40 transform group-hover:scale-110 transition-transform">
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                      <span className="text-white font-black text-sm uppercase tracking-wider">Click to Expand Poster</span>
                      <span className="text-[#ffd700] text-xs font-semibold mt-1">High-Resolution Campaign Card</span>
                    </div>
                  </div>

                  {/* Clean Credentials Footer Bar */}
                  <div className="mt-2.5 p-3 sm:p-3.5 rounded-xl bg-[#11030c] border border-[#d4af37]/30 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">Election 2026</div>
                      <div className="text-xs sm:text-sm font-black text-[#ffd700] flex items-center gap-1.5 mt-0.5">
                        <span>Candidate for OBU Vice President</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setShowPosterModal(true)}
                      className="px-3 py-1.5 rounded-lg bg-[#2f071f] hover:bg-[#450b2e] border border-[#d4af37]/60 text-[#f3e5ab] text-xs font-black uppercase tracking-wider transition-colors flex items-center gap-1"
                    >
                      <span>Expand</span>
                      <svg className="w-3.5 h-3.5 text-[#ffd700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </button>
                  </div>

                </div>
              </div>
            </div>

            {/* Left Content Column (Shows SECOND on mobile: order-2, and on left on desktop: lg:order-1) */}
            <div className="order-2 lg:order-1 lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badges Row - Centered on mobile, left on desktop */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2f071f] border border-[#d4af37]/60 text-[#ffd700] text-xs font-black uppercase tracking-wider shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#ffd700]"></span>
                  Holy Cross College Kalutara
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#1e0514] border border-slate-700/80 text-slate-300 text-xs font-bold uppercase tracking-wider">
                  College Head Prefect 2000–2001
                </span>
              </div>

              {/* Main Headline - Centered on mobile, left on desktop */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.15] text-balance">
                Lahiru Jayasumana <span className="text-[#ffd700] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">(MBA)</span>
                <span className="block mt-2 gold-shimmer-text">
                  Candidate for College OBU Vice President
                </span>
              </h1>

              {/* Campaign Motto Box - Centered on mobile, left on desktop */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#32071f] via-[#240516] to-[#1a0410] border-y sm:border-y-0 sm:border-l-4 border-[#d4af37] shadow-2xl relative overflow-hidden text-left sm:text-center lg:text-left">
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-28 h-28 bg-[#d4af37]/5 rounded-full blur-2xl"></div>
                <p className="text-sm sm:text-base font-extrabold text-[#f3e5ab] italic tracking-wide">
                  &ldquo;Your Support. Our Alma Mater. A Stronger Future.&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                  &ldquo;I humbly seek the fullest cooperation and support of all OBU members to uplift our Alma Mater and take our college community forward.&rdquo; <span className="text-[#ffd700] font-black">GOD BLESS 🙏</span>
                </p>
              </div>

              {/* Professional Narrative */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal text-balance">
                Senior Corporate Executive with <span className="text-[#ffd700] font-bold">25 Years of Local & International Experience</span> in Senior Management & the Automotive Sector. Currently serving as <span className="text-white font-bold">General Manager – Madagascar Operations</span> at Sadaharitha Plantations Limited, and former <span className="text-white font-bold">Divisional Manager – After Sales Operations</span> at David Pieris Motor Company (DPMC).
              </p>

              {/* 4-Box Key Metrics Ribbon (2 cols on mobile, 4 cols on desktop) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-xl mx-auto lg:mx-0 pt-1">
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#200516] border border-[#d4af37]/35 text-center shadow-lg hover:border-[#ffd700] hover:-translate-y-0.5 transition-all">
                  <div className="text-2xl sm:text-3xl font-black text-[#ffd700]">25+</div>
                  <div className="text-[10px] font-black text-slate-300 uppercase tracking-wider mt-0.5">Years Exp</div>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#200516] border border-[#d4af37]/35 text-center shadow-lg hover:border-[#ffd700] hover:-translate-y-0.5 transition-all">
                  <div className="text-2xl sm:text-3xl font-black text-white">MBA</div>
                  <div className="text-[10px] font-black text-slate-300 uppercase tracking-wider mt-0.5">Qualified</div>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#200516] border border-[#d4af37]/35 text-center shadow-lg hover:border-[#ffd700] hover:-translate-y-0.5 transition-all">
                  <div className="text-2xl sm:text-3xl font-black text-[#f3e5ab]">00-01</div>
                  <div className="text-[10px] font-black text-slate-300 uppercase tracking-wider mt-0.5">Head Prefect</div>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#200516] border border-[#d4af37]/35 text-center shadow-lg hover:border-[#ffd700] hover:-translate-y-0.5 transition-all">
                  <div className="text-2xl sm:text-3xl font-black text-[#ffd700]">OBU</div>
                  <div className="text-[10px] font-black text-slate-300 uppercase tracking-wider mt-0.5">VP Candidate</div>
                </div>
              </div>

              {/* Action Buttons - Centered and full-width on mobile */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3">
                <button
                  onClick={() => setShowPosterModal(true)}
                  className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#e5c158] hover:brightness-110 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl shadow-[#d4af37]/30 inline-flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>View Official Campaign Card</span>
                </button>

                <a
                  href="#experience"
                  className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#200516] hover:bg-[#2f071f] border border-[#d4af37]/50 hover:border-[#ffd700] text-[#f3e5ab] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <span>Career Track Record</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <a
                  href="#contact"
                  className="w-full sm:w-auto px-5 py-3 sm:py-3.5 rounded-xl border border-slate-700/80 hover:border-slate-400 text-slate-300 hover:text-white transition-all text-xs sm:text-sm font-bold uppercase tracking-wider text-center"
                >
                  Send Message
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Featured Strategic Pillars Section (3 Luxury Gold & Maroon Cards) */}
      <section id="campaign" className="py-20 bg-[#160410] border-y border-[#d4af37]/25 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-[#ffd700]">Strategic Vision & Heritage</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-1 uppercase tracking-tight">
              Holy Cross College Kalutara • Leadership Dossier
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent mx-auto mt-3"></div>
          </div>

          {/* Luxury Card Highlight Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Alma Mater Roots */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#240516] to-[#180411] border border-[#d4af37]/35 shadow-xl space-y-4 hover:border-[#ffd700] hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-[#32071f] border border-[#d4af37]/50 text-[#ffd700] flex items-center justify-center font-black text-xl shadow-md group-hover:bg-[#d4af37] group-hover:text-slate-950 transition-colors">
                ✝
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-[#ffd700] transition-colors">
                Alma Mater Heritage
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Proud Crossian from the <strong className="text-white">HCC 1998–2001 Batch</strong>. Entrusted as <strong className="text-[#ffd700]">College Head Prefect (2000–2001)</strong>, demonstrating early visionary leadership, integrity, and discipline.
              </p>
              <div className="pt-3 border-t border-slate-800 text-xs font-bold text-[#f3e5ab] flex items-center justify-between">
                <span>Head Prefect 2000–2001</span>
                <span>HCC Kalutara</span>
              </div>
            </div>

            {/* Card 2: 25 Years Senior Management & Automotive */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#240516] to-[#180411] border border-[#d4af37]/35 shadow-xl space-y-4 hover:border-[#ffd700] hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-[#32071f] border border-[#d4af37]/50 text-[#ffd700] flex items-center justify-center font-black text-xl shadow-md group-hover:bg-[#d4af37] group-hover:text-slate-950 transition-colors">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-[#ffd700] transition-colors">
                25 Years Proven Experience
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Backed by an <strong className="text-white">MBA</strong> and a quarter-century of corporate leadership across local & international markets, including automotive operations and multi-country resource governance.
              </p>
              <div className="pt-3 border-t border-slate-800 text-xs font-bold text-[#f3e5ab] flex items-center justify-between">
                <span>Senior Management</span>
                <span>Automotive & Agribusiness</span>
              </div>
            </div>

            {/* Card 3: OBU Vice President Vision */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#240516] to-[#180411] border border-[#d4af37]/35 shadow-xl space-y-4 hover:border-[#ffd700] hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-[#32071f] border border-[#d4af37]/50 text-[#ffd700] flex items-center justify-center font-black text-xl shadow-md group-hover:bg-[#d4af37] group-hover:text-slate-950 transition-colors">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-[#ffd700] transition-colors">
                Uplifting Our Alma Mater
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Committed to uniting past pupils across all batches, fostering sports and academic infrastructure, and building a stronger future for generations of Crossians.
              </p>
              <div className="pt-3 border-t border-slate-800 text-xs font-bold text-[#ffd700] flex items-center justify-between">
                <span>Candidate for VP</span>
                <span>Holy Cross College OBU</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Tabs for Career & Domains (Original Info Preserved & Upgraded) */}
      <section id="experience" className="py-20 bg-[#11030c] px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffd700]">Executive Portfolio & Experience</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-1 uppercase tracking-tight">
              Corporate Track Record & Domains
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent mx-auto mt-3"></div>
          </div>

          {/* Interactive Navigation Pills - Fully Responsive & Scrollable on Mobile */}
          <div className="flex justify-start sm:justify-center mb-10 overflow-x-auto pb-2 scrollbar-none px-2 -mx-2 sm:mx-0">
            <div className="inline-flex p-1 sm:p-1.5 rounded-2xl bg-[#200516] border border-[#d4af37]/35 shadow-xl flex-nowrap shrink-0 mx-auto">
              <button
                onClick={() => setActiveTab("candidacy")}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${
                  activeTab === "candidacy"
                    ? "bg-gradient-to-r from-[#d4af37] to-[#e5c158] text-slate-950 shadow-md"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                OBU Candidacy & HCC
              </button>
              <button
                onClick={() => setActiveTab("experience")}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${
                  activeTab === "experience"
                    ? "bg-gradient-to-r from-[#d4af37] to-[#e5c158] text-slate-950 shadow-md"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Executive Appointments
              </button>
              <button
                onClick={() => setActiveTab("domains")}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${
                  activeTab === "domains"
                    ? "bg-gradient-to-r from-[#d4af37] to-[#e5c158] text-slate-950 shadow-md"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Operational Domains
              </button>
              <button
                onClick={() => setActiveTab("leadership")}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${
                  activeTab === "leadership"
                    ? "bg-gradient-to-r from-[#d4af37] to-[#e5c158] text-slate-950 shadow-md"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Asia CEO Community
              </button>
            </div>
          </div>

          {/* Tab Content 1: OBU Candidacy */}
          {activeTab === "candidacy" && (
            <div className="p-8 rounded-2xl bg-[#200516] border-2 border-[#d4af37]/50 shadow-2xl space-y-6 max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold text-[#ffd700] uppercase tracking-widest block">Alma Mater Election</span>
                  <h3 className="text-2xl font-black text-white uppercase">Holy Cross College Kalutara OBU Vice President</h3>
                  <p className="text-sm text-slate-300 mt-1">HCC | 1998–2001 Batch • College Head Prefect 2000–2001</p>
                </div>
                <button
                  onClick={() => setShowPosterModal(true)}
                  className="px-4 py-2 rounded-lg bg-[#32071f] hover:bg-[#4a0b2d] border border-[#d4af37] text-[#ffd700] text-xs font-black uppercase tracking-wider transition-colors"
                >
                  View Full Poster
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-[#11030c] border border-slate-800 text-xs text-slate-200">
                  <strong className="text-[#ffd700] block mb-1 text-sm font-bold">Leadership Heritage</strong>
                  Served as College Head Prefect (2000–2001), stewarding student governance and upholding the proud traditions of Holy Cross College Kalutara.
                </div>
                <div className="p-5 rounded-xl bg-[#11030c] border border-slate-800 text-xs text-slate-200">
                  <strong className="text-[#ffd700] block mb-1 text-sm font-bold">Professional Experience</strong>
                  Holds an MBA qualification with 25 years of local and international senior management experience in automotive operations and multi-country resource governance.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-[#32071f] to-[#200516] border border-[#d4af37]/35 text-center">
                <p className="text-sm font-extrabold text-[#f3e5ab] italic">
                  &ldquo;Your Support. Our Alma Mater. A Stronger Future.&rdquo;
                </p>
              </div>
            </div>
          )}

          {/* Tab Content 2: Executive Appointments */}
          {activeTab === "experience" && (
            <div className="space-y-8 max-w-4xl mx-auto">
              
              {/* Role 1 */}
              <div className="p-8 rounded-2xl bg-[#200516] border border-[#d4af37]/40 shadow-xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-[#ffd700] uppercase tracking-widest block">Current Executive Appointment</span>
                    <h3 className="text-2xl font-black text-white uppercase">General Manager – Madagascar Operations</h3>
                    <div className="text-sm font-bold text-[#f3e5ab] mt-1">Sadaharitha Plantations Limited</div>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#32071f] border border-[#d4af37] text-[#ffd700] text-xs font-black uppercase tracking-wider">
                    Madagascar
                  </span>
                </div>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Directing international operations and sustainable commercial plantation management for Sadaharitha Plantations Limited in Madagascar. Entrusted with end-to-end P&L accountability, offshore team empowerment, statutory compliance with host-country authorities, and eco-friendly commercial forestry frameworks.
                </p>
              </div>

              {/* Role 2 */}
              <div className="p-8 rounded-2xl bg-[#200516] border border-slate-700/80 shadow-xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Prior Leadership</span>
                    <h3 className="text-2xl font-black text-white uppercase">Divisional Manager – After Sales Operations</h3>
                    <div className="text-sm font-bold text-slate-300 mt-1">David Pieris Motor Company (DPMC)</div>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-800 text-slate-300 text-xs font-black uppercase tracking-wider">
                    Sri Lanka
                  </span>
                </div>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Spearheaded nationwide automotive technical after-sales operations and service network strategy for David Pieris Motor Company (DPMC)—Sri Lanka’s dominant automotive enterprise. Governed technical service centers, spare parts channels, and nationwide dealer satisfaction programs, including specialized service support campaigns for tourism operators in Galle Fort.
                </p>
              </div>

            </div>
          )}

          {/* Tab Content 3: Operational Domains */}
          {activeTab === "domains" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              <div className="p-7 rounded-2xl bg-[#200516] border border-slate-800 hover:border-[#d4af37] transition-all space-y-4">
                <h3 className="text-lg font-black text-white uppercase">Cross-Border Operations</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Proven proficiency in establishing and leading operations in developing and emerging markets, bridging statutory frameworks, navigating cultural nuances, and building robust supply chains.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#200516] border border-slate-800 hover:border-[#d4af37] transition-all space-y-4">
                <h3 className="text-lg font-black text-white uppercase">Commercial Agribusiness</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Management of large-scale commercial plantations and sustainable timber initiatives combining agricultural science, productivity, and green asset stewardship.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#200516] border border-slate-800 hover:border-[#d4af37] transition-all space-y-4">
                <h3 className="text-lg font-black text-white uppercase">Automotive Networks</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Extensive background leading corporate after-sales divisions, technical customer support lines, warranty policy, and service dealer profitability.
                </p>
              </div>

            </div>
          )}

          {/* Tab Content 4: Asia CEO Community */}
          {activeTab === "leadership" && (
            <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-[#200516] border border-[#d4af37]/35 shadow-xl space-y-4">
              <h3 className="text-xl font-black text-white uppercase">Asia CEO Community Member</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                As an inducted member of the Asia CEO Community, Lahiru Jayasumana collaborates with top corporate leaders, founders, and industry pioneers across Asia-Pacific to champion trade innovation, sustainable commercial models, and cross-border partnerships.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#160410] border-t border-[#d4af37]/25 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border-2 border-[#d4af37] p-2 bg-gradient-to-b from-[#32071f] to-[#11030c] shadow-2xl">
                <div className="rounded-2xl overflow-hidden bg-slate-950 aspect-[4/5] relative">
                  <img
                    src="/lahiru-profile.jpg"
                    alt="Lahiru Jayasumana - Profile"
                    className="w-full h-full object-cover object-[50%_15%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11030c] via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white font-black text-lg block">Lahiru Jayasumana (MBA)</span>
                    <span className="text-[#ffd700] text-xs font-bold">General Manager • Sadaharitha Plantations</span>
                    <span className="text-slate-300 text-[11px] block mt-0.5">Head Prefect (2000–2001) • Holy Cross College</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-widest text-[#ffd700] font-black">Executive Biography</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight uppercase">
                A Quarter Century of Leadership, Integrity & Operational Excellence
              </h2>
              <p className="text-slate-200 text-sm leading-relaxed">
                Lahiru Jayasumana is an established corporate leader with 25 years of local and international senior management expertise across agribusiness, commercial forestry, and automotive engineering operations. Currently serving as General Manager of Madagascar Operations at Sadaharitha Plantations Limited, he oversees strategic execution and field governance in one of the company’s most pivotal overseas territories.
              </p>
              <p className="text-slate-200 text-sm leading-relaxed">
                Prior to his international posting, he served as Divisional Manager (After Sales Operations) at David Pieris Motor Company, where he distinguished himself through community-centric service campaigns, nationwide dealer support, and high customer satisfaction standards.
              </p>
              
              <div className="pt-2">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#ffd700] hover:text-[#f3e5ab] transition-colors"
                >
                  <span>Connect with Lahiru Jayasumana on LinkedIn</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Support & Contact Section */}
      <section id="contact" className="py-20 bg-[#11030c] border-t border-[#d4af37]/25 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#ffd700]">Direct Executive Communication</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-1 uppercase tracking-tight">
              Inquiries & Professional Correspondence
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Left: Contact Info */}
            <div className="space-y-4">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-[#200516] border border-[#d4af37]/35 hover:border-[#ffd700] transition-all flex items-center gap-4 block group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0a66c2] text-white flex items-center justify-center font-bold text-lg">
                  in
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">LinkedIn Profile</div>
                  <div className="text-sm font-black text-white group-hover:text-[#ffd700]">
                    linkedin.com/in/lahiru-jayasumana
                  </div>
                </div>
              </a>

              <div className="p-5 rounded-xl bg-[#200516] border border-[#d4af37]/35 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#32071f] text-[#ffd700] flex items-center justify-center font-bold text-lg">
                  ✝
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Alma Mater Union</div>
                  <div className="text-sm font-black text-white">
                    Holy Cross College Kalutara OBU
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#200516] border border-[#d4af37]/35 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#32071f] text-[#ffd700] flex items-center justify-center font-bold text-lg">
                  GM
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Corporate Position</div>
                  <div className="text-sm font-black text-white">
                    Sadaharitha Plantations Limited
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="p-8 rounded-2xl bg-[#200516] border border-[#d4af37]/35 shadow-xl">
              <h3 className="text-lg font-black text-white uppercase mb-4">Send A Direct Message</h3>
              
              {messageSent ? (
                <div className="p-6 rounded-xl bg-[#32071f] border border-[#ffd700] text-center space-y-2">
                  <div className="text-[#ffd700] font-black text-base uppercase">Message Recorded 🙏</div>
                  <p className="text-xs text-slate-200">
                    Thank you, {formData.name || "Colleague"}. Your message has been received.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Your Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Fellow Crossian / Professional Colleague"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#11030c] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">HCC Batch / Organization</label>
                    <input
                      type="text"
                      value={formData.batch}
                      onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                      placeholder="e.g. HCC 1999 Batch / Company Name"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#11030c] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Message</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note, message, or professional inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#11030c] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#d4af37] resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#e5c158] hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-widest transition-all shadow-md shadow-[#d4af37]/30"
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
      <footer className="py-8 bg-[#0b0208] text-slate-400 text-xs text-center border-t border-[#d4af37]/25 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Lahiru Jayasumana (MBA). Candidate for College OBU Vice President • Holy Cross College Kalutara.</p>
          <div className="flex items-center gap-6 font-bold uppercase text-[11px]">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#ffd700] transition-colors">
              LinkedIn
            </a>
            <span>•</span>
            <a href="#about" className="hover:text-[#ffd700] transition-colors">
              Sadaharitha Plantations
            </a>
            <span>•</span>
            <a href="#campaign" className="hover:text-[#ffd700] transition-colors">
              Holy Cross College OBU
            </a>
          </div>
        </div>
      </footer>

      {/* Campaign Poster Modal Dialog (Lightbox) */}
      {showPosterModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6" onClick={() => setShowPosterModal(false)}>
          <div className="relative max-w-xl w-full bg-[#1b0514] rounded-3xl border-2 border-[#d4af37] p-5 shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-3 border-b border-[#d4af37]/30 mb-3">
              <div>
                <h4 className="font-black text-white text-base uppercase">Holy Cross College Kalutara</h4>
                <p className="text-xs text-[#ffd700] font-bold">Candidate for College OBU Vice President</p>
              </div>
              <button
                onClick={() => setShowPosterModal(false)}
                className="w-8 h-8 rounded-full bg-[#32071f] text-white hover:bg-[#d4af37] hover:text-slate-950 font-black text-sm flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="rounded-xl overflow-hidden border border-[#d4af37]/40 max-h-[75vh] overflow-y-auto">
              <img
                src="/hcc-campaign-poster.jpg"
                alt="Holy Cross College Kalutara OBU Vice President Campaign Poster"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="pt-3.5 flex items-center justify-between gap-3 text-xs">
              <span className="text-[#f3e5ab] font-bold italic">&ldquo;Your Support. Our Alma Mater. A Stronger Future.&rdquo;</span>
              <button
                onClick={() => setShowPosterModal(false)}
                className="px-4 py-2 rounded-lg bg-[#d4af37] text-slate-950 font-black uppercase text-xs hover:bg-[#ffd700] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
