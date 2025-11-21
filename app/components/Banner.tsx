import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export function Banner() {
  const t = useTranslations("Banner");

  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center gap-6 pt-32 text-center"
    >
      <h1 className="text-4xl font-extrabold text-[var(--foreground)] sm:text-5xl lg:text-6xl">
        Mayra Amaral
      </h1>
      <p className="max-w-2xl text-lg text-[var(--muted-foreground)]">
        {t("role")}
      </p>
      <div className="flex items-center gap-4 text-4xl">
        <Link
          href="https://github.com/mayraamaral"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="hero-icon"
        >
          <FaGithubSquare />
        </Link>
        <Link
          href="https://linkedin.com/in/mayraamaral"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hero-icon"
        >
          <FaLinkedin />
        </Link>
      </div>
    </section>
  );
}
