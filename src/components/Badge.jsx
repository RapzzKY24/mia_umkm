"use client";

const STYLES = {
  sky: {
    solid: `
      bg-sky-600 text-white
      dark:bg-sky-500 dark:text-black
    `,
    soft: `
      bg-sky-100 text-sky-700 border border-sky-200
      dark:bg-sky-600/20 dark:text-sky-300 dark:border-sky-700
    `,
    outline: `
      border border-sky-500 text-sky-600
      dark:text-sky-300 dark:border-sky-400
    `,
    subtle: `
      bg-sky-500/10 text-sky-700
      dark:bg-sky-500/15 dark:text-sky-300
    `,
  },
  slate: {
    solid: `
      bg-slate-800 text-slate-50
      dark:bg-slate-100 dark:text-slate-900
    `,
    soft: `
      bg-slate-100 text-slate-800 border border-slate-200
      dark:bg-slate-800/60 dark:text-slate-100 dark:border-slate-700
    `,
    outline: `
      border border-slate-500 text-slate-700
      dark:text-slate-200 dark:border-slate-400
    `,
    subtle: `
      bg-slate-900/40 text-slate-100
      dark:bg-slate-100/10 dark:text-slate-200
    `,
  },
};

export default function Badge({
  children,
  color = "sky",
  variant = "solid",
  className = "",
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap transition";

  const colorStyles = STYLES[color]?.[variant] || STYLES.sky.subtle;

  return (
    <span className={`${base} ${colorStyles} ${className}`}>{children}</span>
  );
}
