"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui/toggle";
import { MdDarkMode } from "react-icons/md";
import { HiSun } from "react-icons/hi";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    if (!systemTheme) return;
    setTheme(systemTheme);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Toggle
      className="bg-gray-300 hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <MdDarkMode color="yellow" size={30} />
      ) : (
        <HiSun color="yellow" size={30} />
      )}
    </Toggle>
  );
};
