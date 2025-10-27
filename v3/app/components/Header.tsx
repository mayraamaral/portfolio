"use client";

import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTerminal } from "react-icons/fa";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about-me", label: "Sobre mim" },
  { href: "#experience", label: "Experiência" },
  { href: "#academic-background", label: "Formação" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

export function Header() {
  const [theme, setTheme] = useState<"light" | "dark">(() => getInitialTheme());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const isDarkMode = theme === "dark";

  const desktopLinkClass = () => "nav-link";

  const mobileLinkClass = () => "nav-link-mobile";

  useEffect(() => {
    updateHtmlTheme(theme);
  }, [theme]);

  useEffect(() => {
    const updateFromHash = () => {
      if (typeof window === "undefined") return;
      const hash = window.location.hash || "#home";
      setActiveSection(hash);
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);
    return () => window.removeEventListener("hashchange", updateFromHash);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handler = () => setIsMenuOpen(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (window.localStorage.getItem("theme")) return;
      const nextTheme = event.matches ? "dark" : "light";
      setTheme(nextTheme);
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDarkMode ? "light" : "dark";
    setTheme(nextTheme);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", nextTheme);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-zinc-900/90 text-white backdrop-blur">
      <div className="mx-auto flex h-20 max-w-screen-xl items-center px-4">
        <a
          href="https://mayra.dev"
          className="flex items-center"
          aria-label="Mayra Amaral"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTerminal className="text-3xl" />
        </a>
        <nav className="ml-auto hidden items-center md:flex">
          <ul className="flex gap-6 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setActiveSection(item.href)}
                  className={desktopLinkClass()}
                  data-active={activeSection === item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://blog.mayra.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="transition text-white hover:text-[var(--accent)]"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="ml-6 flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10"
            aria-label={isDarkMode ? "Ativar tema claro" : "Ativar tema escuro"}
            type="button"
          >
            {theme === "dark" ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}
          </button>
          <button
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-300 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            type="button"
          >
            <FaBars className="text-xl" />
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <nav id="primary-navigation" className="md:hidden">
          <ul className="flex flex-col gap-1 border-t border-zinc-800 bg-zinc-900 px-4 py-4 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveSection(item.href);
                  }}
                  className={mobileLinkClass()}
                  data-active={activeSection === item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://blog.mayra.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded px-3 py-2 transition text-white hover:bg-white/10"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") {
    return "light";
  }
  const storedTheme = window.localStorage.getItem("theme");
  if (storedTheme) {
    return storedTheme === "dark" ? "dark" : "light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function updateHtmlTheme(theme: "light" | "dark") {
  if (typeof window === "undefined") {
    return;
  }
  const html = document.documentElement;
  if (theme === "dark") {
    html.classList.remove("light");
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
    html.classList.add("light");
  }
}
