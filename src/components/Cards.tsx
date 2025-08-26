import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import WineryWeb from "../assets/projects/winery.vercel.png";

type Project = {
  id: number;
  title: string;
  category: "React" | "React Native" | "WordPress";
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Winery Web",
    category: "React",
    description: "E-Commerce",
    image: WineryWeb,
    technologies: ["React", "Firebase"],
    github: "https://github.com/tuusuario/portfolio",
    demo: "https://proyecto-final-biasioli-react.vercel.app/",
  },
  {
    id: 2,
    title: "App de Música",
    category: "React Native",
    description: "Aplicación móvil de música hecha en React Native.",
    image: "/projects/rn-music.png",
    technologies: ["React Native", "Expo", "Firebase"],
    github: "https://github.com/tuusuario/music-app",
    demo: "https://expo.dev/tuapp",
  },
  {
    id: 3,
    title: "E-commerce",
    category: "WordPress",
    description: "Tienda online con WooCommerce personalizada.",
    image: "/projects/wp-store.png",
    technologies: ["WordPress", "WooCommerce", "Elementor"],
    github: "https://github.com/tuusuario/wp-store",
    demo: "https://tiendavirtual.com",
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState<
    "All" | "React" | "React Native" | "WordPress"
  >("All");

  const filtered =
    selected === "All"
      ? projects
      : projects.filter((p) => p.category === selected);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-400 drop-shadow-lg">
          Mis Proyectos
        </h2>

        {/* Filtros */}
        <div className="flex justify-center gap-4 mb-12">
          {["All", "React", "React Native", "WordPress"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selected === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                  : "bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl overflow-hidden 
                           bg-gray-800/40 border border-gray-700/50 
                           backdrop-blur-md shadow-lg 
                           hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] 
                           transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-2">
                    {project.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs 
                                   bg-blue-600/20 text-blue-300 
                                   border border-blue-400/30 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-6 mt-5 text-sm">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition"
                    >
                      <Github size={18} /> Código
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition"
                    >
                      <ExternalLink size={18} /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
