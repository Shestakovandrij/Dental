"use client";

const promos = [
  {
    title: "Перша консультація",
    discount: "Безкоштовно",
    desc: "Для нових пацієнтів — огляд та план лікування",
    code: "FIRST",
    color: "from-accent to-emerald-400",
    valid: "до 30.04",
  },
  {
    title: "Професійна чистка",
    discount: "-30%",
    desc: "Ультразвукова чистка + Air Flow зі знижкою",
    code: "CLEAN30",
    color: "from-primary to-blue-400",
    valid: "до 30.04",
  },
  {
    title: "Комплексне лікування",
    discount: "-15%",
    desc: "Знижка при лікуванні від 3-х зубів за один візит",
    code: "COMPLEX",
    color: "from-amber-500 to-orange-400",
    valid: "до 30.04",
  },
];

export default function Promotions({
  onOpenPopup,
}: {
  onOpenPopup: () => void;
}) {
  return (
    <section className="py-24 lg:py-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 anim-fade-up">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-[0.2em] border border-accent/30 rounded-full px-5 py-1.5 mb-6">
            Акції
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Спеціальні пропозиції
          </h2>
          <p className="text-gray-500 text-lg">
            Назвіть промокод при записі
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {promos.map((promo, i) => (
            <div
              key={i}
              className="anim-fade-up group relative"
            >
              {/* Coupon card */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                {/* Top gradient strip */}
                <div className={`h-2 bg-gradient-to-r ${promo.color}`} />

                {/* Coupon cutout circles */}
                <div className="absolute left-0 top-[140px] -translate-x-1/2 w-6 h-6 bg-gray-100 rounded-full" />
                <div className="absolute right-0 top-[140px] translate-x-1/2 w-6 h-6 bg-gray-100 rounded-full" />

                {/* Top section: discount */}
                <div className="px-8 pt-8 pb-6 text-center">
                  <div
                    className={`inline-block text-4xl lg:text-5xl font-bold bg-gradient-to-r ${promo.color} bg-clip-text text-transparent`}
                  >
                    {promo.discount}
                  </div>
                  <h3 className="text-xl font-bold text-dark mt-3">
                    {promo.title}
                  </h3>
                </div>

                {/* Dashed divider */}
                <div className="mx-8 border-t-2 border-dashed border-gray-200" />

                {/* Bottom section: details */}
                <div className="px-8 pt-5 pb-8">
                  <p className="text-gray-500 text-center mb-5">
                    {promo.desc}
                  </p>

                  {/* Promo code */}
                  <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl p-3 flex items-center justify-between group-hover:border-primary/30 transition-colors">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                        Промокод
                      </div>
                      <div className="font-mono font-bold text-dark text-lg tracking-widest">
                        {promo.code}
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">
                      {promo.valid}
                    </div>
                  </div>

                  <button
                    onClick={onOpenPopup}
                    className={`mt-5 w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${promo.color} hover:shadow-lg transition-all duration-300 text-sm`}
                  >
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
