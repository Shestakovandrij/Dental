"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Step 1: detect pointer type after mount
  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsDesktop(true);
    }
  }, []);

  // Step 2: attach listeners once the div is rendered
  useEffect(() => {
    if (!isDesktop) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    document.body.classList.add("cursor-active");

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const addHover = () => cursor.classList.add("hover");
    const removeHover = () => cursor.classList.remove("hover");
    const addActive = () => cursor.classList.add("active");
    const removeActive = () => cursor.classList.remove("active");

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", addActive);
    document.addEventListener("mouseup", removeActive);

    const interactiveSelector = "a, button, input, textarea, [role='button']";
    const addListeners = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    };

    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", addActive);
      document.removeEventListener("mouseup", removeActive);
      document.body.classList.remove("cursor-active");
      observer.disconnect();
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return <div ref={cursorRef} className="custom-cursor" />;
}
