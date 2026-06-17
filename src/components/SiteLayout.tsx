import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { QuoteProvider } from "@/lib/quote-context";
import { QuoteModal } from "./QuoteModal";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <QuoteProvider>
      <Header />
      <main>{children}</main>
      <Footer />
      <QuoteModal />
    </QuoteProvider>
  );
}
