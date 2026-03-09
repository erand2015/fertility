import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// IMPORTI I RI (Sigurohu që ke krijuar skedarin LanguageContext.tsx te folderi context)
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LEX ASSOCIATES | Studio Ligjore Elitare",
  description: "Përfaqësim ligjor strategjik dhe mbrojtje profesionale për individë dhe biznese.",
  icons: {
    icon: "/favicon.ico", 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq" className="scroll-smooth"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030303] selection:bg-[#c5a059] selection:text-black`}
      >
        {/* MBËSHTILLIM ME LANGUAGE PROVIDER */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}