# Alpha Mech — Landing Page Institucional

## Objetivo

Página institucional one-page para a Alpha Mech, empresa de climatização e refrigeração. Foco em geração de leads via WhatsApp e transmissão de credibilidade técnica.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion (animações de scroll e microinterações)

## Paleta de Cores

| Token | Hex | Uso |
|-------|-----|-----|
| Navy | `#0A1628` | Backgrounds principais, header |
| Navy Light | `#132038` | Cards, seções alternadas |
| Graphite | `#1E293B` | Textos secundários, bordas |
| Blue Accent | `#2563EB` | CTAs, destaques, hovers |
| Cyan Tech | `#06B6D4` | Detalhes técnicos, ícones, badges |
| White | `#F8FAFC` | Texto principal, fundos claros |
| Gray Light | `#94A3B8` | Subtextos, descrições |

## Tipografia

- **Headlines:** Outfit (bold, semibold)
- **Body:** Inter (regular, medium)

## Estrutura de Arquivos

```
app/
  layout.tsx          — metadata SEO, fontes (Inter + Outfit via next/font)
  page.tsx            — composição das seções
  globals.css         — Tailwind base + custom utilities
components/
  Header.tsx          — navbar fixa com transição transparente → sólida
  HeroSection.tsx     — gradiente + SVG fluxo de ar + CTAs
  AboutSection.tsx    — quem somos + 3 cards pilares
  ServicesSection.tsx  — 6 cards de serviços
  CertSection.tsx     — badges de certificações
  WhyUsSection.tsx    — grid de diferenciais
  CtaSection.tsx      — CTA final de conversão
  Footer.tsx          — contato + redes sociais
```

## Seções

### 1. Header

- Navbar fixa no topo
- Placeholder para logo (espaço reservado, sem imagem)
- Links de navegação: Quem Somos, Serviços, Certificações, Contato
- Botão CTA "Solicitar Orçamento"
- Comportamento: transparente no topo, fundo sólido navy ao scrollar
- Mobile: menu hamburger com drawer

### 2. Hero Section

- **Background:** gradiente navy (`#0A1628`) → grafite (`#1E293B`) com elementos SVG abstratos animados (linhas de fluxo de ar, padrões de dutos) em opacidade sutil
- **Headline:** "Especialistas em Climatização e Refrigeração com Segurança, Eficiência e Alta Performance"
- **Subtítulo:** "Soluções completas para ambientes residenciais, comerciais e industriais com alto padrão técnico, conformidade normativa e excelência operacional."
- **CTA primário:** "Solicitar Orçamento" (scroll para seção de contato)
- **CTA secundário:** "Falar no WhatsApp" (link direto para `https://wa.me/5511932106778`)
- **Animações:** fade-up nos textos com stagger, SVGs animados com motion paths suaves

### 3. Quem Somos

- Fundo claro (branco/off-white)
- Texto institucional extraído do PDF:
  > "A Alpha Mech é uma empresa especializada em soluções de refrigeração e climatização, oferecendo serviços com alto padrão de qualidade, eficiência e confiabilidade. Atuamos com foco na excelência operacional, garantindo o pleno funcionamento dos sistemas, sempre alinhados às normas técnicas, segurança do trabalho e responsabilidade ambiental."
- 3 cards dos pilares:
  - **Qualidade** — Qualidade na execução dos serviços
  - **Segurança** — Segurança em todas as operações
  - **Responsabilidade Ambiental** — Responsabilidade ambiental em cada processo
- Cards com ícones minimalistas, borda sutil, hover com elevação

### 4. Serviços

