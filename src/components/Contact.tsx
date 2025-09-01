import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MessageSquare, Check } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  // ⚡️ Pegá tu endpoint acá:
  const FORM_ENDPOINT = "https://formspree.io/f/xyzdjrwn";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          _replyto: form.email, // 👈 Formspree espera _replyto para poder responder
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Título */}
        <motion.h2
          className="text-5xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contactame
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 border border-gray-500 rounded-md p-3">
              <Mail size={24} />
              <span>matiasbiasioli@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 border border-gray-500 rounded-md p-3">
              <Phone size={24} />
              <span>+54 9 11 5701-1071</span>
            </div>
            <div className="flex items-center gap-4 border border-gray-500 rounded-md p-3">
              <MessageSquare size={24} />
              <span>Siempre abierto a nuevos proyectos 🚀</span>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-gray-800 text-white p-6 rounded-xl shadow-lg relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={form.name}
              onChange={handleChange}
              required
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            
            {/* Honeypot */}
            <input type="text" name="_gotcha" className="display:none"></input>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`px-6 py-2 rounded-lg text-white transition ${
                status === "sending"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "cursor-pointer bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 hover:bg-blue-700"
              }`}
            >
              {status === "sending" ? "Enviando..." : "Enviar"}
            </button>

            {/* Mensajes de estado */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.8 }}
                  className="absolute top-[-60px] right-1/2 translate-x-1/2 flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full shadow-md"
                >
                  <Check size={20} />
                  <span>¡Mensaje enviado!</span>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.8 }}
                  className="absolute top-[-60px] right-1/2 translate-x-1/2 flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full shadow-md"
                >
                  <span>Error al enviar. Intenta de nuevo.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
