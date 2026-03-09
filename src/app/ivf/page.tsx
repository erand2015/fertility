"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Dna, Beaker, Baby, Stethoscope, Sparkles, ArrowRight, 
  CheckCircle2, Activity, Zap, ChevronLeft 
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

const MeshBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[150px]" />
    <svg className="absolute inset-0 h-full w-full stroke-slate-200/50 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse" x="50%" y="-1">
          <path d="M.5 40V.5H40" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid)" />
    </svg>
  </div>
);

export default function IVFPage() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-indigo-100 overflow-x-hidden">
      <MeshBackground />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4 bg-white/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-sm">
          <Link href="/" className="flex items-center gap-2 font-bold text-slate-900 hover:text-indigo-600 transition-colors">
            <ChevronLeft size={20} />
            {lang === "sq" ? "Kthehu" : "Back"}
          </Link>
          <div className="font-black tracking-tighter text-xl">
            LUMINA <span className="text-indigo-600 italic">IVF</span>
          </div>
          <Link href="/contact">
            <button className="bg-slate-950 text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-indigo-600 transition-all">
              {t.reserve}
            </button>
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-bold tracking-widest uppercase mb-8">
            <Zap size={14} className="fill-indigo-600" />
            {lang === "sq" ? "Lider në Teknologjinë Riprodhuese" : "Leader in Reproductive Technology"}
          </motion.div>

          <motion.h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 text-slate-950">
            {lang === "sq" ? "Fillimi i një" : "The Beginning of"} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 italic font-serif font-medium">
              {lang === "sq" ? "Jete të Re." : "a New Life."}
            </span>
          </motion.h1>

          <p className="max-w-2xl mx-auto text-lg text-slate-500 mb-10 leading-relaxed">
            {lang === "sq" 
              ? "Trajtimi IVF në klinikën tonë ndërthur protokollet më të avancuara botërore me një kujdes human."
              : "IVF treatment at our clinic combines the world's most advanced protocols with human care."}
          </p>

          <Link href="/contact">
            <button className="h-14 px-10 rounded-2xl bg-indigo-600 text-white font-bold hover:shadow-2xl transition-all flex items-center gap-2 mx-auto">
              {lang === "sq" ? "Filloni Trajtimin" : "Start Treatment"} <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-10 rounded-[3rem] bg-slate-950 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-2">{lang === "sq" ? "Shkallë Suksesi 75%+" : "75%+ Success Rate"}</h3>
              <p className="text-slate-400 max-w-sm">
                {lang === "sq" ? "Teknologjia ICSI rrit shanset për sukses." : "ICSI technology increases success rates."}
              </p>
            </div>
            <Dna className="absolute top-[-20%] right-[-10%] w-80 h-80 text-white/5 rotate-45" />
          </div>

          <div className="p-10 rounded-[3rem] bg-indigo-50 border border-indigo-100 flex flex-col justify-between">
            <Beaker size={28} className="text-indigo-600 mb-4" />
            <h3 className="text-2xl font-bold mb-2">PGT-A Testing</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {lang === "sq" ? "Analiza gjenetike për siguri." : "Genetic testing for safety."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}