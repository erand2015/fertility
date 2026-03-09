"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar, ClipboardList, Beaker, Baby, ArrowRight } from "lucide-react";

export default function JourneyPage() {
  const steps = [
    {
      icon: <Calendar className="text-rose-500" size={32} />,
      title: "01. Konsulta Fillestare",
      desc: "Një bisedë e hapur me mjekët tanë tanë për të kuptuar historinë tuaj dhe për të ndërtuar besimin e parë.",
      duration: "45-60 min"
    },
    {
      icon: <ClipboardList className="text-purple-500" size={32} />,
      title: "02. Diagnostikimi i Detajuar",
      desc: "Analiza gjenetike dhe hormonale të avancuara për të gjetur shkakun e saktë dhe rrugën më të shpejtë.",
      duration: "1-2 javë"
    },
    {
      icon: <Beaker className="text-blue-500" size={32} />,
      title: "03. Plani i Personalizuar",
      desc: "Nuk ka dy trupa të njëjtë. Ne krijojmë një protokoll mjekësor unik vetëm për ju.",
      duration: "Vlerësim 24h"
    },
    {
      icon: <Baby className="text-rose-400" size={32} />,
      title: "04. Fillimi i Trajtimit",
      desc: "Nga stimulimi te transferta, ne jemi me ju në çdo sekondë me teknologjinë më moderne AI.",
      duration: "Monitorim 24/7"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F6] selection:bg-rose-100">
      {/* HEADER */}
      <section className="pt-32 pb-20 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-950 mb-6">
            Rrugëtimi juaj drejt <br />
            <span className="text-rose-500 italic font-serif font-medium">Prindërimit.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Ne e dimë që kjo rrugë ka pyetje. Këtu janë hapat që do të hedhim së bashku, 
            dorë për dore, deri në momentin e mrekullisë.
          </p>
        </motion.div>
      </section>

      {/* STEPS TIMELINE */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative bg-white border border-rose-50 p-8 md:p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row gap-8 items-start md:items-center"
            >
              <div className="w-20 h-20 bg-rose-50 rounded-[2rem] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-rose-400 bg-rose-50 px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">{step.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">{step.desc}</p>
              </div>

              <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 size={40} className="text-rose-200" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* FINAL CTA BOX */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="mt-24 bg-slate-950 rounded-[4rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/20 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter italic font-serif leading-tight">
            Gati për hapin e parë?
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
            Nuk ka nevojë të keni të gjitha përgjigjet tani. Konsulta e parë është thjesht një bisedë.
          </p>
          <button className="bg-white text-slate-950 px-12 py-6 rounded-3xl font-bold text-xl hover:bg-rose-500 hover:text-white transition-all flex items-center gap-3 mx-auto group">
            Rezervo Takimin <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </section>
    </div>
  );
}