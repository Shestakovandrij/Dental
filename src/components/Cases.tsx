"use client";

import { useRef, useState, useCallback } from "react";

const cases = [
  {
    title: "Відновлення зуба після карієсу",
    desc: "Повне відновлення анатомічної форми та кольору зуба за один візит",
    before: "/images/Stomatologist Dental Hygiene Photo.jpg",
    after: "/images/Cheerful Woman Dental Exam.jpg",
    tag: "Терапія",
  },
  {
    title: "Імплантація зуба",
    desc: "Надійне відновлення відсутнього зуба з коронкою, що не відрізняється від натурального",
    before: "/images/Male Dentist with Microscope.jpg",
    after: "/images/Female Orthodontist Dental Office.jpg",
    tag: "Хірургія",
  },
  {
    title: "Відбілювання усмішки",
    desc: "Професійне відбілювання — результат до 8 тонів світліше за одну процедуру",
    before: "/images/Female Orthodontist Dental Office.jpg",
    after: "/images/Cheerful Woman Dental Exam.jpg",
    tag: "Естетика",
  },
];

function BeforeAfter({ before, after }: { before: string; after: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePos(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) updatePos(e.clientX);
  };
  const onPointerUp = () => { dragging.current = false; };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none touch-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* After (full) */}
      <img src={after} alt="Після" className="absolute inset-0 w-full h-full object-cover" draggable={false} />

      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt="До" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${containerRef.current?.offsetWidth || 1000}px`, maxWidth: "none" }} draggable={false} />
      </div>

      {/* Divider line + handle */}
      <div className="absolute top-0 bottom-0" style={{ left: `${pos}%` }}>
        <div className="absolute top-0 bottom-0 -translate-x-px w-0.5 bg-white shadow-lg" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-dark/70 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">До</div>
      <div className="absolute top-4 right-4 bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">Після</div>
    </div>
  );
}

export default function Cases() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement;
    if (!card) return;
    setActive(index);
    track.scrollTo({ left: card.offsetLeft - (track.offsetWidth - card.offsetWidth) / 2, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.offsetWidth / 2;
    let closest = 0, minDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const dist = Math.abs(center - (el.offsetLeft + el.offsetWidth / 2));
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    if (closest !== active) setActive(closest);
  };

  return (
    <section className="py-20 lg:py-28 bg-gray-100 overflow-hidden">
      <div className="w-full px-4 sm:px-8">
        <div className="text-center mb-12 anim-fade-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">Кейси</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-3">Результати наших пацієнтів</h2>
          <p className="text-gray-500">Перетягніть повзунок для порівняння до і після</p>
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
            <div key={i} className={`flex-shrink-0 w-[85vw] sm:w-[70vw] lg:w-[600px] snap-center transition-opacity duration-300 ${active === i ? "opacity-100" : "opacity-60"}`}>
              <BeforeAfter before={item.before} after={item.after} />
              <div className="mt-4 px-1">
                <span className="text-accent text-xs font-bold uppercase tracking-wider">{item.tag}</span>
                <h3 className="text-lg font-bold text-dark mt-1">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full px-4 sm:px-8 mt-8 flex items-center justify-center gap-6">
          <button onClick={() => scrollTo(Math.max(active - 1, 0))} disabled={active === 0} className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary disabled:opacity-30 transition-all" aria-label="Попередній">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
          </button>
          <div className="flex gap-2">
            {cases.map((_, i) => (
              <button key={i} onClick={() => scrollTo(i)} className={`h-2 rounded-full transition-all duration-300 ${active === i ? "w-8 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"}`} aria-label={`Слайд ${i + 1}`} />
            ))}
          </div>
          <button onClick={() => scrollTo(Math.min(active + 1, cases.length - 1))} disabled={active === cases.length - 1} className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary disabled:opacity-30 transition-all" aria-label="Наступний">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
