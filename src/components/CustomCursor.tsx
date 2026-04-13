"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const rendered = useRef({ x: 0, y: 0 });
  const rafId = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsDesktop(true);
    }
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    document.body.classList.add("cursor-active");

    // RAF-based smooth follow — no GSAP overhead
    const tick = () => {
      rendered.current.x += (pos.current.x - rendered.current.x) * 0.2;
      rendered.current.y += (pos.current.y - rendered.current.y) * 0.2;
      cursor.style.transform = `translate3d(${rendered.current.x}px, ${rendered.current.y}px, 0) translate(-50%, -50%)`;
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };

    const addHover = () => cursor.classList.add("hover");
    const removeHover = () => cursor.classList.remove("hover");
    const addActive = () => cursor.classList.add("active");
    const removeActive = () => cursor.classList.remove("active");

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mousedown", addActive);
    document.addEventListener("mouseup", removeActive);

    // One-time scan + delegate instead of MutationObserver
    const onOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, input, textarea, [role='button']")) {
        addHover();
      }
    };
    const onOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, input, textarea, [role='button']")) {
        removeHover();
      }
    };

    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });

    return () => {
      cancelAnimationFrame(rafId.current);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", addActive);
      document.removeEventListener("mouseup", removeActive);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.body.classList.remove("cursor-active");
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return <div ref={cursorRef} className="custom-cursor" />;
}
