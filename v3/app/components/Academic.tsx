type Study = {
  title: string;
  institution: string;
  period: string;
  description: string;
  badge?: string;
};

const STUDIES: Study[] = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "UNINTER - Centro Universitário Internacional",
    period: "De fev/2022 a jun/2024",
    description:
      "Participação no Google Developer Student Club e foco em ferramentas de desenvolvimento back-end como Python, Java, Spring Boot, SQL e modelagem de dados.",
  },
  {
    title: "Técnica em Eletrônica",
    institution: "IFPB - Instituto Federal de Educação, Ciência e Tecnologia da Paraíba",
    period: "De mar/2015 a fev/2019",
    description:
      "Contato com linguagens como C, Python, Matlab e Java, desenvolvendo base sólida em lógica e desenvolvimento web.",
  },
];

export function Academic() {
  return (
    <section
      id="academic-background"
      className="flex flex-col items-center justify-center px-6 pt-32 pb-20"
    >
      <h2 className="text-4xl font-extrabold text-[var(--foreground)]">Formação</h2>
      <ol className="relative mt-10 w-full max-w-3xl border-s border-[var(--surface-border)] pl-6">
        {STUDIES.map((study, index) => (
          <li key={study.title + index} className="mb-12 last:mb-0">
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
                {study.title}
                {study.badge && study.badge !== "Cursando" ? (
                  <span className="ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800">
                    {study.badge}
                  </span>
                ) : null}
              </h3>
              <span className="block text-sm font-semibold text-[var(--foreground)]">
                {study.institution}
              </span>
              <time className="block text-sm text-[var(--muted-foreground)]">{study.period}</time>
              {study.description ? (
                <p className="text-base text-[var(--muted-foreground)]">{study.description}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
