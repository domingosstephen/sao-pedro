export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
  benefits: string[];
  faq: { q: string; a: string }[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: "avaliacao-clinica",
    title: "Avaliação Clínica Completa",
    shortTitle: "Avaliação Clínica",
    tagline: "O primeiro passo para o seu sorriso ideal",
    description:
      "Uma avaliação detalhada da sua saúde bucal com tecnologia de ponta. Analisamos cada detalhe — da gengiva à articulação — para criar um plano de tratamento personalizado que respeita o seu tempo e o seu bolso.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
    benefits: [
      "Diagnóstico completo com radiografia digital",
      "Plano de tratamento personalizado",
      "Orientação preventiva individualizada",
      "Sem compromisso — você decide no seu ritmo",
    ],
    faq: [
      {
        q: "Quanto tempo dura a avaliação?",
        a: "A consulta de avaliação dura em média 40 minutos, tempo suficiente para um diagnóstico completo e detalhado.",
      },
      {
        q: "Preciso de encaminhamento?",
        a: "Não. Você pode agendar diretamente pelo WhatsApp sem necessidade de encaminhamento.",
      },
    ],
    related: ["ortodontia", "lentes-de-resina", "clinica-geral"],
  },
  {
    slug: "ortodontia",
    title: "Ortodontia",
    shortTitle: "Ortodontia",
    tagline: "Dentes alinhados, autoestima elevada",
    description:
      "Tratamento ortodôntico moderno para corrigir o alinhamento dos dentes e a mordida. Utilizamos aparelhos de última geração que oferecem mais conforto, menos consultas e resultados mais rápidos.",
    icon: "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z",
    benefits: [
      "Aparelhos estéticos e convencionais",
      "Planejamento digital do tratamento",
      "Acompanhamento mensal personalizado",
      "Resultados visíveis desde as primeiras semanas",
    ],
    faq: [
      {
        q: "Quanto tempo dura o tratamento ortodôntico?",
        a: "O tempo varia de 12 a 30 meses, dependendo da complexidade do caso. Na avaliação inicial, damos uma estimativa precisa.",
      },
      {
        q: "Adultos podem usar aparelho?",
        a: "Sim! Não existe idade limite para ortodontia. Atendemos pacientes adultos com opções estéticas discretas.",
      },
    ],
    related: ["avaliacao-clinica", "lentes-de-resina", "harmonizacao-orofacial"],
  },
  {
    slug: "protese-e-implantes",
    title: "Prótese e Implantes Dentários",
    shortTitle: "Prótese e Implantes",
    tagline: "Recupere a função e a beleza do seu sorriso",
    description:
      "Implantes dentários de titânio e próteses de alta qualidade para substituir dentes perdidos. Devolvemos a sua capacidade de mastigar, sorrir e viver com confiança — como se fossem seus dentes naturais.",
    icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
    benefits: [
      "Implantes de titânio com alta taxa de sucesso",
      "Próteses fixas e removíveis de última geração",
      "Procedimento seguro com anestesia local",
      "Resultado natural e duradouro",
    ],
    faq: [
      {
        q: "O implante dói?",
        a: "O procedimento é feito com anestesia local e o desconforto pós-operatório é mínimo, controlado com medicação simples.",
      },
      {
        q: "Quanto tempo dura um implante?",
        a: "Com os cuidados adequados e visitas regulares, um implante pode durar a vida toda.",
      },
    ],
    related: ["avaliacao-clinica", "clinica-geral", "harmonizacao-orofacial"],
  },
  {
    slug: "lentes-de-resina",
    title: "Lentes de Resina",
    shortTitle: "Lentes de Resina",
    tagline: "Transforme seu sorriso em uma única sessão",
    description:
      "As lentes de resina são lâminas ultrafinas aplicadas sobre os dentes para corrigir cor, formato e pequenos desalinhamentos. Um procedimento minimamente invasivo que transforma completamente o seu sorriso — muitas vezes em apenas uma consulta.",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
    benefits: [
      "Resultado imediato — sorriso novo no mesmo dia",
      "Procedimento minimamente invasivo",
      "Aparência natural e harmônica",
      "Correção de cor, forma e proporção",
    ],
    faq: [
      {
        q: "Qual a diferença entre lentes de resina e porcelana?",
        a: "As lentes de resina são mais acessíveis e podem ser feitas em sessão única. As de porcelana duram mais, mas exigem mais sessões. Na avaliação, indicamos a melhor opção para o seu caso.",
      },
      {
        q: "As lentes de resina escurecem?",
        a: "Com o tempo, podem sofrer leve alteração de cor. Manutenções periódicas garantem que seu sorriso se mantenha sempre impecável.",
      },
    ],
    related: ["harmonizacao-orofacial", "ortodontia", "avaliacao-clinica"],
  },
  {
    slug: "harmonizacao-orofacial",
    title: "Harmonização Orofacial",
    shortTitle: "Harmonização Orofacial",
    tagline: "Equilíbrio e beleza para o seu rosto",
    description:
      "Procedimentos estéticos que harmonizam as proporções do rosto com o sorriso. Utilizamos técnicas avançadas como toxina botulínica e preenchimento facial para realçar a sua beleza natural com resultados sutis e elegantes.",
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
    benefits: [
      "Procedimentos rápidos e com mínimo desconforto",
      "Resultados naturais e harmônicos",
      "Profissionais especializados em estética facial",
      "Complemento perfeito para tratamentos dentários",
    ],
    faq: [
      {
        q: "É seguro fazer harmonização com dentista?",
        a: "Sim. O dentista é o profissional mais capacitado para procedimentos na região orofacial, com profundo conhecimento da anatomia local.",
      },
      {
        q: "Os resultados são permanentes?",
        a: "A maioria dos procedimentos tem duração de 6 a 18 meses, permitindo ajustes conforme sua preferência.",
      },
    ],
    related: ["lentes-de-resina", "ortodontia", "avaliacao-clinica"],
  },
  {
    slug: "clinica-geral",
    title: "Clínica Geral e Tratamentos Preventivos",
    shortTitle: "Clínica Geral",
    tagline: "Prevenção é o melhor tratamento",
    description:
      "Cuidados essenciais para manter sua saúde bucal em dia. Desde limpezas e restaurações até tratamentos de canal e extrações — tudo com a delicadeza e o cuidado que você merece.",
    icon: "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75",
    benefits: [
      "Limpeza profissional com ultrassom",
      "Restaurações estéticas em resina",
      "Tratamento de canal moderno e indolor",
      "Programa de prevenção personalizado",
    ],
    faq: [
      {
        q: "Com que frequência devo ir ao dentista?",
        a: "Recomendamos visitas a cada 6 meses para limpeza e avaliação preventiva, mas a frequência pode variar conforme seu caso.",
      },
      {
        q: "Tratamento de canal dói?",
        a: "Com as técnicas e anestesias modernas, o tratamento de canal é praticamente indolor. O objetivo é justamente eliminar a dor.",
      },
    ],
    related: ["avaliacao-clinica", "ortodontia", "protese-e-implantes"],
  },
];

import { config } from './clinic-config';

export const WHATSAPP_URL = config.whatsappUrl;
export const PHONE = config.phone;
export const ADDRESS = config.address;
export const GOOGLE_MAPS_EMBED = config.mapsEmbed;
export const INSTAGRAM = config.instagram ?? '';
