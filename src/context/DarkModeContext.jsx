import { createContext, useContext, useState } from "react";

const DarkMode = createContext();

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkMode.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkMode.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkMode);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
}

export { useDarkMode };
