"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "sq" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Fillojmë me null ose sq
  const [lang, setLang] = useState<Language>("sq");

  // Kur ngarkohet faqja, kontrollojmë nëse ka një gjuhë të ruajtur
  useEffect(() => {
    const saved = localStorage.getItem("preferredLang") as Language;
    if (saved && (saved === "sq" || saved === "en")) {
      setLang(saved);
    }
  }, []);

  const updateLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("preferredLang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: updateLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}