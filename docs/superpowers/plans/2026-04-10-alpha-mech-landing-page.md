# Alpha Mech Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium institutional one-page landing page for Alpha Mech (HVAC/refrigeration company) focused on lead generation via WhatsApp.

**Architecture:** Next.js 15 App Router with a single page composed of 8 section components. Each section is a standalone client component using Framer Motion for scroll-reveal animations. Tailwind CSS 4 handles all styling with a custom color palette defined via CSS variables.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS 4, Framer Motion

**Spec:** `docs/superpowers/specs/2026-04-10-alpha-mech-landing-page-design.md`

---

## File Map

| File | Responsibility |
|------|---------------|
| `package.json` | Dependencies and scripts |
| `tailwind.config.ts` | Custom colors, fonts, extend theme |
| `next.config.ts` | Next.js configuration |
| `tsconfig.json` | TypeScript configuration |
| `app/layout.tsx` | Root layout, fonts, SEO metadata |
| `app/page.tsx` | Page composition — imports and renders all sections |
| `app/globals.css` | Tailwind directives + custom CSS variables |
| `src/components/Header.tsx` | Fixed navbar with scroll transition + mobile drawer |
| `src/components/HeroSection.tsx` | Hero with gradient bg, animated SVG, CTAs |
| `src/components/AboutSection.tsx` | Quem Somos + 3 pillar cards |
| `src/components/ServicesSection.tsx` | 6 service cards in responsive grid |
| `src/components/CertSection.tsx` | 7 certification badges |
| `src/components/WhyUsSection.tsx` | 6 differentiators in grid |
| `src/components/CtaSection.tsx` | Final CTA with gradient bg |
| `src/components/Footer.tsx` | Contact info + navigation links |
| `src/components/AnimatedSection.tsx` | Reusable Framer Motion scroll-reveal wrapper |

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `postcss.config.mjs`

- [ ] **Step 1: Initialize Next.js project**

```bash
cd /Users/fernandojesus/Sites/client/alpha-mech
npx create-next-app@latest . --typescript --tailwind --eslint --app --src --no-import-alias --skip-install
```

Select defaults when prompted. The `--src` flag puts source in `src/` but the `app/` directory stays at root for Next.js 15 App Router.

- [ ] **Step 2: Install dependencies**

```bash
npm install framer-motion
```

Run: `npm install`
Expected: `node_modules/` created, no errors.

- [ ] **Step 3: Configure Tailwind with custom theme**

Replace the contents of `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          light: "#132038",
        },
        graphite: "#1E293B",
        "blue-accent": "#2563EB",
        "cyan-tech": "#06B6D4",
        "white-soft": "#F8FAFC",
        "gray-light": "#94A3B8",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 4: Set up global CSS**

Replace `app/globals.css`:

```css
@import "tailwindcss";

@theme {
  --color-navy: #0A1628;
  --color-navy-light: #132038;
  --color-graphite: #1E293B;
  --color-blue-accent: #2563EB;
  --color-cyan-tech: #06B6D4;
  --color-white-soft: #F8FAFC;
  --color-gray-light: #94A3B8;

  --font-outfit: var(--font-outfit);
  --font-inter: var(--font-inter);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-inter), sans-serif;
  background-color: #0A1628;
  color: #F8FAFC;
}
```

- [ ] **Step 5: Set up root layout with fonts and SEO**

Replace `app/layout.tsx`:

```tsx
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
```

- [ ] **Step 6: Create placeholder page**

Replace `app/page.tsx`:

```tsx
export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="font-outfit text-4xl font-bold text-white-soft">
          Alpha Mech
        </h1>
      </div>
    </main>
  );
}
```

- [ ] **Step 7: Verify dev server starts**

Run: `npm run dev`
Expected: Server starts on `http://localhost:3000`, page shows "Alpha Mech" centered, navy background, white text, Outfit font.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js project with Tailwind and Framer Motion"
```

---

### Task 2: AnimatedSection Component

**Files:**
- Create: `src/components/AnimatedSection.tsx`

This reusable wrapper provides scroll-reveal animation to any section content. Used by every section component.

- [ ] **Step 1: Create the AnimatedSection component**

Create `src/components/AnimatedSection.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Verify it renders**

