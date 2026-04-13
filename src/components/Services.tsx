"use client";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Лікування карієсу",
    desc: "Швидко та безболісно. Сучасні матеріали та методики відновлення.",
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
    title: "Імплантація зубів",
    desc: "Надійне відновлення. Преміальні імпланти з довічною гарантією.",
    color: "from-primary to-primary-dark",
    bg: "bg-primary/5",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    title: "Відбілювання",
    desc: "Помітний результат вже після першого сеансу. До 8 тонів світліше.",
    color: "from-amber-400 to-orange-400",
    bg: "bg-amber-50",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Професійна чистка",
    desc: "Профілактика захворювань. Ультразвукова та Air Flow технологія.",
    color: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-50",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: "Естетична реставрація",
    desc: "Гарна усмішка. Вініри, коронки та художня реставрація зубів.",
    color: "from-rose-500 to-pink-400",
    bg: "bg-rose-50",
  },
];

export default function Services({
  onOpenPopup,
}: {
  onOpenPopup: () => void;
}) {
  return (
    <section id="services" className="py-24 lg:py-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 anim-fade-up">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-[0.2em] border border-accent/30 rounded-full px-5 py-1.5 mb-6">
            Послуги
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Наші послуги
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Повний спектр стоматологічних послуг під одним дахом
          </p>
        </div>

        {/* 3x2 grid: 5 service cards + 1 CTA circle */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="anim-fade-up group relative bg-white rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] hover:-translate-y-2"
            >
              {/* Gradient corner accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.color} opacity-0 group-hover:opacity-10 rounded-bl-[80px] transition-opacity duration-500`}
              />

              <div
                className={`relative w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
              >
                <div className="text-primary group-hover:text-primary-dark transition-colors">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{service.desc}</p>

              <div className="mt-6 flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">
                Детальніше
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          ))}

          {/* 6th cell: animated CTA circle */}
          <div className="anim-fade-up flex items-center justify-center rounded-3xl bg-white p-8 min-h-[260px]">
            <button
              onClick={onOpenPopup}
              className="group relative w-44 h-44 rounded-full flex items-center justify-center"
            >
              {/* Spinning dashed border */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-[spin_12s_linear_infinite]" />

              {/* Pulse rings */}
              <div className="absolute inset-2 rounded-full border border-primary/10 animate-[ping_3s_ease-in-out_infinite]" />

              {/* Main circle */}
              <div className="relative w-36 h-36 bg-gradient-to-br from-primary to-accent rounded-full flex flex-col items-center justify-center gap-2 shadow-lg shadow-primary/25 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-500">
                <svg
                  className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                <span className="text-white font-semibold text-sm text-center leading-tight px-4">
                  Записатися
                  <br />
                  на прийом
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
