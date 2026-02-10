import React from 'react';
import { ArrowRight, MapPin, ShieldCheck, Mail, Phone } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F7F4] font-sans text-[#2C3E50]">
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full z-50 bg-[#F9F7F4]/90 backdrop-blur-md border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-tight text-[#2C3E50]">Dr. Maya Reynolds, PsyD</span>
            <span className="text-[10px] uppercase tracking-widest text-[#7D8E7E] font-bold">Licensed Clinical Psychologist</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-[#7D8E7E] transition-colors">About</a>
            <a href="#services" className="hover:text-[#7D8E7E] transition-colors">Services</a>
            <a href="#office" className="hover:text-[#7D8E7E] transition-colors">Office</a>
          </div>
          <button className="bg-[#2C3E50] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#7D8E7E] transition-all shadow-sm">
            Book a Consultation
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl md:text-7xl font-serif text-[#2C3E50] leading-[1.1]">
              Holistic Therapy for <br />
              <span className="italic font-normal text-[#7D8E7E]">Modern Professionals</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              Helping high-achieving individuals in <span className="font-semibold text-[#2C3E50]">Santa Monica</span> navigate anxiety, burnout, and the lingering effects of trauma.
            </p>
            <div className="pt-4">
              <button className="flex items-center gap-2 group font-semibold text-[#2C3E50] border-b-2 border-[#7D8E7E] pb-1">
                View Approach 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="flex-1 w-full aspect-[4/5] bg-[#E8E2D9] rounded-2xl overflow-hidden shadow-xl relative">
            <img 
              src="/Dr. Maya Reynolds.jpg" 
              alt="Dr. Maya Reynolds" 
              className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-white px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C3E50]">A Space to Slow Down</h2>
          <p className="text-lg text-gray-600 italic leading-relaxed">
            "Many people I work with feel 'functional' on the outside while quietly struggling with constant worry, burnout, or a sense that they're always bracing for something to go wrong."
          </p>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            My work focuses on helping self-aware professionals move beyond symptom relief to develop the resilience needed for a more sustainable way of living and working.
          </p>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-[#F9F7F4] px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-serif text-[#2C3E50]">Specialized Support</h2>
            <div className="h-1 w-16 bg-[#7D8E7E] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Anxiety & Burnout", desc: "For entrepreneurs and creatives struggling with perfectionism and high internal pressure." },
              { title: "Trauma Recovery", desc: "A paced, trauma-informed approach using EMDR to process long-standing patterns." },
              { title: "Integrative Care", desc: "Blending CBT with mindfulness to address both emotional and physiological symptoms." }
            ].map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl border border-[#E8E2D9] hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-serif text-[#2C3E50] mb-4">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OUR OFFICE (CUSTOM SECTION) --- */}
      <section id="office" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-serif text-[#2C3E50]">Your Sanctuary</h2>
            <p className="text-gray-600 leading-relaxed">
              Located at <strong className="text-[#2C3E50]">123th Street 45 W, Santa Monica</strong>, my office is a quiet, private sanctuary designed with high ceilings and abundant natural light.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-gray-600">
                <MapPin className="w-5 h-5 text-[#7D8E7E]" />
                <span>In-person in Santa Monica & Telehealth in CA</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <ShieldCheck className="w-5 h-5 text-[#7D8E7E]" />
                <span>Uncluttered, calm, and confidential environment</span>
              </div>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 h-[450px]">
            <img src="/office1.jpg" alt="Office View 1" className="w-full h-full object-cover rounded-2xl shadow-md" />
            <img src="/office2.jpg" alt="Office View 2" className="w-full h-full object-cover rounded-2xl shadow-md mt-10" />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#2C3E50] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-4">
            <p className="font-serif text-2xl">Dr. Maya Reynolds, PsyD</p>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Providing modern psychological care for high-achievers in Santa Monica and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm text-gray-300">
            <div className="space-y-3">
              <p className="font-bold text-white uppercase tracking-widest text-[10px]">Contact</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@drmayareynolds.com</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> (310) 555-0123</p>
            </div>
            <div className="space-y-3">
              <p className="font-bold text-white uppercase tracking-widest text-[10px]">Location</p>
              <p>123th Street 45 W<br />Santa Monica, CA 90401</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-700 text-[10px] text-gray-500 uppercase tracking-widest text-center">
          © 2026 Dr. Maya Reynolds • Practice Website Assignment
        </div>
      </footer>
    </main>
  );
}