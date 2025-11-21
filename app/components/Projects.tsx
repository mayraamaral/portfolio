import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

import { FaGithub, FaLink } from "react-icons/fa";

import cdcGif from "@/public/cdc-api.gif";
import coursesGif from "@/public/courses-api.gif";
import imageOptimizerGif from "@/public/image-optimizer.png";

type Project = {
  title: string;
  description: string;
  image: StaticImageData | string;
  links: Array<{ href: string; label: string; icon: ReactNode }>;
};

export function Projects() {
  const t = useTranslations("Projects");

  const PROJECTS: Project[] = [
    {
      title: t("project1.title"),
      description: t("project1.description"),
      image: coursesGif,
      links: [
        {
          href: "https://github.com/mayraamaral/courses-api",
          label: "Github",
          icon: <FaGithub />,
        },
        {
          href: "https://github.com/mayraamaral/courses-api",
          label: "Deploy",
          icon: <FaLink />,
        },
      ],
    },
    {
      title: t("project2.title"),
      description: t("project2.description"),
      image: imageOptimizerGif,
      links: [
        {
          href: "https://github.com/mayraamaral/image-optimizer-web",
          label: "Github",
          icon: <FaGithub />,
        },
        {
          href: "https://image-optimizer-f885de1c8e9a.herokuapp.com/",
          label: "Deploy",
          icon: <FaLink />,
        },
      ],
    },
    {
      title: t("project3.title"),
      description: t("project3.description"),
      image: cdcGif,
      links: [
        {
          href: "https://github.com/mayraamaral/deveficiente-desafio-cdc",
          label: "Github",
          icon: <FaGithub />,
        },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white">{t("title")}</h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="flex h-full max-w-xs flex-col overflow-hidden rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] text-left shadow transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-44 w-full">
              {typeof project.image === "string" ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                />
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                />
              )}
            </div>
            <div className="flex h-full flex-col justify-between px-5 pb-5 pt-6 text-center">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-[var(--foreground)]">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {project.description}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-center gap-3">
                {project.links.map((link) => (
                  <Link
                    key={`${project.title}-${link.label}`}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-3 py-2 text-sm font-medium text-white transition hover:bg-[var(--accent-hover)] hover:text-white"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
