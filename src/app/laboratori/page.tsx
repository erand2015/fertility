"use client"

import { motion } from "framer-motion"
import { Microscope, Dna, ShieldCheck, ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function LaboratoriPage() {
  return (
    <main className="min-h-screen bg-white text-[#1d1d1f] antialiased">
      {/* Mini-Navbar për t'u kthyer mbrapsht */}
      <nav className="p-6">
        <Link href="/" className="flex items-center gap-2 text-[#0066cc] font-medium hover:underline">
          <ChevronLeft className="w-4 h-4" /> Kthehu mbrapsht
        </Link>
      </nav>

      <section className="max-w-[1000px] mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Laboratori i <br/><span className="text-[#86868b]">Gjenetikës Pro.</span></h1>
          
          <div className="grid md:grid-cols-2 gap-12 pt-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Sekuencimi i Gjeneratës së Re (NGS)</h3>
              <p className="text-lg text-[#86868b] leading-relaxed">
                Përdorim teknologjinë më të fundit për të analizuar çdo kromozom me saktësi 99.9%. Kjo na lejon të identifikojmë anomalitë përpara se të kryhet transferta.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-[32px] p-8 flex items-center justify-center">
              <Dna className="w-32 h-32 text-rose-500 animate-pulse" />
            </div>
          </div>

          {/* Seksioni i Detajeve Teknike */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {[
              { title: "Saktësia", desc: "99.9% precizion në screening", icon: <ShieldCheck className="text-green-500" /> },
              { title: "Shpejtësia", desc: "Rezultatet brenda 7 ditëve", icon: <Microscope className="text-blue-500" /> },
              { title: "Siguria", desc: "Protokolle strikte mbrojtjeje", icon: <ShieldCheck className="text-rose-500" /> },
            ].map((item, i) => (
              <div key={i} className="bg-[#f5f5f7] p-8 rounded-[24px] space-y-4">
                {item.icon}
                <h4 className="font-bold text-xl">{item.title}</h4>
                <p className="text-[#86868b] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  )
}