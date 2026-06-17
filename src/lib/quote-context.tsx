import { createContext, useContext, useState, type ReactNode } from "react";

interface QuoteContextValue {
  isOpen: boolean;
  open: (presetCategory?: string) => void;
  close: () => void;
  presetCategory?: string;
}

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [presetCategory, setPresetCategory] = useState<string | undefined>();

  return (
    <QuoteContext.Provider
      value={{
        isOpen,
        presetCategory,
        open: (cat) => {
          setPresetCategory(cat);
          setIsOpen(true);
        },
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used within QuoteProvider");
  return ctx;
}
