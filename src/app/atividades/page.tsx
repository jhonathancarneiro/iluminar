import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atividades",
  description:
    "Explore o dia a dia e os projetos pedagógicos da Pequenos Exploradores. Oficina de artes, hora da leitura, horta pedagógica e recreação.",
  openGraph: {
    title: "Atividades | Pequenos Exploradores",
    description:
      "Conheça as atividades que transformam o aprendizado em descoberta.",
  },
};

const ACTIVITIES = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuALj7ownIFQ2aGh_J5EPsiQdlrTcPyZkTLItsnHvKP2u7A7uW4KhQ4eLkq2uI9RKLMOc0q90VrtYk-QFTR1SobJgjZ-6YJKFeI6hNzyN5Wpe56Zx1RjDgOYbREWBitTr3yZttn7Ws-GeNdGPZCT_kGHXs2z-HtGCmOwoe_6rGuUcHg_DathCxOIarBE7kaTYPqa59F9tpE-GfKdSyymka5-PlYv_tNtqXIbeimFxe48xcFDT97imxrZRA3H2oG02SLNKwjSal2aqPU",
    alt: "Criança concentrada pintando com as mãos",
    title: "Oficina de Artes",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0QXACBeTeCW1l61ChEi8O6gTskSo8iDcEeYXTZgD8ZzHLckTYccD38V7I2qeF4o7cL_gdKmu4qaMChR1rdpUUc4eKyZ0Wyzq74i0WX-rMjR34GxEtHFUw6BzEWqwQg832TXYu94PO5R6CFuYvDKgveFDhXLKvkkEyE_Q8-ynd-1cOC_bYwZzHt7ulVhf5-lNXkCfbBWq59Ei274Z5px0972mbXQuhRsDa_Gdnn7Pkshb9rfaH9a8RXIaGJUvFHfBdX53-dQ0br9U",
    alt: "Crianças sentadas em círculo ouvindo história",
    title: "Hora da Leitura",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOHdUGXbA1yeERBr_Icbe8aPI5a__vHuFbMza-kPssgoH6opYpJMtUbW735kwT21XOpTWii1Ks7aNPxYPuR50-0kZ6P1Zyyx2P1u_atxA88eDOUjw5Lq19lM7zZl6_Hh7vtvsA1W4e60XCG8pnbZ2c40HsRAGQrBjjWSWftAOspMArs1NrgrGB3hMR4pBiAYpFq8K9dV4gThVTJiR5UvfK27iH0I-jd2BIxIhWg-5zRMQKiI6bC-3RGH7iThBS2z9vk6aPA_5D1fU",
    alt: "Criança cuidando de uma pequena planta no jardim",
    title: "Horta Pedagógica",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBc1mYQAJfvNtDFQp9WDIMQeDIF_OX_TuXq7XpMWdIgF0NbxPIDo2CRjYO6uR-O_ZjCYibGChw2oYoc3BuAiApBjZwxvmqm4gEISCIapSKadyZGbKYNxeQFEMmsSxMEMKqQ9xLa52sPgvxdM4wwaOVBOfzxGtOuz4TnE-6gtZXftnunX4ZqjiZrgQmMKnHrdyqj8DVli5rFm60wrjFBfPvVRdzc6xJ4CtH9OEhuca4ygb-M-d6ljJ3fxbv2zx-Eh8xCQzv15V7trwo",
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
