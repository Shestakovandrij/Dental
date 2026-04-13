"use client";

import { useState, useCallback, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import Process from "@/components/Process";
import Cases from "@/components/Cases";
import Testimonials from "@/components/Testimonials";
import Promotions from "@/components/Promotions";
import FAQ from "@/components/FAQ";
import Contacts from "@/components/Contacts";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import PopupForm from "@/components/PopupForm";
import MobileCTA from "@/components/MobileCTA";
import CustomCursor from "@/components/CustomCursor";
import Tooth3D from "@/components/Tooth3D";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const openPopup = useCallback(() => setPopupOpen(true), []);
  const closePopup = useCallback(() => setPopupOpen(false), []);

  // GSAP scroll animations for all .anim-fade-up elements
  useEffect(() => {
    if (loading) return;

    const elements = document.querySelectorAll(".anim-fade-up");
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    // Hero animations
    const heroTl = gsap.timeline({ delay: 0.2 });
    heroTl
      .fromTo(
        ".hero-title",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(
        ".hero-subtitle",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ".hero-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );

    // Refresh ScrollTrigger after all content is rendered (for Hero pin)
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [loading]);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <CustomCursor />
      <Header onOpenPopup={openPopup} />
      <main>
        <Hero onOpenPopup={openPopup} />
        <About />
        <Services onOpenPopup={openPopup} />
        <Advantages />
        <Process />
        <Cases />
        <Testimonials />
        <Promotions onOpenPopup={openPopup} />
        <FAQ />
        <Contacts />
        <FinalCTA onOpenPopup={openPopup} />
      </main>
      <Footer />
      <MobileCTA onOpenPopup={openPopup} />
      <PopupForm isOpen={popupOpen} onClose={closePopup} />
      {!loading && <Tooth3D />}
    </>
  );
}
