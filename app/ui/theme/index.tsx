"use client";
import React, { createContext, useContext } from "react";
import useThemeSwitcher from "./useThemeSwitcher";

export const ThemeContext = createContext<{
  mode: "dark" | "light" | "";
  toggleMode: () => void;
}>({
  mode: "dark",
  toggleMode: () => {},
});

interface ThemeContextProps {
  children: JSX.Element;
}

const ThemeProvider = ({ children }: ThemeContextProps) => {
  const { mode, toggleMode } = useThemeSwitcher();

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeProvider = () => useContext(ThemeContext);
export default ThemeProvider;