Temporarily import in `app/page.tsx` and wrap the h1:

```tsx
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center min-h-screen">
        <AnimatedSection>
          <h1 className="font-outfit text-4xl font-bold text-white-soft">
            Alpha Mech
          </h1>
        </AnimatedSection>
      </div>
    </main>
  );
}
```

Run: `npm run dev`
Expected: "Alpha Mech" fades in with upward slide on page load. No console errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/AnimatedSection.tsx app/page.tsx
git commit -m "feat: add AnimatedSection reusable scroll-reveal component"
```

---

### Task 3: Header Component

**Files:**
- Create: `src/components/Header.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create Header component**

Create `src/components/Header.tsx`:

```tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Certificações", href: "#certificacoes" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo placeholder */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-blue-accent/20 border border-blue-accent/30 flex items-center justify-center">
            <span className="font-outfit font-bold text-blue-accent text-sm">
              AM
            </span>
          </div>
          <span className="font-outfit font-bold text-xl text-white-soft">
            Alpha Mech
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-light hover:text-white-soft transition-colors duration-300 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511932106778?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-accent hover:bg-blue-accent/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-accent/25"
          >
            Solicitar Orçamento
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white-soft"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white-soft"
          />
          <motion.span
            animate={
              mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
            }
            className="block w-6 h-0.5 bg-white-soft"
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-navy/98 backdrop-blur-md border-t border-white/5 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-light hover:text-white-soft transition-colors text-lg font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5511932106778?text=Olá! Gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-accent text-white px-5 py-3 rounded-lg text-center font-semibold mt-2"
              >
                Solicitar Orçamento
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
```

- [ ] **Step 2: Add Header to page**

Update `app/page.tsx`:

```tsx
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="font-outfit text-4xl font-bold text-white-soft">
            Alpha Mech
          </h1>
        </div>
      </main>
    </>
  );
}
```

- [ ] **Step 3: Verify**

Run: `npm run dev`
Expected: Fixed transparent header at top. Scroll down — background turns solid navy. On mobile viewport (Chrome devtools), hamburger opens a drawer with nav links. CTA links to WhatsApp.

- [ ] **Step 4: Commit**

```bash
git add src/components/Header.tsx app/page.tsx
git commit -m "feat: add Header with scroll transition and mobile drawer"
```

---

### Task 4: Hero Section

**Files:**
- Create: `src/components/HeroSection.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create HeroSection component**

Create `src/components/HeroSection.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";

