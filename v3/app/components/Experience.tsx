type Experience = {
  title: string;
  company: string;
  url: string;
  period: string;
  description?: string;
  badge?: string;
};

const EXPERIENCES: Experience[] = [
  {
    title: "Engenheira de Software Pleno",
    company: "Translational Analytics & Statistics",
    url: "https://taspro.ai",
    period: "Desde abr/2025",
    description:
      "Otimização de fluxos SQL críticos em 75%, fortalecimento de deploys com testes de integração e criação de um design system compartilhado que reduziu pela metade o tempo de entrega de componentes, além da entrega de notificações em tempo real com Redis + SSE.",
    badge: "Atual",
  },
  {
    title: "Engenheira de Software Júnior",
    company: "Alura",
    url: "https://alura.com.br",
    period: "De mai/2024 a abr/2025",
    description:
      "Responsável por um checkout agnóstico de provedores que adicionou ~R$ 500 mil em receita, otimização de consultas SQL em 75%, entregas com feature flags para acelerar feedbacks e eliminação de vulnerabilidades ao migrar de joda.time para java.time.",
  },
  {
    title: "Engenheira de Software Júnior",
    company: "DBC Company",
    url: "https://www.dbccompany.com.br/",
    period: "De set/2022 a mai/2024",
    description:
      "Responsável pelo time de estagiários, liderando-os usando metodologias ágeis como Scrum e XP, resultando na criação de um sistema usado por milhares de pessoas sem instabilidade. Desenvolvimento de sistemas escaláveis, reduzindo burocracia e automatizando processos internos.",
  },
  {
    title: "Estágio em Desenvolvimento de Software",
    company: "DBC Company",
    url: "https://www.dbccompany.com.br/",
    period: "De jun/2022 a ago/2022",
    description:
      "Período de treinamento com entregas contínuas usando React, TypeScript, Redux, HTML e CSS. Projeto final com squad multidisciplinar, criando aplicações com login, cadastro e dashboards conectados a APIs.",
  },
  {
    title: "Assistente de Suporte - TI",
    company: "Ambev",
    url: "https://ambev.com.br",
    period: "De abr/2021 a jun/2022",
    description:
      "Automatização de rotinas financeiras com VBA, reduzindo 75% do tempo gasto. Desenvolvimento de dashboards com Excel e Power BI para monitorar KPIs e suportar tomadas de decisão.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center px-6 pt-32 pb-20"
    >
      <h2 className="text-4xl font-extrabold text-[var(--foreground)]">Experiência</h2>
      <ol className="relative mt-10 w-full max-w-3xl border-s border-[var(--surface-border)] pl-6">
        {EXPERIENCES.map((item, index) => (
          <li key={item.title + index} className="mb-12 last:mb-0">
            <span className="absolute -start-[0.95rem] flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800 ring-8 ring-white dark:ring-zinc-900">
              <svg
                className="h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <div className="space-y-2">
              <h3 className="flex items-center text-lg font-semibold text-[var(--foreground)]">
                {item.title}
                {item.badge ? (
                  <span className="ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800">
                    {item.badge}
                  </span>
                ) : null}
              </h3>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-semibold text-[var(--foreground)] underline-offset-4 transition hover:text-[var(--accent)]"
              >
                {item.company}
              </a>
              <time className="block text-sm text-[var(--muted-foreground)]">{item.period}</time>
              {item.description ? (
                <p className="text-base text-[var(--muted-foreground)]">{item.description}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
