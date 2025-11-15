export function FilterSelect({
  label,
  value,
  onChange,
  options,
  defaultLabel,
  defaultValue = "all",
}) {
  return (
    <div className="flex flex-col gap-1 text-left min-w-[130px]">
      <label className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {label}
      </label>

      <select
        value={value}
        onChange={onChange}
        className="
          h-9 rounded-xl px-3 text-xs
          bg-white border border-slate-300 text-slate-800
          dark:bg-slate-900/60 dark:border-slate-700 dark:text-slate-100
          focus:outline-none focus:ring-1 focus:ring-sky-500
          transition
        "
      >
        <option value={defaultValue}>{defaultLabel}</option>

        {Array.isArray(options) &&
          typeof options[0] === "string" &&
          options.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}

        {Array.isArray(options) &&
          typeof options[0] === "object" &&
          options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
      </select>
    </div>
  );
}
