"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, ShieldCheck, Gavel, FileText, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function SherbimetPage() {
  const sherbimet = [
    { titulli: "E Drejta Tregtare", icon: <ShieldCheck className="w-12 h-12 text-[#c5a059]" />, pershkrimi: "Mbrojtje për korporatat, kontratat dhe investimet tuaja." },
    { titulli: "Mbrojtje Penale", icon: <Gavel className="w-12 h-12 text-[#c5a059]" />, pershkrimi: "Përfaqësim agresiv dhe mbrojtje e të drejtave tuaja në çdo gjykatë." },
    { titulli: "Litigim Civil", icon: <FileText className="w-12 h-12 text-[#c5a059]" />, pershkrimi: "Zgjidhja e mosmarrëveshjeve pronësore dhe familjare." },
    { titulli: "E Drejta Administrative", icon: <Scale className="w-12 h-12 text-[#c5a059]" />, pershkrimi: "Asistencë me licencat dhe proceset shtetërore." }
  ];

  return (
    <main className="min-h-screen bg-[#030303] text-white antialiased text-left px-6 py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Butoni Kthehu */}
        <Link href="/" className="inline-flex items-center gap-2 text-[#c5a059] mb-12 hover:underline font-bold uppercase tracking-widest text-xs">
          <ChevronLeft size={16} /> Kthehu te Kryefaqja
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase leading-none">
            Shërbimet <br /> <span className="text-[#c5a059] italic font-serif">Tona Elitare.</span>
          </h1>
          <p className="text-white/40 text-xl max-w-2xl mb-20">
            Ofrojmë zgjidhje ligjore të specializuara me fokus te detajet dhe fitoret e garantuara.
          </p>
        </motion.div>

        {/* Lista e Shërbimeve */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sherbimet.map((s, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0a0a0a] border border-white/5 p-12 rounded-[40px] hover:border-[#c5a059]/30 transition-all group"
            >
              <div className="mb-8">{s.icon}</div>
              <h3 className="text-3xl font-bold mb-4">{s.titulli}</h3>
              <p className="text-white/40 leading-relaxed text-lg">{s.pershkrimi}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}