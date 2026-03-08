"use client";

import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Scale, ShieldCheck, Gavel, FileText, Phone, ChevronRight, Menu, X, Instagram, Facebook } from "lucide-react";
import ShinyButton from "@/components/magicui/shiny-button";
import InteractiveGridPattern from "@/components/magicui/interactive-grid";
import Link from "next/link"; 

// --- ANIMACIONET (mbeten njesoj) ---
const gavelVariants: Variants = {
  initial: { rotate: 0 },
  animate: { 
    rotate: [-25, 15, -20, 10, 0], 
    transition: { duration: 0.6, ease: "easeOut" as const } 
  }
};

const menuVariants = {
  closed: { opacity: 0, scale: 0.95 },
  open: { 
    opacity: 1, 
    scale: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
  }
};

const itemVariants = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0 }
};

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const CONTACT_LINK = "tel:+3556XXXXXXXX";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "unset";
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white antialiased selection:bg-[#c5a059] selection:text-black scroll-smooth overflow-x-hidden text-left">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-8">
        <div className="max-w-6xl mx-auto py-6">
          <div className="flex items-center justify-between px-6 md:px-8 py-5 rounded-[24px] bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 shadow-2xl relative z-[110]">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 cursor-pointer group">
              <div className="p-2.5 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/20 group-hover:bg-[#c5a059] transition-all">
                <Scale className="w-6 h-6 text-[#c5a059] group-hover:text-black" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl font-black tracking-tighter leading-none uppercase">
                  Lex <span className="text-[#c5a059]">Associates</span>
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase opacity-40 font-bold mt-1">Studio Elitare</span>
              </div>
            </Link>

            {/* Desktop Menu - NDRYSHUAR KETU */}
            <div className="hidden lg:flex items-center gap-10 text-[12px] font-bold uppercase tracking-widest text-white/50">
              <Link href="/sherbimet" className="hover:text-white transition-all">Shërbimet</Link>
              <Link href="/kontakt" className="hover:text-white transition-all">Kontakt</Link>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/kontakt">
                <button className="hidden md:block bg-[#c5a059] text-black px-6 py-3 rounded-xl font-bold text-[11px] uppercase tracking-wider hover:bg-white transition-all shadow-lg">
                  Konsultë
                </button>
              </Link>
              <button onClick={toggleMenu} className="lg:hidden p-2 text-[#c5a059] relative z-[120]">
                {isOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* --- MOBILE MENU --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-[#030303]/98 backdrop-blur-3xl z-[105] flex flex-col items-center justify-center lg:hidden">
              <motion.div variants={menuVariants} initial="closed" animate="open" exit="closed" className="flex flex-col items-center gap-12 text-center">
                <Link href="/sherbimet" onClick={toggleMenu} className="text-5xl font-black uppercase tracking-[0.1em] text-white/90">Shërbimet</Link>
                <Link href="/kontakt" onClick={toggleMenu} className="text-5xl font-black uppercase tracking-[0.1em] text-white/90">Kontakt</Link>
                <Link href="/kontakt" onClick={toggleMenu}>
                  <button className="bg-[#c5a059] text-black px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em]">Na Shkruani</button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden text-left">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-30 grayscale-[50%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-transparent" />
          <InteractiveGridPattern className="opacity-10" />
        </div>

        <div className="relative z-10 px-6 max-w-6xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="max-w-3xl space-y-8">
            <h1 className="text-5xl md:text-[100px] font-bold tracking-tighter leading-[0.9]">
              Drejtësi që <br /> <span className="text-[#c5a059] italic font-serif">ju takon.</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/kontakt">
                <ShinyButton className="px-12 py-5 bg-[#c5a059] text-black text-lg font-black rounded-xl">Rezervo Konsultë</ShinyButton>
              </Link>
              <Link href="/sherbimet">
                <button className="px-12 py-5 border border-white/20 rounded-xl text-sm font-bold hover:bg-white/10 transition-all uppercase tracking-widest backdrop-blur-sm">
                  Eksploro Shërbimet
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}