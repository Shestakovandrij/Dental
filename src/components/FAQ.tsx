"use client";

import { useState } from "react";

const faqs = [
  { q: "Чи боляче лікувати зуби?", a: "Ні. Ми використовуємо сучасну анестезію — ви не відчуєте болю." },
  { q: "Скільки триває імплантація?", a: "Термін індивідуальний — залежить від ситуації. Лікар складе план після огляду." },
  { q: "Чи є гарантія на лікування?", a: "Так, ми надаємо гарантію на всі послуги." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 lg:py-44 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="anim-fade-up mb-20 lg:mb-28">
          <div className="flex items-end gap-6 mb-6">
            <span className="text-[5rem] sm:text-[7rem] lg:text-[9rem] font-bold text-gray-200 leading-none font-display -mb-4">
              08
            </span>
            <div className="pb-4 lg:pb-8">
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.3em] block mb-2">
                FAQ
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-[0.9]">
                Часті запитання
              </h2>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="anim-fade-up bg-white rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left"
                aria-expanded={open === i}
              >
                <span className="text-xl lg:text-2xl font-semibold text-dark pr-4">{faq.q}</span>
                <span className={`flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center transition-transform duration-300 text-xl ${open === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="px-8 pb-8 text-gray-600 text-lg leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
