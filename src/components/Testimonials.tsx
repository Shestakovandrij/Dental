"use client";

import { useState } from "react";

const testimonials = [
  {
    text: "Дуже задоволена лікуванням! Все пройшло без болю. Лікарі уважні, все пояснили, заспокоїли. Рекомендую всім, хто боїться стоматологів!",
    initials: "ОК",
    name: "Олена К.",
    service: "Лікування карієсу",
    rating: 5,
  },
  {
    text: "Робив імплантацію — результат супер. Вже пів року ношу, ніяких проблем. Дякую команді за професіоналізм!",
    initials: "АМ",
    name: "Андрій М.",
    service: "Імплантація",
    rating: 5,
  },
  {
    text: "Тепер не боюсь стоматологів. Атмосфера в клініці дуже приємна, персонал привітний. Зуби після чистки виглядають ідеально.",
    initials: "ІВ",
    name: "Ірина В.",
    service: "Професійна чистка",
    rating: 5,
  },
  {
    text: "Вініри зробили чудово — усмішка як у голлівудських зірок. Дуже вдячна лікарю за індивідуальний підхід.",
    initials: "МД",
    name: "Марина Д.",
    service: "Естетична реставрація",
    rating: 5,
  },
  {
    text: "Ходжу всією родиною вже 3 роки. Діти не бояться — це говорить про все. Професіонали своєї справи.",
    initials: "СП",
    name: "Сергій П.",
    service: "Сімейна стоматологія",
    rating: 5,
  },
];

const VISIBLE_COUNT = 3;

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? testimonials : testimonials.slice(0, VISIBLE_COUNT);

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 anim-fade-up">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-[0.2em] border border-accent/30 rounded-full px-5 py-1.5 mb-6">
            Відгуки
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Відгуки пацієнтів
          </h2>
        </div>

        {/* Masonry-style: featured + grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured — first item always visible */}
          <div className="anim-fade-up bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden lg:row-span-2">
            <div className="absolute top-6 right-8 text-white/10 text-[120px] leading-none font-serif pointer-events-none">
              &ldquo;
            </div>

            <div>
              <StarRating count={testimonials[0].rating} />
              <p className="text-white text-xl lg:text-2xl leading-relaxed mt-6 mb-8 relative z-10">
                &ldquo;{testimonials[0].text}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">
                {testimonials[0].initials}
              </div>
              <div>
                <div className="text-white font-semibold">{testimonials[0].name}</div>
                <div className="text-white/60 text-sm">{testimonials[0].service}</div>
              </div>
            </div>
          </div>

          {/* Rest of testimonials */}
          {visible.slice(1).map((item, i) => (
            <div
              key={i}
              className="anim-fade-up bg-gray-900 rounded-3xl p-8 group hover:bg-gray-800 transition-colors duration-300"
            >
              <StarRating count={item.rating} />
              <p className="text-white/80 text-lg leading-relaxed mt-4 mb-6">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-accent/20 text-accent rounded-full flex items-center justify-center text-sm font-bold">
                  {item.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{item.name}</div>
                  <div className="text-white/40 text-xs">{item.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more / less */}
        {testimonials.length > VISIBLE_COUNT && (
          <div className="text-center mt-10 anim-fade-up">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white font-medium transition-colors duration-300 border border-white/20 hover:border-white/40 rounded-full px-8 py-3"
            >
              {showAll ? (
                <>
                  Згорнути
                  <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </>
              ) : (
                <>
                  Показати ще {testimonials.length - VISIBLE_COUNT}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
