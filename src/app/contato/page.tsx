import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Escola Iluminar. Agende uma visita, tire dúvidas sobre matrículas ou fale pelo WhatsApp.",
  openGraph: {
    title: "Contato | Escola Iluminar",
    description:
      "Agende uma visita ou fale conosco. Estamos prontos para receber você e seu pequeno explorador.",
  },
};

export default function ContatoPage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-3xl">
      <h1 className="text-4xl lg:text-5xl font-black text-secondary mb-4">
        Fale <span className="text-primary">Conosco</span>
      </h1>
      <p className="text-secondary/70 text-lg mb-12">
        Estamos prontos para responder suas dúvidas e receber você e seu
        pequeno explorador para uma visita.
      </p>
      <div className="space-y-8">
        <div className="flex items-start gap-4 p-6 bg-accent/10 rounded-xl">
          <span className="material-symbols-outlined text-primary text-3xl">
            phone
          </span>
          <div>
            <h2 className="font-bold text-secondary mb-1">Telefone</h2>
            <a
              href="tel:+551145678901"
              className="text-secondary/80 hover:text-primary transition-colors"
            >
              (11) 4567-8901
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4 p-6 bg-accent/10 rounded-xl">
          <span className="material-symbols-outlined text-primary text-3xl">
            mail
          </span>
          <div>
            <h2 className="font-bold text-secondary mb-1">E-mail</h2>
            <a
              href="mailto:ola@pequenosexploradores.com"
              className="text-secondary/80 hover:text-primary transition-colors"
            >
              ola@pequenosexploradores.com
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4 p-6 bg-accent/10 rounded-xl">
          <span className="material-symbols-outlined text-primary text-3xl">
            location_on
          </span>
          <div>
            <h2 className="font-bold text-secondary mb-1">Endereço</h2>
            <p className="text-secondary/80">
            R. José de Alençar, 824,-Colombo, PR
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-6 bg-accent/10 rounded-xl">
          <span className="material-symbols-outlined text-primary text-3xl">
            schedule
          </span>
          <div>
            <h2 className="font-bold text-secondary mb-1">Horário de atendimento</h2>
            <p className="text-secondary/80">
              Segunda a Sexta, das 07:00 às 19:00
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap gap-4">
        <a
          href="https://wa.me/551145678901"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition-colors"
        >
          <span className="material-symbols-outlined">chat</span>
          Falar no WhatsApp
        </a>
        <Link
          href="/sobre"
          className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary/90 transition-colors"
        >
          Conheça nossa escola
        </Link>
      </div>
    </div>
  );
}
