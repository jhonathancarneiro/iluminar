import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="bg-background-light pt-32 pb-12"
      id="contato"
    >
      <div className="container mx-auto px-6">
        <div className="bg-accent/10 p-12 lg:p-20 rounded-xl relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[120px] text-secondary">
              sentiment_very_satisfied
            </span>
          </div>
          <div className="max-w-2xl space-y-8 relative z-10">
            <h2 className="text-4xl font-black text-secondary leading-tight">
              Quer fazer parte da nossa família?
            </h2>
            <p className="text-secondary/70 text-lg">
              Agende uma visita e venha conhecer nosso espaço de perto. Ficaremos
              felizes em receber você e seu pequeno explorador.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5541984998677?text=Ol%C3%A1!%20Vim%20pelo%20site.%20Gostaria%20de%20agendar%20uma%20visita."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-secondary/90 transition-colors"
              >
                <span className="material-symbols-outlined">calendar_month</span>
                Agendar Visita
              </a>
              <a
                href="https://wa.me/5541984998677?text=Ol%C3%A1!%20Entrei%20em%20contato%20pelo%20site%20da%20Escola%20Iluminar."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-secondary px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-colors"
              >
                <span className="material-symbols-outlined">chat</span>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-12 border-b border-secondary/10 pb-12">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Escola Iluminar - Educação Infantil e Ensino Fundamental"
                width={200}
                height={56}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-secondary/60">
              Educando crianças para serem protagonistas de suas próprias
              descobertas.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary/5 rounded-full flex items-center justify-center text-secondary hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined">
                  social_leaderboard
                </span>
              </a>
              <a
                href="https://www.instagram.com/escola_iluminar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary/5 rounded-full flex items-center justify-center text-secondary hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="font-bold text-secondary">Links Rápidos</h5>
            <ul className="space-y-4 text-secondary/60">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-primary transition-colors"
                >
                  Nossa Escola
                </Link>
              </li>
              <li>
                <Link
                  href="/metodologia"
                  className="hover:text-primary transition-colors"
                >
                  Metodologia
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-primary transition-colors"
                >
                  Matrículas
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="font-bold text-secondary">Contato</h5>
            <ul className="space-y-4 text-secondary/60">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  phone
                </span>
                (41) 3037-4008
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  mail
                </span>
                secretaria@escolailuminar.com
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>
                <a
                  href="https://maps.app.goo.gl/DTFYDwGrVMNrPbu79"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary/60 hover:text-primary transition-colors"
                >
                  R. José de Alençar, 824 - Guarani, Colombo - PR
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="font-bold text-secondary">Horário</h5>
            <p className="text-secondary/60">
              Segunda a Sexta
              <br />
              07:15 às 19:15
            </p>
            <div className="p-4 bg-primary/10 rounded-lg text-sm text-secondary font-semibold">
              Ambiente seguro com monitoramento 24h
            </div>
          </div>
        </div>
        <div className="pt-8 text-center text-secondary/40 text-sm">
          © {new Date().getFullYear()} Escola Iluminar. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
