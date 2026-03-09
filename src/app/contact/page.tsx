"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

// IMPORTET E REJA
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

export default function ContactPage() {
  // Përdorim gjuhën globale
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-white selection:bg-rose-100">
      
      {/* HEADER SECTION */}
      <section className="pt-32 pb-16 px-6 text-center bg-gradient-to-b from-rose-50/50 to-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-950 mb-6">
            {t.contact.title} <br />
            <span className="text-rose-500 italic font-serif font-medium text-6xl md:text-7xl">
              {t.contact.titleItalic}
            </span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* KONTAKTET DHE INFO */}
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <Phone className="text-rose-500 mb-4" size={24} />
                <h4 className="font-bold text-slate-900 mb-2">
                  {lang === "sq" ? "Telefononi" : "Call Us"}
                </h4>
                <p className="text-slate-500 text-sm">+355 69 XX XX XXX</p>
                <p className="text-slate-500 text-sm">+355 42 XX XX XX</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <Mail className="text-purple-500 mb-4" size={24} />
                <h4 className="font-bold text-slate-900 mb-2">Email</h4>
                <p className="text-slate-500 text-sm">info@luminafertility.al</p>
                <p className="text-slate-500 text-sm">care@luminafertility.al</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <MapPin className="text-blue-500 mb-4" size={24} />
                <h4 className="font-bold text-slate-900 mb-2">
                  {lang === "sq" ? "Lokacioni" : "Location"}
                </h4>
                <p className="text-slate-500 text-sm">Rr. Ibrahim Rugova,</p>
                <p className="text-slate-500 text-sm">Tiranë, Shqipëri</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <Clock className="text-amber-500 mb-4" size={24} />
                <h4 className="font-bold text-slate-900 mb-2">
                   {lang === "sq" ? "Orari" : "Opening Hours"}
                </h4>
                <p className="text-slate-500 text-sm">Hën - Pre: 08:00 - 20:00</p>
                <p className="text-slate-500 text-sm">Shtunë: 09:00 - 14:00</p>
              </div>
            </div>

            {/* LIVE CHAT BOX */}
            <div className="bg-slate-950 rounded-[3rem] p-10 text-white flex items-center justify-between overflow-hidden relative group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">{t.contact.whatsappTitle}</h3>
                <p className="text-slate-400 text-sm mb-6">{t.contact.whatsappSub}</p>
                <button className="bg-white text-slate-950 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-green-500 hover:text-white transition-all">
                  <MessageCircle size={20} /> WhatsApp Chat
                </button>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-rose-500/20 blur-3xl rounded-full" />
            </div>
          </div>

          {/* CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white border border-slate-100 shadow-2xl shadow-rose-100/50 rounded-[3rem] p-8 md:p-12"
          >
            <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter">
              {t.contact.formTitle}
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">
                    {t.contact.nameLabel}
                  </label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-rose-500 outline-none transition-all" placeholder="Filan Fisteku" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">
                    {t.contact.emailLabel}
                  </label>
                  <input type="email" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-rose-500 outline-none transition-all" placeholder="emri@gmail.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">
                  {t.contact.interestLabel}
                </label>
                <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-rose-500 outline-none transition-all appearance-none text-slate-500">
                  <option>IVF Treatment</option>
                  <option>Egg Freezing</option>
                  <option>{lang === "sq" ? "Konsultë e Përgjithshme" : "General Consultation"}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">
                  {t.contact.messageLabel}
                </label>
                <textarea rows={4} className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-rose-500 outline-none transition-all" placeholder="..."></textarea>
              </div>

              <button className="w-full bg-rose-500 text-white py-5 rounded-2xl font-bold text-lg hover:bg-rose-600 transition-all shadow-lg shadow-rose-200 flex items-center justify-center gap-3">
                {t.contact.sendBtn} <Send size={20} />
              </button>
            </form>
          </motion.div>

        </div>
      </section>
    </div>
  );
}