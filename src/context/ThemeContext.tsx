import { ReactNode, createContext, useContext, useState } from "react";
import { ThemeContextType } from "src/types/common";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>("sv");
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) throw new Error("useTheme must be used inside of Context");
  return context;
};

export { useTheme, ThemeProvider };
