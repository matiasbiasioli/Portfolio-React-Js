import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      

      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold mb-6 text-center leading-tight"
      >
        ¡Hola! Soy{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent animate-gradient">
          Matías Biasioli
        </span>
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg md:text-2xl max-w-xl text-center text-gray-300 mb-10"
      >
        Desarrollador Web especializado en{" "}
        <span className="font-semibold text-cyan-300">React</span>, creando
        experiencias modernas y funcionales 🚀
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-cyan-500 text-white font-semibold shadow-lg hover:scale-105 hover:bg-cyan-400 transition-all duration-300"
        >
          Ver Proyectos
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-300 font-semibold hover:bg-cyan-400/20 hover:scale-105 transition-all duration-300"
        >
          Contáctame
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
