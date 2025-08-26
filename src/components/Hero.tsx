// import { motion } from "motion/react";

// const Hero = () => {
//   return (
//     <section
//       id="hero"
//       className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white"
//     >
//       <motion.h1
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-5xl font-bold mb-4"
//       >
//         ¡Hola! Soy <span className="text-yellow-300">Matías Biasioli</span>
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         className="text-xl max-w-xl text-center"
//       >
//         Desarrollador Web especializado en{" "}
//         <span className="font-semibold">React</span>, creando experiencias
//         modernas y funcionales 🚀
//       </motion.p>
//     </section>
//   );
// };

// export default Hero;

import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Efecto Glow / Aura detrás del texto */}
      <div className="absolute w-[600px] h-[600px] rounded-full blur-[120px] -z-10" />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-6 text-center leading-tight"
      >
        ¡Hola! Soy{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Matías Biasioli
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg md:text-xl max-w-xl text-center text-gray-200"
      >
        Desarrollador Web especializado en{" "}
        <span className="font-semibold text-cyan-300">React</span>, creando
        experiencias modernas y funcionales 🚀
      </motion.p>
    </section>
  );
};

export default Hero;
