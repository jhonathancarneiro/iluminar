import Link from "next/link";

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
              <Link
                href="/contato"
                className="bg-secondary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-secondary/90 transition-colors"
              >
                <span className="material-symbols-outlined">calendar_month</span>
                Agendar Visita
              </Link>
              <a
                href="https://wa.me/551145678901"
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
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-xl">
                  rocket_launch
                </span>
              </div>
              <span className="text-lg font-extrabold tracking-tight text-secondary">
                Pequenos Exploradores
              </span>
            </div>
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
                href="#"
                className="w-10 h-10 bg-secondary/5 rounded-full flex items-center justify-center text-secondary hover:bg-primary transition-colors"
                aria-label="Galeria"
              >
                <span className="material-symbols-outlined">photo_camera</span>
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
                (11) 4567-8901
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  mail
                </span>
                ola@pequenosexploradores.com
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>
                Av. das Flores, 123 - São Paulo
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="font-bold text-secondary">Horário</h5>
            <p className="text-secondary/60">
              Segunda a Sexta
              <br />
              07:00 às 19:00
            </p>
            <div className="p-4 bg-primary/10 rounded-lg text-sm text-secondary font-semibold">
              Ambiente seguro com monitoramento 24h
            </div>
          </div>
        </div>
        <div className="pt-8 text-center text-secondary/40 text-sm">
          © {new Date().getFullYear()} Pequenos Exploradores. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
