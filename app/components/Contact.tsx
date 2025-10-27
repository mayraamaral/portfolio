export function Contact() {
  const inputClassName = "w-full rounded-lg border border-[var(--input-border)] bg-[var(--input-background)] p-2.5 text-sm text-[var(--foreground)] transition focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]";
  return (
    <section
      id="contact"
      className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-4xl font-extrabold pb-10 text-[var(--foreground)]">Contato</h2>
      <form
        action="https://formspree.io/f/xayrdnjg"
        method="post"
        className="w-full max-w-3xl space-y-6"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2 text-[var(--foreground)]">
            <label htmlFor="first_name" className="text-sm font-medium">
              Nome
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Nome"
              required
              className={inputClassName}
            />
          </div>
          <div className="flex flex-col gap-2 text-[var(--foreground)]">
            <label htmlFor="last_name" className="text-sm font-medium">
              Sobrenome
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Sobrenome"
              required
              className={inputClassName}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-[var(--foreground)]">
          <label htmlFor="email" className="text-sm font-medium">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@email.com"
            required
            className={inputClassName}
          />
        </div>
        <div className="flex flex-col gap-2 text-[var(--foreground)]">
          <label htmlFor="subject" className="text-sm font-medium">
            Assunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Assunto"
            required
            className={inputClassName}
          />
        </div>
        <div className="flex flex-col gap-2 text-[var(--foreground)]">
          <label htmlFor="message" className="text-sm font-medium">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Mensagem"
            className={inputClassName}
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-4 focus:ring-[var(--accent-soft)] sm:w-auto cursor-pointer"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
