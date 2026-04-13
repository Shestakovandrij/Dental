"use client";

export default function MobileCTA({ onOpenPopup }: { onOpenPopup: () => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      <button
        onClick={onOpenPopup}
        className="w-14 h-14 bg-accent hover:bg-accent-dark text-white rounded-full shadow-lg shadow-accent/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Записатися на прийом"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      </button>
    </div>
  );
}
