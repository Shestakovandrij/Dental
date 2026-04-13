"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: "Лікування карієсу", desc: "Швидко та безболісно. Сучасні матеріали та методики відновлення.", image: "/images/service-caries.jpg" },
  { title: "Імплантація зубів", desc: "Надійне відновлення. Преміальні імпланти з довічною гарантією.", image: "/images/service-implant.jpg" },
  { title: "Відбілювання", desc: "Помітний результат вже після першого сеансу. До 8 тонів світліше.", image: "/images/service-whitening.jpg" },
  { title: "Професійна чистка", desc: "Профілактика захворювань. Ультразвукова та Air Flow технологія.", image: "/images/service-cleaning.jpg" },
  { title: "Естетична реставрація", desc: "Гарна усмішка. Вініри, коронки та художня реставрація зубів.", image: "/images/service-restoration.jpg" },
];

export default function Services({ onOpenPopup }: { onOpenPopup: () => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const slidesWrap = slidesRef.current;
    if (!section || !slidesWrap) return;

    const slides = slidesWrap.querySelectorAll<HTMLElement>(".srv-slide");
    const bgs = slidesWrap.querySelectorAll<HTMLElement>(".srv-bg");
    const headings = slidesWrap.querySelectorAll<HTMLElement>(".srv-heading");
    const count = slides.length;
    const last = count - 1;

    gsap.set(slides, { autoAlpha: 0 });
    gsap.set(slides[0], { autoAlpha: 1 });

    // Simple crossfade: each transition = 1 unit in timeline
    // Total scroll distance = last * 80vh (shorter = faster per-card)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${last * 80}%`,
        pin: true,
        scrub: true,
        snap: { snapTo: 1 / last, duration: 0.3, ease: "power1.inOut" },
      },
    });

    for (let i = 0; i < last; i++) {
      // Crossfade: out current, in next — all at same time point
      tl.to(bgs[i], { scale: 1.1, duration: 1 }, i)
        .to(headings[i], { autoAlpha: 0, y: -30, duration: 0.5 }, i)
        .to(slides[i], { autoAlpha: 0, duration: 0.5 }, i + 0.5)
        .set(slides[i + 1], { autoAlpha: 1 }, i + 0.5)
        .fromTo(bgs[i + 1], { scale: 1.15 }, { scale: 1, duration: 0.5 }, i + 0.5)
        .fromTo(headings[i + 1], { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" }, i + 0.6);
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().filter((st) => st.trigger === section).forEach((st) => st.kill());
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative h-screen overflow-hidden">
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button onClick={onOpenPopup} className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent/30">
          Записатися на консультацію
        </button>
      </div>

      <div ref={slidesRef} className="relative w-full h-full">
        {services.map((s, i) => (
          <div key={i} className="srv-slide absolute inset-0 w-full h-full overflow-hidden">
            <div
              className="srv-bg absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.15) 100%), url(${s.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                willChange: "transform",
              }}
            />
            <div className="srv-heading absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center px-6 max-w-3xl">
                <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
                  {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display leading-tight mb-4">
                  {s.title}
                </h2>
                <p className="text-white/70 text-lg font-light max-w-xl mx-auto">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
