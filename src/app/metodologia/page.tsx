import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Metodologia",
  description:
    "Como as crianças aprendem e crescem na Escola Iluminar. Metodologia baseada no respeito à infância e no estímulo à curiosidade natural.",
  openGraph: {
    title: "Metodologia | Escola Iluminar",
    description:
      "Conheça nossa metodologia: protagonismo infantil, aprendizado lúdico e desenvolvimento integral.",
  },
};

const HERO_IMAGE =
"/images/banner.JPG";
export default function MetodologiaPage() {
  return (
    <div className="flex flex-col">
      <section className="px-6 md:px-20 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-secondary/10 mb-12">
            <Image
              src={HERO_IMAGE}
              alt="Crianças brincando ao ar livre em jardim ensolarado"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-secondary/15 to-transparent z-10 pointer-events-none"
              aria-hidden
            />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20">
              <span className="bg-background-light/90 px-4 py-2 rounded-lg text-secondary text-xs font-bold flex items-center gap-2 mb-6 inline-flex">
                <span className="material-symbols-outlined text-sm">star</span>
                Nossa Essência
              </span>
              <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-sm">
                Como as crianças{" "}
                <span className="text-primary">aprendem</span> e crescem aqui
              </h1>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
              Na Escola Iluminar, acreditamos que cada criança é
              protagonista de sua própria jornada de descoberta. Nossa metodologia
              é baseada no respeito à infância e no estímulo constante à
              curiosidade natural.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-secondary py-24 rounded-[3rem] mx-4 md:mx-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nossos Pilares Educativos
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="size-14 bg-primary rounded-xl flex items-center justify-center text-white mb-8">
                <span className="material-symbols-outlined text-3xl">
                  child_care
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Protagonismo Infantil
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Incentivamos a autonomia através de escolhas reais. Aqui, a
                criança não apenas recebe informação, ela constrói conhecimento
                através da experiência direta.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="size-14 bg-primary rounded-xl flex items-center justify-center text-white mb-8">
                <span className="material-symbols-outlined text-3xl">toys</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Aprendizado Lúdico
              </h3>
              <p className="text-slate-300 leading-relaxed">
                O brincar é a linguagem principal da infância. Todas as
                atividades são pensadas para que aprender seja natural, alegre
                e significativo.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="size-14 bg-primary rounded-xl flex items-center justify-center text-white mb-8">
                <span className="material-symbols-outlined text-3xl">
                  group
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Convívio e Afeto
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Relações afetivas sólidas são a base para o desenvolvimento
                saudável. Nossa equipe acolhe cada família e criança com
                respeito e carinho.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
