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
  title: "Alpha Mech — Climatização e Refrigeração | Segurança e Eficiência",
  description:
    "Soluções completas em climatização e refrigeração para ambientes residenciais, comerciais e industriais. Equipe certificada, conformidade normativa e excelência operacional.",
  openGraph: {
    title: "Alpha Mech — Climatização e Refrigeração",
    description:
      "Soluções completas em climatização e refrigeração com alto padrão técnico e excelência operacional.",
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
