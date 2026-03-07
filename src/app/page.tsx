"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Baby, Activity, Microscope, ShieldCheck, Heart, MessageCircle } from "lucide-react";
import Link from "next/link";

// Importet e Magic UI (Sigurohu që skedarët ekzistojnë në folderat e tyre)
import ShinyButton from "@/components/magicui/shiny-button";
import { MagicCard } from "@/components/magicui/magic-card";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import InteractiveGridPattern from "@/components/magicui/interactive-grid";

export default function AlbaniaFertilityPage() {
  const WHATSAPP_LINK = "https://wa.me/3556XXXXXXXX";
  
  // Referencat për Animated Beam
  const containerRef = useRef(null);
  const userRef = useRef(null);
  const aiRef = useRef(null);
  const labRef = useRef(null);
  const heartRef = useRef(null);

  return (
    <main className="min-h-screen bg-white text-[#1d1d1f] antialiased">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-[#f5f5f7]">
        <div className="max-w-[1000px] mx-auto h-12 md:h-14 flex justify-between items-center px-6">
          <div className="flex items-center gap-2 font-semibold tracking-tight text-lg">
            <Baby className="w-5 h-5 text-rose-500" />
            <span>Albania Fertility</span>
          </div>
          <div className="hidden md:flex gap-8 text-[12px] font-medium text-[#1d1d1f]/80">
            <Link href="/laboratori" className="hover:text-black transition-colors italic font-bold">Laboratori</Link>
            <Link href="/rreth-nesh" className="hover:text-black transition-colors italic font-bold">Rreth Nesh</Link>
          </div>
          <button 
            onClick={() => window.open(WHATSAPP_LINK, '_blank')}
            className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-[11px] px-3 py-1 rounded-full font-medium transition-all"
          >
            Kontakto
          </button>
        </div>
      </nav>

      {/* --- BANNER (HERO SECTION) --- */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white">
        <InteractiveGridPattern />
        <div className="container relative z-10 px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 px-4 py-1.5 rounded-full border border-rose-100 bg-rose-50/50 text-rose-600 text-xs font-bold tracking-widest uppercase"
          >
            E ardhmja e familjes suaj fillon këtu
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-[110px] font-bold tracking-tighter leading-[0.9] text-slate-900"
          >
            Mrekullia, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-orange-400">
              e rimenduar.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 max-w-2xl text-xl md:text-2xl text-slate-500 font-medium leading-relaxed"
          >
            Teknologjia më e avancuar gjenetike në Europë, tani në zemër të Tiranës. 
          </motion.p>

          <div className="mt-12 flex flex-col md:flex-row gap-6">
            <ShinyButton onClick={() => window.open(WHATSAPP_LINK, '_blank')} className="px-10 py-4 text-lg">
              Fillo Rrugëtimin Tani
            </ShinyButton>
          </div>
        </div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-rose-200/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-[120px]" />
      </section>

      {/* --- EKOSISTEMI (ANIMATED BEAM) --- */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6 text-center" ref={containerRef}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-20">Lidhja e Teknologjisë</h2>
          
          <div className="relative flex w-full items-center justify-center h-[500px]">
            <div className="flex flex-col items-center justify-between h-full w-full max-w-lg z-10">
              <div className="flex w-full justify-between">
                <div ref={labRef} className="p-6 bg-white rounded-2xl shadow-xl border border-slate-100"><Microscope className="w-8 h-8 text-blue-500" /></div>
                <div ref={aiRef} className="p-6 bg-white rounded-2xl shadow-xl border border-slate-100"><Activity className="w-8 h-8 text-rose-500" /></div>
              </div>
              <div ref={userRef} className="p-10 bg-[#1d1d1f] rounded-full shadow-2xl"><Baby className="w-12 h-12 text-white" /></div>
              <div className="flex w-full justify-center"><div ref={heartRef} className="p-6 bg-white rounded-2xl shadow-xl border border-slate-100"><Heart className="w-8 h-8 text-rose-400" /></div></div>
            </div>

            <AnimatedBeam containerRef={containerRef} fromRef={labRef} toRef={userRef} gradientStartColor="#3b82f6" gradientStopColor="#60a5fa" />
            <AnimatedBeam containerRef={containerRef} fromRef={aiRef} toRef={userRef} gradientStartColor="#f43f5e" gradientStopColor="#fb7185" />
            <AnimatedBeam containerRef={containerRef} fromRef={heartRef} toRef={userRef} curvature={20} gradientStartColor="#fb7185" gradientStopColor="#fda4af" />
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <button 
          onClick={() => window.open(WHATSAPP_LINK, '_blank')}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>
    </main>
  );
}