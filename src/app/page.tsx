"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link"; 
import { ArrowUpRight, ShieldCheck, Heart, Sparkles, Activity } from "lucide-react";

export default function FertilityClinic() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "IVF Treatment",
      link: "/ivf", 
      img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000",
      desc: "Teknologjia ICSI dhe monitorim me AI për sukses maksimal.",
      size: "md:col-span-2",
      color: "from-blue-500/20"
    },
    {
      title: "Egg Freezing",
      link: "/egg-freezing", 
      img: "https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=2000",
      desc: "Ngrirja me vitrifikim për siguri afatgjatë.",
      size: "md:col-span-1",
      color: "from-rose-500/20"
    },
    {
      title: "Genetic Testing",
      link: "/ivf", 
      img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2000",
      desc: "PGT-A për embrione të shëndetshme.",
      size: "md:col-span-1",
      color: "from-purple-500/20"
    },
    {
      title: "Consultation",
      link: "/contact", 
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000",
      desc: "Bisedoni me ekspertët tanë sot.",
      size: "md:col-span-2",
      color: "from-amber-500/20"
    }
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-rose-100 selection:text-rose-900 overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-[100] px-6 py-4 transition-all duration-700 ease-in-out transform ${
          isScrolled 
            ? "-translate-y-full opacity-0 pointer-events-none" 
            : "translate-y-0 opacity-100 pointer-events-auto"
        }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4 bg-white/40 backdrop-blur-xl border border-white/20 shadow-sm rounded-[2rem]">
          <Link href="/" className="flex items-center gap-2 text-2xl font-black tracking-tighter text-slate-900 pointer-events-auto">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white italic bg-rose-500 shadow-lg shadow-rose-200">
              L
            </div>
            <span>
              LUMINA <span className="text-rose-500 font-serif italic font-light">Fertility</span>
            </span>
          </Link>

          <div className="hidden md:flex space-x-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 pointer-events-auto">
            <a href="#services" className="hover:text-rose-500 transition-colors">Shërbimet</a>
            <Link href="/journey" className="hover:text-rose-500 transition-colors">Rrugëtimi</Link>
            <Link href="/contact" className="hover:text-rose-500 transition-colors">Kontakt</Link>
          </div>

          <Link href="/contact" className="pointer-events-auto">
            <button className="bg-slate-950 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-rose-600 transition-all shadow-lg shadow-rose-200/50">
              Rezervo Tani
            </button>
          </Link>
        </div>
      </nav>

      {/* HERO SECTION - ANIMACIONET E NDRYSHUARA KETU */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2500" 
            alt="Clinic Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-rose-100 shadow-sm text-rose-600 text-[10px] font-bold tracking-widest uppercase mb-8"
          >
            <Sparkles size={14} /> E ardhmja e familjes suaj
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.5, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2 
            }}
            className="text-7xl md:text-[110px] font-black leading-[0.85] tracking-tight text-slate-950 mb-10"
          >
            Jeta fillon <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-rose-400 italic font-serif font-medium leading-normal">
              këtu.
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.6 
            }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/journey">
              <button className="px-10 py-5 bg-slate-950 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-rose-300 transition-all hover:-translate-y-1 w-full sm:w-auto">
                Fillo rrugëtimin tend
              </button>
            </Link>

            <Link href="/contact">
                <button className="px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                <Activity size={20} className="text-rose-500" /> Konsultë Falas
                </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* BENTO SERVICES GRID */}
      <section id="services" className="relative z-20 py-32 px-6 max-w-7xl mx-auto bg-white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl text-left">
            <h2 className="text-5xl font-black tracking-tighter mb-4">Ekselencë në çdo hap.</h2>
            <p className="text-slate-500 text-lg italic">Zgjidhni shërbimin që përshtatet me planet tuaja.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -15 }}
              className={`
                ${service.size} group relative rounded-[2.5rem] overflow-hidden bg-slate-100 min-h-[400px] 
                border-2 border-transparent 
                hover:border-rose-500 
                hover:shadow-[0_0_40px_rgba(244,63,94,0.2)]
                transition-all duration-500 ease-out shadow-sm
              `}
            >
              <img
                src={service.img}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 brightness-90 group-hover:brightness-75"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${service.color} via-transparent to-transparent opacity-60`}></div>
              
              <div className="relative p-10 h-full flex flex-col justify-end text-white z-10">
                <h3 className="text-3xl font-bold mb-2 tracking-tight">{service.title}</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-xs text-slate-100 mb-6">
                  {service.desc}
                </p>
                <Link
                  href={service.link}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 self-start group-hover:w-full group-hover:justify-between group-hover:px-6 transition-all duration-300 overflow-hidden shadow-xl"
                >
                  <span className="hidden group-hover:block font-bold text-xs uppercase tracking-tighter text-slate-900">Detaje</span>
                  <ArrowUpRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative z-10 py-32 bg-slate-950 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="text-white space-y-12 text-left">
            <h2 className="text-5xl font-black leading-tight tracking-tighter">Pse Lumina <br /> është ndryshe?</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 flex items-center justify-center text-rose-500 shrink-0 border border-rose-500/20">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Siguri Gjenetike 100%</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Çdo embrion testohet me teknologjinë më të fundit NGS për të garantuar shëndet maksimal.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-rose-500/20 blur-[100px] rounded-full" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 text-center text-white overflow-hidden shadow-2xl">
              <div className="text-[120px] font-black leading-none text-rose-500 mb-4 tracking-tighter">25+</div>
              <p className="text-2xl font-bold italic font-serif">Vite duke krijuar mrekulli.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-16 bg-white text-center border-t border-slate-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-black tracking-tighter text-slate-900">
            LUMINA <span className="text-rose-500 italic">Fertility</span>
          </div>
          <p className="text-slate-400 text-xs tracking-[0.2em] uppercase font-bold">
            © 2026 Lumina Clinic. Crafted for miracles.
          </p>
          <div className="flex gap-8 text-[10px] font-black text-slate-500 uppercase tracking-widest">
             <Link href="/contact" className="hover:text-rose-500 transition-colors">Kontakti</Link>
             <Link href="/journey" className="hover:text-rose-500 transition-colors">Rrugëtimi</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
