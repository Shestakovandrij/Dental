"use client";

import Image from "next/image";

export default function Hero({ onOpenPopup }: { onOpenPopup: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Cheerful Woman Dental Exam.jpg"
          alt="Стоматологія Dental Care Kyiv"
          fill
          className="object-cover"
          preload={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/60 to-dark/50" />
      </div>

      {/* Content — centered */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="hero-title font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
          Здорова усмішка
          <br />
          без болю та страху
        </h1>
        <p className="hero-subtitle text-lg sm:text-xl lg:text-2xl text-white/85 mb-10 leading-relaxed max-w-2xl mx-auto">
          Лікування зубів, імплантація та естетична стоматологія в Києві з
          гарантією результату
        </p>
        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onOpenPopup}
            className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            Записатися на консультацію
          </button>
          <a
            href="tel:+380671234567"
            className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/10 text-center"
          >
            +38 (067) 123-45-67
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
