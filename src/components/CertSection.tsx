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
            <span className="inline-block px-4 py-1.5 rounded-full bg-alpha-red/10 text-alpha-red text-sm font-medium mb-6">
              Certificações &amp; Conformidade
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
                  <div className="w-11 h-11 rounded-xl bg-alpha-red/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-alpha-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
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
