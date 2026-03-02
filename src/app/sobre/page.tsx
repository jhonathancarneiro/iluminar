import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a história da Pequenos Exploradores. Desde 2010, transformando a educação infantil em uma jornada de descobertas, afeto e desenvolvimento integral.",
  openGraph: {
    title: "Sobre Nós | Pequenos Exploradores",
    description:
      "Conheça a história da Pequenos Exploradores. Desde 2010, transformando a educação infantil.",
  },
};

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDk0oftBS0hV8mlBH-O5ZgHdmaIR_s3lVqg3HuVnk8dCCw3FruFTDyKpM4NzURHn2UTxAiTPKgTHT3b6cCIp6QxmlDAGl6k-k7al7Ju2wpC04XUmd1X--2x-cy6FUCM59sFRKGKqF-TJwz4WRZNl5ciV4WOaMY2mKbO4b_qgmulwSIV3CAuq6ByVIhyi2oLConZ9WmhloZCxsEDUgSUfD6-zt4WH_n66yTNBr2VtifHiEf1_vsMixdAESwBJt6On31OavwKnkuRR4o";

export default function SobrePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative mb-12 rounded-xl overflow-hidden min-h-[400px] flex items-end mx-4">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="Crianças brincando alegremente no pátio da escola"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 60%)",
            }}
          />
        </div>
        <div className="relative p-8 lg:p-12 w-full z-20">
          <h1 className="text-white text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Nossa História
          </h1>
          <p className="text-slate-100 text-lg max-w-2xl leading-relaxed">
            Desde 2010, transformando a educação infantil em uma jornada de
            descobertas, afeto e desenvolvimento integral para os nossos
            pequenos grandes aventureiros.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6">
          <h2 className="text-secondary text-3xl font-bold">
            Onde Tudo Começou
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            A Pequenos Exploradores nasceu do sonho da nossa fundadora, Ana
            Paula, de criar um espaço onde a criança fosse verdadeiramente a
            protagonista do seu aprendizado. Iniciamos em uma pequena casa com
            apenas duas turmas, mas com um propósito gigante: humanizar o ensino
            infantil através do brincar.
          </p>
        </div>
        <div className="bg-accent/10 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-secondary mb-4">
            Nossa Missão
          </h3>
          <p className="text-secondary/80 leading-relaxed">
            Oferecer uma educação que respeita o tempo da infância, estimula a
            autonomia e prepara cada criança para ser protagonista de suas
            próprias descobertas, em um ambiente seguro, afetuoso e
            estimulante.
          </p>
        </div>
      </section>
    </div>
  );
}
