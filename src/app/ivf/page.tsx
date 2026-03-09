"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Dna, 
  Beaker, 
  Baby, 
  Stethoscope, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  Activity,
  Zap
} from "lucide-react";

// --- Magic UI Background ---
const MeshBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[150px]" />
    <svg className="absolute inset-0 h-full w-full stroke-slate-200/50 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
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
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  // RREGULLIMI: Ikonat jepen si komponentë (pa < />)
  const processSteps = [
    { Icon: Stethoscope, step: "01", title: "Përgatitja", desc: "Analiza të detajuara dhe protokoll i personalizuar." },
    { Icon: Activity, step: "02", title: "Mbledhja", desc: "Marrja e vezëve dhe laborator i teknologjisë ICSI." },
    { Icon: Sparkles, step: "03", title: "Kultivimi", desc: "Monitorimi i embrioneve në inkubatorë AI-Ready." },
    { Icon: Baby, step: "04", title: "Transferta", desc: "Momenti i transferimit të embrionit në mitër." },
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-indigo-100 overflow-x-hidden">
      <MeshBackground />

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[11px] font-bold tracking-[0.2em] uppercase mb-8"
          >
            <Zap size={14} className="fill-indigo-600" />
            Lider në Teknologjinë Riprodhuese
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 text-slate-950"
          >
            Fillimi i një <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 italic font-serif font-medium">
              Jete të Re.
            </span>
          </motion.h1>

          <motion.p {...fadeInUp} className="max-w-2xl mx-auto text-lg text-slate-500 mb-10 leading-relaxed">
            Trajtimi IVF në klinikën tonë ndërthur protokollet më të avancuara botërore me një kujdes human që bën diferencën.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-wrap justify-center gap-4">
            <button className="h-14 px-10 rounded-2xl bg-indigo-600 text-white font-bold hover:shadow-2xl hover:shadow-indigo-200 transition-all flex items-center gap-2">
              Filloni Trajtimin <ArrowRight size={18} />
            </button>
            <button className="h-14 px-10 rounded-2xl bg-white border border-slate-200 font-bold hover:bg-slate-50 transition-all">
              Shkalla e Suksesit
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- STATS GRID --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ y: -5 }} className="md:col-span-2 p-10 rounded-[3rem] bg-slate-950 text-white relative overflow-hidden group">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <BadgeInvert>Live Lab Statistics</BadgeInvert>
                <h3 className="text-4xl font-bold mt-4 mb-2">Shkallë Suksesi mbi 75%</h3>
                <p className="text-slate-400 max-w-sm">
                  Përdorimi i teknologjisë ICSI dhe monitorimit me Inteligjencë Artificiale rrit shanset për sukses që në ciklin e parë.
                </p>
              </div>
              <div className="flex items-center gap-8 mt-12">
                <div>
                  <div className="text-3xl font-black text-indigo-400">2,500+</div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">Foshnje të lindura</div>
                </div>
                <div className="h-12 w-px bg-slate-800" />
                <div>
                  <div className="text-3xl font-black text-blue-400">99.8%</div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">Saktësi Gjenetike</div>
                </div>
              </div>
            </div>
            <Dna className="absolute top-[-20%] right-[-10%] w-80 h-80 text-white/5 rotate-45 group-hover:rotate-90 transition-transform duration-1000" />
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="p-10 rounded-[3rem] bg-indigo-50 border border-indigo-100 flex flex-col justify-between">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm">
              <Beaker size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">PGT-A Testing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Testimi gjenetik i embrioneve përpara transferimit për të garantuar shëndet maksimal.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PROCESS STEPS: THE JOURNEY --- */}
      

[Image of the IVF process steps diagram]

      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-20">
            <h2 className="text-4xl font-black tracking-tight mb-4">Udhëtimi juaj IVF</h2>
            <p className="text-slate-500">Një proces transparent dhe i monitoruar në çdo sekondë.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {processSteps.map((s, i) => (
              <div key={i} className="relative group">
                <div className="text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <s.Icon size={36} />
                </div>
                <h4 className="font-black text-slate-200 text-5xl absolute -top-4 right-0 -z-10 group-hover:text-indigo-50 transition-colors">
                  {s.step}
                </h4>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY US --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-100 rounded-[3rem] -rotate-2 -z-10" />
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000" className="rounded-[2.5rem] shadow-xl" alt="Medical Team" />
          </div>
          <div>
            <h2 className="text-4xl font-black mb-8">Pse të zgjidhni programin tonë IVF?</h2>
            <div className="space-y-6">
              {[
                "Embriologë me përvojë ndërkombëtare",
                "Laborator i certifikuar ISO Class 5",
                "Asistencë psikologjike gjatë gjithë procesit",
                "Paketa financiare transparente"
              ].map((item, i) => (
                <motion.div key={i} initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-colors">
                  <CheckCircle2 className="text-indigo-500" size={24} />
                  <span className="font-semibold text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">Gati për të nisur <br /> këtë rrugëtim?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold hover:bg-indigo-50 transition-colors">Rezervo Konsultën e Parë</button>
            <button className="bg-indigo-700 text-white px-10 py-5 rounded-2xl font-bold hover:bg-indigo-800 transition-colors">Shkarko Broshurën</button>
          </div>
        </div>
      </section>
    </div>
  );
}

const BadgeInvert = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-[10px] font-bold tracking-widest uppercase">
    {children}
  </div>
);
