"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-alpha-red via-alpha-red-dark to-navy" />

      {/* Gear pattern overlay — brand identity */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute -right-32 -top-32 w-[500px] h-[500px] opacity-[0.07]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M100 30 L108 30 L110 18 L118 16 L124 26 L132 24 L130 12 L138 8 L146 16 L152 12 L146 2 L154 -2 L164 8 L170 2 L162 -6 L168 -12 L178 -2 L184 -8 L174 -16 L178 -22"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="100" cy="100" r="65" stroke="white" strokeWidth="3" />
          <circle cx="100" cy="100" r="45" stroke="white" strokeWidth="2" />
          {/* Gear teeth */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            const rad = (angle * Math.PI) / 180;
            const innerR = 62;
            const outerR = 78;
            const halfTooth = 7;
            const cos1 = Math.cos(((angle - halfTooth) * Math.PI) / 180);
            const sin1 = Math.sin(((angle - halfTooth) * Math.PI) / 180);
            const cos2 = Math.cos(((angle + halfTooth) * Math.PI) / 180);
            const sin2 = Math.sin(((angle + halfTooth) * Math.PI) / 180);
            return (
              <path
                key={i}
                d={`M${100 + innerR * cos1},${100 + innerR * sin1} L${100 + outerR * cos1},${100 + outerR * sin1} L${100 + outerR * cos2},${100 + outerR * sin2} L${100 + innerR * cos2},${100 + innerR * sin2}`}
                fill="white"
              />
            );
          })}
        </svg>

        <svg
          className="absolute -left-24 -bottom-24 w-[400px] h-[400px] opacity-[0.05]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="65" stroke="white" strokeWidth="3" />
          <circle cx="100" cy="100" r="45" stroke="white" strokeWidth="2" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 360) / 12;
            const innerR = 62;
            const outerR = 76;
            const halfTooth = 9;
            const cos1 = Math.cos(((angle - halfTooth) * Math.PI) / 180);
            const sin1 = Math.sin(((angle - halfTooth) * Math.PI) / 180);
            const cos2 = Math.cos(((angle + halfTooth) * Math.PI) / 180);
            const sin2 = Math.sin(((angle + halfTooth) * Math.PI) / 180);
            return (
              <path
                key={i}
                d={`M${100 + innerR * cos1},${100 + innerR * sin1} L${100 + outerR * cos1},${100 + outerR * sin1} L${100 + outerR * cos2},${100 + outerR * sin2} L${100 + innerR * cos2},${100 + innerR * sin2}`}
                fill="white"
              />
            );
          })}
        </svg>
      </div>

      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      {/* Diagonal line accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Pronto para otimizar seus sistemas de climatização?
          </h2>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Solicite um orçamento e descubra como podemos otimizar seus sistemas
            de climatização com segurança e eficiência.
          </p>
          <motion.a
            href="https://wa.me/5511932106778?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-white text-navy px-10 py-5 rounded-xl text-lg font-bold shadow-2xl shadow-black/30 hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-shadow duration-300"
          >
            <svg className="w-7 h-7 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
