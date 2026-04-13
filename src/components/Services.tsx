"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Лікування карієсу",
    desc: "Швидко та безболісно. Сучасні матеріали та методики відновлення.",
    image: "/images/service-caries.jpg",
  },
  {
    title: "Імплантація зубів",
    desc: "Надійне відновлення. Преміальні імпланти з довічною гарантією.",
    image: "/images/service-implant.jpg",
  },
  {
    title: "Відбілювання",
    desc: "Помітний результат вже після першого сеансу. До 8 тонів світліше.",
    image: "/images/service-whitening.jpg",
  },
  {
    title: "Професійна чистка",
    desc: "Профілактика захворювань. Ультразвукова та Air Flow технологія.",
    image: "/images/service-cleaning.jpg",
  },
  {
    title: "Естетична реставрація",
    desc: "Гарна усмішка. Вініри, коронки та художня реставрація зубів.",
    image: "/images/service-restoration.jpg",
  },
];

export default function Services({ onOpenPopup }: { onOpenPopup: () => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const slidesWrap = slidesRef.current;
    if (!section || !slidesWrap) return;

    const slides = slidesWrap.querySelectorAll<HTMLElement>(".srv-slide");
    const backgrounds = slidesWrap.querySelectorAll<HTMLElement>(".srv-bg");
    const headings = slidesWrap.querySelectorAll<HTMLElement>(".srv-heading");
    const total = slides.length;

    // Set initial state: all slides hidden except first
    gsap.set(slides, { autoAlpha: 0 });
    gsap.set(slides[0], { autoAlpha: 1 });

    // Each transition = exactly 1 unit, total scroll = (total-1) viewports
    const transitions = total - 1;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${transitions * 100}%`,
        pin: true,
        scrub: 0.3,
        snap: {
          snapTo: 1 / transitions,
          duration: { min: 0.2, max: 0.4 },
          ease: "power1.inOut",
        },
      },
    });

    // Each transition is exactly 1 unit — 1 scroll viewport = 1 card switch
    for (let i = 0; i < transitions; i++) {
      const t = i; // start time for this transition
      tl
        .to(backgrounds[i], { yPercent: -15, duration: 0.5 }, t)
        .to(headings[i], { autoAlpha: 0, yPercent: -40, duration: 0.4 }, t)
        .set(slides[i], { autoAlpha: 0 }, t + 0.5)
        .set(slides[i + 1], { autoAlpha: 1 }, t + 0.5)
        .fromTo(backgrounds[i + 1], { yPercent: 15 }, { yPercent: 0, duration: 0.5 }, t + 0.5)
        .fromTo(headings[i + 1], { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0, duration: 0.4, ease: "power2.out" }, t + 0.6);
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll()
        .filter((st) => st.trigger === section)
        .forEach((st) => st.kill());
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Counter label */}
      <div className="absolute top-6 left-6 z-20 text-white/60 text-sm font-medium tracking-widest uppercase hidden sm:block">
        <span className="text-accent">02</span> — Послуги
      </div>

      {/* CTA */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={onOpenPopup}
          className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent/30"
        >
          Записатися на консультацію
        </button>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 z-20 text-white/40 text-xs tracking-wider uppercase hidden sm:block">
        Scroll ↕
      </div>

      {/* Slides container */}
      <div ref={slidesRef} className="relative w-full h-full">
        {services.map((service, i) => (
          <div
            key={i}
            className="srv-slide absolute inset-0 w-full h-full overflow-hidden"
          >
            <div
              className="srv-bg absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.2) 100%), url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                willChange: "transform",
              }}
            />
            <div className="srv-heading absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center px-6 max-w-4xl">
                <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
                  {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white font-display leading-tight mb-4">
                  {service.title}
                </h2>
                <p className="text-white/70 text-lg sm:text-xl font-light max-w-xl mx-auto">
                  {service.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
