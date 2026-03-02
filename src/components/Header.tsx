import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-secondary/5">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Escola Iluminar - Educação Infantil e Ensino Fundamental"
            width={200}
            height={56}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-semibold text-secondary/80">
          <Link href="/" className="hover:text-primary transition-colors">
            Início
          </Link>
          <Link
            href="/metodologia"
            className="hover:text-primary transition-colors"
          >
            Metodologia
          </Link>
          <Link href="/atividades" className="hover:text-primary transition-colors">
            Atividades
          </Link>
          <Link href="/sobre" className="hover:text-primary transition-colors">
            Sobre Nós
          </Link>
          <Link href="/contato" className="hover:text-primary transition-colors">
            Contato
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/contato"
            className="hidden md:flex bg-secondary text-white px-6 py-2 rounded-full font-bold hover:bg-secondary/90 transition-all"
          >
            Agendar Visita
          </Link>
          <button
            type="button"
            className="p-2 text-secondary md:hidden"
            aria-label="Abrir menu"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
