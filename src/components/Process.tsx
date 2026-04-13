"use client";

const steps = [
  {
    num: "01",
    title: "Запис",
    desc: "Оберіть зручний час онлайн або зателефонуйте нам",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Огляд",
    desc: "Комплексна діагностика та детальна консультація",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "План лікування",
    desc: "Індивідуальний план з прозорою вартістю",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Процедура",
    desc: "Безболісне лікування у комфортних умовах",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Контроль",
    desc: "Регулярне спостереження за результатом",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 anim-fade-up">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-[0.2em] border border-accent/30 rounded-full px-5 py-1.5 mb-6">
            Процес
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
            Як проходить лікування
          </h2>
        </div>

        {/* Vertical timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/40 to-accent/20 lg:-translate-x-px" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className={`anim-fade-up relative flex items-start gap-6 lg:gap-0 mb-12 last:mb-0 ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <div
                  className={`flex-1 lg:w-[calc(50%-2rem)] ${
                    isLeft ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:text-left"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:border-primary/20">
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        isLeft ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Center dot with number */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 flex-shrink-0">
                  <div className="w-12 h-12 bg-white border-[3px] border-primary rounded-full flex items-center justify-center text-primary font-bold text-sm shadow-md z-10 relative">
                    {step.num}
                  </div>
                </div>

                {/* Spacer for the other side (desktop) */}
                <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