- Fundo navy escuro
- Grid 3x2 (desktop), 2x1 (tablet), 1x1 (mobile)
- 6 cards:
  1. **Manutenção Preventiva** — Inspeções periódicas, limpeza, avaliação de desempenho e aumento da vida útil dos equipamentos
  2. **Manutenção Corretiva** — Diagnóstico rápido, reparos emergenciais, substituição de componentes e retorno ágil da operação
  3. **Instalação de Ar-Condicionado** — Sistemas Split, Cassete, VRF e outros, com execução conforme normas técnicas
  4. **Soluções Industriais** — Chillers, câmaras frias, refrigeração industrial e projetos personalizados
  5. **PMOC** — Elaboração e implementação de Plano de Manutenção, Operação e Controle conforme exigências legais
  6. **Qualidade do Ar** — Higienização completa, controle de fungos, bactérias e impurezas para ambientes mais saudáveis
- Cada card: ícone no topo, título, descrição curta, hover com scale + shadow + accent border

### 5. Certificações

- Fundo claro alternado
- Layout: badges/cards em linha (scroll horizontal no mobile)
- 7 certificações:
  - Boas Práticas de Refrigeração (IBAMA)
  - KNX Partner
  - NR-06 (EPI)
  - NR-10 (Segurança elétrica)
  - NR-33 (Espaços confinados)
  - NR-34 (Meio ambiente de trabalho)
  - NR-35 (Trabalho em altura)
- Visual: badge com ícone de escudo/check, nome da certificação, descrição curta
- Transmitir forte percepção de conformidade e autoridade técnica

### 6. Por que escolher a Alpha Mech?

- Fundo navy escuro
- Grid 3x2 (desktop)
- 6 diferenciais com ícone + título + descrição curta:
  1. Equipe técnica qualificada e certificada
  2. Atendimento rápido e eficiente
  3. Conformidade com normas e legislações
  4. Compromisso com segurança e meio ambiente
  5. Redução de custos com manutenção preventiva
  6. Soluções personalizadas para cada cliente
- Ícones minimalistas em cyan tech

### 7. CTA Final

- Fundo gradiente blue accent → cyan tech
- Texto: "Solicite um orçamento e descubra como podemos otimizar seus sistemas de climatização com segurança e eficiência."
- Botão grande WhatsApp com ícone
- Animação de pulse sutil no botão

### 8. Footer

- Fundo navy mais escuro
- Dados de contato:
  - Telefone: (11) 98486-5404 — Gerente Operacional
  - WhatsApp: (11) 93210-6778 — Comercial
  - Email: contato@alphamech.com.br
  - Instagram: @alphamech.clima
- Copyright
- Links de navegação repetidos

## Animações (Framer Motion)

- **Scroll reveal:** cada seção faz fade-in + slide-up ao entrar no viewport (Intersection Observer via `whileInView`)
- **Stagger:** cards aparecem em sequência com delay incremental
- **Header:** transição suave de `bg-transparent` para `bg-navy` no scroll
- **Hover:** cards com `scale(1.02)` + box-shadow
- **CTA button:** glow pulse sutil no hover
- **Hero SVG:** animação contínua de linhas de fluxo (motion path)

## SEO

- `<title>`: "Alpha Mech — Climatização e Refrigeração | Segurança e Eficiência"
- `<meta description>`: "Soluções completas em climatização e refrigeração para ambientes residenciais, comerciais e industriais. Equipe certificada, conformidade normativa e excelência operacional."
- Open Graph tags
- Tags semânticas: `<header>`, `<main>`, `<section>`, `<footer>`
- Atributos `alt` e `aria-label`

## Responsividade

- Mobile-first com breakpoints Tailwind (sm, md, lg, xl)
- Header: hamburger menu no mobile com drawer animado
- Grids adaptáveis: 1 → 2 → 3 colunas
- Hero: texto centralizado no mobile
- Certificações: scroll horizontal no mobile
- Tipografia escalável

## Dados de Contato

- WhatsApp comercial (CTAs): `https://wa.me/5511932106778`
- Telefone operacional: (11) 98486-5404
- Email: contato@alphamech.com.br
- Instagram: https://instagram.com/alphamech.clima
