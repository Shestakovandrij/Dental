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
    <section id="process" className="py-32 lg:py-44 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Giant heading */}
        <div className="anim-fade-up mb-20 lg:mb-28">
          <div className="flex items-end gap-6 mb-6">
            <span className="text-[8rem] sm:text-[12rem] lg:text-[16rem] font-bold text-white/5 leading-none font-[var(--font-heading)] -mb-4">
              04
            </span>
            <div className="pb-4 lg:pb-8">
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.3em] block mb-2">
                Процес
              </span>
              <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[0.9]">
                Як проходить
                <br />
                лікування
              </h2>
            </div>
          </div>
        </div>

        {/* Steps with giant numbers */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={i}
              className="anim-fade-up group flex items-center gap-6 lg:gap-12 py-8 lg:py-12 border-t border-white/10 last:border-b"
            >
              {/* Giant step number */}
              <span className="text-6xl sm:text-7xl lg:text-[7rem] font-bold text-white/10 font-[var(--font-heading)] leading-none w-24 sm:w-32 lg:w-44 text-right flex-shrink-0 group-hover:text-accent/30 transition-colors duration-500">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-white/40 text-lg lg:text-xl">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
