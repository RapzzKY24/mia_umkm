"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = (resolvedTheme || theme) === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="inline-flex items-center justify-center rounded-full
                 border border-slate-300/70 dark:border-slate-700
                 bg-white/80 dark:bg-slate-900/80
                 px-2.5 py-2 text-xs font-medium
                 text-slate-700 dark:text-slate-100
                 shadow-sm hover:bg-slate-100 dark:hover:bg-slate-800
                 transition-colors"
      aria-label="Toggle theme"
    >
      {mounted ? (
        isDark ? (
          <Sun className="h-3 w-3" aria-hidden="true" />
        ) : (
          <Moon className="h-3 w-3" aria-hidden="true" />
        )
      ) : (
        <span className="h-3 w-3" />
      )}
    </button>
  );
}
