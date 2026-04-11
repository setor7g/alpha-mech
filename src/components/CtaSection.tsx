"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-alpha-red via-alpha-red-dark to-navy" />

      {/* Gear pattern overlay — brand identity (static paths, no runtime math) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute -right-20 -top-20 w-[480px] h-[480px] opacity-[0.07]"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="32" stroke="white" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="22" stroke="white" strokeWidth="1" />
          <path
            d="M50 12 L53 12 L54 8 L56 8 L57 12 L60 13 L62 9 L64 10 L63 14 L66 16 L69 13 L71 15 L68 18 L70 21 L74 19 L75 22 L71 24 L72 27 L76 27 L76 30 L72 31 L72 34 L76 36 L75 39 L71 37 L70 40 L73 43 L71 45 L68 42 L65 44 L67 48 L64 49 L62 45 L59 46 L60 50 L57 50 L56 46 L53 46 L53 50 L50 50 L50 46 L47 46 L46 50 L43 50 L44 46 L41 45 L39 49 L36 48 L38 44 L35 42 L32 45 L30 43 L33 40 L31 37 L27 39 L26 36 L30 34 L30 31 L26 30 L26 27 L30 27 L31 24 L27 22 L28 19 L32 21 L34 18 L31 15 L33 13 L36 16 L39 14 L38 10 L40 9 L42 13 L45 12 L44 8 L46 8 L47 12 Z"
            fill="white"
          />
        </svg>

        <svg
          className="absolute -left-16 -bottom-16 w-[380px] h-[380px] opacity-[0.05]"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="1" />
          <path
            d="M50 14 L54 14 L55 9 L58 10 L57 15 L61 17 L64 13 L67 15 L64 19 L67 23 L72 22 L73 25 L68 27 L69 31 L74 32 L74 35 L69 35 L68 39 L73 41 L72 44 L67 42 L64 46 L67 50 L64 52 L61 48 L57 50 L58 55 L55 55 L54 50 L50 50 L50 55 L47 55 L46 50 L42 50 L41 55 L38 54 L39 49 L35 47 L32 51 L30 49 L33 45 L30 41 L25 43 L24 40 L29 38 L28 34 L23 33 L23 30 L28 30 L29 26 L24 24 L25 21 L30 23 L33 19 L30 15 L33 13 L36 17 L40 15 L39 10 L42 10 L43 15 L47 14 L46 9 L49 9 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      {/* Border accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

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
