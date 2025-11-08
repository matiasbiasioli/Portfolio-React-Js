import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      window.location.href = href;
    }, 300);
  };

  return (
    <nav className="bg-[#fff] dark:bg-[#0f172a] fixed w-full z-50 border-b border-gray-200 dark:border-white/10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Frontend Dev
        </div>

        {/* Links desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          {[
            { href: "#hero", label: "Home" },
            { href: "#about", label: "About me" },
            { href: "#technologies", label: "Technologies" },
            { href: "#portfolio", label: "Portfolio" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-gray-800 dark:text-gray-200 hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}

          {/* Botón de toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-500 hover:scale-105 transition cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-500" />
            )}
          </button>
        </div>

        {/* Botón hamburguesa mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-500/30"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-gray-800" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-400" />
            )}
          </button>
          <button onClick={() => setOpen(!open)} className="text-gray-200">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile animado */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="bg-white dark:bg-[#0f172a]/0 fixed w-full z-50 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-500"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 px-6 py-6">
              {[
                { href: "#hero", label: "Home" },
                { href: "#about", label: "About me" },
                { href: "#technologies", label: "Technologies" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="relative text-gray-800 dark:text-gray-200 hover:text-cyan-500 transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
