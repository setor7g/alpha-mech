"use client";

import AnimatedSection from "./AnimatedSection";

export default function BprBanner() {
  return (
    <section className="relative py-16 lg:py-20 bg-navy overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Icon */}
            <div className="shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.03a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                  />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                <h3 className="font-outfit font-bold text-2xl text-white-soft">
                  Responsabilidade ambiental comprovada
                </h3>
                <span className="inline-block self-start sm:self-auto px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  BPR Certificada
                </span>
              </div>
              <p className="text-gray-light leading-relaxed max-w-2xl">
                Somos certificados em{" "}
                <span className="text-white-soft font-medium">
                  Boas Práticas de Refrigeração (BPR)
                </span>{" "}
                conforme exigências do IBAMA. Utilizamos somente produtos
                aprovados que não agridem o meio ambiente, garantindo
                sustentabilidade e conformidade ambiental na operação dos
                sistemas.
              </p>
            </div>

            {/* IBAMA badge */}
            <div className="shrink-0 hidden lg:flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <span className="text-gray-light text-xs font-medium">IBAMA</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
