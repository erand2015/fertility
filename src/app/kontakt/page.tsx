"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, Mail, Phone, MapPin, Send, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import ShinyButton from "@/components/magicui/shiny-button";

export default function KontaktPage() {
  const CONTACT_PHONE = "+355 6X XXX XXXX";
  const CONTACT_EMAIL = "info@lexassociates.al";
  const ADDRESS = "Rruga e Barrikadave, Tirana, Albania";

  return (
    <main className="min-h-screen bg-[#030303] text-white antialiased selection:bg-[#c5a059] selection:text-black">
      
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#c5a059]/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-24 relative z-10">
        
        {/* Navigimi mbrapsht */}
        <Link href="/" className="inline-flex items-center gap-2 text-[#c5a059] mb-16 hover:gap-4 transition-all font-bold uppercase tracking-[0.3em] text-[10px]">
          <ChevronLeft size={14} /> Kthehu te Kryefaqja
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Informacioni i Kontaktit */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-[0.85]">
              Na <br /> <span className="text-[#c5a059] italic font-serif">Gjeni.</span>
            </h1>
            <p className="text-white/40 text-xl max-w-md mb-12 leading-relaxed">
              Jemi gati t'ju ofrojmë mbrojtjen dhe asistencën ligjore që meritoni. Na kontaktoni direkt ose lini një mesazh.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#c5a059]/20 group-hover:border-[#c5a059]/30 transition-all">
                  <Phone className="w-6 h-6 text-[#c5a059]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Telefononi</p>
                  <p className="text-xl font-bold">{CONTACT_PHONE}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#c5a059]/20 group-hover:border-[#c5a059]/30 transition-all">
                  <Mail className="w-6 h-6 text-[#c5a059]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Email</p>
                  <p className="text-xl font-bold">{CONTACT_EMAIL}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#c5a059]/20 group-hover:border-[#c5a059]/30 transition-all">
                  <MapPin className="w-6 h-6 text-[#c5a059]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Zyra</p>
                  <p className="text-xl font-bold">{ADDRESS}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 mt-16">
              <Instagram className="w-6 h-6 text-white/20 hover:text-[#c5a059] transition-colors cursor-pointer" />
              <Facebook className="w-6 h-6 text-white/20 hover:text-[#c5a059] transition-colors cursor-pointer" />
            </div>
          </motion.div>

          {/* Forma e Kontaktit */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0a0a0a] border border-white/5 p-10 md:p-12 rounded-[48px] shadow-2xl relative overflow-hidden"
          >
            <form className="space-y-6 relative z-10">
              <div className="space-y-2 text-left">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 ml-2">Emri Plotë</label>
                <input type="text" placeholder="Filan Fisteku" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#c5a059]/50 transition-all" />
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 ml-2">Email Adresa</label>
                <input type="email" placeholder="email@shembull.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#c5a059]/50 transition-all" />
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 ml-2">Mesazhi Juaj</label>
                <textarea rows={4} placeholder="Si mund t'ju ndihmojmë?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#c5a059]/50 transition-all resize-none" />
              </div>

              <ShinyButton className="w-full bg-[#c5a059] text-black py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(197,160,89,0.3)]">
                <span className="flex items-center justify-center gap-3">
                  Dërgo Mesazhin <Send size={18} />
                </span>
              </ShinyButton>
            </form>
          </motion.div>

        </div>

        <div className="mt-32 text-center opacity-20 text-[10px] uppercase tracking-[0.5em]">
          Lex Associates • 2026 • Studio Juridike Elitare
        </div>
      </div>
    </main>
  );
}