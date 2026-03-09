"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FertilityClinic() {
  return (
    <div className="min-h-screen bg-[#FFF8F6] text-gray-800">

      {/* NAVBAR */}

      <nav className="fixed w-full z-50 flex justify-between items-center p-6 bg-white/70 backdrop-blur-xl border-b border-rose-100">

        <div className="text-2xl font-black text-rose-500">
          LUMINA <span className="text-purple-400 italic font-light">Fertility</span>
        </div>

        <div className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.3em] text-gray-500">
          <a href="#services">Shërbimet</a>
          <a href="#doctors">Doktorët</a>
          <a href="#about">Rreth</a>
        </div>

        <button className="bg-gradient-to-r from-rose-400 to-purple-400 text-white px-6 py-3 rounded-full text-xs font-bold shadow-lg">
          Rezervo
        </button>

      </nav>

      {/* HERO */}

      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-purple-100 to-amber-100"></div>

        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1580281657527-47dcb1c5c4c6?q=80&w=2000')",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center z-10 max-w-4xl px-6"
        >

          <h1 className="text-6xl md:text-8xl font-black leading-[0.9]">
            Jeta fillon
            <br />
            <span className="bg-gradient-to-r from-rose-500 via-purple-500 to-amber-400 bg-clip-text text-transparent italic">
              këtu
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-600 max-w-xl mx-auto">
            Klinika jonë e fertilitetit kombinon teknologjinë moderne me
            kujdes të personalizuar për të realizuar ëndrrën tuaj për familje.
          </p>

          <button className="mt-10 px-10 py-5 bg-gradient-to-r from-rose-400 to-purple-400 text-white rounded-2xl font-bold shadow-lg">
            Rezervo Konsultë
          </button>

        </motion.div>

      </section>

      {/* SUCCESS STATS */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div>
            <h3 className="text-5xl font-black text-rose-500">98%</h3>
            <p className="mt-2 text-gray-500">IVF Success Rate</p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-purple-500">12,000+</h3>
            <p className="mt-2 text-gray-500">Families Created</p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-amber-500">25+</h3>
            <p className="mt-2 text-gray-500">Years Experience</p>
          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section id="services" className="py-32 px-6 bg-gradient-to-b from-white to-rose-50">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            {
              title: "IVF Treatment",
              img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000",
              desc: "Trajtimi më i avancuar për fertilitet.",
            },
            {
              title: "Egg Freezing",
              img: "https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=2000",
              desc: "Ruani fertilitetin për të ardhmen.",
            },
            {
              title: "Genetic Testing",
              img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2000",
              desc: "Analiza gjenetike për embrione të shëndetshme.",
            },
          ].map((service, i) => (
            <div key={i} className="group relative rounded-[30px] overflow-hidden shadow-xl">

              <img
                src={service.img}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              <div className="relative p-10 text-white h-[420px] flex flex-col justify-end">

                <h3 className="text-2xl font-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-sm opacity-90">
                  {service.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* DOCTORS */}

      <section id="doctors" className="py-32 bg-white">

        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-black">Ekspertët Tanë</h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

          {[
            {
              name: "Dr. Maria Rossi",
              role: "IVF Specialist",
              img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
            },
            {
              name: "Dr. John Smith",
              role: "Embryologist",
              img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
            },
            {
              name: "Dr. Elena Petrova",
              role: "Fertility Consultant",
              img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
            },
          ].map((doc, i) => (

            <div key={i} className="text-center">

              <img
                src={doc.img}
                className="w-60 h-60 object-cover rounded-full mx-auto shadow-lg"
              />

              <h3 className="mt-6 text-xl font-bold">
                {doc.name}
              </h3>

              <p className="text-gray-500">
                {doc.role}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* TESTIMONIALS */}

      <section className="py-32 bg-gradient-to-br from-rose-50 to-purple-50">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-black mb-10">
            Historitë e Pacientëve
          </h2>

          <p className="text-lg text-gray-600 italic">
            “Pas 3 vitesh përpjekje, falë Lumina Fertility u bëmë prindër.
            Faleminderit për kujdesin dhe profesionalizmin.”
          </p>

          <p className="mt-6 font-bold">
            — Sarah & Michael
          </p>

        </div>

      </section>

      {/* ABOUT */}

      <section id="about" className="py-32 bg-white">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center px-6">

          <div>

            <h2 className="text-5xl font-black mb-10">
              Pse të zgjidhni klinikën tonë?
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Lumina Fertility është një nga klinikat më të avancuara të fertilitetit
              në Evropë, me laborator modern dhe ekip mjekësor me përvojë
              ndërkombëtare.
            </p>

          </div>

          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000"
            className="rounded-[40px] shadow-2xl"
          />

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 text-center bg-gradient-to-r from-rose-400 to-purple-400 text-white">

        <h2 className="text-4xl font-black mb-6">
          Filloni udhëtimin tuaj drejt prindërimit
        </h2>

        <button className="bg-white text-rose-500 px-10 py-5 rounded-2xl font-bold">
          Rezervo Konsultë
        </button>

      </section>

      {/* FOOTER */}

      <footer className="py-20 text-center bg-white border-t border-gray-200">

        <p className="text-gray-400 text-sm">
          © 2026 Lumina Fertility Clinic
        </p>

      </footer>

    </div>
  );
}