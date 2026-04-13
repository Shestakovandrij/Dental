"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "Про клініку" },
  { href: "#services", label: "Послуги" },
  { href: "#advantages", label: "Переваги" },
  { href: "#process", label: "Процес" },
  { href: "#testimonials", label: "Відгуки" },
  { href: "#contacts", label: "Контакти" },
];

export default function Header({ onOpenPopup }: { onOpenPopup: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/Dental Care Logo.png"
            alt="Dental Care Kyiv"
            width={40}
            height={40}
          />
          <span
            className={`font-display text-xl font-bold transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            Dental Care
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenPopup}
            className="bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
          >
            Записатися
          </button>
        </nav>

        {/* Mobile: phone + burger */}
        <div className="flex lg:hidden items-center gap-4">
          <a
            href="tel:+380671234567"
            className={`text-sm font-medium ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            +38 (067) 123-45-67
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`w-10 h-10 flex flex-col items-center justify-center gap-1.5 ${
              scrolled ? "text-dark" : "text-white"
            }`}
            aria-label="Меню"
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-gray-700 font-medium py-2 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenPopup();
            }}
            className="bg-accent text-white px-6 py-3 rounded-full font-semibold text-center"
          >
            Записатися на консультацію
          </button>
        </nav>
      </div>
    </header>
  );
}
