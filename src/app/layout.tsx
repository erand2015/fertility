import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. NDRYSHO TITULLIN DHE PËRSHKRIMIN (SEO)
export const metadata: Metadata = {
  title: "LEX ASSOCIATES | Studio Ligjore Elitare",
  description: "Përfaqësim ligjor strategjik dhe mbrojtje profesionale për individë dhe biznese.",
  icons: {
    icon: "/favicon.ico", // Sigurohu të kesh një ikonë te folderi public
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 2. SHTO "scroll-smooth" QË BUTONAT TË RRËSHQASIN BUTË
    <html lang="sq" className="scroll-smooth"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030303] selection:bg-[#c5a059] selection:text-black`}
      >
        {/* Këtu mund të shtohet një Custom Cursor në të ardhmen */}
        {children}
      </body>
    </html>
  );
}