"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-32 lg:py-44 bg-white overflow-hidden relative">
      {/* 3D Tooth waypoint 1 (start) */}
      <div className="tooth-wp-1 absolute top-20 right-[5%] lg:right-[8%] hidden sm:block">
        {/* Canvas will be injected here */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Giant section number */}
        <div className="anim-fade-up mb-16 lg:mb-24">
          <div className="flex items-end gap-6 mb-8">
            <span className="text-[5rem] sm:text-[7rem] lg:text-[9rem] font-bold text-gray-100 leading-none font-display -mb-4">
              01
            </span>
            <div className="pb-4 lg:pb-8">
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.3em] block mb-2">
                Про клініку
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-[0.9]">
                Сучасна клініка
                <br />
                <span className="text-primary">в центрі Києва</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image composition */}
          <div className="lg:col-span-5 anim-fade-up">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-40 h-40 border-2 border-accent/20 rounded-full -z-0" />
              <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)] aspect-[3/4]">
                <Image
                  src="/images/Female Orthodontist Dental Office.jpg"
                  alt="Стоматолог Dental Care Kyiv"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-4 sm:left-auto sm:-right-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 anim-fade-up">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">10+</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Років</div>
                    <div className="font-bold text-dark text-lg">Досвіду</div>
                  </div>
                </div>
              </div>
              {/* Second image */}
              <div className="absolute -top-4 -right-4 w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-white hidden sm:block">
                <Image
                  src="/images/Male Dentist with Microscope.jpg"
                  alt="Лікар з мікроскопом"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7 anim-fade-up">
            <p className="text-gray-600 text-xl lg:text-2xl leading-relaxed mb-6">
              Dental Care Kyiv — це сучасна стоматологічна клініка в центрі
              Києва, де поєднуються досвід лікарів і новітні технології.
            </p>
            <p className="text-gray-600 text-xl lg:text-2xl leading-relaxed mb-12">
              Наші спеціалісти мають понад 10 років практики та дбають про
              комфорт кожного пацієнта.
            </p>

            {/* Giant stats */}
            <div className="grid grid-cols-3 gap-8 lg:gap-12">
              {[
                { value: "10+", label: "років досвіду" },
                { value: "5K+", label: "пацієнтів" },
                { value: "100%", label: "гарантія" },
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-1 group-hover:text-primary transition-colors duration-300 font-display">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-gray-500">{stat.label}</div>
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
