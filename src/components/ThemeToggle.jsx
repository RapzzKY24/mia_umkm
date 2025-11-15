"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded-full
                 border border-slate-300/70 dark:border-slate-700
                 bg-white/80 dark:bg-slate-900/80
                 px-2.5 py-2 text-xs font-medium
                 text-slate-700 dark:text-slate-100
                 shadow-sm hover:bg-slate-100 dark:hover:bg-slate-800
                 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-3 w-3" /> : <Moon className="h-3 w-3" />}
    </button>
  );
}
