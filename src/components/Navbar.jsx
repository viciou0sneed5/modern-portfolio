import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl dark:text-white">Himanshu.dev</h1>
      <ul className="flex gap-4 text-sm font-medium">
        {["/", "/about", "/projects", "/experience", "/contact"].map((path, i) => (
          <li key={i}>
            <Link className="text-gray-800 dark:text-gray-100 hover:text-blue-500" to={path}>
              {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="ml-4 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
        onClick={() => setDark(!dark)}
      >
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}
