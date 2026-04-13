"use client";

import { useEffect, useRef, useState } from "react";

const advantages = [
  {
    num: "01",
    title: "Сучасне обладнання",
    desc: "Працюємо з новітніми технологіями та сертифікованими матеріалами",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Досвід 10+ років",
    desc: "Кваліфіковані спеціалісти з міжнародними сертифікатами",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a23.838 23.838 0 0 0-1.012 5.434c-.175.964.212 1.96 1.046 2.366.903.44 1.86.792 2.862 1.045l.262-.065c1.23-.308 2.26-1.153 2.768-2.311a5.3 5.3 0 0 0-.588-5.303l-2.085-2.781m12.744 0a23.838 23.838 0 0 1 1.012 5.434c.175.964-.212 1.96-1.046 2.366-.903.44-1.86.792-2.862 1.045l-.262-.065c-1.23-.308-2.26-1.153-2.768-2.311a5.3 5.3 0 0 1 .588-5.303l2.085-2.781m-12.744 0c3.263-1.485 6.995-2.326 10.87-2.326s7.608.841 10.87 2.326" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Гарантія на послуги",
    desc: "Відповідаємо за результат — письмова гарантія на кожну процедуру",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Безболісне лікування",
    desc: "Сучасна анестезія — ви не відчуєте жодного дискомфорту",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Центр Києва",
    desc: "Хрещатик, 10 — зручне розташування з чудовою транспортною доступністю",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(eased * target);
            setCount(start);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-5xl lg:text-6xl font-bold text-primary">
      {count}
      {suffix}
    </div>
  );
}

export default function Advantages() {
  return (
    <section id="advantages" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Big counter row — the signature "wow" element */}
        <div className="anim-fade-up mb-20">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2rem] p-10 lg:p-14">
            <div className="text-center mb-10">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">
                Переваги
              </span>
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Чому обирають нас
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                { target: 10, suffix: "+", label: "Років досвіду" },
                { target: 5000, suffix: "+", label: "Задоволених пацієнтів" },
                { target: 15, suffix: "", label: "Спеціалістів" },
                { target: 100, suffix: "%", label: "Гарантія якості" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <AnimatedCounter target={item.target} suffix={item.suffix} />
                  <div className="text-white/50 text-sm mt-2">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: advantage cards with left number accent */}
        <div className="space-y-4">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="anim-fade-up group flex items-start gap-6 p-6 lg:p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-200 cursor-default"
            >
              {/* Number */}
              <div className="hidden sm:flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-xl bg-primary/5 text-primary font-bold text-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {item.num}
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center sm:hidden">
                {item.icon}
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-lg lg:text-xl font-bold text-dark mb-1 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>

              {/* Desktop icon */}
              <div className="hidden sm:flex flex-shrink-0 w-12 h-12 bg-accent/10 text-accent rounded-xl items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
