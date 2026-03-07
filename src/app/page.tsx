"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronRight, Baby, ShieldCheck, Zap, Heart } from "lucide-react"

export default function AppleStyleFertility() {
  const scrollIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <main className="min-h-screen bg-white text-[#1d1d1f] antialiased">
      
      {/* --- NAVBAR ULTRA-MINIMAL --- */}
      <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-[#f5f5f7]">
        <div className="max-w-[1000px] mx-auto h-12 md:h-14 flex justify-between items-center px-6">
          <div className="flex items-center gap-2 font-semibold tracking-tight text-lg">
            <Baby className="w-5 h-5 text-rose-500" />
            <span>Albania Fertility</span>
          </div>
          <div className="hidden md:flex gap-8 text-xs font-medium text-[#1d1d1f]/80 italic">
            <a href="#" className="hover:text-black transition-colors">Teknologjia</a>
            <a href="#" className="hover:text-black transition-colors">Suksesi</a>
            <a href="#" className="hover:text-black transition-colors">Për Ne</a>
          </div>
          <button className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-[11px] px-3 py-1 rounded-full font-medium transition-all">
            Kontakto
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION (APPLE STYLE) --- */}
      <section className="pt-32 md:pt-48 pb-20 px-6 text-center">
        <motion.div {...scrollIn} className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-[12px] font-bold tracking-[0.2em] text-[#86868b] uppercase">E REJA E VITIT 2026</h2>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-none">
            Mrekullia e jetës. <br />
            <span className="text-[#86868b]">Me saktësi shkencore.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#86868b] max-w-2xl mx-auto pt-6">
            Zbuloni teknologjinë më të avancuar të fertilitetit në një ambient të krijuar për paqen tuaj.
          </p>
          <div className="flex justify-center gap-8 pt-10 font-medium">
            <a href="#" className="text-[#0066cc] hover:underline flex items-center gap-1 text-xl">
              Mëso më shumë <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#0066cc] hover:underline flex items-center gap-1 text-xl">
              Konsultohu <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Hero Image - Simple & Powerful */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-20 max-w-[1200px] mx-auto overflow-hidden rounded-[32px] bg-[#f5f5f7]"
        >
          <img 
            src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1470" 
            alt="Clinic Tech" 
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
          />
        </motion.div>
      </section>

      {/* --- BENTO GRID SECTION (SHERBIMET) --- */}
      <section className="py-20 px-6 bg-[#f5f5f7]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Large */}
          <motion.div {...scrollIn} className="md:col-span-2 bg-white rounded-[28px] p-10 flex flex-col justify-between h-[400px] md:h-[500px]">
             <div>
               <h3 className="text-3xl font-bold">Laboratori Gjenetik</h3>
               <p className="text-[#86868b] mt-4 max-w-sm">Teknologjia më e fundit e sekuencimit për të siguruar shëndetin e foshnjës suaj.</p>
             </div>
             <div className="flex justify-center">
               <Zap className="w-32 h-32 text-rose-500 opacity-20" />
             </div>
          </motion.div>

          {/* Card 2: Small */}
          <motion.div {...scrollIn} className="bg-white rounded-[28px] p-10 flex flex-col justify-between h-[400px] md:h-[500px]">
             <h3 className="text-3xl font-bold leading-tight">Privatësi <br /> Absolute.</h3>
             <ShieldCheck className="w-16 h-16 text-green-500" />
          </motion.div>

        </div>
      </section>

    </main>
  );
}