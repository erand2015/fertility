"use client"

import React from "react"
import { motion } from "framer-motion"
import { ChevronLeft, Heart, Users, Award, Star } from "lucide-react"
import Link from "next/link"

export default function RrethNeshPage() {
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
          className="space-y-20"
        >
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-[14px] font-bold tracking-[0.2em] text-[#86868b] uppercase italic">Misioni Ynë</h2>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight">
              Besimi juaj. <br/>
              <span className="text-[#86868b]">Qëllimi ynë.</span>
            </h1>
          </div>

          {/* Imazhi Kryesor - Stili Apple Editorial */}
          <div className="rounded-[40px] overflow-hidden bg-[#f5f5f7]">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200" 
              alt="Stafi i Klinikes" 
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Historia dhe Vlerat */}
          <div className="grid md:grid-cols-2 gap-16 items-start pt-10">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold italic">Kush jemi ne?</h3>
              <p className="text-xl text-[#86868b] leading-relaxed font-medium">
                Albania Fertility lindi nga dëshira për të sjellë standardet më të larta të mjekësisë europiane në Shqipëri. Ne besojmë se çdo çift meriton jo vetëm teknologjinë më të fundit, por edhe një rrugëtim human dhe të mbështetur.
              </p>
            </div>
            <div className="space-y-6 text-[#1d1d1f]">
               <p className="text-lg leading-relaxed">
                 Me një përvojë mbi 15-vjeçare në fushën e fertilitetit, ekipi ynë i mjekëve dhe embriologëve punon me një qëllim të vetëm: të kthejë shpresën në realitet. Ne nuk trajtojmë thjesht raste, ne ndërtojmë familje.
               </p>
            </div>
          </div>

          {/* Statistikat/Vlerat - Bento Grid i vogël */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {[
              { title: "15+ Vite", desc: "Përvojë ndërkombëtare", icon: <Award className="w-8 h-8 text-blue-500" /> },
              { title: "Staf i Specializuar", desc: "Mjekë të certifikuar në BE", icon: <Users className="w-8 h-8 text-rose-500" /> },
              { title: "Kujdes 24/7", desc: "Pranë jush në çdo moment", icon: <Heart className="w-8 h-8 text-green-500" /> },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#f5f5f7] p-10 rounded-[32px] text-center space-y-4"
              >
                <div className="flex justify-center">{item.icon}</div>
                <h4 className="font-bold text-2xl tracking-tight">{item.title}</h4>
                <p className="text-[#86868b] font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="bg-[#1d1d1f] text-white p-12 md:p-20 rounded-[40px] text-center space-y-8">
             <Star className="w-10 h-10 text-yellow-400 mx-auto fill-yellow-400" />
             <blockquote className="text-2xl md:text-4xl font-medium tracking-tight leading-snug">
               "Në qendër të punës sonë nuk janë vetëm pajisjet, por njerëzit dhe ëndrrat e tyre."
             </blockquote>
             <cite className="block text-[#86868b] font-bold not-italic tracking-widest uppercase text-sm">
               — Dr. Erandi, Drejtor Mjekësor
             </cite>
          </div>
        </motion.div>
      </section>

      {/* Footer Minimalist */}
      <footer className="py-20 border-t border-[#f5f5f7] bg-[#fbfbfd]">
        <div className="max-w-[1000px] mx-auto px-6 text-[12px] text-[#86868b] font-medium">
          <p>© 2026 Albania Fertility. Ekselencë në çdo hap.</p>
        </div>
      </footer>
    </main>
  );
}