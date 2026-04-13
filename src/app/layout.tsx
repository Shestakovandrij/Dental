import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Стоматологія в Києві — Dental Care Kyiv | Лікування зубів без болю",
  description:
    "Dental Care Kyiv — сучасна стоматологічна клініка в центрі Києва. Імплантація, відбілювання, лікування карієсу з гарантією. Досвід лікарів 10+ років. Запишіться на консультацію.",
  keywords:
    "стоматологія Київ, лікування зубів, імплантація зубів Київ, відбілювання зубів, естетична стоматологія, стоматологічна клініка Київ, безболісне лікування зубів",
  openGraph: {
    title: "Dental Care Kyiv — Здорова усмішка без болю та страху",
    description:
      "Сучасна стоматологічна клініка в центрі Києва. Імплантація, відбілювання, лікування карієсу з гарантією результату.",
    locale: "uk_UA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
