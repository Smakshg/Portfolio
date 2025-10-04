import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";
export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-3xl -top-40 -left-40"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl bottom-0 right-0"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-10 max-w-4xl w-full flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Picture with floating effect */}
        <motion.img
          src={profilePic} // 👉 replace with your picture
          alt="Smaksh Gupta"
          className="w-48 h-48 rounded-full border-4 border-yellow-400 shadow-xl object-cover"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Contact Info */}
        <motion.div
          className="text-center md:text-left text-white space-y-6"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold text-yellow-400">Get In Touch</h2>
          <motion.p
            className="text-lg text-gray-300 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I’d love to hear from you! Whether it’s a freelance project,
            collaboration, or just a tech chat, feel free to connect.
          </motion.p>

          <motion.div
            className="space-y-3 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <p>
              📧{" "}
              <a
                href="mailto:smakshgupta55@gmail.com"
                className="font-semibold text-yellow-300 hover:text-yellow-400 transition"
              >
                smakshgupta55@gmail.com
              </a>
            </p>
            <p>
              📱{" "}
              <a
                href="tel:+916006332447"
                className="font-semibold text-yellow-300 hover:text-yellow-400 transition"
              >
                +91 6006332447
              </a>
            </p>
            <p>
              🔗{" "}
              <a
                href="https://www.linkedin.com/in/smaksh-gupta"
                target="_blank"
                rel="noreferrer"
                className="text-yellow-300 hover:text-yellow-400 transition"
              >
                LinkedIn
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/Smakshg"
                target="_blank"
                rel="noreferrer"
                className="text-yellow-300 hover:text-yellow-400 transition"
              >
                GitHub
              </a>
            </p>
          </motion.div>

          {/* Call to Action Button with glowing pulse */}
          <motion.a
            href="mailto:smakshgupta55@gmail.com"
            className="inline-block bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition relative"
            whileHover={{ scale: 1.1 }}
          >
            Say Hello 👋
            <span className="absolute inset-0 rounded-lg bg-yellow-400 opacity-50 blur-lg animate-ping -z-10"></span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}





