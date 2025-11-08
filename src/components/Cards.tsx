import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import WineryWeb from "../assets/projects/winery.vercel.png";
import IceTransWeb from "../assets/projects/icetrans.png";
import MagicBoxWeb from "../assets/projects/magicbox.png";
import PortfolioWeb from "../assets/projects/portafolio-martinez.png";
import MovieApp from "../assets/projects/movie-app.png";
import SaviaDigital from "../assets/projects/saviadigital.png";
import AsiaticFood from "../assets/projects/asiatic.vercel.jpg";
import ComponentsApp from "../assets/projects/components-app-portrait.png";
import Bonsai from "../assets/projects/bonsai.vercel.png";

type Project = {
  id: number;
  title: string;
  category: "JavasCript" | "React" | "React Native" | "WordPress";
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
    title: "E-commerce",
    category: "WordPress",
    description: "Tienda online con WooCommerce personalizada.",
    image: MagicBoxWeb,
    technologies: ["WordPress", "WooCommerce", "Elementor"],
    github: "https://github.com/tuusuario/wp-store",
    demo: "https://magicbox.com.ar",
  },
  {
    id: 3,
    title: "Portafolio",
    category: "WordPress",
    description: "Portafolio Cinematográfico",
    image: PortfolioWeb,
    technologies: ["WordPress", "WP Bakery"],
    github: "https://github.com/tuusuario/wp-store",
    demo: "https://matiasmartinez.com.ar",
  },
  {
    id: 4,
    title: "Transportes Refigerados",
    category: "WordPress",
    description: "Sitio Web Empresa",
    image: IceTransWeb,
    technologies: ["WordPress", "Elementor"],
    github: "https://github.com/tuusuario/wp-store",
    demo: "https://icetrans.com.ar",
  },
  {
    id: 5,
    title: "Movie Library App",
    category: "React",
    description: "Movie APP",
    image: MovieApp,
    technologies: ["React", "Typescript", "Vite"],
    github: "https://github.com/matiasbiasioli/Movie-App-Vite-2025",
    demo: "https://movie-library-app-eight.vercel.app/",
  },
  {
    id: 6,
    title: "Savia Digital",
    category: "WordPress",
    description: "Estudio de desarrollo web y aplicaciones móviles",
    image: SaviaDigital,
    technologies: ["WordPress", "Elementor"],
    github: "",
    demo: "https://saviadigital.com.ar/",
  },
  {
    id: 7,
    title: "Bonsai & Kokedama's Love",
    category: "JavasCript",
    description: "Proyecto Final de la formación en desarrollo web en CoderHouse",
    image: Bonsai,
    technologies: ["html5", "Css3", "Bootstrap"],
    github: "https://github.com/matiasbiasioli/Bonsai-Kokedama-s-Love",
    demo: "https://bonsai-kokedama-s-love.vercel.app/",
  },
  {
    id: 8,
    title: "Asiatic Food",
    category: "JavasCript",
    description: "Proyecto Final de la formación en JavaScript en CoderHouse",
    image: AsiaticFood,
    technologies: ["html5", "Css3", "Javascript"],
    github: "",
    demo: "https://asiatic-food.vercel.app/",
  },
  {
    id: 9,
    title: "Components Expo App",
    category: "React Native",
    description: "Aplicación que explora los componentes de Expo para el desarrollo mobile",
    image: ComponentsApp,
    technologies: ["React Native", "Expo"],
    github: "",
    demo: "",
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState<
    "All" | "JavaScript" | "React" | "React Native" | "WordPress"
  >("All");

  const filtered =
    selected === "All"
      ? projects
      : projects.filter((p) => p.category === selected);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
          Algunos Proyectos
        </h2>

        {/* Filtros */}
        <div className="flex justify-center gap-4 mb-12">
          {["All", "JavaScript", "React", "React Native", "WordPress"].map((cat) => (
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
