"use client";

import { LanguageProvider } from "./contexts/LanguageContext";
import MotionProvider from "./components/MotionProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <MotionProvider>{children}</MotionProvider>
    </LanguageProvider>
  );
}
