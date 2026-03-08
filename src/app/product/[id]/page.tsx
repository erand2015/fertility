"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Scale, ChevronLeft, ShoppingBag, ShieldCheck } from "lucide-react";
import Link from "next/link";
import ShinyButton from "@/components/magicui/shiny-button";

export default function ProductDetails() {
  const params = useParams();
  const id = params.id;

  // Këtu mund të bësh një fetch nga database ose API bazuar në ID-në
  // Për momentin po përdorim të dhëna "dummy"
  const product = {
    name: "Konsulencë Ligjore Premium",
    price: "250€",
    description: "Një seancë e plotë 60-minutëshe me ekspertët tanë elitarë për çështje tregtare dhe civile.",
    features: ["Analizë e detajuar e dokumenteve", "Strategji mbrojtjeje", "Konfidencialitet i plotë"]
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white antialiased text-left">
      {/* Navbar i thjeshtë për këtë faqe */}
      <nav className="p-8">
        <Link href="/" className="inline-flex items-center gap-2 text-[#c5a059] hover:opacity-80 font-bold uppercase tracking-widest text-xs">
          <ChevronLeft size={16} /> Kthehu Pas
        </Link>
      </nav>

      <section className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Fotoja e Produktit / Shërbimit */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square rounded-[40px] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/5 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#c5a059]/5 blur-[80px] rounded-full" />
            <Scale className="w-32 h-32 text-[#c5a059] opacity-20" />
            <span className="absolute bottom-8 left-8 text-[10px] uppercase tracking-[0.5em] text-white/20">Lex Associates ID: {id}</span>
          </motion.div>

          {/* Detajet e Produktit */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-block px-4 py-1 rounded-full border border-[#c5a059]/30 bg-[#c5a059]/10 text-[#c5a059] text-[10px] font-bold uppercase tracking-widest">
                Kategoria: Shërbime Ligjore
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                {product.name}
              </h1>
              <p className="text-4xl font-serif italic text-[#c5a059]">{product.price}</p>
            </div>

            <p className="text-white/50 text-xl leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4 py-6 border-y border-white/5">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-white/80">
                  <ShieldCheck size={18} className="text-[#c5a059]" />
                  {feature}
                </div>
              ))}
            </div>

            <div className="pt-4">
              <ShinyButton className="w-full md:w-auto px-12 py-6 bg-[#c5a059] text-black text-xl font-black rounded-2xl shadow-[0_20px_50px_rgba(197,160,89,0.3)]">
                <span className="flex items-center gap-3">
                  <ShoppingBag size={20} /> POROSIT TANI
                </span>
              </ShinyButton>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}