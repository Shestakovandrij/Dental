"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="anim-fade-up mb-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em]">
            Про клініку
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-5 anim-fade-up">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-accent/20 rounded-full -z-0" />
              <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)] aspect-[3/4]">
                <Image src="/images/Female Orthodontist Dental Office.jpg" alt="Стоматолог Dental Care Kyiv" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-4 sm:left-auto sm:-right-8 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 anim-fade-up">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">10+</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Років</div>
                    <div className="font-bold text-dark">Досвіду</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-28 h-28 lg:w-36 lg:h-36 rounded-2xl overflow-hidden shadow-lg border-4 border-white hidden sm:block">
                <Image src="/images/Male Dentist with Microscope.jpg" alt="Лікар з мікроскопом" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7 anim-fade-up">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
              Сучасна клініка <span className="text-primary">в центрі Києва</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Dental Care Kyiv — це сучасна стоматологічна клініка в центрі Києва, де поєднуються досвід лікарів і новітні технології.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Наші спеціалісти мають понад 10 років практики та дбають про комфорт кожного пацієнта.
            </p>
            <div className="grid grid-cols-3 gap-6 lg:gap-10">
              {[
                { value: "10+", label: "років досвіду" },
                { value: "5K+", label: "пацієнтів" },
                { value: "100%", label: "гарантія" },
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-3xl lg:text-4xl font-bold text-dark mb-1 group-hover:text-primary transition-colors duration-300 font-display">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                  <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
