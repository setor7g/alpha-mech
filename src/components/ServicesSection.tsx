"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Manutenção Preventiva",
    description: "Inspeções periódicas, limpeza, avaliação de desempenho e aumento da vida útil dos equipamentos.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.19a1.5 1.5 0 01-.502-2.063L12 1.5l6.466 8.417a1.5 1.5 0 01-.502 2.063l-5.384 3.19a1.5 1.5 0 01-1.56 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5" />
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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-tech/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-accent/10 border border-blue-accent/20 text-blue-accent text-sm font-medium mb-6">
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
