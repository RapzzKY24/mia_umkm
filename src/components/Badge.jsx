"use client";

export default function Badge({
  children,
  color = "sky",
  variant = "solid",
  className = "",
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap transition";

  const variants = {
    solid: `
      bg-${color}-600 text-white
      dark:bg-${color}-500 dark:text-black
    `,
    soft: `
      bg-${color}-100 text-${color}-700 border border-${color}-200
      dark:bg-${color}-600/20 dark:text-${color}-300 dark:border-${color}-700
    `,
    outline: `
      border border-${color}-500 text-${color}-600
      dark:text-${color}-300 dark:border-${color}-400
    `,
    subtle: `
      bg-${color}-500/10 text-${color}-600
      dark:bg-${color}-600/10 dark:text-${color}-300
    `,
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
