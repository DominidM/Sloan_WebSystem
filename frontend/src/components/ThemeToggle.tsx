import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import "./ThemeToggle.css"; // Importa el archivo de estilos

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="toggle-container" onClick={() => setDarkMode(!darkMode)}>
      <div className={`toggle-button ${darkMode ? "active" : ""}`}>
        {darkMode ? <Moon size={16} className="icon" /> : <Sun size={16} className="icon" />}
      </div>
    </div>
  );
}
