import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center rounded-full bg-bg-light backdrop-blur-[8px] transition duration-300 relative z-10 h-8 sm:h-9 md:h-10 aspect-square"
    >
      {isDarkMode ? (
        <Sun className="w-1/2 h-1/2 text-highlight" />
      ) : (
        <Moon className="w-1/2 h-1/2 text-highlight" />
      )}
    </button>
  );
};
