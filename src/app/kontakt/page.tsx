"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Instagram, 
  Facebook 
} from "lucide-react";
import Link from "next/link";

export default function KontaktPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const CONTACT_PHONE = "+355 6X XXX XXXX";
  const CONTACT_EMAIL = "erand2015@hotmail.com";
  const ADDRESS = "Tiranë, Shqipëri";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    
    const response = await fetch("https://formspree.io/f/mgonvbeg", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
    }
  };

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
          
          {/* Informacioni i Kontaktit (MAJTAS) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-[0.85]">
              Na <br /> <span className="text-[#c5a059] italic font-serif">Gjeni.</span>
            </h1>
            <p className="text-white/40 text-xl max-w-md mb-12 leading-relaxed text-left">
              Jemi gati t'ju ofrojmë mbrojtjen dhe asistencën ligjore që meritoni. Na kontaktoni direkt.
            </p>

            <div className="space-y-8 text-left">
              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#c5a059]/20 transition-all">
                  <Phone className="w-6 h-6 text-[#c5a059]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Telefononi</p>
                  <p className="text-xl font-bold">{CONTACT_PHONE}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#c5a059]/20 transition-all">
                  <Mail className="w-6 h-6 text-[#c5a059]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Email</p>
                  <p className="text-xl font-bold">{CONTACT_EMAIL}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#c5a059]/20 transition-all">
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

          {/* Forma e Kontaktit (DJATHTAS) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0a0a0a] border border-white/5 p-10 md:p-12 rounded-[48px] shadow-2xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 size={80} className="text-[#c5a059] mx-auto mb-6" />
                  <h3 className="text-3xl font-bold mb-4 uppercase tracking-tighter">U dërgua me sukses!</h3>
                  <p className="text-white/40 mb-8 leading-relaxed">Faleminderit që na kontaktuat. <br /> Do t'ju kthejmë përgjigje brenda 24 orëve.</p>
                  <button 
                    onClick={() => setStatus("idle")} 
                    className="text-[#c5a059] font-black uppercase tracking-[0.3em] text-[10px] hover:text-white transition-colors"
                  >
                    Dërgo një mesazh tjetër
                  </button>
                </motion.div>
              ) : (
                <form 
                  key="form"
                  onSubmit={handleSubmit} 
                  className="space-y-6 relative z-10 text-left"
                >
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 ml-2">Emri Plotë</label>
                    <input 
                      name="name" 
                      type="text" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#c5a059]/50 transition-all text-white" 
                      placeholder="Filan Fisteku"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 ml-2">Email Juaj</label>
                    <input 
                      name="email" 
                      type="email" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#c5a059]/50 transition-all text-white" 
                      placeholder="emri@shembull.al"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 ml-2">Mesazhi</label>
                    <textarea 
                      name="message" 
                      rows={4} 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#c5a059]/50 transition-all text-white resize-none" 
                      placeholder="Si mund t'ju ndihmojmë?"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === "sending"}
                    className="w-full bg-[#c5a059] text-black py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(197,160,89,0.3)] hover:bg-white transition-all disabled:opacity-50 active:scale-95"
                  >
                    <span className="flex items-center justify-center gap-3">
                      {status === "sending" ? "Duke u dërguar..." : "Dërgo Mesazhin"} <Send size={18} />
                    </span>
                  </button>

                  {status === "error" && (
                    <p className="text-red-500 text-[10px] font-bold uppercase text-center mt-4">Pati një problem, ju lutem provoni përsëri.</p>
                  )}
                </form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

        <div className="mt-32 text-center opacity-20 text-[10px] uppercase tracking-[0.5em]">
          Lex Associates • 2026 • Studio Juridike Elitare
        </div>
      </div>
    </main>
  );
}