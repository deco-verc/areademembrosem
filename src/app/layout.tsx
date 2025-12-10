import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Programa de Emagrecimento - Área de Membros",
  description: "Acesse suas 200+ receitas desinflamatórias, guias exclusivos e cardápios prontos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
