import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ReactIcon from "../assets/icons/react-original.svg";
import ReactNativeIcon from "../assets/icons/react-original.svg";
import ExpoIcon from "../assets/icons/expo-original.svg";
import JsIcon from "../assets/icons/javascript-original.svg";
import HTML5Icon from "../assets/icons/html5-original.svg";
import CSS3Icon from "../assets/icons/css3-original.svg";
import TailwindIcon from "../assets/icons/tailwindcss-original.svg";
import BootstrapIcon from "../assets/icons/bootstrap-original.svg";
import DockerLogo from "../assets/icons/docker-original.svg";
import FigmaIcon from "../assets/icons/figma-original.svg";
import FirebaseIcon from "../assets/icons/firebase-original.svg";
import MysqlIcon from "../assets/icons/mysql-original.svg";
import GitIcon from "../assets/icons/git-original.svg";
import GithubIcon from "../assets/icons/github-original.svg";
import ViteIcon from "../assets/icons/vitejs-original.svg";
import TypeScriptIcon from "../assets/icons/typescript-original.svg";

type Tecnologia = {
  id: number;
  name: string;
  logo: string;
  category: "Frontend" | "Backend" | "Mobile" | "Design" | "Tools";
};

const tecnologias: Tecnologia[] = [
  { id: 1, name: "React", logo: ReactIcon, category: "Frontend" },
  { id: 2, name: "React Native", logo: ReactNativeIcon, category: "Mobile" },
  { id: 3, name: "Expo", logo: ExpoIcon, category: "Mobile" },
  { id: 4, name: "JavaScript", logo: JsIcon, category: "Frontend" },
  { id: 5, name: "HTML5", logo: HTML5Icon, category: "Frontend" },
  { id: 6, name: "CSS3", logo: CSS3Icon, category: "Frontend" },
  { id: 7, name: "Tailwind CSS", logo: TailwindIcon, category: "Design" },
  { id: 8, name: "Bootstrap", logo: BootstrapIcon, category: "Design" },
  { id: 9, name: "Figma", logo: FigmaIcon, category: "Design" },
  { id: 10, name: "Docker", logo: DockerLogo, category: "Tools" },
  { id: 11, name: "Firebase", logo: FirebaseIcon, category: "Backend" },
  { id: 12, name: "MySql", logo: MysqlIcon, category: "Backend" },
  { id: 13, name: "Git", logo: GitIcon, category: "Tools" },
  { id: 14, name: "Github", logo: GithubIcon, category: "Tools" },
  { id: 15, name: "Vite", logo: ViteIcon, category: "Frontend" },
  { id: 16, name: "TypeScript", logo: TypeScriptIcon, category: "Frontend" },
];

export default function Tecnologias() {
  const [selected, setSelected] = useState<
    "All" | "Frontend" | "Backend" | "Mobile" | "Design" | "Tools"
  >("All");

  const filtered =
    selected === "All"
      ? tecnologias
      : tecnologias.filter((t) => t.category === selected);

  return (
    <section id="technologies" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
          Tecnologías que utilizo
        </h2>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Frontend", "Backend", "Mobile", "Design", "Tools"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  selected === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                    : "bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* Grid de Tecnologías */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center bg-gray-800 rounded-2xl p-10 border border-cyan-200"
        >
          <AnimatePresence>
            {filtered.map((tech) => (
              <motion.div
                key={tech.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group flex flex-col items-center p-4 rounded-xl
                           bg-gray-800/40 backdrop-blur-md border border-gray-700/50
                           transition-all duration-300 cursor-pointer
                           hover:bg-blue-600/20 hover:border-blue-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.6)]"
              >
                {/* Logo */}
                <img src={tech.logo} alt={tech.name} className="w-16 h-16" />

                {/* Nombre */}
                <p className="mt-3 text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
