// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const handleClick = (
//     e: React.MouseEvent<HTMLAnchorElement>,
//     href: string
//   ) => {
//     e.preventDefault(); // Previene la navegación inmediata del enlace
//     setOpen(false); // Inicia la animación de salida
//     // Retrasa la navegación hasta que la animación haya terminado (0.3s)
//     setTimeout(() => {
//       window.location.href = href;
//     }, 300); // El tiempo debe coincidir con la duración de la transición
//   };

//   return (
//     <nav className="fixed w-full z-50 bg-[#0f172a]/70 backdrop-blur-md border-b border-white/10">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center h-16">
//         {/* Logo */}
//         <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//           Frontend Dev
//         </div>

//         {/* Links desktop */}
//         <div className="hidden md:flex space-x-8">
//           {[
//             { href: "#hero", label: "Home" },
//             { href: "#about", label: "About me" },
//             { href: "#technologies", label: "Technologies" },
//             { href: "#portfolio", label: "Portfolio" },
//             { href: "#contact", label: "Contact" },
//           ].map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className="relative text-gray-200 hover:text-cyan-400 transition"
//             >
//               {link.label}
//               {/* Glow underline effect */}
//               <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           ))}
//         </div>

//         {/* Botón hamburguesa mobile */}
//         <div className="md:hidden">
//           <button onClick={() => setOpen(!open)} className="text-gray-200">
//             {open ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Menu mobile animado */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             className="md:hidden bg-[#0f172a]/95 backdrop-blur-md border-b border-white/10 z-[100]"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="flex flex-col space-y-4 px-6 py-6">
//               {[
//                 { href: "#hero", label: "Home" },
//                 { href: "#about", label: "About me" },
//                 { href: "#technologies", label: "Technologies" },
//                 { href: "#portfolio", label: "Portfolio" },
//                 { href: "#contact", label: "Contact" },
//               ].map((link) => (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                   onClick={(e) => handleClick(e, link.href)} // Usamos la nueva función
//                   className="text-gray-200 hover:text-cyan-400 transition"
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

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
    <nav className="fixed w-full z-50 bg-[#0f172a]/70 backdrop-blur-md border-b border-white/10">
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
              className="relative text-gray-200 hover:text-cyan-400 transition"
            >
              {link.label}
            </a>
          ))}

          {/* Botón de toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-500/30 hover:scale-105 transition"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-white-800" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-400" />
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
              <Moon className="w-5 h-5 text-gray-200" />
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
            className="md:hidden bg-[#0f172a]/95 backdrop-blur-md border-b border-white/10 z-[100]"
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
                  className="text-gray-200 hover:text-cyan-400 transition"
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
