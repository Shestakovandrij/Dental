"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll<HTMLElement>(".swipe-section");
    const images = container.querySelectorAll<HTMLElement>(".swipe-bg");
    const outerWrappers = container.querySelectorAll<HTMLElement>(".swipe-outer");
    const innerWrappers = container.querySelectorAll<HTMLElement>(".swipe-inner");
    const headings = container.querySelectorAll<HTMLElement>(".swipe-heading");

    let currentIndex = -1;
    let animating = false;
    const wrap = gsap.utils.wrap(0, sections.length);

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index: number, direction: number) {
      index = wrap(index);
      animating = true;
      const fromTop = direction === -1;
      const dFactor = fromTop ? -1 : 1;

      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => { animating = false; },
      });

      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
          sections[currentIndex],
          { autoAlpha: 0 }
        );
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });

      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
        { yPercent: 0 },
        0
      )
        .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        .fromTo(
          headings[index],
          { autoAlpha: 0, yPercent: 80 * dFactor },
          { autoAlpha: 1, yPercent: 0, duration: 1, ease: "power2" },
          0.2
        );

      currentIndex = index;
    }

    const observer = Observer.create({
      target: container,
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    gotoSection(0, 1);

    return () => {
      observer.kill();
      gsap.killTweensOf([sections, images, outerWrappers, innerWrappers, headings]);
    };
  }, []);

  return (
    <section id="services" className="relative">
      <div ref={containerRef} className="swipe-container relative h-screen w-full overflow-hidden">
        {/* Counter / nav */}
        <div className="absolute top-6 left-6 z-20 text-white/60 text-sm font-medium tracking-widest uppercase hidden sm:block">
          <span className="text-accent">02</span> — Послуги
        </div>

        {/* CTA button */}
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

        {services.map((service, i) => (
          <div
            key={i}
            className="swipe-section"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              visibility: "hidden",
            }}
          >
            <div className="swipe-outer" style={{ width: "100%", height: "100%", overflow: "hidden" }}>
              <div className="swipe-inner" style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                <div
                  className="swipe-bg"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.2) 100%), url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="swipe-heading text-center px-6 max-w-5xl">
                    {/* Giant index */}
                    <div className="text-white/10 text-[8rem] sm:text-[12rem] lg:text-[16rem] font-bold font-[var(--font-heading)] leading-none mb-[-2rem] sm:mb-[-4rem] lg:mb-[-6rem]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h2 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold text-white font-[var(--font-heading)] leading-[0.9] mb-6">
                      {service.title}
                    </h2>
                    <p className="text-white/70 text-lg sm:text-xl lg:text-2xl font-light max-w-2xl mx-auto">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
