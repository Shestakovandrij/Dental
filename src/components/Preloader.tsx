"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    tl.fromTo(
      logoRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
    )
      .to(logoRef.current, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 1,
      })
      .to(preloaderRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      })
      .set(preloaderRef.current, { display: "none" });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      <div ref={logoRef} className="flex flex-col items-center gap-4">
        <Image
          src="/images/Dental Care Logo.png"
          alt="Dental Care Kyiv"
          width={80}
          height={80}
        />
        <span className="font-display text-2xl font-bold text-primary">
          Dental Care
        </span>
      </div>
    </div>
  );
}
