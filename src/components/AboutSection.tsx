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
    description: "Compromisso ambiental em cada processo. Utilizamos somente produtos aprovados que não agridem o meio ambiente, com total conformidade com o IBAMA.",
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
