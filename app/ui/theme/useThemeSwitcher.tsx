"use client";
import { useEffect } from "react";
import useLocalStorage from "@/app/ui/hooks/useLocalStorage";

const useStorageTheme = () => {
  const isDark = window?.matchMedia("(prefers-color-scheme: dark)").matches;

  const [mode, setMode] = useLocalStorage<"light" | "dark">(
    "mode",
    isDark ? "dark" : "light"
  );

  useEffect(() => {
    //add or remove class dark in html elem according to mode in localstorage.
    if (mode) {
      document.querySelector("html")?.setAttribute("data-theme", mode);
      setMode(mode);
    }
  }, []);

  // handle switch mode
  const toggleMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    document.querySelector("html")?.setAttribute("data-theme", newMode);
    setMode(newMode);
  };

  return { mode, toggleMode };
};

export default useStorageTheme;
