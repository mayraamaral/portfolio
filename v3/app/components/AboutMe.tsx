export function AboutMe() {
  return (
    <section
      id="about-me"
      className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-10 px-6 text-center"
    >
      <h2 className="text-4xl font-extrabold text-[var(--foreground)] sm:text-5xl lg:text-6xl">
        Crio soluções
        <span className="ml-2 underline decoration-8 decoration-[var(--accent)] underline-offset-4 pr-2">
          de impacto
        </span>
        através da tecnologia.
      </h2>
      <p className="max-w-3xl text-lg leading-relaxed text-[var(--muted-foreground)]">
        Desenvolvedora desde 2015, especializada em Java e Spring, com experiência em diversas linguagens e tecnologias como Js/Node e Python. Possuo habilidades avançadas em Git, SQL, bancos de dados (SQL e NoSQL), APIs, testes unitários, clean code, Docker, Jenkins, Linux e shell script. Certificada em AWS, também tenho experiência em Azure. Sou apaixonada por resolver desafios reais e foco nos resultados, não apenas nas ferramentas.
      </p>
    </section>
  );
}