function AirflowSVG() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Grid pattern */}
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(37,99,235,0.06)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Airflow curves */}
        <motion.path
          d="M-100,300 C200,280 400,350 700,300 S1100,200 1540,280"
          stroke="rgba(6,182,212,0.12)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
          d="M-100,500 C300,480 500,520 800,470 S1200,400 1540,460"
          stroke="rgba(37,99,235,0.10)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3.5, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M-100,150 C250,170 450,120 750,160 S1050,200 1540,140"
          stroke="rgba(6,182,212,0.08)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, delay: 1, ease: "easeInOut" }}
        />
        <motion.path
          d="M-100,650 C350,630 550,680 850,640 S1150,580 1540,620"
          stroke="rgba(37,99,235,0.07)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, delay: 1.5, ease: "easeInOut" }}
        />

        {/* Subtle floating circles representing air particles */}
        {[
          { cx: 200, cy: 250, r: 3, delay: 0 },
          { cx: 600, cy: 400, r: 2, delay: 0.5 },
          { cx: 1000, cy: 300, r: 4, delay: 1 },
          { cx: 400, cy: 550, r: 2.5, delay: 1.5 },
          { cx: 800, cy: 200, r: 3, delay: 2 },
          { cx: 1200, cy: 500, r: 2, delay: 0.8 },
        ].map((circle, i) => (
          <motion.circle
            key={i}
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            fill="rgba(6,182,212,0.15)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1, 0.5] }}
            transition={{
              duration: 4,
              delay: circle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy-light to-graphite">
      <AirflowSVG />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-tech/10 border border-cyan-tech/20 text-cyan-tech text-sm font-medium mb-8">
            Climatização & Refrigeração
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-outfit font-bold text-4xl sm:text-5xl lg:text-6xl text-white-soft leading-tight mb-6"
        >
          Especialistas em Climatização e Refrigeração com{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-accent to-cyan-tech">
            Segurança, Eficiência
          </span>{" "}
          e Alta Performance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-gray-light text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Soluções completas para ambientes residenciais, comerciais e
          industriais com alto padrão técnico, conformidade normativa e
          excelência operacional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contato"
            className="w-full sm:w-auto bg-blue-accent hover:bg-blue-accent/90 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-accent/25 hover:-translate-y-0.5"
          >
            Solicitar Orçamento
          </a>
          <a
            href="https://wa.me/5511932106778?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-emerald-600/25 hover:-translate-y-0.5"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-light/50"
          >
            <span className="text-xs uppercase tracking-widest">
              Saiba mais
            </span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add HeroSection to page**

Update `app/page.tsx`:

```tsx
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
      </main>
    </>
  );
}
```

- [ ] **Step 3: Verify**

Run: `npm run dev`
Expected: Full-height hero with gradient background, animated SVG airflow lines, headline with gradient text, two CTA buttons (blue + green), scroll indicator bouncing. Header overlays hero transparently.

- [ ] **Step 4: Commit**

```bash
git add src/components/HeroSection.tsx app/page.tsx
git commit -m "feat: add HeroSection with animated SVG airflow and CTAs"
```

---

### Task 5: About Section

**Files:**
- Create: `src/components/AboutSection.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create AboutSection component**

Create `src/components/AboutSection.tsx`:

```tsx
"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Qualidade",
    description: "Qualidade na execução dos serviços, utilizando as melhores práticas e tecnologias do mercado.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Segurança",
    description: "Segurança em todas as operações, com equipe certificada e conformidade normativa rigorosa.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Responsabilidade Ambiental",
    description: "Responsabilidade ambiental em cada processo, com práticas sustentáveis e conformidade com o IBAMA.",
  },
];

export default function AboutSection() {
  return (
    <section id="quem-somos" className="relative py-24 lg:py-32 bg-white-soft">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-accent/10 text-blue-accent text-sm font-medium mb-6">
              Quem Somos
            </span>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-navy mb-6">
              Excelência em Climatização e Refrigeração
            </h2>
            <p className="text-graphite text-lg leading-relaxed">
              A Alpha Mech é uma empresa especializada em soluções de
              refrigeração e climatização, oferecendo serviços com alto padrão
              de qualidade, eficiência e confiabilidade. Atuamos com foco na
              excelência operacional, garantindo o pleno funcionamento dos
              sistemas, sempre alinhados às normas técnicas, segurança do
              trabalho e responsabilidade ambiental.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(10,22,40,0.1)" }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-tech/10 text-cyan-tech flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <h3 className="font-outfit font-semibold text-xl text-navy mb-3">
                  {pillar.title}
                </h3>
                <p className="text-graphite leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page**

Update `app/page.tsx` — add import and render `<AboutSection />` after `<HeroSection />`.

- [ ] **Step 3: Verify**

Run: `npm run dev`
Expected: White section with "Quem Somos" badge, heading, paragraph text, 3 pillar cards with icons. Cards hover with lift effect. Text is dark on light background.

- [ ] **Step 4: Commit**

```bash
git add src/components/AboutSection.tsx app/page.tsx
git commit -m "feat: add AboutSection with institutional text and pillar cards"
```

---

### Task 6: Services Section

**Files:**
- Create: `src/components/ServicesSection.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create ServicesSection component**

Create `src/components/ServicesSection.tsx`:

```tsx
"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.19A1.5 1.5 0 006 10.5V6.75a1.5 1.5 0 011.5-1.5h9A1.5 1.5 0 0118 6.75v3.75c0 .538-.288 1.035-.756 1.303l-5.384 3.19a1.5 1.5 0 01-1.44.077zM17.25 9.75L21 12m0 0l-3.75 2.25M21 12H3" />
      </svg>
    ),
    title: "Manutenção Preventiva",
    description: "Inspeções periódicas, limpeza, avaliação de desempenho e aumento da vida útil dos equipamentos.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.19A1.5 1.5 0 006 10.5V6.75a1.5 1.5 0 011.5-1.5h9A1.5 1.5 0 0118 6.75v3.75c0 .538-.288 1.035-.756 1.303l-5.384 3.19a1.5 1.5 0 01-1.44.077zM8.25 4.5l7.5 7.5" />
      </svg>
    ),
    title: "Manutenção Corretiva",
    description: "Diagnóstico rápido, reparos emergenciais, substituição de componentes e retorno ágil da operação.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Instalação de Ar-Condicionado",
    description: "Sistemas Split, Cassete, VRF e outros, com execução conforme normas técnicas vigentes.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21" />
      </svg>
    ),
    title: "Soluções Industriais",
    description: "Chillers, câmaras frias, refrigeração industrial e projetos personalizados sob demanda.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "PMOC",
    description: "Elaboração e implementação de Plano de Manutenção, Operação e Controle conforme exigências legais.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Qualidade do Ar",
    description: "Higienização completa, controle de fungos, bactérias e impurezas para ambientes mais saudáveis.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="relative py-24 lg:py-32 bg-navy">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-tech/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-tech/10 border border-cyan-tech/20 text-cyan-tech text-sm font-medium mb-6">
              Nossos Serviços
            </span>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white-soft mb-6">
              Soluções Completas em Climatização
            </h2>
            <p className="text-gray-light text-lg leading-relaxed">
              Atuamos de forma completa na área de climatização e refrigeração,
              atendendo sistemas residenciais, comerciais e industriais.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
                transition={{ duration: 0.3 }}
                className="group bg-navy-light rounded-2xl p-8 border border-white/5 hover:border-cyan-tech/30 transition-colors duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-accent/10 text-blue-accent flex items-center justify-center mb-5 group-hover:bg-cyan-tech/10 group-hover:text-cyan-tech transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-outfit font-semibold text-xl text-white-soft mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-light leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page**

Update `app/page.tsx` — add import and render `<ServicesSection />` after `<AboutSection />`.

- [ ] **Step 3: Verify**

Run: `npm run dev`
Expected: Dark navy section with 6 service cards in 3x2 grid (desktop). Cards have icons, hover with scale + border color change. Responsive to 2-col on tablet, 1-col on mobile.

- [ ] **Step 4: Commit**

```bash
git add src/components/ServicesSection.tsx app/page.tsx
git commit -m "feat: add ServicesSection with 6 service cards"
```

---

### Task 7: Certifications Section

**Files:**
- Create: `src/components/CertSection.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create CertSection component**

Create `src/components/CertSection.tsx`:

```tsx
"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const certifications = [
  {
    code: "BPR",
    title: "Boas Práticas de Refrigeração",
    issuer: "IBAMA",
    description: "Certificação em conformidade com as exigências ambientais federais.",
  },
  {
    code: "KNX",
    title: "KNX Partner",
    issuer: "KNX Association",
    description: "Parceiro certificado em automação predial padrão mundial.",
  },
  {
    code: "NR-06",
    title: "Equipamentos de Proteção Individual",
    issuer: "MTE",
    description: "Conformidade no uso e gestão de EPIs em todas as operações.",
  },
  {
    code: "NR-10",
    title: "Segurança em Eletricidade",
    issuer: "MTE",
    description: "Segurança em instalações e serviços em eletricidade.",
  },
  {
    code: "NR-33",
    title: "Espaços Confinados",
    issuer: "MTE",
    description: "Segurança e saúde nos trabalhos em espaços confinados.",
  },
  {
    code: "NR-34",
    title: "Meio Ambiente de Trabalho",
    issuer: "MTE",
    description: "Condições e meio ambiente de trabalho na indústria.",
  },
  {
    code: "NR-35",
    title: "Trabalho em Altura",
    issuer: "MTE",
    description: "Requisitos de proteção para trabalho em altura.",
  },
];

export default function CertSection() {
  return (
    <section id="certificacoes" className="relative py-24 lg:py-32 bg-white-soft">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-accent/10 text-blue-accent text-sm font-medium mb-6">
              Certificações & Conformidade
            </span>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-navy mb-6">
              Qualidade Técnica Certificada
            </h2>
            <p className="text-graphite text-lg leading-relaxed">
              Atuamos em total conformidade com as normas vigentes, assegurando
              qualidade técnica e segurança em todos os serviços prestados.
            </p>
          </div>
        </AnimatedSection>

        {/* Desktop: grid, Mobile: horizontal scroll */}
        <div className="flex overflow-x-auto pb-4 gap-5 snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-visible md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
          {certifications.map((cert, index) => (
            <AnimatedSection key={cert.code} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 16px 32px rgba(10,22,40,0.1)" }}
                transition={{ duration: 0.3 }}
                className="min-w-[260px] md:min-w-0 snap-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-blue-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-outfit font-bold text-navy text-lg">
                      {cert.code}
                    </span>
                    <p className="text-gray-light text-xs">{cert.issuer}</p>
                  </div>
                </div>
                <h3 className="font-outfit font-semibold text-navy text-sm mb-2">
                  {cert.title}
                </h3>
                <p className="text-graphite text-sm leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page**

Update `app/page.tsx` — add import and render `<CertSection />` after `<ServicesSection />`.

- [ ] **Step 3: Verify**

Run: `npm run dev`
Expected: Light section with 7 certification cards. Desktop: 4-col grid. Mobile: horizontal scroll. Each card shows shield icon, code, title, issuer, description.

- [ ] **Step 4: Commit**

```bash
git add src/components/CertSection.tsx app/page.tsx
git commit -m "feat: add CertSection with 7 certification badges"
```

---

### Task 8: Why Us Section

**Files:**
- Create: `src/components/WhyUsSection.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create WhyUsSection component**

Create `src/components/WhyUsSection.tsx`:

```tsx
"use client";

import AnimatedSection from "./AnimatedSection";

const differentiators = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Equipe Técnica Qualificada",
    description: "Profissionais certificados com ampla experiência em sistemas de climatização e refrigeração.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Atendimento Rápido",
    description: "Resposta ágil para emergências e diagnósticos precisos para retorno rápido da operação.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
      </svg>
    ),
    title: "Conformidade Legal",
    description: "Total alinhamento com normas regulatórias, legislações vigentes e exigências ambientais.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Foco em Segurança",
    description: "Compromisso com a segurança do trabalho e do meio ambiente em cada etapa do serviço.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Redução de Custos",
    description: "Manutenção preventiva que reduz custos operacionais e aumenta a vida útil dos equipamentos.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Soluções Personalizadas",
    description: "Projetos sob medida para cada cliente, adaptados às necessidades específicas do ambiente.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy-light">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-tech/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-tech/10 border border-cyan-tech/20 text-cyan-tech text-sm font-medium mb-6">
              Diferenciais
            </span>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white-soft mb-6">
              Por que escolher a Alpha Mech?
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.1}>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-cyan-tech/10 text-cyan-tech flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-outfit font-semibold text-lg text-white-soft mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-light leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page**

Update `app/page.tsx` — add import and render `<WhyUsSection />` after `<CertSection />`.

- [ ] **Step 3: Verify**

Run: `npm run dev`
Expected: Dark navy-light section with 6 differentiators in icon + text layout, 3x2 grid on desktop. Icons in cyan.

- [ ] **Step 4: Commit**

```bash
git add src/components/WhyUsSection.tsx app/page.tsx
git commit -m "feat: add WhyUsSection with 6 differentiator cards"
```

---

### Task 9: CTA Section

**Files:**
- Create: `src/components/CtaSection.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create CtaSection component**

Create `src/components/CtaSection.tsx`:

```tsx
"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-accent via-blue-accent to-cyan-tech" />

      {/* Abstract pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="xMidYMid slice">
          <circle cx="200" cy="100" r="300" fill="white" />
          <circle cx="1200" cy="300" r="250" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Pronto para otimizar seus sistemas de climatização?
          </h2>
          <p className="text-white/85 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Solicite um orçamento e descubra como podemos otimizar seus sistemas
            de climatização com segurança e eficiência.
          </p>
          <motion.a
            href="https://wa.me/5511932106778?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-white text-blue-accent px-10 py-5 rounded-xl text-lg font-bold shadow-xl shadow-black/20 hover:shadow-2xl transition-shadow duration-300"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page**

Update `app/page.tsx` — add import and render `<CtaSection />` after `<WhyUsSection />`.

- [ ] **Step 3: Verify**

Run: `npm run dev`
Expected: Bold gradient section (blue → cyan) with white text and a large white WhatsApp button. Button scales on hover.

- [ ] **Step 4: Commit**

```bash
git add src/components/CtaSection.tsx app/page.tsx
git commit -m "feat: add CtaSection with gradient background and WhatsApp CTA"
```

---

### Task 10: Footer

**Files:**
- Create: `src/components/Footer.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create Footer component**

Create `src/components/Footer.tsx`:

```tsx
import AnimatedSection from "./AnimatedSection";

const navLinks = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Certificações", href: "#certificacoes" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer id="contato" className="relative bg-[#060E1A] pt-16 pb-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-accent/20 border border-blue-accent/30 flex items-center justify-center">
                  <span className="font-outfit font-bold text-blue-accent text-sm">
                    AM
                  </span>
                </div>
                <span className="font-outfit font-bold text-xl text-white-soft">
                  Alpha Mech
                </span>
              </div>
              <p className="text-gray-light text-sm leading-relaxed max-w-xs">
                Soluções completas em climatização e refrigeração com excelência
                operacional e conformidade normativa.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-outfit font-semibold text-white-soft mb-4">
                Navegação
              </h4>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-light hover:text-white-soft transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-outfit font-semibold text-white-soft mb-4">
                Contato
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+5511984865404"
                  className="flex items-center gap-3 text-gray-light hover:text-white-soft transition-colors text-sm"
                >
                  <svg className="w-5 h-5 text-cyan-tech shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (11) 98486-5404
                </a>
                <a
                  href="https://wa.me/5511932106778"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-light hover:text-white-soft transition-colors text-sm"
                >
                  <svg className="w-5 h-5 text-cyan-tech shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  (11) 93210-6778
                </a>
                <a
                  href="mailto:contato@alphamech.com.br"
                  className="flex items-center gap-3 text-gray-light hover:text-white-soft transition-colors text-sm"
                >
                  <svg className="w-5 h-5 text-cyan-tech shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  contato@alphamech.com.br
                </a>
                <a
                  href="https://instagram.com/alphamech.clima"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-light hover:text-white-soft transition-colors text-sm"
                >
                  <svg className="w-5 h-5 text-cyan-tech shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @alphamech.clima
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8">
          <p className="text-gray-light/60 text-sm text-center">
            &copy; {new Date().getFullYear()} Alpha Mech. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Compose final page**

Update `app/page.tsx` with all sections:

```tsx
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CertSection from "@/components/CertSection";
import WhyUsSection from "@/components/WhyUsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CertSection />
        <WhyUsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Verify**

Run: `npm run dev`
Expected: Complete page with all 8 sections rendering in order. Footer shows all contact info with icons. Nav links scroll to correct sections. Responsive on mobile.

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.tsx app/page.tsx
git commit -m "feat: add Footer and compose full landing page"
```

---

### Task 11: Final Polish and Build Verification

**Files:**
- No new files. Build + lint checks.

- [ ] **Step 1: Run TypeScript check**

Run: `npx tsc --noEmit`
Expected: No type errors.

- [ ] **Step 2: Run production build**

Run: `npm run build`
Expected: Build completes with no errors. All pages generate successfully.

- [ ] **Step 3: Test production build locally**

Run: `npm start`
Expected: Production server starts. Visit `http://localhost:3000`. All sections render, animations play, links work, responsive layout correct.

- [ ] **Step 4: Final commit if any fixes were needed**

```bash
git add -A
git commit -m "fix: address build and lint issues"
```
