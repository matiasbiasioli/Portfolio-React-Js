// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md fixed w-full z-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center h-16">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-blue-600">MiPortafolio</div>

//         {/* Links desktop */}
//         <div className="hidden md:flex space-x-6">
//           <a
//             href="#hero"
//             className="text-gray-700 hover:text-blue-600 transition"
//           >
//             Home
//           </a>
//           <a
//             href="#about"
//             className="text-gray-700 hover:text-blue-600 transition"
//           >
//             About me
//           </a>
//           <a
//             href="#technologies"
//             className="text-gray-700 hover:text-blue-600 transition"
//           >
//             Technologies
//           </a>
//           <a
//             href="#portfolio"
//             className="text-gray-700 hover:text-blue-600 transition"
//           >
//             Portfolio
//           </a>
//           <a
//             href="#contact"
//             className="text-gray-700 hover:text-blue-600 transition"
//           >
//             Contact
//           </a>
//         </div>

//         {/* Botón hamburguesa mobile */}
//         <div className="md:hidden">
//           <button onClick={() => setOpen(!open)} className="text-gray-700">
//             {open ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Menu mobile animado */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             className="md:hidden bg-white shadow-md"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="flex flex-col space-y-3 px-4 py-4">
//               <a
//                 href="#hero"
//                 onClick={() => setOpen(false)}
//                 className="text-gray-700 hover:text-blue-600 transition"
//               >
//                 Home
//               </a>
//               <a
//                 href="#about"
//                 onClick={() => setOpen(false)}
//                 className="text-gray-700 hover:text-blue-600 transition"
//               >
//                 About me
//               </a>
//               <a
//                 href="#technologies"
//                 onClick={() => setOpen(false)}
//                 className="text-gray-700 hover:text-blue-600 transition"
//               >
//                 Technologies
//               </a>
//               <a
//                 href="#portfolio"
//                 onClick={() => setOpen(false)}
//                 className="text-gray-700 hover:text-blue-600 transition"
//               >
//                 Portfolio
//               </a>
//               <a
//                 href="#contact"
//                 onClick={() => setOpen(false)}
//                 className="text-gray-700 hover:text-blue-600 transition"
//               >
//                 Contact
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#0f172a]/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          MiPortafolio
        </div>

        {/* Links desktop */}
        <div className="hidden md:flex space-x-8">
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
              {/* Glow underline effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Botón hamburguesa mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-gray-200">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile animado */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-[#0f172a]/95 backdrop-blur-md border-b border-white/10"
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
                  onClick={() => setOpen(false)}
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
