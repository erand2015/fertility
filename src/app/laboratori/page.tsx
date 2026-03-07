"use client"

import React from "react"
import { motion } from "framer-motion"
import { Microscope, Dna, ShieldCheck, ChevronLeft, Zap } from "lucide-react"
import Link from "next/link"

export default function LaboratoriPage() {
  return (
    <main className="min-h-screen bg-white text-[#1d1d1f] antialiased">
      {/* Mini-Navbar */}
      <nav className="p-6 border-b border-[#f5f5f7]">
        <Link href="/" className="flex items-center gap-2 text-[#0066cc] font-semibold hover:underline">
          <ChevronLeft className="w-4 h-4" /> Faqja Kryesore
        </Link>
      </nav>

      <section className="max-w-[1000px] mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Laboratori i <br/>
              <span className="text-[#86868b] italic underline decoration-rose-200 uppercase tracking-tighter">Gjenetikës Pro.</span>
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 pt-10 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold italic">Teknologjia NGS</h3>
              <p className="text-xl text-[#86868b] leading-relaxed font-medium">
                Përdorim teknologjinë më të fundit të sekuencimit (Next Generation Sequencing) për të analizuar shëndetin kromozomik me saktësi absolute.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-[40px] p-16 flex items-center justify-center border border-[#f5f5f7] shadow-inner">
              <Dna className="w-32 h-32 text-rose-500 animate-pulse" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              { title: "Saktësia", desc: "99.9% precizion në screening", icon: <ShieldCheck className="w-8 h-8 text-green-500" /> },
              { title: "Shpejtësia", desc: "Rezultatet brenda 7 ditëve", icon: <Microscope className="w-8 h-8 text-blue-500" /> },
              { title: "Siguria", desc: "Protokolle strikte mbrojtjeje", icon: <Zap className="w-8 h-8 text-yellow-500" /> },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#f5f5f7] p-10 rounded-[32px] space-y-4 border border-[#f5f5f7] hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                {item.icon}
                <h4 className="font-bold text-2xl italic tracking-tight">{item.title}</h4>
                <p className="text-[#86868b] font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* Footer Minimalist stili Apple */}
      <footer className="py-20 border-t border-[#f5f5f7] bg-[#fbfbfd]">
        <div className="max-w-[1000px] mx-auto px-6 text-[12px] text-[#86868b] font-medium leading-relaxed">
          <p>© 2026 Albania Fertility. Të gjitha të drejtat e rezervuara.</p>
          <p className="mt-4">Analizat gjenetike kryhen në bashkëpunim me qendrat më prestigjioze europiane për saktësi maksimale.</p>
        </div>
      </footer>
    </main>
  );
}