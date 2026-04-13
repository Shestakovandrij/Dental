"use client";

import { useEffect, useRef, useState } from "react";

const advantages = [
  { title: "Сучасне обладнання", desc: "Працюємо з новітніми технологіями та сертифікованими матеріалами" },
  { title: "Досвід 10+ років", desc: "Кваліфіковані спеціалісти з міжнародними сертифікатами" },
  { title: "Гарантія на послуги", desc: "Відповідаємо за результат — письмова гарантія на кожну процедуру" },
  { title: "Безболісне лікування", desc: "Сучасна анестезія — ви не відчуєте жодного дискомфорту" },
  { title: "Центр Києва", desc: "Хрещатик, 10 — зручне розташування з чудовою транспортною доступністю" },
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
          const duration = 1500;
          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
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
    <div ref={ref} className="text-6xl sm:text-7xl lg:text-[8rem] font-bold text-primary leading-none font-display">
      {count}
      {suffix}
    </div>
  );
}

export default function Advantages() {
  return (
    <section id="advantages" className="py-32 lg:py-44 bg-white relative">
      {/* 3D Tooth waypoint 2 */}
      <div className="tooth-wp-2 absolute top-32 left-[5%] hidden sm:block">
        <div className="tooth-marker" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Giant heading */}
        <div className="anim-fade-up mb-20 lg:mb-28">
          <div className="flex items-end gap-6 mb-6">
            <span className="text-[5rem] sm:text-[7rem] lg:text-[9rem] font-bold text-gray-100 leading-none font-display -mb-4">
              03
            </span>
            <div className="pb-4 lg:pb-8">
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.3em] block mb-2">
                Переваги
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-[0.9]">
                Чому обирають нас
              </h2>
            </div>
          </div>
        </div>

        {/* Giant counter row */}
        <div className="anim-fade-up mb-24">
          <div className="bg-dark rounded-[2.5rem] p-12 lg:p-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
              {[
                { target: 10, suffix: "+", label: "Років досвіду" },
                { target: 5000, suffix: "+", label: "Задоволених пацієнтів" },
                { target: 15, suffix: "", label: "Спеціалістів" },
                { target: 100, suffix: "%", label: "Гарантія якості" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <AnimatedCounter target={item.target} suffix={item.suffix} />
                  <div className="text-white/40 text-base mt-3">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Advantage list with giant numbers */}
        <div className="space-y-0 divide-y divide-gray-100">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="anim-fade-up group flex items-center gap-8 lg:gap-12 py-8 lg:py-10 cursor-default hover:bg-gray-50/50 -mx-6 px-6 rounded-2xl transition-colors duration-300"
            >
              {/* Giant number */}
              <span className="hidden sm:block text-6xl lg:text-8xl font-bold text-gray-100 font-display group-hover:text-primary/20 transition-colors duration-300 w-28 lg:w-36 text-right flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex-1">
                <h3 className="text-2xl lg:text-4xl font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-lg lg:text-xl">{item.desc}</p>
              </div>

              <svg className="w-8 h-8 text-gray-200 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300 flex-shrink-0 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
