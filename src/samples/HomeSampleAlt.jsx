import { motion } from "framer-motion";

export default function HomeSampleAlt() {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
        <div className="absolute w-[700px] h-[700px] bg-pink-500/20 rounded-full blur-3xl -top-40 -left-40"></div>
        <div className="absolute w-[600px] h-[600px] bg-yellow-400/20 rounded-full blur-3xl bottom-0 right-0"></div>

        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between relative z-10 gap-16">
          {/* Left */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-8">
              Empowering <span className="text-yellow-400">Digital Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              We craft scalable solutions for ambitious companies using cutting-edge
              technologies in web, AI, and design.
            </p>
            <div className="flex gap-6">
              <a
                href="#services"
                className="bg-yellow-400 text-gray-900 px-10 py-5 rounded-lg font-bold shadow-lg hover:scale-105 transition text-lg"
              >
                Get Started
              </a>
              <a
                href="#about"
                className="bg-white text-purple-700 px-10 py-5 rounded-lg font-bold shadow-lg hover:scale-105 transition text-lg"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://via.placeholder.com/600x450"
              alt="Corporate Illustration"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-16">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            ["Web Development", "Next-gen apps built with React, Node, and Tailwind."],
            ["AI/ML", "Intelligent systems for automation, insights, and growth."],
            ["UI/UX Design", "Elegant, user-friendly, and scalable product design."],
          ].map(([title, desc], i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-lg p-12 rounded-3xl shadow-xl"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-yellow-400 mb-4">{title}</h3>
              <p className="text-lg text-gray-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 opacity-80"></div>
        <motion.div
          className="relative z-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Let’s Build Something Amazing 🚀
          </h2>
          <p className="text-xl text-gray-100 mb-10">
            Partner with us to create stunning websites and intelligent solutions
            that leave a mark.
          </p>
          <a
            href="#"
            className="bg-white text-purple-700 px-12 py-5 rounded-lg font-bold shadow-2xl hover:scale-105 transition text-lg"
          >
            Get In Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
}
