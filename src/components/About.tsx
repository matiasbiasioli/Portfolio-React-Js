import { motion } from "framer-motion";
// import profileImg from "../assets/projects/perfil-celest.png";
import profileImg2 from "../assets/projects/cv-b y n.jpg";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 text-slate-900 dark:text-white">
      <div id="container" className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 bg-white dark:bg-gray-800 shadow-sm border border-cyan-200 dark:border-cyan-200/20 px-20 py-20 rounded-lg">
        {/* Avatar a la izquierda */}
        <motion.img
          src={profileImg2}
          alt="Foto de perfil"
          className="w-40 h-40 rounded-full shadow-lg ring-4 ring-cyan-400/50"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Texto + botones a la derecha */}
        <motion.div
          className="text-center md:text-left flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h2
            className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("about.title")}
          </motion.h2>

          <motion.p
            className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("about.description")}
          </motion.p>

          {/* Botones */}
          <motion.div
            className="flex justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg shadow-md hover:shadow-cyan-400/50 transition"
            >
              {t("about.cv")}
            </a>
            <a
              href="https://www.linkedin.com/in/mat%C3%ADas-biasioli/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition"
            >
              {t("about.linkedin")}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
