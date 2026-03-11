"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/metodologia", label: "Metodologia" },
  { href: "/atividades", label: "Atividades" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
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
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          menuOpen ? "max-h-90" : "max-h-0"
        }`}
      >
        <nav className="container mx-auto px-6 pb-4 pt-2 flex flex-col gap-2 font-semibold text-secondary/80 border-t border-secondary/10">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="py-3 px-2 hover:text-primary hover:bg-secondary/5 rounded-lg transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="mt-2 py-3 px-4 bg-secondary text-white rounded-full font-bold text-center hover:bg-secondary/90 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Agendar Visita
          </Link>
        </nav>
      </div>
    </header>
  );
}
