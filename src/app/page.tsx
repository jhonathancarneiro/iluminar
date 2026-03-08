import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE = "/images/DSC06145.JPG";

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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-secondary px-4 py-2 rounded-full font-bold text-sm">
              <span className="material-symbols-outlined text-lg">kid_star</span>
              Matrículas Abertas 2026
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] text-secondary">
              Onde cada <span className="text-primary">descoberta</span> vira
              uma aventura.
            </h1>
            <p className="text-lg lg:text-xl text-secondary/70 max-w-lg leading-relaxed">
              Um ambiente acolhedor e seguro desenhado para seu filho explorar,
              criar e crescer com toda a alegria que a infância merece.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/sobre"
                className="bg-primary text-secondary px-8 py-4 rounded-full font-extrabold text-lg shadow-lg shadow-primary/25 hover:scale-105 transition-transform"
              >
                Conheça nossa escola
              </Link>
              <button
                type="button"
                className="flex items-center gap-2 bg-white border-2 border-secondary/10 px-8 py-4 rounded-full font-extrabold text-lg hover:bg-secondary/5 transition-colors"
              >
                <span className="material-symbols-outlined">play_circle</span>
                Ver Vídeo
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/30 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50" />
            <div className="relative rounded-xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 ring-4 ring-secondary/10">
              <Image
                src={HERO_IMAGE}
                alt="Crianças sorridentes brincando juntas em um jardim colorido"
                width={800}
                height={600}
                className="w-full aspect-[4/3] object-cover"
                priority
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-secondary/10 to-transparent pointer-events-none"
                aria-hidden
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div className="pr-4">
                <p className="text-xs font-bold text-secondary/50 uppercase tracking-wider">
                  Segurança Total
                </p>
                <p className="text-sm font-extrabold text-secondary">
                  Ambiente Monitorado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-24 bg-secondary text-white rounded-xl mx-4" id="metodologia">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-accent font-bold uppercase tracking-widest text-sm">
              Educar com Amor
            </h2>
            <h3 className="text-4xl lg:text-5xl font-black">Nossa Metodologia</h3>
            <p className="text-white/70 text-lg">
              Desenvolvemos o potencial de cada criança através de vivências
              práticas, afetuosas e estimulantes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-10 rounded-lg hover:bg-white/10 transition-colors group">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 rotate-3 group-hover:rotate-6 transition-transform">
                <span className="material-symbols-outlined text-white text-3xl">
                  toys
                </span>
              </div>
              <h4 className="text-2xl font-bold mb-4">Aprendizado Lúdico</h4>
              <p className="text-white/60 leading-relaxed">
                Acreditamos que brincar é a forma mais natural e eficaz de
                aprender sobre o mundo e desenvolver novas habilidades.
              </p>
            </div>
        {/*    <div className="bg-white/5 border border-white/10 p-10 rounded-lg hover:bg-white/10 transition-colors group">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6 -rotate-3 group-hover:-rotate-6 transition-transform">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  potted_plant
                </span>
              </div>
              <h4 className="text-2xl font-bold mb-4">Natureza</h4>
              <p className="text-white/60 leading-relaxed">
                Contato diário com o meio ambiente e horta pedagógica para
                estimular a consciência ecológica desde cedo.
              </p>
            </div>
*/}
            <div className="bg-white/5 border border-white/10 p-10 rounded-lg hover:bg-white/10 transition-colors group">
              <div className="w-16 h-16 bg-primary/40 rounded-2xl flex items-center justify-center mb-6 rotate-6 group-hover:rotate-12 transition-transform">
                <span className="material-symbols-outlined text-white text-3xl">
                  palette
                </span>
              </div>
              <h4 className="text-2xl font-bold mb-4">Arte e Criatividade</h4>
              <p className="text-white/60 leading-relaxed">
                Estímulo constante à expressão pessoal através de cores, formas,
                sons e diferentes texturas manuais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Atividades */}
      <section className="py-24" id="atividades">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl space-y-4">
              <h2 className="text-4xl lg:text-5xl font-black text-secondary">
                Momentos que Ficam
              </h2>
              <p className="text-secondary/70 text-lg">
                Um dia a dia repleto de atividades que estimulam a curiosidade e
                o convívio social.
              </p>
            </div>
            <Link
              href="/atividades"
              className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all w-fit"
            >
              Ver todas as atividades
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {ACTIVITIES.map((item, i) => (
              <div
                key={item.title}
                className={`relative group overflow-hidden rounded-lg aspect-square shadow-xl ring-2 ring-secondary/10 ${
                  i === 1 || i === 3 ? "lg:translate-y-8" : ""
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-secondary/5 to-transparent pointer-events-none"
                  aria-hidden
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-bold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
