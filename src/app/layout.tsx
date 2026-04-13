import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="uk" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
