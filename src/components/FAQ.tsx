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
    <section className="py-20 lg:py-28 bg-gray-100">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16 anim-fade-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">FAQ</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">Часті запитання</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="anim-fade-up bg-white rounded-2xl overflow-hidden shadow-sm">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left" aria-expanded={open === i}>
                <span className="text-lg font-semibold text-dark pr-4">{faq.q}</span>
                <span className={`flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
