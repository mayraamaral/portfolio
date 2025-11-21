import { useTranslations } from "next-intl";

export function AboutMe() {
  const t = useTranslations("AboutMe");

  return (
    <section
      id="about-me"
      className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 text-center"
    >
      <h2 className="text-4xl font-extrabold text-[var(--foreground)] sm:text-5xl lg:text-6xl">
        {t("titlePart1")}
        <span className="ml-2 underline decoration-8 decoration-[var(--accent)] underline-offset-4 pr-2">
          {t("titlePart2")}
        </span>
        {t("titlePart3")}
      </h2>
      <p className="max-w-3xl text-lg leading-relaxed text-[var(--muted-foreground)]">
        {t("description")}
      </p>
    </section>
  );
}
