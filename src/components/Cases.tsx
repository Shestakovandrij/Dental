"use client";

import { useRef, useState } from "react";

const cases = [
  { title: "Відновлення зуба після карієсу", desc: "Повне відновлення анатомічної форми та кольору зуба за один візит", image: "/images/Stomatologist Dental Hygiene Photo.jpg", tag: "Терапія" },
  { title: "Імплантація зуба", desc: "Надійне відновлення відсутнього зуба з коронкою, що не відрізняється від натурального", image: "/images/Male Dentist with Microscope.jpg", tag: "Хірургія" },
  { title: "Відбілювання усмішки", desc: "Професійне відбілювання — результат до 8 тонів світліше за одну процедуру", image: "/images/Cheerful Woman Dental Exam.jpg", tag: "Естетика" },
  { title: "Естетична реставрація", desc: "Художня реставрація для ідеальної форми та натурального вигляду зубів", image: "/images/Female Orthodontist Dental Office.jpg", tag: "Естетика" },
];

export default function Cases() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement;
    if (!card) return;
    setActive(index);
    const offset = card.offsetLeft - (track.offsetWidth - card.offsetWidth) / 2;
    track.scrollTo({ left: offset, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.offsetWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const dist = Math.abs(center - (el.offsetLeft + el.offsetWidth / 2));
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    if (closest !== active) setActive(closest);
  };

  return (
    <section className="py-32 lg:py-44 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="anim-fade-up mb-16 lg:mb-24">
          <div className="flex items-end gap-6 mb-6">
            <span className="text-[8rem] sm:text-[12rem] lg:text-[16rem] font-bold text-gray-200 leading-none font-[var(--font-heading)] -mb-4">
              05
            </span>
            <div className="pb-4 lg:pb-8">
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.3em] block mb-2">
                Кейси
              </span>
              <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-7xl font-bold text-dark leading-[0.9]">
                Результати
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="anim-fade-up relative">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto px-4 sm:px-8 lg:px-[calc((100vw-1280px)/2+2rem)] snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {cases.map((item, i) => (
            <div
              key={i}
              className={`cases-slide flex-shrink-0 w-[85vw] sm:w-[60vw] lg:w-[600px] snap-center transition-opacity duration-300 ${active === i ? "opacity-100" : "opacity-50"}`}
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" draggable={false} decoding="async" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full">{item.tag}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/75 lg:text-lg line-clamp-2">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex items-center justify-center gap-6">
          <button onClick={() => scrollTo(Math.max(active - 1, 0))} disabled={active === 0} className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary disabled:opacity-30 transition-all" aria-label="Попередній">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
          </button>
          <div className="flex gap-2">
            {cases.map((_, i) => (
              <button key={i} onClick={() => scrollTo(i)} className={`h-2.5 rounded-full transition-all duration-300 ${active === i ? "w-10 bg-primary" : "w-2.5 bg-gray-300 hover:bg-gray-400"}`} aria-label={`Слайд ${i + 1}`} />
            ))}
          </div>
          <button onClick={() => scrollTo(Math.min(active + 1, cases.length - 1))} disabled={active === cases.length - 1} className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary disabled:opacity-30 transition-all" aria-label="Наступний">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
