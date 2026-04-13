"use client";

export default function FinalCTA({ onOpenPopup }: { onOpenPopup: () => void }) {
  return (
    <section className="py-20 lg:py-28 bg-dark text-white text-center relative overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 anim-fade-up">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Не відкладайте <span className="text-accent">лікування</span>
        </h2>
        <p className="text-white/50 text-lg mb-10 font-light">
          Запишіться прямо зараз у Telegram або зателефонуйте
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={onOpenPopup} className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent/30">
            Записатися на консультацію
          </button>
          <a href="tel:+380671234567" className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/10">
            Зателефонувати
          </a>
        </div>
      </div>
    </section>
  );
}
