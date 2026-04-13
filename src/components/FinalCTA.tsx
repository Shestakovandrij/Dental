"use client";

export default function FinalCTA({ onOpenPopup }: { onOpenPopup: () => void }) {
  return (
    <section className="py-32 lg:py-44 bg-dark text-white text-center relative overflow-hidden">
      {/* Giant background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[12rem] sm:text-[20rem] lg:text-[30rem] font-bold text-white/[0.02] font-[var(--font-heading)] leading-none whitespace-nowrap">
          DC
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 anim-fade-up">
        <h2 className="font-[var(--font-heading)] text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-[0.9]">
          Не відкладайте
          <br />
          <span className="text-accent">лікування</span>
        </h2>
        <p className="text-white/50 text-xl lg:text-2xl mb-14 font-light">
          Запишіться прямо зараз у Telegram або зателефонуйте
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onOpenPopup}
            className="bg-accent hover:bg-accent-dark text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent/30"
          >
            Записатися на консультацію
          </button>
          <a
            href="tel:+380671234567"
            className="border-2 border-white/30 hover:border-white/60 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 hover:bg-white/10"
          >
            Зателефонувати
          </a>
        </div>
      </div>
    </section>
  );
}
