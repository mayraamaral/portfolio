import { useTranslations } from "next-intl";

type Experience = {
  title: string;
  company: string;
  url: string;
  period: string;
  description?: string;
  badge?: string;
};

export function Experience() {
  const t = useTranslations("Experience");

  const EXPERIENCES: Experience[] = [
    {
      title: t("experience1.title"),
      company: t("experience1.company"),
      url: "https://taspro.ai",
      period: t("experience1.period"),
      description: t("experience1.description"),
      badge: t("experience1.badge"),
    },
    {
      title: t("experience2.title"),
      company: t("experience2.company"),
      url: "https://alura.com.br",
      period: t("experience2.period"),
      description: t("experience2.description"),
    },
    {
      title: t("experience3.title"),
      company: t("experience3.company"),
      url: "https://www.dbccompany.com.br/",
      period: t("experience3.period"),
      description: t("experience3.description"),
    },
    {
      title: t("experience4.title"),
      company: t("experience4.company"),
      url: "https://www.dbccompany.com.br/",
      period: t("experience4.period"),
      description: t("experience4.description"),
    },
    {
      title: t("experience5.title"),
      company: t("experience5.company"),
      url: "https://ambev.com.br",
      period: t("experience5.period"),
      description: t("experience5.description"),
    },
  ];

  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center px-6 pt-32 pb-20"
    >
      <h2 className="text-4xl font-extrabold text-[var(--foreground)]">{t("title")}</h2>
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
