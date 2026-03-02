import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "optional",
});

export const metadata: Metadata = {
  title: {
    default: "Escola Iluminar - Educação Infantil e Ensino Fundamental",


    template: "%s | Escola Iluminar",
  },
  description:
    "Escola infantil onde cada descoberta vira uma aventura. Ambiente acolhedor e seguro para seu filho explorar, criar e crescer.",
  keywords: ["escola infantil", "educação infantil", "creche", "berçário", "Colombo","Curitiba","PR"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Material Symbols - layout applies to all pages in App Router */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=optional"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakarta.variable} font-display bg-background-light text-secondary selection:bg-primary/30 antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
