"use client";

const promos = [
  { title: "Перша консультація", discount: "Безкоштовно", desc: "Для нових пацієнтів — огляд та план лікування", code: "FIRST", color: "from-accent to-emerald-400", valid: "до 30.04" },
  { title: "Професійна чистка", discount: "-30%", desc: "Ультразвукова чистка + Air Flow зі знижкою", code: "CLEAN30", color: "from-primary to-blue-400", valid: "до 30.04" },
  { title: "Комплексне лікування", discount: "-15%", desc: "Знижка при лікуванні від 3-х зубів за один візит", code: "COMPLEX", color: "from-amber-500 to-orange-400", valid: "до 30.04" },
];

export default function Promotions({ onOpenPopup }: { onOpenPopup: () => void }) {
  return (
    <section className="py-32 lg:py-44 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="anim-fade-up mb-20 lg:mb-28">
          <div className="flex items-end gap-6 mb-6">
            <span className="text-[8rem] sm:text-[12rem] lg:text-[16rem] font-bold text-gray-100 leading-none font-display -mb-4">
              07
            </span>
            <div className="pb-4 lg:pb-8">
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.3em] block mb-2">
                Акції
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-dark leading-[0.9]">
                Спеціальні
                <br />
                пропозиції
              </h2>
            </div>
          </div>
          <p className="text-gray-500 text-xl lg:text-2xl font-light">
            Назвіть промокод при записі
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {promos.map((promo, i) => (
            <div key={i} className="anim-fade-up group relative">
              <div className="relative bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className={`h-2 bg-gradient-to-r ${promo.color}`} />
                <div className="absolute left-0 top-[160px] -translate-x-1/2 w-6 h-6 bg-white rounded-full" />
                <div className="absolute right-0 top-[160px] translate-x-1/2 w-6 h-6 bg-white rounded-full" />

                <div className="px-8 pt-10 pb-6 text-center">
                  <div className={`inline-block text-5xl lg:text-7xl font-bold bg-gradient-to-r ${promo.color} bg-clip-text text-transparent font-display`}>
                    {promo.discount}
                  </div>
                  <h3 className="text-2xl font-bold text-dark mt-4">{promo.title}</h3>
                </div>

                <div className="mx-8 border-t-2 border-dashed border-gray-200" />

                <div className="px-8 pt-6 pb-8">
                  <p className="text-gray-500 text-center mb-6 text-lg">{promo.desc}</p>
                  <div className="bg-white border-2 border-dashed border-gray-200 rounded-xl p-4 flex items-center justify-between group-hover:border-primary/30 transition-colors">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Промокод</div>
                      <div className="font-mono font-bold text-dark text-xl tracking-widest">{promo.code}</div>
                    </div>
                    <div className="text-sm text-gray-400">{promo.valid}</div>
                  </div>
                  <button onClick={onOpenPopup} className={`mt-6 w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r ${promo.color} hover:shadow-lg transition-all duration-300 text-base`}>
                    Записатися з промокодом
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
