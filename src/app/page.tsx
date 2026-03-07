"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Stethoscope, 
  MessageCircle, 
  ChevronRight, 
  HeartPulse,
  Microscope,
  Baby,
  MapPin,
  Clock,
  Phone
} from "lucide-react"
import Link from "next/link"

export default function KlinikaProfesionale() {
  
  // NDRYSHO KETE NUMER ME NUMRIN TEND REAL
  const WHATSAPP_NUMBER = "3556XXXXXXXX"; 
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Përshëndetje! Ju kontaktoj nga faqja e klinikës për një konsultë.`;

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* --- 1. NAVBAR (MENUJA) --- */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-200">
              <HeartPulse className="text-white w-6 h-6" />
            </div>
            <h1 className="text-2xl font-black tracking-tighter">ALBANIA<span className="text-blue-600">FERTILITY</span></h1>
          </div>
          
          <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-widest text-slate-600">
            <Link href="#sherbimet" className="hover:text-blue-600 transition-colors">Shërbimet</Link>
            <Link href="#mjeket" className="hover:text-blue-600 transition-colors">Mjekët</Link>
            <Link href="#kontakti" className="hover:text-blue-600 transition-colors">Kontakt</Link>
          </div>

          <Button 
            onClick={() => window.open(WHATSAPP_LINK, '_blank')}
            className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 font-bold shadow-lg shadow-blue-100"
          >
            REZERVO TAKIM
          </Button>
        </div>
      </nav>

      {/* --- 2. HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10 text-center lg:text-left">
            <Badge className="bg-blue-50 text-blue-600 border-blue-100 px-4 py-1 text-sm font-bold animate-pulse">
              Ekselencë në Fertilitet
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-slate-900">
              Rruga juaj drejt <br />
              <span className="text-blue-600">Prindërimit.</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed italic">
              "Besimi juaj është misioni ynë. Shkenca takon përkushtimin për të krijuar familjen tuaj."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => document.getElementById('sherbimet')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-16 px-10 rounded-2xl bg-slate-900 text-white text-lg font-bold hover:bg-blue-600 transition-all shadow-xl"
              >
                Shërbimet <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                className="h-16 px-10 rounded-2xl border-2 text-lg font-bold group border-slate-200 hover:border-green-500 transition-all"
                onClick={() => window.open(WHATSAPP_LINK, '_blank')}
              >
                <MessageCircle className="mr-2 w-6 h-6 text-green-500 group-hover:scale-125 transition-transform" /> 
                WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse" />
            <div className="relative rounded-[40px] overflow-hidden border-8 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000" 
                alt="Clinic Interior" 
                className="w-full h-[500px] object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. STATISTIKAT --- */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Suksesi IVF", val: "94%" },
            { label: "Bebe të Lindura", val: "1,200+" },
            { label: "Vite Eksperiencë", val: "18+" },
            { label: "Mjekë Specialistë", val: "12" },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-1">
              <div className="text-4xl font-black text-blue-600 tracking-tighter">{stat.val}</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 4. SHERBIMET --- */}
      <section id="sherbimet" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h3 className="text-sm font-black text-blue-600 uppercase tracking-[0.4em]">Ekspertiza Jonë</h3>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Trajtimet e Avancuara</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "IVF & ICSI", icon: <Microscope className="w-7 h-7" />, desc: "Laboratori më modern në rajon për fekondim të asistuar me saktësi maksimale." },
            { title: "Ngrirja e Vezëve", icon: <Baby className="w-7 h-7" />, desc: "Ruani mundësinë tuaj për prindërim në të ardhmen me teknologjinë Cryo." },
            { title: "Diagnostikë", icon: <Stethoscope className="w-7 h-7" />, desc: "Kontroll i plotë i fertilitetit për meshkuj dhe femra me teknologjinë 4D." },
          ].map((s, i) => (
            <Card key={i} className="group hover:border-blue-600 transition-all duration-500 rounded-[35px] p-10 bg-white border-2 border-slate-50 hover:shadow-2xl hover:shadow-blue-50">
              <CardContent className="p-0 space-y-6">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                  {s.icon}
                </div>
                <h4 className="text-2xl font-bold tracking-tight">{s.title}</h4>
                <p className="text-slate-500 leading-relaxed text-lg">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* --- 5. KONTAKTI & FOOTER --- */}
      <section id="kontakti" className="bg-slate-900 text-white py-24 rounded-t-[50px] px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl font-black tracking-tight">Na vizitoni në Klinikë</h2>
            <p className="text-slate-400 text-lg">Jemi gati t'ju mirëpresim për një konsultë fillestare pa asnjë detyrim.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600/20 p-3 rounded-full text-blue-400"><MapPin /></div>
                <div>
                  <div className="font-bold">Adresa</div>
                  <div className="text-slate-400">Rruga "Sami Frashëri", Tiranë, Shqipëri</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-600/20 p-3 rounded-full text-blue-400"><Clock /></div>
                <div>
                  <div className="font-bold">Orari</div>
                  <div className="text-slate-400">E Hënë - E Premte: 08:00 - 20:00</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-600/20 p-3 rounded-full text-blue-400"><Phone /></div>
                <div>
                  <div className="font-bold">Telefon</div>
                  <div className="text-slate-400">+355 6X XXX XXXX</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-8 rounded-[40px] border border-white/10 flex flex-col items-center justify-center text-center space-y-6">
            <h3 className="text-2xl font-bold">Gati për të filluar?</h3>
            <p className="text-slate-400">Klikoni butonin poshtë për të biseduar direkt me specialistët tanë në WhatsApp.</p>
            <Button 
              onClick={() => window.open(WHATSAPP_LINK, '_blank')}
              className="w-full py-8 bg-green-500 hover:bg-green-600 rounded-2xl text-xl font-bold"
            >
              BISEDO NË WHATSAPP
            </Button>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
          &copy; 2024 ALBANIA FERTILITY CENTER. Të gjitha të drejtat e rezervuara.
        </div>
      </section>

      {/* --- 6. FLOATING WHATSAPP BUTTON --- */}
      <div className="fixed bottom-8 right-8 z-[100] group">
        <div className="absolute bottom-full right-0 mb-4 bg-white text-slate-900 px-4 py-2 rounded-xl shadow-2xl font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border animate-bounce">
          Keni pyetje? Na shkruani!
        </div>
        <button 
          onClick={() => window.open(WHATSAPP_LINK, '_blank')}
          className="bg-green-500 text-white p-5 rounded-full shadow-[0_20px_50px_rgba(34,197,94,0.4)] hover:scale-110 active:scale-95 transition-all"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>

    </main>
  )
}