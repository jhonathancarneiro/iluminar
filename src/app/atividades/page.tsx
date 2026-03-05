import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atividades",
  description:
    "Explore o dia a dia e os projetos pedagógicos da Escola Iluminar. Oficina de artes, hora da leitura, horta pedagógica e recreação.",
  openGraph: {
    title: "Atividades | Escola Iluminar",
    description:
      "Conheça as atividades que transformam o aprendizado em descoberta.",
  },
};

const ACTIVITIES = [
  {
    src: "/images/capoeira.JPG",
    alt: "Criança de capoeira",
    title: "Aulas de Capoeira",
  },
  {
    src: "/images/1.JPG",
    alt: "Crianças sentadas em círculo ouvindo história",
    title: "Hora de atividades",
  },
  {
    src: "/images/2.JPG",
    alt: "Criança cuidando de uma pequena planta no jardim",
    title: "Alimentação saudável",
  },
  {
    src: "/images/recreacao.JPG",
    alt: "Crianças brincando no parquinho ao ar livre",
    title: "Recreação Livre",
  },
];


export default function AtividadesPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="container mx-auto px-6 max-w-[1200px] w-full flex-1 py-10 md:px-10">
        <section className="flex flex-col gap-4 py-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="flex flex-col gap-3 max-w-2xl">
              <h1 className="text-secondary text-4xl md:text-6xl font-black leading-tight">
                Nossas <span className="text-primary">Atividades</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Explore o dia a dia e os projetos pedagógicos que transformam o
                aprendizado em descoberta. Aqui, cada momento é uma oportunidade
                de crescimento.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 text-secondary border border-slate-200 px-3 py-1.5 rounded-lg w-fit">
              <span className="material-symbols-outlined">auto_awesome</span>
              <span className="text-sm font-bold">Inscrições Abertas 2024</span>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ACTIVITIES.map((item) => (
            <div
              key={item.title}
              className="relative group overflow-hidden rounded-xl aspect-square"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-bold text-lg">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined">calendar_month</span>
            Agendar visita para conhecer
          </Link>
        </div>
      </div>
    </div>
  );
}
