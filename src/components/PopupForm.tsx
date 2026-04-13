"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function PopupForm({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo(
        panelRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "back.out(1.2)" }
      );
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(panelRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.2,
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: onClose,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", phone: "" });
      setTimeout(() => {
        handleClose();
        setStatus("idle");
      }, 2000);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-dark/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === overlayRef.current) handleClose();
      }}
    >
      <div
        ref={panelRef}
        className="bg-white rounded-3xl p-8 sm:p-10 w-full max-w-md shadow-2xl relative"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-100"
          aria-label="Закрити"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="font-[var(--font-heading)] text-2xl font-bold text-dark mb-2">
          Запишіться на прийом
        </h3>
        <p className="text-gray-500 mb-6">
          Залиште свої дані і ми зв&apos;яжемось з вами
        </p>

        {status === "success" ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-dark">Дякуємо!</p>
            <p className="text-gray-500 mt-1">
              Ми зв&apos;яжемось з вами найближчим часом
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="popup-name" className="block text-sm font-medium text-gray-700 mb-1">
                Ім&apos;я *
              </label>
              <input
                id="popup-name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Ваше ім'я"
              />
            </div>
            <div>
              <label htmlFor="popup-phone" className="block text-sm font-medium text-gray-700 mb-1">
                Телефон *
              </label>
              <input
                id="popup-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="+38 (___) ___-__-__"
              />
            </div>

            {status === "error" && (
              <p className="text-red-500 text-sm">
                Будь ласка, заповніть обов&apos;язкові поля.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-accent hover:bg-accent-dark text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg disabled:opacity-60"
            >
              {status === "loading" ? "Відправка..." : "Відправити"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
