"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Snowflake, 
  ShieldCheck, 
  Microscope, 
  CalendarDays, 
  ChevronRight,
  Info,
  Clock,
  HeartPulse
} from "lucide-react";

// --- Magic UI Style Components ---

const GridPattern = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
  </div>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-[10px] font-bold tracking-widest uppercase mb-6 shadow-sm">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
    </span>
    {children}
  </div>
);

export default function EggFreezingService() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-rose-100">
      <GridPattern />

      {/* --- HERO: FOKUSI TE LIRIA DHE KOHA --- */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge>Shkenca e Fertilitetit</Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9] mb-6">
              Ngrijeni kohën. <br />
              <span className="text-rose-500 font-serif italic">Zgjidhni lirinë.</span>
            </h1>
            <p className="text-xl text-slate-500 mb-8 max-w-lg leading-relaxed font-medium">
              Egg Freezing ju lejon të ruani potencialin tuaj riprodhues sot, 
              për ta përdorur kur të jeni vërtet gati.
            </p>
            
            <div className="flex items-center gap-4">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                Konsultë falas <ChevronRight size={18} />
              </button>
              <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                 ))}
                 <div className="pl-6 text-sm font-semibold text-slate-400 italic flex items-center">
                   Bashkohu me +500 paciente
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-rose-200 blur-[100px] opacity-30 rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2000" 
              className="relative rounded-[40px] shadow-2xl border-8 border-white object-cover aspect-square"
              alt="Medical Lab"
            />
          </motion.div>
        </div>
      </section>

      {/* --- BENTO GRID: PSE DUHET TA BËNI --- */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Pse Egg Freezing tani?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Card 1: Biologjia */}
            <div className="md:col-span-2 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm group hover:border-rose-200 transition-colors">
              <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 mb-6 group-hover:bg-rose-500 group-hover:text-white transition-all">
                <Clock size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Kulmi Biologjik</h3>
              <p className="text-slate-500 leading-relaxed">
                Fertiliteti fillon të ulet ndjeshëm pas moshës 35 vjeçare. 
                Ngrirja e vezëve në të 20-at ose fillim të 30-ave ruan 
                cilësinë "të re" të vezëve tuaja.
              </p>
            </div>

            {/* Card 2: Teknologjia */}
            <div className="md:col-span-2 bg-slate-900 p-8 rounded-[2rem] text-white overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3">Vitrification 2.0</h3>
                <p className="text-slate-400 mb-6">
                  Teknologjia jonë e ngrirjes së shpejtë garanton një shkallë mbijetese deri në 95% për vezët tuaja.
                </p>
                <div className="flex gap-2">
                   <span className="px-3 py-1 bg-white/10 rounded-full text-xs">-196°C Stabil</span>
                   <span className="px-3 py-1 bg-white/10 rounded-full text-xs">AI Monitored</span>
                </div>
              </div>
              <Snowflake className="absolute bottom-[-20px] right-[-20px] w-48 h-48 text-white/5 rotate-12" />
            </div>

            {/* Card 3: Karriera/Jeta */}
            <div className="md:col-span-4 bg-rose-500 p-10 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-8 shadow-xl shadow-rose-200">
               <div className="flex-1">
                 <h3 className="text-3xl font-bold mb-2">Asnjë kompromis me jetën.</h3>
                 <p className="opacity-90">Ndiqni karrierën, studimet ose udhëtimet pa pasur presionin e orës biologjike mbi kokë.</p>
               </div>
               <button className="bg-white text-rose-600 px-8 py-4 rounded-2xl font-black whitespace-nowrap">
                 Mësoni më shumë
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESI (Stili Shadcn Accordion/Steps) --- */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-20 tracking-tighter">Protokolli Medikal</h2>
        
        <div className="space-y-4">
          {[
            { 
              step: "01", 
              title: "Vlerësimi i Fertilitetit", 
              desc: "Analiza hormonale (AMH) dhe skanimi ultrasonik për të parë rezervën tuaj ovariane.",
              icon: <HeartPulse className="text-rose-500" />
            },
            { 
              step: "02", 
              title: "Stimulimi Ovarian", 
              desc: "Një periudhë 10-12 ditore me stimulim hormonal të lehtë për të prodhuar disa vezë.",
              icon: <Microscope className="text-purple-500" />
            },
            { 
              step: "03", 
              title: "Mbledhja e Vezëve", 
              desc: "Një procedurë e shpejtë (15 min) nën sedacion të lehtë, pa dhimbje.",
              icon: <ShieldCheck className="text-emerald-500" />
            }
          ].map((item, idx) => (
            <motion.div 
              whileHover={{ x: 10 }}
              key={idx} 
              className="group p-8 border border-slate-100 rounded-3xl bg-white hover:bg-slate-50 transition-all flex items-start gap-6 cursor-default shadow-sm hover:shadow-md"
            >
              <div className="text-sm font-black text-slate-300 group-hover:text-rose-500 transition-colors uppercase pt-1">
                {item.step}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 font-bold text-xl">
                  {item.icon}
                  {item.title}
                </div>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FAQ SECTION (Shadcn Style) --- */}
      <section className="py-24 px-6 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Pyetjet më të shpeshta</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-50">
              <h4 className="font-bold flex items-center gap-2">
                <Info size={18} className="text-rose-500" /> 
                A ndikon kjo në fertilitetin natyral?
              </h4>
              <p className="mt-2 text-slate-600 text-sm">
                Jo, procesi mbledh vetëm vezët që trupi do t'i kishte humbur gjithsesi gjatë atij cikli menstrual.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50">
              <h4 className="font-bold flex items-center gap-2">
                <CalendarDays size={18} className="text-rose-500" /> 
                Sa vezë duhet të ngrij?
              </h4>
              <p className="mt-2 text-slate-600 text-sm">
                Rekomandohet ngrirja e 10-15 vezëve për të maksimizuar shanset e një shtatzënie të suksesshme në të ardhmen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FLOATING CTA --- */}
      <footer className="py-20 px-6 text-center">
        <div className="inline-block p-10 bg-slate-900 rounded-[3rem] text-white max-w-4xl w-full relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500 blur-[80px] opacity-20" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Gati për hapin tjetër?</h2>
          <p className="text-slate-400 mb-10 max-w-md mx-auto italic">
            Zgjidhni sot sigurinë e të nesërmes.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-4 rounded-2xl font-bold transition-all">
              Rezervo Vizitën
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}