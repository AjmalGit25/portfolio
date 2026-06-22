import { createContext, useContext, useState } from "react";

export const themes = [
  { id: "blue",    label: "Blue",    colors: ["#1d4ed8", "#1e40af", "#3b82f6"] },
  { id: "purple",  label: "Purple",  colors: ["#7c3aed", "#6d28d9", "#a78bfa"] },
  { id: "emerald", label: "Emerald", colors: ["#059669", "#065f46", "#34d399"] },
];

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("blue");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme} className="contents">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
