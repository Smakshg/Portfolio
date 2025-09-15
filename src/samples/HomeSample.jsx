import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";

export default function HomeSample() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white">
      {/* Hero Section */}
      <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6">
        <motion.img
          src="https://via.placeholder.com/180" // replace with your photo/logo
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-yellow-300">Smaksh Gupta</span>
        </motion.h1>

        <h2 className="text-2xl font-medium text-gray-200 mb-6">
          <Typewriter
            words={[
              "Full Stack Developer",
              "AI/ML Enthusiast",
              "Creative Freelancer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <a
            href="/portfolio"
            className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition"
          >
            Hire Me
          </a>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Web Development",
            desc: "Building responsive, scalable web apps with modern tech like React, Node, and Tailwind.",
          },
          {
            title: "AI & Machine Learning",
            desc: "Designing AI models for predictions, automation, and data insights.",
          },
          {
            title: "UI/UX Design",
            desc: "Crafting clean, user-friendly interfaces with focus on accessibility & experience.",
          },
        ].map((service, i) => (
          <Tilt key={i} glareEnable glareMaxOpacity={0.3} scale={1.05}>
            <motion.div
              className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-yellow-300">
                {service.title}
              </h3>
              <p className="text-gray-200">{service.desc}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* Call To Action */}
      <div className="text-center py-12 bg-white/10 backdrop-blur-lg">
        <motion.h3
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Let’s Build Something Amazing Together 🚀
        </motion.h3>
        <a
          href="/contact"
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg shadow-lg font-semibold hover:scale-105 transition"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
