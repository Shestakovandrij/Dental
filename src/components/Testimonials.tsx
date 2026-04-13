"use client";

import { useState } from "react";

const testimonials = [
  { text: "Дуже задоволена лікуванням! Все пройшло без болю. Лікарі уважні, все пояснили, заспокоїли. Рекомендую всім, хто боїться стоматологів!", initials: "ОК", name: "Олена К.", service: "Лікування карієсу", rating: 5 },
  { text: "Робив імплантацію — результат супер. Вже пів року ношу, ніяких проблем. Дякую команді за професіоналізм!", initials: "АМ", name: "Андрій М.", service: "Імплантація", rating: 5 },
  { text: "Тепер не боюсь стоматологів. Атмосфера в клініці дуже приємна, персонал привітний. Зуби після чистки виглядають ідеально.", initials: "ІВ", name: "Ірина В.", service: "Професійна чистка", rating: 5 },
  { text: "Вініри зробили чудово — усмішка як у голлівудських зірок. Дуже вдячна лікарю за індивідуальний підхід.", initials: "МД", name: "Марина Д.", service: "Естетична реставрація", rating: 5 },
  { text: "Ходжу всією родиною вже 3 роки. Діти не бояться — це говорить про все. Професіонали своєї справи.", initials: "СП", name: "Сергій П.", service: "Сімейна стоматологія", rating: 5 },
];

const VISIBLE_COUNT = 3;

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
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
    <section id="testimonials" className="py-32 lg:py-44 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="anim-fade-up mb-20 lg:mb-28">
          <div className="flex items-end gap-6 mb-6">
            <span className="text-[8rem] sm:text-[12rem] lg:text-[16rem] font-bold text-white/5 leading-none font-display -mb-4">
              06
            </span>
            <div className="pb-4 lg:pb-8">
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.3em] block mb-2">
                Відгуки
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[0.9]">
                Відгуки пацієнтів
              </h2>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured */}
          <div className="anim-fade-up bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden lg:row-span-2">
            <div className="absolute top-6 right-8 text-white/10 text-[160px] leading-none font-serif pointer-events-none">
              &ldquo;
            </div>
            <div>
              <Stars count={testimonials[0].rating} />
              <p className="text-white text-2xl lg:text-3xl leading-relaxed mt-8 mb-10 relative z-10 font-light">
                &ldquo;{testimonials[0].text}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg">
                {testimonials[0].initials}
              </div>
              <div>
                <div className="text-white font-semibold text-lg">{testimonials[0].name}</div>
                <div className="text-white/60">{testimonials[0].service}</div>
              </div>
            </div>
          </div>

          {visible.slice(1).map((item, i) => (
            <div key={i} className="anim-fade-up bg-gray-900 rounded-3xl p-8 lg:p-10 group hover:bg-gray-800 transition-colors duration-300">
              <Stars count={item.rating} />
              <p className="text-white/80 text-xl lg:text-2xl leading-relaxed mt-5 mb-8 font-light">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center font-bold">
                  {item.initials}
                </div>
                <div>
                  <div className="text-white font-semibold">{item.name}</div>
                  <div className="text-white/40 text-sm">{item.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {testimonials.length > VISIBLE_COUNT && (
          <div className="text-center mt-12 anim-fade-up">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white font-medium transition-colors duration-300 border border-white/20 hover:border-white/40 rounded-full px-10 py-4 text-lg"
            >
              {showAll ? "Згорнути" : `Показати ще ${testimonials.length - VISIBLE_COUNT}`}
              <svg className={`w-5 h-5 transition-transform ${showAll ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
