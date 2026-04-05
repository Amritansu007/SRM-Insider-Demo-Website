"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "light" | "dark") || "light";

    setTheme(saved);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
}