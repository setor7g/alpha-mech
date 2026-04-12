"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-cta.png')" }}
      />
      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-navy/60" />

      {/* Top accent — thin red line (brand touch) */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-alpha-red to-transparent z-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white-soft mb-6 leading-tight">
            Pronto para otimizar seus sistemas de climatização?
          </h2>
          <p className="text-gray-light text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Solicite um orçamento e descubra como podemos otimizar seus sistemas
            de climatização com segurança e eficiência.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/5511932106778?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-alpha-red hover:bg-alpha-red-dark text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-alpha-red/20 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar no WhatsApp
            </motion.a>
            <a
              href="mailto:contato@alphamech.com.br"
              className="text-gray-light hover:text-white-soft transition-colors text-sm font-medium underline underline-offset-4 decoration-gray-light/30 hover:decoration-white-soft/50"
            >
              Ou entre em contato por e-mail
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
