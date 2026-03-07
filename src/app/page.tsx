"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Scale, 
  ShieldCheck, 
  Gavel, 
  FileText, 
  ChevronRight, 
  Phone 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ShinyButton from "@/components/magicui/shiny-button";
import InteractiveGridPattern from "@/components/magicui/interactive-grid";

export default function LawyerPage() {
  const CONTACT_LINK = "tel:+3556XXXXXXXX";

  return (
    <main className="min-h-screen bg-white text-[#1d1d1f] antialiased">
      
      {/* 1. NAVBAR (MENUJA LART) */}
      <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-[#f5f5f7]">
        <div className="max-w-[1200px] mx-auto h-16 flex justify-between items-center px-6">
          <div className="flex items-center gap-2 font-bold tracking-tight text-xl text-[#002147]">
            <Scale className="w-6 h-6" />
            <span>LEX <span className="text-[#c5a059]">ASSOCIATES</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-[13px] font-semibold uppercase tracking-widest text-[#1d1d1f]/70">
            <Link href="#services" className="hover:text-[#c5a059] transition-colors font-bold">Shërbimet</Link>
            <Link href="#about" className="hover:text-[#c5a059] transition-colors font-bold">Rreth Nesh</Link>
          </div>
          <button 
            onClick={() => window.location.href = CONTACT_LINK}
            className="bg-[#002147] text-white px-5 py-2 rounded-full text-xs font-bold hover:shadow-lg transition-all"
          >
            KONSULTË TANI
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION (BANNERI KRYESOR) */}
      <section className="relative pt-32 md:pt-48 pb-20 overflow-hidden bg-white">
        <InteractiveGridPattern className="opacity-40" />
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 space-y-8"
          >
            <div className="inline-block px-4 py-1 rounded-full border border-slate-200 bg-slate-50 text-[#002147] text-[10px] font-bold tracking-[0.3em] uppercase">
              Studio Ligjore Elitare
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-[#002147] leading-[0.95]">
              Mbrojtje që <br />
              <span className="text-[#c5a059]">ju takon.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium max-w-md">
              Zgjidhje strategjike dhe përfaqësim dinjitoz për çdo sfidë ligjore. Ne ndërtojmë besim përmes rezultateve.
            </p>
            <div className="flex gap-4 pt-4">
              <ShinyButton onClick={() => window.location.href = CONTACT_LINK} className="bg-[#002147] px-10 py-6 text-lg text-white">
                Rezervo Takim
              </ShinyButton>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[500px] md:h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl border-[8px] border-white bg-slate-100"
          >
            <Image 
              src="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg" 
              alt="Law Office"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </motion.div>
        </div>
      </section>

      {/* 3. SEKSIONI I PROFESIONEVE ELITE (DARK BENTO GRID) */}
      <section id="services" className="py-32 bg-[#050505] text-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 text-left">
            <div className="space-y-4 max-w-xl">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[#c5a059] font-bold tracking-[0.3em] text-xs uppercase"
              >
                Fushat e Ekspertizës
              </motion.h3>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                Standardi i ri i <br />
                <span className="text-white/40 italic font-serif">përfaqësimit ligjor.</span>
              </h2>
            </div>
            <p className="text-slate-400 text-lg max-w-xs text-left pb-2 border-l-2 border-[#c5a059] pl-6 italic">
              "Drejtësia nuk është vetëm procedurë, është art i strategjisë."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
            
            {/* 1. E DREJTA TREGTARE */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-8 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/10 p-12 rounded-[40px] relative overflow-hidden group shadow-2xl"
            >
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
                <div className="space-y-6 text-left">
                  <div className="w-16 h-16 bg-[#c5a059]/10 rounded-full flex items-center justify-center border border-[#c5a059]/20">
                    <ShieldCheck className="w-8 h-8 text-[#c5a059]" />
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight">E Drejta Tregtare & Investimet</h3>
                  <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                    Nga startup-et te korporatat multinacionale. Ne ofrojmë mbrojtje ligjore për asetet dhe vizionin tuaj biznesor.
                  </p>
                </div>
                <div className="flex gap-4 pt-10">
                  <span className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold border border-white/10 uppercase tracking-widest">M&A</span>
                  <span className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold border border-white/10 uppercase tracking-widest">Compliance</span>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#c5a059]/5 rounded-full blur-[100px] group-hover:bg-[#c5a059]/10 transition-all" />
            </motion.div>

            {/* 2. MBROJTJA PENALE */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-4 bg-[#c5a059] p-12 rounded-[40px] flex flex-col justify-between text-[#002147] group shadow-2xl"
            >
              <Gavel className="w-12 h-12 mb-8 group-hover:rotate-12 transition-transform" />
              <div className="space-y-4 text-left">
                <h3 className="text-3xl font-bold tracking-tighter leading-none">Mbrojtje <br /> Penale</h3>
                <p className="text-[#002147]/80 font-bold text-sm">Përfaqësim elitar në çdo seancë.</p>
              </div>
              <ChevronRight className="w-10 h-10 mt-8 opacity-50" />
            </motion.div>

            {/* 3. E DREJTA CIVILE */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-4 bg-[#111] border border-white/10 p-10 rounded-[40px] flex flex-col gap-6 text-left"
            >
              <FileText className="w-10 h-10 text-[#c5a059]" />
              <h3 className="text-xl font-bold">Litigim Civil</h3>
              <p className="text-slate-500 text-sm">Zgjidhja e konflikteve me saktësi kirurgjikale.</p>
            </motion.div>

            {/* 4. E DREJTA FAMILJARE */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-8 bg-gradient-to-r from-[#111] to-[#1a1a1a] border border-white/10 p-10 rounded-[40px] flex items-center justify-between text-left"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Ligji Familjar & Trashëgimia</h3>
                <p className="text-slate-400 max-w-sm">Mbrojtja e privatësisë dhe aseteve familjare në kohë tranzicioni.</p>
              </div>
              <Scale className="w-16 h-16 text-white/10" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. FOOTER DHE WHATSAPP BUTTON */}
      <footer className="py-10 bg-black text-white/40 text-center text-xs border-t border-white/5">
        <p>© 2024 LEX ASSOCIATES - STUDIO LIGJORE ELITARE</p>
      </footer>

      <div className="fixed bottom-8 right-8 z-[100]">
        <button 
          onClick={() => window.open(CONTACT_LINK)}
          className="bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center gap-2"
        >
          <Phone className="w-6 h-6" />
          <span className="font-bold text-sm pr-2 tracking-tight">KONSULTË URGJENTE</span>
        </button>
      </div>

    </main>
  );
}