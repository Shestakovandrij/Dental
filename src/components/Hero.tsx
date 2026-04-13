"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Flip, ScrollTrigger);

const images = [
  "/images/Cheerful Woman Dental Exam.jpg",
  "/images/Female Orthodontist Dental Office.jpg",
  "/images/Male Dentist with Microscope.jpg",
  "/images/Stomatologist Dental Hygiene Photo.jpg",
  "/images/Cheerful Woman Dental Exam.jpg",
  "/images/Female Orthodontist Dental Office.jpg",
  "/images/Male Dentist with Microscope.jpg",
  "/images/Stomatologist Dental Hygiene Photo.jpg",
];

export default function Hero({ onOpenPopup }: { onOpenPopup: () => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const flipCtxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    const galleryEl = galleryRef.current;
    const wrapEl = wrapRef.current;
    if (!galleryEl || !wrapEl) return;

    let resizeTimer: ReturnType<typeof setTimeout>;

    const createTween = () => {
      const items = galleryEl.querySelectorAll(".hero-gallery__item");
      if (flipCtxRef.current) flipCtxRef.current.revert();
      galleryEl.classList.remove("hero-gallery--final");

      flipCtxRef.current = gsap.context(() => {
        galleryEl.classList.add("hero-gallery--final");
        const flipState = Flip.getState(items);
        galleryEl.classList.remove("hero-gallery--final");

        const flip = Flip.to(flipState, {
          simple: true,
          ease: "expoScale(1, 5)",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: galleryEl,
            start: "center center",
            end: "+=100%",
            scrub: 0.5,
            pin: wrapEl,
          },
        });
        tl.add(flip);
        return () => gsap.set(items, { clearProps: "all" });
      });
    };

    createTween();
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(createTween, 200);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
      if (flipCtxRef.current) flipCtxRef.current.revert();
    };
  }, []);

  return (
    <div ref={wrapRef} className="hero-gallery-wrap">
      <div ref={galleryRef} className="hero-gallery hero-gallery--bento" id="hero-gallery">
        {images.map((src, i) => (
          <div key={i} className="hero-gallery__item">
            <img src={src} alt="" draggable={false} decoding="async" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-dark/60 z-10 pointer-events-none" />

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-title font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Здорова усмішка
            <br />
            <span className="text-accent">без болю та страху</span>
          </h1>
          <p className="hero-subtitle text-lg sm:text-xl lg:text-2xl text-white/85 mb-10 leading-relaxed max-w-2xl mx-auto">
            Лікування зубів, імплантація та естетична стоматологія в Києві з
            гарантією результату
          </p>
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
            <button
              onClick={onOpenPopup}
              className="bg-accent hover:bg-accent-dark text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              Записатися на консультацію
            </button>
            <a
              href="tel:+380671234567"
              className="border-2 border-white/30 hover:border-white/60 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 hover:bg-white/10 text-center"
            >
              +38 (067) 123-45-67
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
