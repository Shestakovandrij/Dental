"use client";

const steps = [
  { title: "Запис", desc: "Оберіть зручний час онлайн або зателефонуйте нам" },
  { title: "Огляд", desc: "Комплексна діагностика та детальна консультація" },
  { title: "План лікування", desc: "Індивідуальний план з прозорою вартістю" },
  { title: "Процедура", desc: "Безболісне лікування у комфортних умовах" },
  { title: "Контроль", desc: "Регулярне спостереження за результатом" },
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 anim-fade-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">Процес</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Як проходить лікування</h2>
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={i} className="anim-fade-up group flex items-center gap-6 lg:gap-10 py-6 lg:py-8 border-t border-white/10 last:border-b">
              <span className="text-4xl lg:text-5xl font-bold text-white/10 font-display leading-none w-16 lg:w-20 text-right flex-shrink-0 group-hover:text-accent/30 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{step.title}</h3>
                <p className="text-white/40">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
