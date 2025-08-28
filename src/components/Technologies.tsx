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

const tecnologias = [
  { name: "React", logo: ReactIcon },
  { name: "React Native", logo: ReactNativeIcon },
  { name: "Expo", logo: ExpoIcon },
  { name: "JavaScript", logo: JsIcon },
  { name: "HTML5", logo: HTML5Icon },
  { name: "CSS3", logo: CSS3Icon },
  { name: "Tailwind CSS", logo: TailwindIcon },
  { name: "Bootstrap", logo: BootstrapIcon },
  { name: "Figma", logo: FigmaIcon },
  { name: "Docker", logo: DockerLogo },
  { name: "Firebase", logo: FirebaseIcon },
  { name: "MySql", logo: MysqlIcon },
  { name: "Git", logo: GitIcon },
  { name: "Github", logo: GithubIcon },
  { name: "Vite", logo: ViteIcon },
];

export default function Tecnologias() {
  return (
    <section id="technologies" className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 drop-shadow-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
          Tecnologías que utilizo
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center">
          {tecnologias.map((tech) => (
            <div
              key={tech.name}
              className="relative group flex flex-col items-center p-4 rounded-xl
                         bg-gray-800/40 backdrop-blur-md border border-gray-700/50
                         transition-all duration-300
                         hover:bg-blue-600/20 hover:border-blue-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.6)]"
            >
              {/* Logo */}
              <img src={tech.logo} alt={tech.name} className="w-16 h-16" />

              {/* Nombre */}
              <p className="mt-3 text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
