"use client";

import { useRef, useState, useEffect } from "react";

const cases = [
  {
    title: "Відновлення зуба після карієсу",
    desc: "Повне відновлення анатомічної форми та кольору зуба за один візит",
    image: "/images/Stomatologist Dental Hygiene Photo.jpg",
    tag: "Терапія",
  },
  {
    title: "Імплантація зуба",
    desc: "Надійне відновлення відсутнього зуба з коронкою, що не відрізняється від натурального",
    image: "/images/Male Dentist with Microscope.jpg",
    tag: "Хірургія",
  },
  {
    title: "Відбілювання усмішки",
    desc: "Професійне відбілювання — результат до 8 тонів світліше за одну процедуру",
    image: "/images/Cheerful Woman Dental Exam.jpg",
    tag: "Естетика",
  },
  {
    title: "Естетична реставрація",
    desc: "Художня реставрація для ідеальної форми та натурального вигляду зубів",
    image: "/images/Female Orthodontist Dental Office.jpg",
    tag: "Естетика",
  },
];

export default function Cases() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const scrollStart = useRef(0);

  // Scroll to active slide
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[active] as HTMLElement;
    if (!card) return;
    const offset = card.offsetLeft - (track.offsetWidth - card.offsetWidth) / 2;
    track.scrollTo({ left: offset, behavior: "smooth" });
  }, [active]);

  // Drag to scroll
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStart.current = e.clientX;
    scrollStart.current = trackRef.current?.scrollLeft ?? 0;
  };
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !trackRef.current) return;
    const dx = e.clientX - dragStart.current;
    trackRef.current.scrollLeft = scrollStart.current - dx;
  };
  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const dx = e.clientX - dragStart.current;
    if (Math.abs(dx) > 60) {
      setActive((prev) =>
        dx < 0
          ? Math.min(prev + 1, cases.length - 1)
          : Math.max(prev - 1, 0)
      );
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 anim-fade-up">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-[0.2em] border border-accent/30 rounded-full px-5 py-1.5 mb-6">
            Кейси
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
            Результати наших пацієнтів
          </h2>
        </div>
      </div>

      {/* Slider */}
      <div className="anim-fade-up relative">
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-8 lg:px-[calc((100vw-1280px)/2+2rem)] snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={() => setIsDragging(false)}
        >
          {cases.map((item, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-[85vw] sm:w-[60vw] lg:w-[500px] snap-center transition-all duration-500 ${
                active === i ? "scale-100 opacity-100" : "scale-95 opacity-60"
              }`}
              onClick={() => setActive(i)}
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />

                {/* Tag */}
                <div className="absolute top-5 left-5">
                  <span className="bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    {item.tag}
                  </span>
                </div>

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/75 text-sm lg:text-base line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex items-center justify-center gap-6">
          {/* Arrows */}
          <button
            onClick={() => setActive((p) => Math.max(p - 1, 0))}
            disabled={active === 0}
            className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary disabled:opacity-30 transition-all"
            aria-label="Попередній"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === i
                    ? "w-8 bg-primary"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Слайд ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setActive((p) => Math.min(p + 1, cases.length - 1))}
            disabled={active === cases.length - 1}
            className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary disabled:opacity-30 transition-all"
            aria-label="Наступний"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
