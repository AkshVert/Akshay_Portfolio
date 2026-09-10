"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="h-9 w-16 rounded-full border border-zinc-700"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="flex h-9 w-16 items-center justify-between rounded-full border border-zinc-700 bg-zinc-900 px-1.5 transition hover:border-zinc-500 dark:bg-zinc-900"
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full text-sm transition ${
          isDark
            ? "translate-x-0 bg-zinc-700"
            : "translate-x-7 bg-white shadow-sm"
        }`}
      >
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}