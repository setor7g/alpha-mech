import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alpha Mech — Climatização Sob Controle | Conforto e Eficiência",
  description:
    "Climatização para conforto, saúde do ar e performance operacional em ambientes residenciais, comerciais e industriais. Manutenção, instalação, PMOC e conformidade técnica.",
  openGraph: {
    title: "Alpha Mech — Climatização Sob Controle",
    description:
      "Conforto, qualidade do ar e eficiência para manter seus sistemas de climatização no ponto ideal.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
