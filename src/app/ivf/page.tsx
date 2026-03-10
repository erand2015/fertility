"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Dna, 
  Beaker, 
  Baby, 
  Stethoscope, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  Activity,
  Zap,
  ArrowUpRight
} from "lucide-react";

// --- Background konsistent me faqen kryesore ---
const MeshBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-50/50 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-slate-50/50 rounded-full blur-[150px]" />
    <svg className="absolute inset-0 h-full w-full stroke-slate-100/50 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
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
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const processSteps = [
    { Icon: Stethoscope, step: "01", title: "Përgatitja", desc: "Analiza të detajuara dhe protokoll i personalizuar." },
    { Icon: Activity, step: "02", title: "Mbledhja", desc: "Marrja e vezëve dhe laborator i teknologjisë ICSI." },
    { Icon: Sparkles, step: "03", title: "Kultivimi", desc: "Monitorimi i embrioneve në inkubatorë AI-Ready." },
    { Icon: Baby, step: "04", title: "Transferta", desc: "Momenti i transferimit të embrionit në mitër." },
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-rose-100 overflow-x-hidden">
      <MeshBackground />

      {/* --- MINI NAVBAR (Për konsistencë) --- */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4 bg-white/40 backdrop-blur-xl border border-white/20 shadow-sm rounded-[2rem]">
          <Link href="/" className="flex items-center gap-2 text-2xl font-black tracking-tighter text-slate-900">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white italic bg-rose-500 shadow-lg shadow-rose-200">L</div>
            <span>LUMINA <span className="text-rose-500 font-serif italic font-light">Fertility</span></span>
          </Link>
          <Link href="/contact">
            <button className="bg-slate-950 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-rose-600 transition-all">Rezervo Konsultë</button>
          </Link>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-48 pb-20 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-[11px] font-bold tracking-[0.2em] uppercase mb-8"
          >
            <Zap size={14} className="fill-rose-600" />
            Teknologjia IVF e Gjeneratës së Re
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-slate-950"
          >
            Fillimi i një <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-rose-400 italic font-serif font-medium leading-normal">
              Jete të Re.
            </span>
          </motion.h1>

          <motion.p 
            {...fadeInUp} 
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-2xl mx-auto text-lg text-slate-500 mb-10 leading-relaxed italic font-serif"
          >
            Trajtimi IVF në Lumina ndërthur shkencën e avancuar me një kujdes human që bën diferencën në rrugëtimin tuaj.
          </motion.p>

          <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="flex flex-wrap justify-center gap-4">
            <button className="h-14 px-10 rounded-2xl bg-slate-950 text-white font-bold hover:shadow-2xl hover:shadow-rose-200 transition-all flex items-center gap-2 hover:-translate-y-1">
              Filloni Trajtimin <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- STATS GRID --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ y: -10 }} className="md:col-span-2 p-10 rounded-[3rem] bg-slate-950 text-white relative overflow-hidden group border border-slate-800">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <BadgeInvert>Live Lab Statistics</BadgeInvert>
                <h3 className="text-4xl font-bold mt-6 mb-4 tracking-tight">Shkallë Suksesi mbi 75%</h3>
                <p className="text-slate-400 max-w-sm leading-relaxed">
                  Përdorimi i teknologjisë ICSI dhe monitorimit me Inteligjencë Artificiale rrit shanset për sukses që në ciklin e parë.
                </p>
              </div>
              <div className="flex items-center gap-8 mt-12">
                <div>
                  <div className="text-4xl font-black text-rose-500 tracking-tighter">2,500+</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Foshnje të lindura</div>
                </div>
                <div className="h-12 w-px bg-slate-800" />
                <div>
                  <div className="text-4xl font-black text-purple-400 tracking-tighter">99.8%</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Saktësi Gjenetike</div>
                </div>
              </div>
            </div>
            <Dna className="absolute top-[-10%] right-[-5%] w-80 h-80 text-white/5 rotate-12 group-hover:rotate-45 transition-transform duration-[2000ms]" />
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="p-10 rounded-[3rem] bg-rose-50 border border-rose-100 flex flex-col justify-between group transition-all">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-rose-500 shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-colors duration-500">
              <Beaker size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">PGT-A Testing</h3>
              <p className="text-sm text-slate-600 leading-relaxed italic">
                Testimi gjenetik i embrioneve përpara transferimit për të garantuar shëndet maksimal për fëmijën tuaj.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PROCESS STEPS --- */}
      <section className="py-24 px-6 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-20 text-left">
            <h2 className="text-5xl font-black tracking-tighter mb-4">Udhëtimi juaj IVF</h2>
            <p className="text-slate-500 text-lg italic">Një proces transparent dhe i monitoruar në çdo sekondë nga ekspertët tanë.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {processSteps.map((s, i) => (
              <div key={i} className="relative group">
                <div className="text-rose-500 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <s.Icon size={40} strokeWidth={1.5} />
                </div>
                <h4 className="font-black text-slate-100 text-7xl absolute -top-6 right-0 -z-10 group-hover:text-rose-100/50 transition-colors duration-500">
                  {s.step}
                </h4>
                <h3 className="text-xl font-bold mb-3 text-slate-900 tracking-tight">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY US --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-rose-100 rounded-[3rem] -rotate-2 -z-10 group-hover:rotate-0 transition-transform duration-700" />
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000" 
              className="rounded-[2.5rem] shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
              alt="Medical Team" 
            />
          </div>
          <div>
            <h2 className="text-5xl font-black mb-10 tracking-tighter">Pse të zgjidhni <br />Lumina IVF?</h2>
            <div className="grid gap-4">
              {[
                "Embriologë me përvojë ndërkombëtare",
                "Laborator i certifikuar ISO Class 5",
                "Asistencë psikologjike falas",
                "Paketa financiare pa kosto të fshehura"
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ x: 20, opacity: 0 }} 
                  whileInView={{ x: 0, opacity: 1 }} 
                  transition={{ delay: i * 0.1 }} 
                  className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 hover:border-rose-200 hover:bg-rose-50/30 transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="font-bold text-slate-700 tracking-tight">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6 mb-20">
        <div className="max-w-6xl mx-auto bg-slate-950 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 relative z-10 tracking-tighter">Gati për të nisur <br /> mrekullinë?</h2>
          <p className="text-slate-400 mb-12 max-w-lg mx-auto italic font-serif text-lg">Konsulta e parë është hapi më i rëndësishëm drejt ëndrrës suaj.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <button className="bg-rose-500 text-white px-12 py-6 rounded-2xl font-bold hover:bg-rose-600 transition-all hover:shadow-[0_0_30px_rgba(244,63,94,0.4)] flex items-center justify-center gap-2">
              Rezervo Konsultën <ArrowUpRight size={20} />
            </button>
            <button className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-12 py-6 rounded-2xl font-bold hover:bg-white/10 transition-all">
              Shkarko Broshurën
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
          © 2026 Lumina Clinic • Excellence in Human Reproduction
        </p>
      </footer>
    </div>
  );
}

const BadgeInvert = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-rose-400 text-[10px] font-black tracking-[0.2em] uppercase">
    <Sparkles size={12} />
    {children}
  </div>
);
